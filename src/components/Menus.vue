<template>
<fragment >
    <el-submenu v-if="menu.children" :index="menu.url"   >
      <template slot="title">
        <i :class="menu.icon"></i>
        <span slot="title" >{{ menu.name }}</span>
      </template>
      <menu-nav
  
        v-for="(item, index) in menu.children"
        :menu="item"
        :key="index"
      ></menu-nav>
    </el-submenu>

    <el-menu-item v-else :index="menu.url"     >
      <i :class="menu.icon"></i>
      <span slot="title">{{ menu.name }}</span>
    </el-menu-item>
</fragment>
</template>

<script>
export default {
  name: "MenuNav",
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>

</style>