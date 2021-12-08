<template>
  <div >
    <bread-crumb></bread-crumb>

    <el-card class="mt"  style="padding-top:20px">
      <el-row :gutter="24">
        <el-col :span="18" >
          <el-form :model="selectForm" inline size="small" ref="selectForm" label-position="left">
            <el-form-item label="请输入手机号:" prop="tel">
              <el-input v-model.trim="selectForm.tel" placeholder="手机号查询">
              </el-input>
            </el-form-item>
            <el-form-item label="姓名:" prop="name">
              <el-input
                v-model.trim="selectForm.name"
                placeholder="请输入姓名"
              ></el-input>
            </el-form-item>
            <el-form-item label="性别:" prop="sex">
              <el-select v-model="selectForm.sex" placeholder="请选择性别">
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="2"></el-option>
              </el-select>
            </el-form-item> </el-form
        ></el-col>
        <el-col :span="6"  style="text-align:right">
          <el-button-group >
            <el-button type="primary" size="mini" style="margin-right: 3px"
              >查询</el-button
            >
            <el-button type="primary" size="mini" @click="reset('selectForm')">
              重置</el-button
            >
          </el-button-group>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="mt" body-style="{padding:'0px'}">
      <new-student :visible="visable" @close="close"></new-student>
      <el-row :gutter="24">
        <el-col :span="10">
          <el-button type="primary" size="mini" icon="el-icon-plus" plain @click="hiddens"
            >新建</el-button
          >
          <el-button
            type="danger"
            plain
            size="mini"
            @click="reset('selectForm')"
            icon="el-icon-delete
"
          >
            删除</el-button
          >
          <el-button
            type="success"
            icon="el-icon-refresh-left"
            size="mini"
            plain
            >转化为正式学员</el-button
          >
          <el-button
            type="warning"
            size="mini"
            icon="el-icon-close
"
            plain
            >取消转化</el-button
          >
        </el-col>
      </el-row>
    </el-card>
    <el-card class="mt">
      <el-table
     
        :data="tableData"
        border
        :row-class-name="setcolors"
        style="width: 100%"
        :fit="true"
        class=" bt"
      >
        <el-table-column type="selection" align="center"> </el-table-column>
        <el-table-column type="index" width="50" label="序号" align="center">
        </el-table-column>
        <el-table-column
          prop="date"
          label="创建日期"
          width="200px"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="80" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="80" align="center">
        </el-table-column>
        <el-table-column prop="org" label="来源渠道"  align="center">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="200px"
          align="center"
        >
          <template slot-scope="scope">
            <el-tag effect="dark" size="mini" v-if="scope.row.status == 1">
              待转化</el-tag
            >
            <el-tag
              type="danger"
              effect="dark"
              size="mini"
              v-else-if="scope.row.status == 0"
            >
              转化失败</el-tag
            >
            <el-tag type="success" size="mini" effect="dark" v-else>
              转化成功</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="person"
          label="负责人"
          align="center"
          width="80px"
        ></el-table-column>
        <el-table-column label="详情" width="120" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="jop(scope.row.name)"
              >详情</el-button
            >
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
import { post } from "../../../utils/http";
import BreadCrumb from "../../components/BreadCrumb.vue";
import NewStudent from './NewStudent.vue';
export default {
  components: { BreadCrumb, NewStudent },
  data() {
    return {
      visable:false,
      tableData: [],
      selectForm: {
        tel: "",
        name: "",
        sex: "",
      },
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    setcolors({ row }) {
      if (row.status === 0) {
        return "warning-row";
      } else if (row.status === 2) {
        return "success-row";
      }
      return "primary-row";
    },
    close(){
      this.visable=false
    },
    hiddens(){
      this.visable=!this.visable
    },
    jop(name) {
      this.$router.push({ path: "detail", query: { name: name } });
    },
    reset(formName) {
      this.$refs[formName].resetFields();
    },
    getTableData() {
      post("/productList").then((res) => {
        this.tableData = res.data.list;
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>