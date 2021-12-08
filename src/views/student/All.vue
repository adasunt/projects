<template>
  <div>
    <bread-crumb></bread-crumb>
    <el-card class="mt top" >
      <el-row :gutter="24" style="padding: 20px">
        <el-col :span="19">
          <el-form
            ref="form"
            :model="form"
            inline
            size="small"
            label-width="60px"
            label-position="left"
          >
            <el-form-item label="姓名：" prop="name">
              <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别：" prop="sex">
              <el-select v-model="form.sex" placeholder="请选择性别">
                <el-option label="男" :value="1"></el-option>
                <el-option label="女" :value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="年级：" prop="grade">
              <el-select v-model="form2.grade" placeholder="请输入班级">
                <el-option label="一年级" :value="1"></el-option>
                <el-option label="二年级" :value="2"></el-option>
                <el-option label="三年级" :value="3"></el-option>
                <el-option label="四年级" :value="4"></el-option>
                <el-option label="五年级" :value="5"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>

        <el-col :span="5" style="text-align:right">
          <el-button-group>
            <el-button type="primary" size="mini" style="margin-right: 3px"
              >查询</el-button
            >
            <el-button type="primary" size="mini" @click="reset('selectForm')">
              重置</el-button
            >
          </el-button-group>

          <span
            @click="closed"
            style="color: #409eff; cursor: pointer"
            v-if="!visable"
            :key="1"
          >
            展开
            <i class="el-icon-arrow-down"></i>
          </span>
          <span
            @click="closed"
            style="color: #409eff; cursor: pointer"
            v-else
            :key="2"
          >
            折叠
            <i class="el-icon-arrow-up"></i>
          </span>
        </el-col>
      </el-row>
      <el-row :gutter="24" v-show="visable">
        <el-col :span="7">
          <el-form
            inline
            size="small"
            ref="form2"
            :model="form"
            label-width="90px"
          >
            <el-form-item label="负责人姓名:" prop="cname">
              <el-input
                v-model="form2.cname"
                placeholder="请输入负责人姓名"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="7" :pull="1">
          <el-col :span="6" style="text-align: center; padding: 5px"
            >入学日期:</el-col
          >
          <el-col :span="13" :pull="1">
            <el-date-picker
              v-model="form.date"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small"
              clearable
            ></el-date-picker>
          </el-col>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="mt">
      <el-table
        class="bt"
        :data="tableData"
        style="width: 100%"
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="100"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          sortable
          width="180"
          align="center"
        >
        </el-table-column>

        <el-table-column
          prop="pic"
          label="照片"
          sortable
          width="80"
          align="center"
        >
          <template slot-scope="scope">
            <el-image
              style="width: 50px; height: 50px"
              :src="scope.row.pic"
              fit="fit"
            ></el-image>
          </template>
        </el-table-column>

        <el-table-column
          prop="grade"
          label="年级"
          sortable
          width="90px"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="aclass"
          label="报名科目"
        
          align="center"
        >
        </el-table-column>
        <el-table-column prop="tel" label="手机号码" align="center">
        </el-table-column>
        <el-table-column
          prop="person"
          label="班主任姓名"
          width="100px"
          align="center"
        >
        </el-table-column>
        <el-table-column
          header-align="center"
          prop="email"
          align="center"
          label="邮箱"
        >
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          prop="region"
          label="地区"
        >
        </el-table-column>
        <el-table-column label="详情" align="center">
          <el-button type="primary" size="mini" plain> 详情</el-button>
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
import { post } from "/utils/http.js";
import BreadCrumb from "../../components/BreadCrumb.vue";
export default {
  components: { BreadCrumb },
  data() {
    return {
      form: {
        name: "",

        sex: "",
      },
      form2: {
        grade: "",

        cname: "",
      },
      date: "",
      visable: false,
      tableData: [],
    };
  },
  created() {
    this.getDatas();
  },
  methods: {
    getDatas() {
      post("/studentList").then(({ data }) => {
        this.tableData = data.list;
      });
    },
    closed() {
      this.visable = !this.visable;
    },
  },
};
</script>

<style lang="less" scoped>
.top {
  padding: 10px;
}
</style>