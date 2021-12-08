<template>
  <div style="">
    <el-tooltip content="折叠" placement="right-start"  v-if="!isCollapse">
      <div class="left-show">
        <i class="el-icon-s-fold" @click="menushow"></i>
       
      </div>
    </el-tooltip>
      <el-tooltip content="展开" placement="right-start"   v-else>
      <div class="left-show"> 
       <i class="left-show el-icon-s-unfold" @click="menushow"></i>
       
      </div>
    </el-tooltip>
 
    <span>您已入职{{ entryDate }}天</span>
    <el-dropdown trigger="click" class="dropdown" @command="handleCommand">
      <span class="el-dropdown-link">
        欢迎您，{{ name }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">个人信息</el-dropdown-item>
        <el-dropdown-item command="e">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>



<script>
import { clearToken, getSession } from "../../utils/session.js";
import { post } from "../../utils/http.js";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      entryDate: "",
    };
  },
  computed: {
    name() {
      return getSession("name");
    },

    ...mapState(["isCollapse"]),
  },
  created() {
    this.times();
  },
  methods: {
    //退出功能
    handleCommand(command) {
      if (command === "e") {
        clearToken("token");
        this.$router.push("/login");
      }
      if (command === "a") {
        this.$router.push("/my");
      }
    },
    //入职时间
    times() {
      post("/in").then((res) => {
        let otime = new Date(res.time);
        let now = new Date();
        let t = Math.floor((now - otime) / 24 / 60 / 60 / 1000);

        this.entryDate = t;
      });
    },
    ...mapMutations(["menushow"]),
  },
};
</script>

<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.left-show {
width: 30px;
height: 60px;
text-align:left;

line-height: 60px;
  float: left;
  font-size: 25px;
  cursor: pointer;
  overflow: hidden
}
.el-icon-arrow-down {
  font-size: 12px;
  text-align: center;
}
.dropdown {
  margin-left: 20px;
}
</style>