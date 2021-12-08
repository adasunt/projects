<template>
  <el-container style="height:100vh">
    <el-aside width="auto"  style="padding:10px" > 
      <left-nav></left-nav>
    </el-aside>
    <el-container>
      <el-header>
        <headers />
      </el-header>
      <el-main>
        <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
           <router-view v-if="!$route.meta.keepAlive"></router-view>
        </el-main>
    
    </el-container>

  </el-container>
</template>

<script>
import Headers from "@/components/Headers.vue";
import LeftNav from "@/components/LeftNav.vue";
export default {
  components: {
    //头部组件
    Headers,
    LeftNav
 
  },
  methods: {

  },
};
</script>

<style scoped lang="less" >
.el-header {
  color: #333;
  text-align: right;
  line-height: 60px;

}

.el-aside {

  color: #333;

  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;

  height: 70vh;
}

</style>