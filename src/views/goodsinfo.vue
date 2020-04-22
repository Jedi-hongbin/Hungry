<template>
  <div class="goodsinfo">
    <el-page-header @back="goBack" ref="backH"></el-page-header>
    <div class="shangjia_container">
      <div class="head">
        <div class="mui-card">
          <div class="mui-card-header mui-card-media">
            <img
              style="border-radius: 50%;"
              src="../../public/static/image/oldeight_headicon.png"
            />
            <div class="mui-media-body">
              <span style="font-weight: bold;color: #fff;"
                >美食家老八
                <i
                  style="margin-left:50vw;"
                  class="fa fa-heart-o"
                  aria-hidden="true"
                ></i>
              </span>
              <p style="color: #dddddd;">{{ title[id] }}</p>
            </div>
          </div>
          <div class="tab" ref="tab">
            <div class="sDiv" ref="searL">
              <i class="el-icon-search"></i>
              <input
                @blur="getF = true"
                @focus="getF = false"
                type="text"
                :class="{ getF: !getF }"
                class="searIpt"
                placeholder="搜索"
              />
            </div>

            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item index="1">点餐</el-menu-item>
              <el-menu-item index="2">评价</el-menu-item>
              <el-menu-item index="3">老八故事</el-menu-item>
            </el-menu>
          </div>
        </div>
        <div class="head_bg">
          <div class="mark"></div>
          <img src="../../public/static/image/oldeight_headicon.png" alt="8" />
        </div>
      </div>

      <myPopup @close="close" v-if="isCheked"></myPopup>
      <order @checke="checked" v-show="tabIndex == 1"></order>
      <comment v-show="tabIndex == 2"></comment>
      <Story v-show="tabIndex == 3"></Story>
    </div>
    <div class="button_car" v-show="tabIndex == 1">
      <div class="car_icon">
        <el-badge :value="$store.getters.allCount.t" class="item">
          <img
            ref="carIcon"
            @click="showShowCar"
            src="../../public/static/image/shoopcar.png"
            alt="car"
          />
        </el-badge>
      </div>
      <div class="shoopmsg">
        <p v-show="$store.getters.allCount.t == 0">尚未购买商品</p>
        <p v-show="$store.getters.allCount.t == 0">另需配送费5</p>
        <p v-show="$store.getters.allCount.t !== 0" class="p">
          当前总和(不含折扣)
        </p>
        <p v-show="$store.getters.allCount.t !== 0">
          {{ $store.getters.allCount.total }}
        </p>
      </div>
      <div class="okBuy">
        <el-Button type="info" v-show="$store.getters.allCount.total < 20"
          >满20起送</el-Button
        >
        <el-Button
          type="danger"
          v-show="$store.getters.allCount.total >= 20"
          @click="goBuy"
          >立刻购买</el-Button
        >
      </div>
      <!-- 购物车弹层 -->
      <mt-popup v-model="showCar" position="bottom">
        <div class="car">
          <div class="showCarTitle">
            <span>已选商品</span>
            <span class="el-icon-delete" @click="$store.commit('cls')"
              >清空</span
            >
          </div>
          <div class="showCarBody">
            <div class="carWrap" ref="carWrap" @touchstart="carTouchStart">
              <div
                class="goodsinfos"
                v-for="(item, index) in $store.state.goodslist"
                :key="index"
              >
                <img :src="item.cover_url" alt="8" />
                <div class="lastBody">
                  <p>{{ item.title }}</p>
                  <i
                    @click="removeGoods(item.title)"
                    style="position: absolute;right: 1rem;"
                    class="el-icon-circle-close"
                  ></i>
                  <span>{{ chicun[item.share - 1] }}</span>
                  <div class="lastOption">
                    <div class="price">
                      ￥{{ (item.price * item.count).toFixed(2) }}
                    </div>
                    <div class="countOption">
                      <div class="inputNumber">
                        <span @click="carIntcount(item)">-</span>
                        <span>{{ item.count }}</span>
                        <span @click="carAddcount(item)">+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </mt-popup>
    </div>
  </div>
</template>

<script>
import order from '../components/commont/order.vue'
import comment from '../components/commont/comment.vue'
import Story from '../components/commont/Story.vue'
import myPopup from '../components/commont/myPopup.vue'
import {Toast} from 'mint-ui';
export default {
  data() {
    return {
      id: this.$store.state.routerId,
      inputS: '',
      activeIndex: '1',
      getF: true,
      title: [
        '奥力给，干了昂，兄弟们',
        '一顿不吃，心刺挠',
        '美汁汁',
        '就吃老八秘制小汉堡，既顶饿，还管饱',
        '万人称我美食家',
        '趴鸭屁股是块宝',
        '丑腐乳，老干妈',
        '只有你们想不到滴，没老八做不到滴呕！',
      ],
      tabtop: 0,
      okFixed: false,
      searL: 0,
      testH: 0,
      backH: 0,
      tabIndex: 1,
      isCheked: false,
      showCar: false,
      num: 0,
      carGoodsCount: 1,
      chicun: ["原味", "香辣", "黑胡椒"],
    }
  },
  mounted() {
    this.tabtop = this.$refs.tab.offsetTop
    this.searL = this.$refs.searL.offsetLeft
    this.backH = this.$refs.searL.offsetHeight
    this.$store.commit('getheadBackH', this.backH)
    window.onscroll = this.tabFixed
  },
  methods: {
    goBuy() {
      let bAt = {
        "boolean":"true",
        "time":this.moment(new Date()).format('YYYY MM DD, h:mm:ss a')
      }
      this.$store.commit('buy', bAt);
      let l = this.$store.state.currBuy.length
      this.$store.commit('setCurrBuy',{"insteIndex":l,"list":this.$store.state.allBuy})
      Toast({
					message: '购买成功',
					position: 'middle',
					duration: 1000,
					iconClass: 'el-icon-check'
				});
    },
    removeGoods(title) {
      //vuex中删除点击数据
      this.$store.commit('remGoods', title)
    },
    carTouchStart(e) {
      let tY = e.targetTouches[0].clientY
      let cY = parseFloat(this.$refs.carWrap.style.transform.split('(')[1]) || 0
      this.$refs.carWrap.ontouchmove = (e) => {
        e.preventDefault()
        if (e.targetTouches[0].clientY - tY + cY <= 0) {
          let trY = e.targetTouches[0].clientY - tY
          this.$refs.carWrap.style.transform =
            'translateY(' + (trY + cY) + 'px)'
        }
      }
      this.$refs.carWrap.ontouchend = () => {
        this.$refs.carWrap.ontouchmove = null
      }
    },
    carAddcount(title) {
      this.$store.commit('addCount', title)
    },
    carIntcount(title) {
      this.$store.commit('intCount', title)
    },
    close(boolean) {
      this.isCheked = boolean
    },
    checked(boolean) {
      this.isCheked = boolean
    },
    showShowCar() {
      this.showCar = true
    },
    tabFixed(e) {
      var scrollTop =
        e.target.documentElement.scrollTop || e.target.body.scrollTop
      if (scrollTop >= this.tabtop) {
        if (this.$refs.tab) {
          this.$refs.tab.style.position = 'fixed'
          this.$refs.tab.style.top = this.backH + 'px'
          this.$refs.tab.style.backgroundColor = '#000'
          if (this.testH !== this.$refs.tab.offsetHeight + this.backH) {
            this.$store.commit('setH', this.$refs.tab.offsetHeight + this.backH)
            this.testH = this.$refs.tab.offsetHeight + this.backH
          }
        }
      } else {
        if (this.$refs.tab) {
          this.$refs.tab.style.position = 'relative'
          this.$refs.tab.style.top = 0 + 'px'
          this.$refs.tab.style.backgroundColor = 'transparent'
        }
      }
    },
    goBack() {
      // this.$router.go(-1)
     this.$router.push({ name: 'Home'})
      //this.$store.commit('ShowTabbber')
    },
    handleSelect(k) {
      this.tabIndex = Number(k)
    },
  },
  components: {
    order,
    comment,
    Story,
    myPopup,
  },
}
</script>

<style lang="less">
.mui-card {
  overflow: none !important;
}

.goodsinfo {
  .button_car {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 8vh;
    background-color: #646464;
    display: flex;
    justify-content: space-evenly;
    z-index: 2003;
    .car {
      width: 100vw;
      height: 30vh;
      background-color: #fff;
      display: flex;
      flex-flow: column nowrap;
      padding: 0 0.625rem;
      overflow: hidden;
      .showCarTitle {
        flex: 1;
        display: flex;
        justify-content: space-between;
        z-index: 1999;
        background-color: #fff;
        overflow: hidden;
        padding-top: 0.625rem;
        span:first-child {
          font-weight: bold;
        }
        span:last-child {
          color: #6ba4ff;
        }
      }
      .showCarBody {
        flex: 4;
        overflow: hidden;
        box-sizing: border-box;
        border: 0.0625rem solid #999;
        border-radius: 0.625rem;
        margin-bottom: 0.3125rem;
        padding: 0.125rem;
        z-index: 2004 !important;
        .carWrap {
          transition: all 1s initial;
          overflow: hidden;
          .goodsinfos {
            margin-bottom: 0.3125rem;
            box-sizing: border-box;
            display: flex;
            width: 100%;
            border: 0.0625rem solid #cccccc;
            border-radius: 0.625rem;
            max-height: 5.625rem;
            overflow: hidden;
            img {
              margin: 0.0625rem;
              width: 25%;
              border-radius: 0.3125rem;
              height: 100%;
            }
            .lastBody {
              flex: 1;
              display: flex;
              flex-flow: column wrap;
        
              p {
                width: 60vw;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-indent: 1rem;
                font-size: 1.2rem;
                font-weight: bold;
                color: #000000;
                margin: 0;
              }
              span {
                width: 90%;
                background-color: #f9f9f9;
                margin-left: 1em;
                text-indent: 1rem;
                border-radius: 0.25rem;
                color: #999;
                font-size: small;
              }
              .lastOption {
                max-height: 2rem;
                .price {
                  flex: 1;
                  color: #f00;
                  margin-top: 0.3125rem;
                  text-indent: 1rem;
                  display: inline-block;
                }
                .countOption {
                  display: inline-block;
                  width: 50%;
                  .inputNumber {
                    width: 100%;
                    span:first-child {
                      margin-left: 30%;
                    }
                    span {
                      display: inline-block;
                      width: 15%;
                      text-align: center;
                      margin: 0.3125rem;
                      background-color: #40a6e5;
                      border-radius: 50%;
                      color: #fff;
                      text-indent: 0;
                    }
                    span:nth-child(2) {
                      background-color: transparent;
                      color: #000;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .car_icon {
      flex: 1;
      img {
        transform: translateY(-0.625rem) rotate(10deg);
      }
    }
    .shoopmsg {
      flex: 3;
      padding: 0.2rem 0 0 0.625rem;
      p:first-child {
        color: #ccc;
        font-weight: bold;
        margin-bottom: 0;
        white-space: nowrap;
      }
      .p {
        margin-bottom: 0;
        white-space: nowrap;
        font-weight: bold;
      }
      p:last-child {
        color: #999;
        font-size: small;
      }
    }
    .okBuy {
      flex: 3;
      position: relative;
      .el-button {
        font-weight: bold;
        width: 30vw;
        position: absolute;
        top: 10%;
        right: 0.3125rem;
      }
    }
  }

  .shangjia_container {
    .head {
      .head_bg {
        width: 100%;
        position: relative;
        z-index: -890;
        max-height: 40vh;
        overflow: hidden;

        .mark {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(#000 10%, #999, #fff);
          opacity: 0.6;
          z-index: -99;
        }

        img {
          z-index: -100;
          position: relative;
          transform: translateY(-6.25rem);
          width: 100%;
        }
      }

      .mui-card {
        position: absolute;
        margin: 5vh 0 0 0;
        min-width: 100vw;
        background-color: transparent;
        box-shadow: none;

        .tab {
          display: flex;
          justify-content: space-around;
          width: 100vw;
          z-index: 100;
          transition: all 0.5s ease;
          .is-active {
            color: #fff;
            background-color: transparent;
          }

          .el-menu-item {
            // color: #ccc;
          }

          .el-menu {
            background-color: transparent;
          }

          .el-menu.el-menu--horizontal {
            width: auto;
          }

          .el-menu.el-menu--horizontal {
            border: none;
          }

          .el-menu--horizontal > .el-menu-item {
            height: 7vh;
          }

          .sDiv {
            margin-top: 1rem;
            display: flex;
            position: relative;
            background-color: #fff;
            align-items: center;
            border-radius: 0.3125rem;
            padding-left: 0.3125rem;
            height: 4vh;
            width: 15vw;

            .searIpt {
              margin: 0;
              border: none;
              width: 100%;
              height: 100%;
              font-size: small;
              margin-left: 0.3125rem;
              padding: 0;
            }
          }

          .getF {
            width: 50vw !important;
            z-index: 888;
          }
        }
      }
    }
  }

  .el-page-header {
    background: #000;
    height: 6vh;
    color: #fff;
    line-height: 6vh;
    min-width: 100vw;
    position: fixed;
    z-index: 1000;
  }
}
</style>
