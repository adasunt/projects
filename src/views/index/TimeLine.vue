<template>
<el-card :body-style="{ padding: '20px' }">
   
    <el-timeline>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <el-card>
       
        <p>曲丽丽是本月销售冠军</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/3" placement="top">
      <el-card>
  
        <p>朱半斤是本月优秀学员</p>
      </el-card>
    </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
      <el-card>

        <p>徐超是团队颜值担当</p>
      </el-card>
    </el-timeline-item>
  
  </el-timeline>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
             activities: [{
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46'
        }]
    };
  },
};
</script>

<style lang="less" scoped>


.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>