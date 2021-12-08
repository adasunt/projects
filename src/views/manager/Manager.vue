<template>
  <div>
    <bread-crumb></bread-crumb>
    
    <el-row :gutter="24" class="mt">
      <el-col :span="12">
        <el-card>
          <div slot="header">员工信息</div>
          <div>
            <el-table
              :data="
                tableData.filter(
                  (data) =>
                    !search ||
                    data.char.toLowerCase().includes(search.toLowerCase())
                )
              "
              style="width: 100%"
            >
              <el-table-column type="index" label="序号" align="center">
              </el-table-column>
              <el-table-column label="手机号" prop="tel"> </el-table-column>
              <el-table-column label="姓名" prop="name"> </el-table-column>
              <el-table-column
                label="角色"
                prop="char"
                width="80px"
                align="center"
              >
              </el-table-column>
              <el-table-column align="right">
                <template slot="header" slot-scope="{}">
                  <el-input
                    v-model="search"
                    size="mini"
                    placeholder="输入关键字搜索"
                  />
                </template>
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="hanEdit(scope.$index, scope.row)"
                    >设置权限</el-button
                  >
                 
                </template>
              </el-table-column>
            </el-table>
          </div>
           <edit-char :visible="visible" :msgs="fatherMsg" @aclose=" closed" @change="change"></edit-char>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <el-carousel trigger="click" height="350px">
            <el-carousel-item v-for="(item, index) in items" :key="index">
        <el-image
          style="width: 100%; height: 100%"
          :src="getImg(item)"
          fit="fit"></el-image>
            </el-carousel-item>
          </el-carousel>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BreadCrumb from "../../components/BreadCrumb.vue";
import EditChar from './EditChar.vue';

export default {
  components: { BreadCrumb, EditChar },

  data() {
    return {
        fatherMsg:{},
        visible:false,
      items: ['img1','img2','img4'],
      tableData: [
        {
          tel: "1588977454",
          name: "王小虎",
          char: "admin",
        },
        {
          tel: "1288977454",
          name: "曲萌萌",
          char: "manager",
        },
        {
          tel: "1452977454",
          name: "蠡湖先",
          char: "teacher",
        },
        {
          tel: "1388977454",
          name: "高玉明",
          char: "teacher",
        },
      ],
      search: "",
    };
  },
  methods: {
      getImg(url){
      return require("/src/assets/img/"+url+".jpg")
      },
      closed(){this.visible=false
    
      },
      change(msg){
            this.$message.success(msg)
      },
    hanEdit(a,b) {
  
      this.visible=!this.visible
    this.fatherMsg=b
    },

  },
};
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;

  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>