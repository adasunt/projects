import Mock from 'mockjs';
Mock.Random.extend({

    phone: function () {

        var phonePrefixs = ['132', '135', '189'] 
        return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) //Number()
    }
})
const menuList = [
    {
        name: "首页",
        icon: "el-icon-s-home",
        url: "/index",
    },
    {
        name: "个人中心",
        icon: "el-icon-user",
        url: "/my",

    },

    {
        name: "教师管理",
        icon: "el-icon-s-promotion",
        url: "/teacher",

    },
    {
        name: "招生管理",
        icon: "el-icon-menu",
        url: "/recruit",
        children: [
            {
                name: "意向学员",
                icon: "el-icon-notebook-2",
                url: "/recruit/all",
            },
        ]
    },
    {
        name: "学生管理",
        icon: "el-icon-s-order",
        url: "/student",
        children: [
            {
                name: "学生信息",
                icon: "el-icon-tickets",
                url: "/student/all",
            },

        ]
    },

    {
        name: "行政管理",
        icon: "el-icon-s-check",
        url: "/manager",
    },
    

]
//左侧菜单接口
Mock.mock('localhost:8080/menu', 'get', () => {
    return {
        code: 200,
        success: true,
        message: "成功",
        data: menuList
    }
});

//个人中心任务栏
Mock.mock('localhost:8080/task', 'post', () => {
    return {
        code: 200,
        success: true,
        message: "成功",
        data: [
            {
                "id": 0,
                "info": "去上海参加教育峰会。",
                "done": true
            },
            { "id": 1, "info": "阅读教材及相关教辅，与同组教师交流、研讨。", "done": false },
            {
                "id": 2,
                "info": "了解教师的思想状况，业务专长和教学水平。",
                "done": true
            },
            { "id": 3, "info": "提供必需的图书、资料及其他教育教学用品。", "done": false },
            { "id": 4, "info": "对教师在教育教学、科学研究中的创造性工作给以鼓励。", "done": false }
        ]
    }
});
//首页顶部
Mock.mock('localhost:8080/top', 'post', () => {
    return {
        code: 200,
        success: true,
        message: "成功",
        data: [
            {
                title: '总销售额',
                figures: '$1226,560',
                week: '3%',
                weekstatus: 0,
                day: '5%',
                daystatus: 1,
                dayfigure: '$122,556'

            },
            {
                title: '访问量',
                figures: '825',
                week: '3%',
                weekstatus: 0,
                day: '5%',
                daystatus: 1,
                dayfigure: '56'

            },
            {
                title: '支付笔数',
                figures: '337',
                week: '3%',
                weekstatus: 0,
                day: '5%',
                daystatus: 1,
                dayfigure: '5%'

            },
            {
                title: '流失学员',
                figures: '7',
                week: '3%',
                weekstatus: 0,
                day: '5%',
                daystatus: 1,
                dayfigure: '语文'

            }



        ]
    }
});
//图表接口
Mock.mock('localhost:8080/table', 'post', () => {
    return {
        code: 200,
        success: true,
        message: "成功",
        data: [
            {
                saledata: [250, 400, 800, 900, 1600, 200, 400, 800, 900, 1600, 800, 700],

                date: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
            }

        ]
    }
});
//登录接口
Mock.mock('localhost:8080/login', 'post', (req) => {
    const { password, username } = JSON.parse(req.body)
    if (username === 'user' && password === '1234') {
        return {
            code: 200,
            success: true,
            message: "登录成功",
            token: "3arc9h0vhcr0f8iprpnscmfo8s",
            nickname: "赵铁柱"
        }
    } else {
        return {
            code: 100,
            success: false,
            message: "账号或者密码有误",

        }
    }
})
//记录入职时间
Mock.mock('localhost:8080/in', 'post', () => {
    return {
        code: 200,
        success: true,
        message: "操作成功",
        time: "2020-07-01 00:00:00"
    }
})
//教师管理
Mock.mock('localhost:8080/all', 'get', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({

            "list|20-40": [{
                'account|100000-999999': 1,
                'id|+1': 1,
                'name': "@cname",
                'sex|1': ["男", "女"],
                'level|1': ["特级教师", "高级教师", "中级教师", "初级教师"],
                'date': Mock.Random.date(),
                'tel': '@phone',
                'aclass|1': ["英语", "物理", "计算机", "语文", "数学"],
                'grade|1': ["一年级", "二年级", "三年级", "四年级", "五年级"],
                'status|1': [1, 2],

            }],
            "total|1": [10, 20, 30, 40, 50]
        })
    }
})
//增加教师
Mock.mock('localhost:8080/addteacher', 'post', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: "操作成功!"
    }
})
//产品管理--全部产品   
Mock.mock('localhost:8080/productList', 'post', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            "list|8-20": [{
                'id|+1': 10000,
                'name': "@cname",
                'sex|1': ['男', '女'],
                'org|1': ["网站", "门店", "朋友介绍"],
                'tel': '@phone',
                'person|1': ["李隆基", "朴信惠", "胡祖明"],
                'status|1': [1, 2, 0],
                'date': Mock.Random.date()
            }],

        })
    }
})
//学生

Mock.mock('localhost:8080/studentList', 'post', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            "list|8-20": [{
                'id|+1': 10000,
                'name': "@cname",
                'sex|1': ['男', '女'],
                'tel': '@phone',
                'aclass|1': ["英语", "物理", "计算机", "语文", "数学"],
                'grade|1': ["一年级", "二年级", "三年级", "四年级", "五年级"],
                'person|1': ["李隆基", "朴信惠", "胡祖明"],
                'status|1': [1, 2, 0],
                'pic':'@image',
                'email':'@email',
                'region': '@region',
                'date': Mock.Random.date()
            }],

        })
    }
})