<template>
  <div class="container">
    <div>
      <!-- 顶部导航栏 -->
      <nav-bar></nav-bar>
      <el-container class="container-body">
        <!-- 侧边功能面板 -->
        <side-bar class="side"></side-bar>

        <!-- 主体内容 -->
        <el-main class="main-container">
          <iframe src="static/slsh.html" width="100%" height="100%" frameborder="0"></iframe>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'
import NavBar from '@/components/NavBar'

export default {
  components: {
    SideBar: SideBar,
    NavBar: NavBar
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped>
.container .container-body .side {
  position: relative;
  float: left;
  height: 90vh;
  background: #092644;
  padding-top: 2vh;
}

.container .main-container {
  background: #f2f2f2;
}

/* 轮播图样式 */
main .left {
  height: 80vh;
  width: 57vw;
  padding: 2.5vh 1vw;
  margin: auto;
}

.left .left_container {
  display: flex;
  width: 100%;
  height: 100%;
  background: #0019212c;
  border-radius: 0.4em;
}

.left .focus {
  position: relative;
  width: 48vw;
  height: 64vh;
  margin: auto;
  overflow: hidden;
  background: yellow;
  border-radius: 0.3em;
}

/* 箭头 */
.arrow-l,
.arrow-r {
  display: none;
  position: absolute;
  top: 50%;
  width: 2.5vw;
  height: 10vh;
  margin-top: -5vh; /*移动到垂直居中*/
  line-height: 10vh;
  background: rgba(0, 0, 0, 0.3);
  color: rgba(252, 252, 252, 0.877);
  text-align: center;
  font-family: 'icomoon';
  font-size: 2em;
  z-index: 2;
}

.arrow-l {
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
}
.arrow-r {
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  right: 0;
}

/* 图片 */
.focus {
  box-shadow: 0 0 20px 12px rgba(0, 0, 0, 0.308);
}

.focus img {
  width: 100%;
}

.focus ul {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 500%;
}

.focus ul li {
  float: left;
  width: 20%; /*父元素ul的5分之1*/
}

/* 小圆圈 */
.circle {
  position: absolute;
  bottom: 3vh;
  left: 22vw;
  margin: 0;
}

.circle li {
  display: inline-block;
  width: 0.6em;
  height: 0.4em;
  margin: 0 0.3vw;
  background-color: rgba(255, 255, 255, 0.808);
  list-style: none;
  border-radius: 0.3em;
  transition: all 0.3s;
  cursor: pointer;
}

.circle .current {
  width: 2.5em;
}
</style>
