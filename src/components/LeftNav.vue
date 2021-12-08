<template>
  <div>
    <el-menu
      :collapse="isCollapse"
      class="nav"

      :router="true"
     
      :unique-opened="true"
    >
      <h1>教务信息管理系统</h1>
      <menus
        v-for="(item, index) in menuList"
        :menu="item"
        :key="index"
      ></menus>
 
    </el-menu>
  </div>
</template>

<script>
import { get } from "../../utils/http";
import Menus from "./Menus.vue";
import { mapState} from 'vuex'
export default {
  components: { Menus },
  data() {
    return {

      menuList: [],
    };
  },
  computed:{
       ...mapState(['isCollapse']),
  }
  ,
  created() {
    get("/menu").then((res) => {
      this.menuList = res.data;
    });
  },

};
</script>

<style scoped lang="less">
.nav {
  padding-top: 35px;
  h1 {
    font-size: 22px;
    text-align: center;

    padding-bottom: 30px;
    color: black;
  }

}

</style>