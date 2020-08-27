<template>
    <div class='content' >
        <div class="tab">
            <div class="content_center">

            </div>
        </div>
        <div class="intrduce">
            <div class="introduce_wrap">
                <div class="talk_title">云会谈</div>
                <div class="talk_con">
                    <div class="talk_conli" v-for="(item,index) in companyList" :key="index">
                        <img :src="item.img" alt="">
                        <div class="talk_text">
                            <div class="text">{{ item.name }}</div>
                            <div class="text">{{ item.theme }}</div>
                            <div class="text">{{ item.num }}</div>
                            <div class="text">&lt; 进入 &gt;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                companyList:[
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                    {    
                       img:require("../../assets/images/cloudTalk/talk.png"),
                       name:'企业名称',
                       theme:'主题',
                       num:'编号'
                    },
                ]
            }
        },
        methods:{
          
        }
    }
</script>

<style scoped>
.content{
    width: 100%;
}
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
.intrduce{
    width: 100%;
    font-family: SourceHanSansCN-Medium;
    display: flex;
    justify-content: center;
    color: #535353;
    font-size: 18px;
}
.intrduce .introduce_wrap{
    width: 1045px;
}
.intrduce .introduce_wrap .talk_title{
    color:#1577C9;
    height: 190px;
    line-height: 190px;
    line-height: 190px;
    font-weight: bold;
    text-align: center;
    font-size: 30px;
}
.intrduce .introduce_wrap .talk_con{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.intrduce .introduce_wrap .talk_con .talk_conli{
    width:433px;
    height:158px;
    border:1px solid rgba(153,153,153,1);
    border-radius:10px;
    margin-right:53px;
    display: flex;
    justify-content: flex-start;
    padding: 30px;
    margin-bottom: 26px;
}
.intrduce .introduce_wrap .talk_con .talk_conli:nth-child(2n+0){
    margin-right:0
}
.intrduce .introduce_wrap .talk_con .talk_conli img{
    width:168px;
    height:170px;
    border-radius:10px;
}
.intrduce .introduce_wrap .talk_con .talk_conli .talk_text{
    width: 219px;
    margin-left: 35px;
}
.intrduce .introduce_wrap .talk_con .talk_conli .talk_text .text{
    border-bottom:1px solid #999;
    height: 41px;
    line-height: 54px;
    text-align: center;
    font-size: 18px;
    color: #333;
}
</style>