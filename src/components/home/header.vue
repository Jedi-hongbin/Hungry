<template>
  <div class="toolbar">
    <img
      class="logo"
      src="../../../public/static/image/ebelogo.png"
      alt="饿不饿"
    />
    <span
      ><i v-show="alreadyMap" class="el-icon-loading"></i>
      <i v-show="!alreadyMap" class="el-icon-location"></i>
      {{ $store.state.dingwei }}
      <i @click="changeDV" class="el-icon-arrow-down"></i>
    </span>
    <mt-search ref="mt_search" v-model="value"></mt-search>
    <div ref="searchCell" class="searchCard" v-show="isSearch">
      <div
        @click="toStore(item)"
        class="infoCard"
        v-for="(item, index) in searchCtx"
        :key="index"
      >
        <i class="el-icon-platform-eleme"></i>
        <h4 style="line-height:2rem">{{ item }}</h4>
        <el-Button type="warning" size="mini">就是它</el-Button>
      </div>
    </div>
    <mt-popup @click="okDW" v-model="changeWeizhi" position="bottom">
      <el-button
        @click="okDW"
        icon="el-icon-check"
        type="info"
        plain
        size="medium"
        class="dryBtn"
        >确定</el-button
      >
      <mt-picker
        :show-toobar="true"
        :slots="slots"
        @change="onValuesChange"
      ></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchCtx: [],
      isSearch: false,
      changeWeizhi: false,
      slots: [
        {
          flex: 1,
          values: this.$store.state.from,
          className: 'slot1',
          textAlign: 'right',
          defaultIndex: this.$store.state.deIndex,
        },
        {
          divider: true,
          content: '-',
          className: 'slot2',
        },
        {
          flex: 1,
          values: this.$store.state.addres[1],
          className: 'slot3',
          textAlign: 'left',
          defaultIndex: 0,
        },
      ],
      alreadyMap: true,
      address: '',
      value: '',
      result: [
        {
          title: '老八蜜汁小汉堡',
          value: 0,
        },
        {
          title: '趴鸭',
          value: 1,
        },
        {
          title: '叫了个老粑',
          value: 2,
        },
      ],
      pickerDingwei: '',
    }
  },
  mounted() {
    this.look_lazyload()
    this.getmap()
    window.onscroll = this.scrollFixed
    this.search()
  },
  methods: {
    toStore(name) {
      let index = this.$store.state.storeEnter.findIndex((x) => x == name)
      //编程式导航 id必须是字符串形式
      this.$router.push({ name: 'goodsinfo', params: { id: index.toString() } })
    },
    search() {
      let ipt = document.getElementsByClassName('mint-searchbar-core')[0]
      ipt.onfocus = () => {
        this.isSearch = true
      }
      ipt.onblur = () => {
        setTimeout(() => {
          this.isSearch = false
          this.searchCtx = []
          this.value = ''
        }, 0)
      }
      let that = this
      ipt.oninput = debounce(o, 500)

      function debounce(fn, wait) {
        var timer = null
        return function() {
          clearTimeout(timer)
          timer = setTimeout(fn, wait)
        }
      }
      function o() {
        let word = ipt.value
        if (word.length !== 0 && !!word && word !== ' ') {
          let ok = []
          for (const s of that.$store.state.storeEnter) {
            if (s.includes(word)) ok.push(s)
          }
          console.log(ok)
          that.searchCtx = new Set(ok)
        } else {
          that.searchCtx = []
        }
      }
    },
    okDW() {
      this.$store.commit('changeDingwei', this.pickerDingwei)
      this.changeDV()
    },
    onValuesChange(picker, val) {
      let i = this.$store.state.from.findIndex((x) => x == val[0])
      picker.setSlotValues(1, this.$store.state.addres[i])
      this.pickerDingwei = `${val[0]}|${val[1]}`
    },
    changeDV() {
      this.changeWeizhi = !this.changeWeizhi
    },
    look_lazyload() {
      setTimeout(() => {
        this.alreadyMap = false
      }, 200)
    },
    getmap() {
      this.axios
        .get('/location/ip?ak=msRpqxIUqM1iBm1QvPTllTxvLsz0OuNO&coor=bd09ll')
        .then((res) => {
          this.address = `${res.data.address.split('|')[1]}|${
            res.data.address.split('|')[2]
          }`
          this.$store.commit('changeDingwei', this.address)
        })
        .catch((err) => console.log(err))
    },
    scrollFixed(e) {
      var scrollTop =
        e.target.documentElement.scrollTop || e.target.body.scrollTop;
      let oBar = document.getElementsByClassName('mint-searchbar')[0] || '';
      if (scrollTop >= 56) {
        if (oBar) {
          oBar.classList.add('toFixed') || '';
          if(this.$refs.searchCell)
          this.$refs.searchCell.className = 'searchCard searchFixed'
        }
      } else {
        if (oBar) {
          oBar.className = 'mint-searchbar';
          if(this.$refs.searchCell)
          this.$refs.searchCell.className = 'searchCard';
        }
      }
    },
  },
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

.toolbar {
  display: flex;
  background-color: #ffff00;
  flex-flow: column wrap;

  .searchCard {
    overflow: auto;
    width: 94vw;
    max-height: 30vh;
    margin: 0 3vw;
    top: 14vh;
    background-color: #fff;
    position: absolute;
    z-index: 180;
    border: 0.03125rem solid #999;
    border-bottom-left-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
    transition: height 1s ease;

    .infoCard {
      display: flex;
      widows: 100%;
      height: 3.125rem;
      background-color: #fff;
      border-bottom: 0.03rem solid #999;
      justify-content: space-around;
      align-items: center;
      margin-top: 0.3rem;

      button {
        height: 70%;
        background-color: transparent;
        border: none;
        color: #ccc;
        box-shadow: -1px -1px 2px rgb(123, 122, 129),
          inset 1px 0px 2px rgb(238, 235, 255);
      }
    }
  }

  .dryBtn {
    float: right;
    margin: 0.3rem 0.3rem 0 0;
  }

  .picker-items {
    min-width: 100vw;
    overflow-y: auto !important;
  }

  img {
    width: 4.25rem;
    height: 1.75rem;
    margin: 0.625rem;
  }

  span {
    margin: 0 0 0.3125rem 0.3125rem;
    font-weight: bolder;
  }

  .searchFixed{
    position: fixed;
    top: 2rem;
  }

  .toFixed {
    position: fixed;
    left: calc(5% / 2);
    top: 0.3125rem;
    z-index: 888;
    box-shadow: -16px 3px 2px #ffaa00, 14px 3px 2px #ffaa00,
      -14px -6px 2px #ffaa00, 14px -6px 2px #ffaa00, -14px -5px 2px #ffaa00,
      14px -5px 2px #ffaa00;
  }

  .mint-searchbar {
    border-radius: 10px;
    padding: 2px 3px;
    background-color: #c88500;
    width: 95%;
    margin: 0 auto;
    margin-bottom: 0.3125rem;
    transition: all 1s ease;
    z-index: 200;
    .mint-searchbar-inner {
      border-radius: 0.625rem;
      overflow: hidden;
    }

    .mint-searchbar-cancel {
      color: #fff;
      font-family: '宋体';
    }

    .mint-searchbar-core {
      background-color: #fff;
      margin-bottom: 0rem;
    }
  }

  .mint-search {
    height: auto;
  }
}
</style>
