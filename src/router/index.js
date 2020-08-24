import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {   // 主页
            path: '/',
            name: 'Home',
            component: resolve => require(['@/pages/Home'], resolve),
            //项目已通过审核列表
            redirect: {name: 'index'},
            children: [
                {   // 欢迎页面
                    path: '/home/index',
                    name: 'index',
                    component: resolve => require(['@/pages/index'], resolve),
                },
                {   // 大会专题  congressDes
                    path: '/home/congressTopics',
                    name: 'congressTopics',
                    component: resolve => require(['@/pages/congressTopics/congressTopics'], resolve),
                },
                {   // 大会介绍  congressTopics
                    path: '/home/congressDes',
                    name: 'congressDes',
                    component: resolve => require(['@/pages/congressTopics/congressDes'], resolve),
                },
                

            ]
        },
        {   // 主页
            path: '/login',
            name: 'Login',
            component: resolve => require(['@/pages/Login'], resolve),

        },
    ]
})
