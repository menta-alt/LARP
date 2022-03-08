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
          运动周边
        </el-main>
      </el-container>
    </div>
  </div>
</template>
 
<script>
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
export default {
  components: {
    SideBar: SideBar,
    NavBar: NavBar,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
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
</style>