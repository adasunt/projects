<template>
  <div>
           <el-card>
    <el-row :gutter="24">
      
      <el-col :span="2" :offset="22" >
     
            <el-button type="primary" size="small" @click="goback()">返回</el-button>
          
      </el-col>
      
    </el-row>
       </el-card>
    <el-row :gutter="24">
      <el-col :span="24">
        <el-card class="mt">
          <el-descriptions title="用户信息">
            <el-descriptions-item label="用户名"
              >kooriookami</el-descriptions-item
            >
            <el-descriptions-item label="手机号"
              >18100000000</el-descriptions-item
            >
            <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
            <el-descriptions-item label="备注">
              <el-tag size="small">学校</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="联系地址"
              >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item
            >
          </el-descriptions>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="24">
        <el-card class="mt">
          <el-descriptions title="用户信息">
            <el-descriptions-item label="用户名"
              >kooriookami</el-descriptions-item
            >
            <el-descriptions-item label="手机号"
              >18100000000</el-descriptions-item
            >
            <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
            <el-descriptions-item label="备注">
              <el-tag size="small">学校</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="联系地址"
              >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item
            >
          </el-descriptions>
        </el-card>
      </el-col>
    </el-row>
    <el-card class="mt">

<el-steps :active="2" finish-status="success" simple style="margin-top: 20px">
  <el-step title="邀约" ></el-step>
  <el-step title="面谈" ></el-step>
  <el-step title="报名" ></el-step>
</el-steps>
    </el-card>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.query.name);
  },
  methods: {
      goback(){
          this.$router.push('all')
      }
  },
};
</script>

<style lang="less" scoped>
</style>