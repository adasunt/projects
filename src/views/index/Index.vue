<template>
  <div>


    <el-row :gutter="24">
      <el-col :span="6">
        <top-menu :listdata="toplist1"></top-menu>
      </el-col>
      <el-col :span="6">
        <top-menu :listdata="toplist2"></top-menu>
      </el-col>
      <el-col :span="6">
        <top-menu :listdata="toplist3"></top-menu>
      </el-col>
      <el-col :span="6">
        <top-menu :listdata="toplist4"></top-menu>
      </el-col>
    </el-row>
    <el-row :gutter="24" class="mt" style="height:440px">
      <el-col :span="16">
        <chart></chart>
      </el-col>
      <el-col :span="8">
        <el-card>
          <sale-map></sale-map>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="24" class="mt">
      <el-col :span="10">
        <time-line></time-line>
      </el-col>
      <el-col :span="14" >
        <el-calendar v-model="value"> </el-calendar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { post } from "/utils/http.js";
import Chart from "./Chart.vue";
import TopMenu from "./TopMenu.vue";
import TimeLine from "./TimeLine.vue";
import SaleMap from "./SaleMap.vue";

export default {
  data() {
    return {
      value: new Date(),
      toplist1: {},
      toplist2: {},
      toplist3: {},
      toplist4: {},
    };
  },
  components: {
    Chart,
    TopMenu,
    TimeLine,
    SaleMap,
  },
  created() {
    this.getTopData();
  },
  methods: {
    getTopData() {
      post("/top").then((res) => {
        this.toplist1 = res.data[0];
        this.toplist2 = res.data[1];
        this.toplist3 = res.data[2];
        this.toplist4 = res.data[3];
      });
    },
  },
};
</script>

<style lang="less" scoped>
 
</style>