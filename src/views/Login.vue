<template>
  <div class="wrap">
    <div class="item_box">
      <div class="title">
        <h1>教务信息管理系统</h1>
        <h3>2021</h3>
      </div>

      <el-row>
        <el-col :xs="18" :sm="10" :md="9" :lg="8" :xl="8" class="son">
          <el-card class="login_box">
            <el-tabs v-model="activeName" :stretch="true">
              <!-- 登录 -->
              <el-tab-pane label="用户登录" name="first">
                <el-form
                  :model="ruleForm"
                  :rules="rules"
                  ref="ruleForm"
                  label-width="80px"
                  class="rule_form"
                  size="small"
                  label-position="left"
                >
                  <el-form-item
                    label="用户名"
                    prop="username"
                    class="rule_item"
                  >
                    <el-input
                      v-model="ruleForm.username"
                      placeholder="user"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="password" class="rule_item">
                    <el-input
                      v-model="ruleForm.password"
                      type="password"
                      placeholder="1234"
                    ></el-input>
                  </el-form-item>
                  <el-button
                    type="primary"
                    class="btn"
                    @click="submitForm('ruleForm')"
                    :loading="load"
                    >登录</el-button
                  >
                </el-form>
              </el-tab-pane>
              <!--注册 -->
              <el-tab-pane label="快速注册" name="second">
                <el-form
                  :model="Register"
                  :rules="rulesRegister"
                  ref="ruleFormRegister"
                  label-width="80px"
                  size="small"
                  class="rule_form"
                  label-position="left"
                >
                  <el-form-item
                    label="用户名"
                    prop="username"
                    class="rule_item"
                  >
                    <el-input v-model="Register.username"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="password" class="rule_item">
                    <el-input v-model="Register.password"></el-input>
                  </el-form-item>
                  <el-form-item label="手机号" prop="tel" class="rule_item">
                    <el-input v-model="Register.tel"></el-input>
                  </el-form-item>
                  <el-button type="primary" class="btn">立即注册</el-button>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { post } from "../../utils/http.js";
import { setSession } from "../../utils/session.js";
export default {
  data() {
    return {
      load: false,
      //选项卡
      activeName: "first",
      //登录组件
      ruleForm: {
        username: "",
        password: "",
      },
      //注册组Ris件
      Register: {
        username: "",
        password: "",
        tel: "",
      },
      //表单登录验证
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: ["change", "blur"],
          },
          {
            min: 3,
            max: 5,
            message: "长度在 3 到 5 个字符",
            trigger: ["change", "blur"],
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: ["change", "blur"],
          },
          {
            pattern: /^\d{3,6}$/,
            required: true,
            message: "密码长度必须是3-6位数字",
            trigger: ["change", "blur"],
          },
        ],
      },
      //注册验证
      rulesRegister: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: ["change", "blur"],
          },
          {
            min: 3,
            max: 5,
            message: "长度在 3 到 5 个字符",
            trigger: ["change", "blur"],
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: ["change", "blur"],
          },
          {
            pattern: /^\d{3,6}$/,
            required: true,
            message: "密码长度必须是3-6位数字",
            trigger: ["change", "blur"],
          },
        ],
        tel: [
          { required: true, message: "请输入手机号！", trigger: "blur" },
          {
            trigger: "blur",
            message: "请输入正确的手机号！",
            pattern: /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/,
          },
        ],
      },
    };
  },
  methods: {
    //提交按钮发送ajax
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.load = true;
          setTimeout(() => {
            this.load = false;
          }, 2000);
          post("/login", this.ruleForm).then((data) => {
       

            setSession("token", data.token);
            setSession("name", data.nickname);
            this.$router.push({ path: "/" });
          });
        } else {
          return false;
        }
      });
    },
    //选项卡
  },
};
</script>

<style scoped lang="less">
@url: "../assets/1.jpg";
.wrap {
  height: 100vh;
  background-image: url(@url);
  background-position: 50% 50%;

  .title {
    color: #fff;

    font-weight: bold;
    text-shadow: 0px 1px 1px #555;
    margin-left: 6%;
    margin-bottom: 5%;

    h1 {
      display: inline-block;
      font-size: 35px;
      font-weight: bold;

      text-align: center;
      color: #fff;

      font-weight: bold;
      text-shadow: 0px 1px 1px #555;
    }
    h3 {
      display: inline-block;
      margin-left: 10px;
      vertical-align: top;
      color: #fff;
    }
  }

  .item_box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.rule_form {
  margin-top: 15px;
}
.login_box {
  text-align: center;

  width: 350px;
  div {
    padding: 0;
  }
}
.btn {
  margin-left: 50%;
  margin-top: 15px;
  transform: translate(-45%);
  width: 180px;
}
</style>