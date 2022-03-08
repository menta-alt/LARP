<template id='NavBar'>
  <header class="topBar">
      <img src="@/assets/img/LARP2.png" alt="">
      <div class="logo">
        <div>Load Assessment And Risk Prediction</div>
        <div>运动员负荷评估和风险预测系统</div>
      </div>
      <div class="vline"></div>
      <div class="brand">LARP数据可视化管理平台</div>
  </header>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
/* 顶部导航栏 */
.topBar {
  width: 100%;
  height:10vh;
  background: #092644;
}

.topBar img {
  float: left;
  margin: 2.2vh 0 0 1.8vw;
}

.topBar .logo {
  float: left;
  width: 20vw;
  height: 10vh;
  padding-top: 0.9vh;
}

.topBar .logo div {
  line-height: 4vh;
  text-align: center;
  color: #1dbdbb;
}

.topBar .vline {
  float: left;
  width: 0.1vw;
  height: 6vh;
  margin-top: 2.3vh;
  background-color: #1dbdbb;
}

.topBar .brand {
  float: left;
  font-size: 4.2vh;
  letter-spacing: 0.5vw;
  line-height: 10vh;
  margin-left: 2vw;
  color: #1dbdbb;
}
</style>