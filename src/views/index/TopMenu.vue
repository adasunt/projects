<template>
  <el-card class="top-box">
    <div class="top disflex">
      <p>{{ listdata.title }}</p>
      <i class="el-icon-warning-outline"></i>
    </div>
    <p class="fig">{{ listdata.figures }}</p>
    <div>
      <span>周同比</span>{{ listdata.week }}
      <i
        :class="
          listdata.weekstatus === 1
            ? 'el-icon-caret-top'
            : 'el-icon-caret-bottom'
        "
        :style="listdata.weekstatus === 1 ? 'color: red' : 'color:green'"
      ></i>
      <span>日同比 {{ listdata.day }}</span>
      <i
        :class="
          listdata.daystatus === 1
            ? 'el-icon-caret-top'
            : 'el-icon-caret-bottom'
        "
        :style="listdata.daystatus === 1 ? 'color: red' : 'color:green'"
      ></i>
    </div>
       <el-divider></el-divider>
    <p class="mt" v-if="listdata.title === '访问量'">
      <span>日平均访问量:</span><span class="itm">{{ listdata.dayfigure }}</span>
    </p>
    <p class="mt" v-if="listdata.title === '总销售额'">
      <span>日平均销售额:</span><span class="itm">{{ listdata.dayfigure }}</span>
    </p>
    <p class="mt" v-if="listdata.title === '支付笔数'">
      <span>转化率:</span><span class="itm">{{ listdata.dayfigure }}</span>
    </p>
    <p class="mt" v-if="listdata.title === '流失学员'">
      <span>流失最多科目:</span><span class="itm">{{ listdata.dayfigure }}</span>
    </p>
  </el-card>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    listdata: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.top-box {
  width: 100%;
  .fig {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  span {
    margin-right: 8px;
  }
.itm{
  font-weight: bold;
}
  .top {
    flex-direction: row;
    justify-content: space-between;
    p {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>