<template>
  <div class="about">
    <div class="head_icon">
      <img
        class="logo"
        src="../../public/static/image/ebelogo.png"
        alt="饿不饿"
      />
    </div>
    <div class="userMsg">
      <i class="el-icon-eleme"></i>
      <h4>17614251298</h4>
      <i class="el-icon-edit"></i>
    </div>
    <div class="aboutCell myHongbao">
      <i class="el-icon-s-ticket"></i>
      <span>我的红包<i class="el-icon-arrow-right"></i></span>
    </div>
    <div class="aboutCell myAddress">
      <i class="el-icon-location"></i>
      <span>我的地址<i class="el-icon-arrow-right"></i></span>
    </div>
    <div class="aboutCell myLove">
      <i class="el-icon-star-on"></i>
      <span>我的收藏<i class="el-icon-arrow-right"></i></span>
    </div>
    <div class="aboutCell myKefu">
      <i class="el-icon-phone"></i>
      <span>我的客服<i class="el-icon-arrow-right"></i></span>
    </div>
    <div class="aboutCell myKefu">
      <i class="el-icon-refresh"></i>
      <span>页面切换样式
        <el-radio-group v-model="radio" @change="changePageStyle">
          <el-radio label="v">旋转</el-radio>
          <el-radio label="h">平滑</el-radio>
          <el-radio label="n">无</el-radio>
        </el-radio-group>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio:this.$store.state.style
    }
  },
  mounted() {},
  methods: {
    changePageStyle(k){
      this.$store.commit('changePageStyle',k)
    }
  },
}
</script>

<style scoped lang="less">
.about {
  .aboutCell {
    width: 100vw;
    height: 10vh;
    background-color: #fff;
    border-bottom: 0.03rem solid rgb(229, 226, 231);
    margin-top: 0.6rem;
    display: flex;
    align-items: center;

    span {
      display: flex;
      width: 90vw;
      justify-content: space-between;
      align-items: center;
    }
    i {
      margin: 0 0.6rem;
    }
  }
  .userMsg {
    display: flex;
    width: 100vw;
    justify-content: flex-start;
    i {
      background: linear-gradient(
        60deg,
        rgb(150, 140, 150),
        rgba(167, 159, 80, 0)
      );
      border-radius: 50%;
      font-size: 3em;
      margin: 0 0.6rem;
    }
    h4 {
      line-height: 2em;
    }
    i:last-child {
      color: #000;
      background: none;
      font-size: medium;
      line-height: 3em;
      margin-left: 5rem;
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
