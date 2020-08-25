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
                {   //首页
                    path: '/home/index',
                    name: 'index',
                    component: resolve => require(['@/pages/indexPage/index'], resolve),
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
                {   //首页二级页面
                    path: '/home/index2',
                    name: 'index2',
                    component: resolve => require(['@/pages/indexPage/indexSecondary'], resolve),
                },
                {   //大会嘉宾
                    path: '/home/conference',
                    name: 'conferenceGuests',
                    component: resolve => require(['@/pages/conferenceGuests/conferenceGuests'], resolve),
                },
                {   //嘉宾介绍
                    path: '/home/guestIntro',
                    name: 'guestIntro',
                    component: resolve => require(['@/pages/conferenceGuests/guestIntro'], resolve),
                },
                {   //嘉宾致辞
                    path: '/home/guestSpeak',
                    name: 'guestSpeak',
                    component: resolve => require(['@/pages/conferenceGuests/guestSpeak'], resolve),
                },
                {   //云体验
                    path: '/home/cloudExperience',
                    name: 'cloudExperience',
                    component: resolve => require(['@/pages/cloudExperience/cloudExperience'], resolve),
                },
                {   //云发布
                    path: '/home/cloudRelease',
                    name: 'cloudRelease',
                    component: resolve => require(['@/pages/cloudExperience/cloudRelease'], resolve),
                },
                {   //新闻资讯
                    path: '/home/newsInfo',
                    name: 'newsInfo',
                    component: resolve => require(['@/pages/newsInfo/newsInfo'], resolve),
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
