<template>
    <div class='content' >
        <div class="tab">
            <div class="content_center">

            </div>
        </div>
        <div class="intrduce">
            <div class="introduce_wrap">
                <div class="intruduce_con">
                    <div class="subtitle" v-for="(item,index) in congressList" :key='index'>
                        <img class="icon" :src="item.icon" alt="">
                        <div class="title">{{ item.title }}</div>
                    </div>
                    <img src="../../assets/images/congressTopics/intruline.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
               congressList:[
                    {   
                        icon:require("../../assets/images/congressTopics/icon1.png"),
                        title:'大会介绍',
                        type:0
                    },
                    {   
                        icon:require("../../assets/images/congressTopics/icon2.png"),
                        title:'主题大会',
                        type:1
                    },
                    {   
                        icon:require("../../assets/images/congressTopics/icon3.png"),
                        title:'主旨发言',
                        type:2
                    },

               ]
            }
        },
        methods:{
            
        }
    }
</script>

<style scoped>
/* tab开始 */
.tab{
    padding: 0;
    margin: 0;
    width: 100%;
    background:#333333;
    display: flex;
    justify-content: center;
}
.tab .content_center{
    width: 1200px;
    height: 500px;
    background:url('../../assets/images/congressTopics/tab.png')  no-repeat center;
}
/* tab结束 */
/* 大会介绍开始 */
.intrduce{
    width: 100%;
    font-family: SourceHanSansCN-Medium;
    display: flex;
    justify-content: center;
    color: #535353;
    font-size: 18px;
}
.intrduce .intruduce_con{
    width: 1095px;
    margin: 0 52.5px;
}
.intrduce .intruduce_con .subtitle{
    background:salmon;
    display: flex;
    justify-content: flex-start;
    margin-top: 71px;
    height: 56px;
    line-height: 56px;
    color: #333333;
    font-size: 30px;
}
.intrduce .intruduce_con .subtitle .icon{
    width: 31px;
    height: 31px;
    margin: 11px 14px;
}
/* 大会介绍结束 */
</style>