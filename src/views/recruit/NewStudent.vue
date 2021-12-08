<template>
    <div>
         <el-dialog :title="title" :visible="visible" width="50%" @close="closePop">
 
      <el-card shadow="none">
        <el-form
          ref="tform"
          :model="form"
          label-width="100px"
          size="mini"
          :rules="formrul"
        >
          <el-col :span="12">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="手机号" prop="tel">
              <el-input v-model="form.tel" placeholder="请输入手机号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="form.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="咨询日期" prop="date">
              <el-date-picker
                type="date"
                v-model="form.date"
                placeholder="选择日期"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="科目" prop="aclass">
              <el-select v-model="form.aclass" placeholder="请选择科目">
                <el-option label="物理" value="c1"></el-option>
                <el-option label="数学" value="c2"></el-option>
                <el-option label="英语" value="c3"></el-option>
                <el-option label="语文" value="c4"></el-option>
                <el-option label="计算机" value="c5"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="年级" prop="grade">
              <el-select v-model="form.grade" placeholder="请选择年级">
                <el-option label="一年级" value="g1"></el-option>
                <el-option label="二年级" value="g2"></el-option>
                <el-option label="三年级" value="g3"></el-option>
                <el-option label="四年级" value="g4"></el-option>
                <el-option label="五年级" value="g5"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="负责人姓名" prop="cname">
           <el-input v-model="form.cname" placeholder="请输入负责人姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12"></el-col>
        </el-form>
      </el-card>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closePop()">取 消</el-button>
        <el-button type="primary" @click="closePop">确 定</el-button>
      </span>
    </el-dialog>
    </div>
</template>

<script>

  export default {
  props: ["visible"],
  data() {
    return {
      form: {
        name: "",
        sex: "",
        tel: "",
        aclass: "",
        grade: "",
        cname:"",
        date: "",
      },
      formrul: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        tel: [
          { required: true, message: "请输入手机号！", trigger: "blur" },
          {
            trigger: "blur",
            message: "请输入正确的手机号！",
            pattern: /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/,
          },
        ],
        aclass: [{ required: true, message: "请选择科目", trigger: "change" }],
        grade: [{ required: true, message: "请选择年级", trigger: "change" }],
        date: [{ required: true, message: "请选择日期", trigger: "change" }],
        cname: [{ required: true, message: "请选择负责人", trigger: "change" }],
      },
      title: "新建学员",
    };
  },
 

  methods: {
    //编辑按钮
    //关闭
    reset(formName) {
      this.$refs[formName].resetFields();
    },
    closePop() {
      this.$emit("close");
       this.reset("tform");
 
    },
  
   
  },
};
</script>

<style lang="less" scoped>

</style>