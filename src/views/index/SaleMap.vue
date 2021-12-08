<template>
  <div>

        <div ref="map" style="height: 390px"></div>
  

  </div>
</template>

<script>
export default {
data() {
  return {
    sdata:[
        { value: 1048, name: '英语' },
        { value: 735, name: '数学' },
        { value: 580, name: '计算机' },
        { value: 484, name: '物理' },
        { value: 300, name: '语文' }
      ]
  }
},
  mounted() {
    this.setMap('map');
  },
  methods: {
    setMap(ref) {
         this.$echarts.init(this.$refs[ref]).setOption({
  title: {
    text: '课程销售统计图',
    subtext: '2021年份',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },

  series: [
    {
      name: '科目名称',
      type: 'pie',
      radius: '50%',
      data:this. sdata ,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
});
    }
  },
};
</script>

<style lang="less" scoped>
</style>