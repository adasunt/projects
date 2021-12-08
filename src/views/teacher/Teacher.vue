<template>
  <div>
    <bread-crumb></bread-crumb>
    <el-card class="mt" style="padding-top:20px">
      <el-row>
    
        <el-col :span="19">
          <el-form :model="selectForm" inline size="small" ref="selectForm">
             <el-form-item label="请输入手机号："  prop="tel" >
               <el-input
               v-model="selectForm.tel"
            placeholder="手机号查询"

          >
          </el-input>
             </el-form-item>
            <el-form-item label="姓名" prop="name"  >
              <el-input v-model="selectForm.name"  placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="科目" prop="region">
              <el-select v-model="selectForm.region" placeholder="请选择科目">
                <el-option label="英语" value="1"></el-option>
                <el-option label="数学" value="2"></el-option>
                <el-option label="计算机" value="3"></el-option>
                <el-option label="物理" value="4"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="5" style="text-align:right">
         <el-button-group >
           <el-button type="primary"  size="small">查询</el-button>
           <el-button type="primary"  size="small" @click="reset('selectForm')"> 重置</el-button>
         </el-button-group>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="mt" body-style="{padding:'0px'}">
      <el-row :gutter="24">
        <el-col :span="5">
          <div style="text-align: left">
            <el-button type="primary" size="mini" @click="pop"
              >新建用户</el-button
            >

            <el-button
              :disabled="!selected.length"
              @click="popRight('删除')"
              size="mini"
              >批量删除</el-button
            >
          </div>
          <char-model :visible="visable" @close="closePop"></char-model>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="mt">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        @selection-change="selectList"
       
      >
        <el-table-column type="selection"  align="center"> </el-table-column>
        <el-table-column type="index" label="序号"  align="center"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="80px"  align="center">
        </el-table-column>
        <el-table-column prop="sex" label="姓别" width="80px"  align="center"></el-table-column>
        <el-table-column prop="level" label="级别"  align="center"></el-table-column>
        <el-table-column prop="date" label="入职日期"  align="center" ></el-table-column>
        <el-table-column prop="grade" label="年级" width="80px"  align="center"></el-table-column>
        <el-table-column prop="aclass" label="科目" width="80px"  align="center"></el-table-column>
        <el-table-column prop="tel" label="手机号码"   align="center"></el-table-column>
        <el-table-column prop="status" label="状态"   align="center">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.status == 1">在职</el-tag>
            <el-tag type="warning" v-else>离职</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" style="text-align: right"  align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="edit(scope.row)">
              编辑
            </el-button>
            <el-button size="mini" type="danger"> 删除 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :page-sizes="[20]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        class="page mt"
      >
      </el-pagination>
    </el-card>
  </div>
</template>


<script>
import { get } from "../../../utils/http.js";
import charModel from "./charModel.vue";
import BreadCrumb from "../../components/BreadCrumb.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    charModel,
    BreadCrumb,
  },

  data() {
    return {
      //查询
      selectForm: {
        name: "",
        region: "",
        tel:""
      },
      //弹窗
      visable: false,
      selected: [],
      input3: "",
      tableData: [],
    };
  },
  created() {
    //表格
    this.setList();
  },

  methods: {
    //重置
    reset(formName){
this.$refs[formName].resetFields();
    },
    ...mapMutations(["setlistRow"]),
    //编辑
    edit(data) {
      this.visable = true;
      this.setlistRow(data);
    },
    //弹框
    closePop() {
      this.setlistRow({});
      this.visable = false;
    },
    pop() {
      this.visable = true;
    },
    popRight(oper) {
      this.$notify({
        title: "成功",
        message: this.selected.map((item) => item.account) + oper + "操作成功",
        type: "success",
      });
    },
    //选中事件
    selectList(selection) {
      this.selected = selection;
    },
    //表格
    setList() {
      get("/all").then((res) => {
        this.tableData = res.data.list;
      });
    },
  },
};
</script>

<style lang="less" scoped>

</style>