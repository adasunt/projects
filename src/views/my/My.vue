<template>
  <div>
    <bread-crumb></bread-crumb>
    <el-row type="flex" :gutter="24" class="mt">
      <el-col :span="14">
        <div class="base">
          <div class="left">
            <div class="top">
              <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
              <div class="ft" >你好！{{name}}</div>
            </div>
            <div class="middle mt">
              <span>资料完整度:</span>
              <el-progress :percentage="50" style="width: 150px"></el-progress>
            </div>

            <el-link type="primary" class="mt">立即完善</el-link>
          </div>
          <div class="right">
            <div class="ft" >可用积分</div>
            <p class="mt">2168888</p>
            <el-link type="primary" class="mt">兑换奖品</el-link>
          </div>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="tags">
          <div class="tag" style="paddinf: 0; border: 0">
            <span>拥有学员数</span>
            <span class="bigmt">56</span>
          </div>
          <div class="tag">
            <span>个人排名</span>
            <span class="bigmt">6/24</span>
          </div>
          <div class="tag">
            <span>本月目标</span>
            <span class="bigmt">2364</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" :gutter="24" class="mt">
      <el-col :span="14">
        <el-card>
          <task></task>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card class="timeline">
          <el-timeline  class="cat">
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :icon="activity.icon"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size"
              :timestamp="activity.timestamp"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BreadCrumb from '../../components/BreadCrumb.vue';
import Task from './Task.vue';
import {getSession} from '/utils/session.js'
export default {
  components: { Task, BreadCrumb },
  data() {
    return {
     
      //时间线
      activities: [
        {
          content: "上次登录",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more",
        },
        {
          content: "上次登录",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87",
        },
        {
          content: "上次登录",
          timestamp: "2018-04-03 20:46",
          size: "large",
        },
        {
          content: "上次登录",
          timestamp: "2018-04-03 20:46",
        },
      ],
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    };
  },
  computed:{
    name(){
      return getSession('name')
    }
  }
};
</script>

<style lang="less" scoped>
.base {
  display: flex;
  flex-wrap: nowrap;
  background: white;
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  .ft{
    font-weight: bold;
    font-size: 16px;
  }
}
.left {
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: flex-start;
  
}
.right {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: #409eff;
    font-size: 16px;
  }
}
.top {
  display: flex;
  justify-items: center;
  align-items: center;
}
.top .ft {
  margin-top: 5px;
  margin-left: 60px;
}

.middle {
  display: flex;
  justify-items: center;
}
.tags {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  font-size: 16px;
  font-weight: bold;
  height: 100%;
  background: white;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;

  .tag {
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #dcdfe6;
  }
}
.timeline{
  height:378px;display: flex;

  align-items: center;
  .cat{
 font-size: 16px;
 text-align: center;
 margin-left: 40px;
  }
}
</style>