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
                {
                    path: '/home/index',
                    name: 'index',
                    component: resolve => require(['@/pages/index'], resolve),
                },
<<<<<<< HEAD
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
                
=======
                {
                    path: '/home/index2',
                    name: 'index',
                    component: resolve => require(['@/pages/indexSecondary'], resolve),
                },

>>>>>>> b2c02571e09df98f22dc6a02ce602ef5b6fdce9e

            ]
        },
        {   // 主页
            path: '/login',
            name: 'Login',
            component: resolve => require(['@/pages/Login'], resolve),

        },
    ]
})
