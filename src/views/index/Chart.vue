<template>
  <div>
    <el-card class="table-box">
      <el-tabs v-model="activeName" @tab-click="handleClick" >
        <el-tab-pane label="销售额" name="first" :key="1">
          <div ref="sale" class="sale" ></div>
        </el-tab-pane>
        <el-tab-pane label="访问量" name="second" :key="2">
          <div ref="visit" class="visit" ></div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { post } from "/utils/http.js";
export default {
  data() {
    return {
      a: "",
      activeName: "first",
      tablesaledataX: [],
      tablesaledataY: [],
      source: [],
    };
  },

  mounted() {
    this.setTabledata();
  },
  methods: {
    initEcharts() {
      // 新建一个promise对象
      let newPromise = new Promise((resolve) => {
        resolve();
      });
      //然后异步执行echarts的初始化函数
      newPromise.then(() => {
        //	此dom为echarts图标展示dom
        const visittable = {
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: this.tablesaledataX,
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: this.tablesaledataY,
              type: "line",
              smooth: true,
              areaStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "blue", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "white", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
          ],
        };
        this.setTable("visit", visittable);
      });
    },

    handleClick(tab) {
      if (tab.name === "second") {
       
   


        
        this.initEcharts();
        
      }
    },
    setTabledata() {
      post("/table").then((res) => {
        this.tablesaledataX = res.data[0].date;
        this.tablesaledataY = res.data[0].saledata;

        this.setTable("sale");
      });
    },
    setTable(ref, params) {
      const tabletype = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: this.tablesaledataX,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "销售",
            type: "bar",
            barWidth: "60%",
            data: this.tablesaledataY,
          },
        ],
      };
      if (params) {
        this.$echarts.init(this.$refs[ref]).setOption(params);
      } else {
        this.$echarts.init(this.$refs[ref]).setOption(tabletype);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.sale{
  height: 335px;
  width: 100%;
}
.visit{
  height: 335px;
  width: 100%;
}
</style>