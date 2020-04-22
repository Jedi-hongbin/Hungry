<template>
  <div class="Car">
    <div class="head_icon">
      <img
        class="logo"
        src="../../public/static/image/ebelogo.png"
        alt="饿不饿"
      >
    </div>
    <div
      v-show="!$store.state.haveCar"
      class="car_cont"
    >
      <span>未有成功订单</span>
    </div>
    <!-- 订单区 -->
    <div
      ref="car"
      v-show="$store.state.haveCar"
      class="dingdan"
    >
      <div
        class="goodsCard"
        v-for="(item,index) in $store.state.allBuy"
        :key="index"
      >
        <img
          :src="item.cover_url"
          alt="8"
        >
        <div class="lastBody">
          <p class="title">{{item.title}}</p>
          <span>{{chicun[item.share-1]}} x {{item.count}}  共:</span>
					<span>￥{{(item.price * item.count).toFixed(2)}}</span>
					<span class="ok">已完成</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chicun: ["原味", "香辣", "黑胡椒"],
      totalBuy:[],
      t:1
    };
  },
  mounted() {
    this.shouTime()
  },
  methods: {
    shouTime(){
      let allCard = document.getElementsByClassName('goodsCard');
      
      let insertNode = [];
      this.$store.state.insterIndex.forEach(e => {
        let el = allCard[e]
        insertNode.push(el)
      });

      this.$store.state.clickTime.forEach((e,i) => {
        let temp = document.createElement('p');
        temp.style.marginBottom = 0;
        temp.innerHTML =e;
        this.$refs.car.insertBefore(temp,insertNode[i]);
      })
    }
  }
};
</script>

<style scoped lang="less">
.Car {
  .dingdan {
    width: 98vw;
    // height: 80vh;
    margin: 0 auto;
    margin-bottom:10vh;
    .goodsCard {
      width: 100%;
      max-height: 15vh;
      border: 1px solid #ccc;
      border-radius: 5px;
      display: flex;
      margin: 0.3125rem 0;
      .title{
        width: 250px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 20px;
        margin-top: 10px;
        color: #000;
        font-weight: bold;
      }
			.ok{
				color: #DAA520;
				float: right;
				margin-right: 0.625rem;
			}
      img {
        width: 20vw;
        height: 20vw;
        border-radius: 5%;
        margin: 5px;
      }
    }
  }
  .car_cont {
    width: 98vw;
    height: 80vh;
    background: url(../../public/static/image/nothavecar.png) no-repeat;
    background-size: 30%;
    background-position: center;
    margin: 0 auto;

    span {
      display: block;
      text-align: center;
      font-size: 2em;
      line-height: 80vh;
      font-weight: bold;
      color: #ccc;
      transform: translateY(11vh);
    }
  }
  .head_icon {
    img {
      width: 4.25rem;
      height: 1.75rem;
      margin: 0.625rem;
    }
  }
}
</style>
