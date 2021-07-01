<template>
  <el-aside width="68">
    <el-menu
      router
      default-active="2"
      class="navigation-drawer"
      :collapse="isCollapse"
    >
      <div>
        <el-menu-item class="logo" index="/">
          <img src="../../assets/logo.png" alt="Logo" />
        </el-menu-item>
        <el-menu-item class="icon" disabled>
          <font-awesome-icon :icon="['fa', 'headset']" />
        </el-menu-item>
        <el-menu-item route class="icon" index="/">
          <font-awesome-icon :icon="['fa', 'box']" />
        </el-menu-item>
        <el-menu-item class="icon" disabled>
          <font-awesome-icon :icon="['fa', 'question-circle']" />
        </el-menu-item>
      </div>
      <div style="flex: 1" />
      <div class="avatar">
        <img width="44" height="44" src="../../assets/placeholderAvatar.png" alt="avatar" />
        <p>Hi, Ashly</p>
      </div>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      isCollapse: true,
    };
  },
};
</script>

<style scoped lang="scss">
.avatar {
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
  img {
    border: 4px solid #8854DD;
    border-radius: 50%;
  }
}
.icon {
  font-size: 27px;
}
.navigation-drawer {
  width: 68px !important;
  background: url("../../assets/background.png");
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.logo {
  background-color: transparent !important;
  margin: 8px 0 60px 0;
  padding: 0 14px !important;
}
</style>
