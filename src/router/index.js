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
                {   // 大会专题  congressDes
                    path: '/home/congressTopics',
                    name: 'congressTopics',
                    component: resolve => require(['@/pages/congressTopics/congressTopics'], resolve),
                },
                {   //大会专题-- 大会介绍  congressTopics
                    path: '/home/congressDes',
                    name: 'congressDes',
                    component: resolve => require(['@/pages/congressTopics/congressDes'], resolve),
                },
                 {   //大会专题-- 大会视频  congressVideo
                    path: '/home/congressVideo',
                    name: 'congressVideo',
                    component: resolve => require(['@/pages/congressTopics/congressVideo'], resolve),
                },
                {   //大会专题--  主旨发言  CongressKeynotespeech
                    path: '/home/CongressKeynotespeech',
                    name: 'CongressKeynotespeech',
                    component: resolve => require(['@/pages/congressTopics/CongressKeynotespeech'], resolve),
                },
                {   //云展馆  yunExhibitionhall
                    path: '/home/yunExhibitionhall/yunExhibitionhall',
                    name: 'yunExhibitionhall',
                    component: resolve => require(['@/pages/yunExhibitionhall/yunExhibitionhall'], resolve),
                },
                {   //云展馆 ---企业名称  companyName
                    path: '/home/yunExhibitionhall/companyName',
                    name: 'companyName',
                    component: resolve => require(['@/pages/yunExhibitionhall/companyName'], resolve),
                },
                {   //云展馆 ---云展馆企业名称  exhibitionConpanyname
                    path: '/home/yunExhibitionhall/exhibitionConpanyname',
                    name: 'exhibitionConpanyname',
                    component: resolve => require(['@/pages/yunExhibitionhall/exhibitionConpanyname'], resolve),
                },
                
                {   //云展馆 ---场景演示  sceneDemonstration
                    path: '/home/yunExhibitionhall/sceneDemonstration',
                    name: 'sceneDemonstration',
                    component: resolve => require(['@/pages/yunExhibitionhall/sceneDemonstration'], resolve),
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
