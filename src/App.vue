<template>
  <div id="app">
    <el-container class="main-container">
      <side-bar />
      <router-view />
    </el-container>
  </div>
</template>

<script>
import SideBar from '@/common/components/SideBar.vue';

export default {
  name: 'app',
  components: { SideBar },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "微软雅黑", Arial, sans-serif;
}
html,
body,
#app,
.main-container {
  height: 100%;
}
</style>
