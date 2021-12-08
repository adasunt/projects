<template>
  <div>
    <el-dialog title="提示" :visible="visible" width="30%" @close="closePop" style="text-align:left">

 <el-radio-group v-model="radios">
    <el-radio :label="'admin'">管理员/老板</el-radio>
    <el-radio :label="'teacher'">老师/咨询师</el-radio>
    <el-radio :label="'manager'">部门经理</el-radio>
  </el-radio-group>
      <span slot="footer" class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button type="primary" @click="okPop">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["visible","msgs"],
  data() {
    return {
        radios:'admin'
    };
  },
watch:{
    visible(){
      this.radios=this.msgs.char
    }
},
  methods: {
      okPop(){
            this.$emit('change',this.radios)
             this.closePop()
      },
      closePop(){
      
          this.$emit('aclose')
      }
  },
};
</script>

<style lang="less" scoped>
</style>