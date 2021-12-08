import Vue from 'vue'
import Vuex from 'vuex'
import { post } from "../../utils/http.js";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false,
    listRow:[],
     // 所有的任务列表
     list: [],
     inputData:"",
     nextId:5,
     viewkey:'all'
  },
  mutations: {
    menushow(state){
      state.isCollapse=!state.isCollapse
      
    },
    setlistRow(state,payload){
      state.listRow=payload

    },
     //获取并设置list值
     setList(state,data){
      state.list=data

    },
    //修改按钮状态
    changeViewKey(state, key) {
      state.viewkey = key
 
    },
    //同步input值
    inputData(state,payload){
      state.inputData=payload

    },
    //增加list条目
    addList(state){
      const obj={
        id:state.nextId,
        info:state.inputData,
        done:false
      }
      state.list.push(obj)
      state.nextId++
      state.inputData=""
    },
    //删除
    itemDel(state,payload){
      const item=state.list.findIndex((a)=>{return a.id===payload})
     if(item!==-1){
       state.list.splice(item,1)
     }

    

    },
    //清除已完成
    cleanDone(state) {
      state.list = state.list.filter(x => x.done === false)
    },
    //选中状态
    itemChecked(state,payload){
 
   
    state.list[payload.id].done=!payload.don

    }
  },
  actions: {
        //发送ajax请求获取list的数据
        getList(store){
         post('/task').then(
           ({data})=>{
             store.commit('setList',data)
           }
         );
   
   
       } 
  },
  getters:{
    unDoneLength(state) {
      return state.list.filter(x => x.done === false).length
    },
    //已完成和未完成
    infolist(state) {
      if (state.viewkey === 'all') {
        return state.list
      }
      if (state.viewkey === 'undone') {
        return state.list.filter(x => !x.done)
      }
      if (state.viewkey === 'done') {
        return state.list.filter(x => x.done)
      }
      return state.list
    }
  },
  modules: {
  }
})
