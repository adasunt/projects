
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/index',
    component: () => import( '../views/Layout.vue'),
    children:[
      {
        path:'/index',
        name:'Index',
        component: () => import( '../views/index/Index.vue'),
      },
 
      {
        path:'/my',
        name:'My',
        meta:{bread:['个人中心']},
        component: () => import( '../views/my/My.vue'),
      },
      {
        path:'teacher',
        name:'Teacher',
        meta:{bread:['教师管理']},
        component: () => import( '../views/teacher/Teacher.vue'),
      },
      {
        path:'recruit/all',
        name:'Recruit_all',
        meta:{bread:['招生管理','意向学员'],keepAlive:true},
        component: () => import( '../views/recruit/All.vue'),
      },
      {
        path:'recruit/detail',
        name:'Recruit_detail',
        component: () => import( '../views/recruit/Detail.vue'),
      },
      {
        path:'student/all',
        name:'Student_all',
        meta:{bread:['学生管理','所有学生']},
        component: () => import( '../views/student/All.vue'),
      },
      {
        path:'manager',
        name:'Manager',
        meta:{bread:['行政管理']},
        component: () => import( '../views/manager/Manager.vue'),
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  }
]
const router = new VueRouter({
  routes
})
export default router
