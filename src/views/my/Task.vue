<template>
    <div>
         <div class="train_box">
      <div class="tops">
        <a-input
          placeholder="请输入任务"
          @change="handleInputvalue"
          :value="inputData"
          size="large"
        />
        <a-button type="primary" size="large" @click="addList">
          添加事项
        </a-button>
      </div>

      <a-list bordered :dataSource="infolist">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-checkbox
            :checked="item.done"
            @click="itemChecked({ don: item.done, id: item.id })"
          >
            {{ item.info }}
          </a-checkbox>
          <a @click="itemDel(item.id)">删除</a>
        </a-list-item>
        <div slot="footer" class="footer">
          <!-- 未完成的任务个数 -->
          <span>{{ unDoneLength }}条剩余</span>
          <!-- 操作按钮 -->
          <a-button-group>
      
            <a-button
              :type="viewkey === 'all' ? 'primary' : 'default'"
              @click="changeViewKey('all')"
              >全部</a-button
            >
            <a-button
              :type="viewkey === 'undone' ? 'primary' : 'default'"
              @click="changeViewKey('undone')"
              >未完成</a-button
            >
            <a-button
              :type="viewkey === 'done' ? 'primary' : 'default'"
              @click="changeViewKey('done')"
              >已完成</a-button
            >
          </a-button-group>
          <!-- 把已经完成的任务清空 -->
          <a @click="cleanDone">清除已完成</a>
        </div>
      </a-list>
    </div>
    </div>
</template>

<script>
 import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    //设置input值
    ...mapState(['inputData','viewkey']),
    ...mapGetters(['unDoneLength', 'infolist']),
  },
  methods: {
    //发送ajax请求，设置list值
    ...mapActions(['getList']),
    //同步input值
    handleInputvalue(e) {
      this.$store.commit('inputData', e.target.value)
    },
    //添加条目
    addList() {
      if (this.inputData.trim().length <= 0) {
        return this.$message.warning('不能为空！')
      }
      this.$store.commit('addList')
    },
  
    //删除
    ...mapMutations(['itemDel','itemChecked','changeViewKey','cleanDone']),
  
  },
  //获取数据
  created() {
    this.getList()
  },
}
</script>

<style lang="less" scoped>

.tops {
  display: flex;
  margin-bottom: 8px;

}
.footer{
    display: flex;
    justify-content: space-between;
}

</style>