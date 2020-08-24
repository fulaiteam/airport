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
                {
                    path: '/home/index2',
                    name: 'index',
                    component: resolve => require(['@/pages/indexSecondary'], resolve),
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
