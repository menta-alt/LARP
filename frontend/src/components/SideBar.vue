<template>
  <el-aside width="17vw" class="menu-container">
    <!-- 实现菜单多级分类 -->
    <el-menu
      :default-active="$route.path"
      router
      text-color="#fff"
      background-color="#092644"
      active-text-color="#1dbdbb"
      @select="handleSelect"
    >
      <!-- 子菜单 -->
      <menu-tree :menuData="menuList"></menu-tree>
    </el-menu>
  </el-aside>
</template>

<script>
import MenuTree from "@/components/SideBarItem";
export default {
  name: "SideBar",
  components: {
    MenuTree: MenuTree,
  },
  data() {
    return {
      menuList: [
        {
          index: "/mainPage",
          icon: "el-icon-s-home",
          name: "首页",
        },
        {
          index: "/data",
          icon: "el-icon-menu",
          name: "数据面板",
          children: [
            {
              index: "/heartRate",
              icon: "el-icon-s-data",
              name: "日常有效数据",
            },
            {
              index: "/physiData",
              icon: "el-icon-document",
              name: "生理生化数据",
            },
          ],
        },
        {
          index: "/load",
          icon: "el-icon-data-analysis",
          name: "运动负荷评估",
        },
        {
          index: "/risk",
          icon: "el-icon-data-line",
          name: "运动风险预测",
        },
        {
          index: "/souvenir",
          icon: "el-icon-watch",
          name: "运动周边",
        },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
};
</script>

<style scoped>
</style>
