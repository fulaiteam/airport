<template>
    <div>
        <div   class='top_carousel_area' >
            <img src="../../assets/images/newsInfo/banner_1.png"   class='banner_bg' >
            <!-- 版心区域开始 -->
            <div  class='middle_area1100' >
                <div  class='middle_area_content'  >
                   <div  class='btn_top_area' >
                       <img src="../../assets/images/newsInfo/btn_left.png"    class='carousel_btn' >
                        <div class='specify_news' >专题报道</div>
                        <img src="../../assets/images/newsInfo/btn_right.png"    class='carousel_btn' >
                   </div>
                   <div  class='btn_bottom_area' >
                       <ul  class='btn_bottom_area_ul'  >
                           <li  class='btn_bottom_area_li' v-for='(item,index)  in  carouselarr'  :key='index'   >

                           </li>
                       </ul>
                   </div>
                </div>
            </div>
            <!-- 版心区域结束 -->
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                carouselarr:[
                    {
                        img:require("@/assets/images/newsInfo/banner_1.png"),
                    },
                    {
                        img:require("@/assets/images/hj-login.jpg"),
                    },
                    {
                        img:require("@/assets/images/congressTopics/table.png"),
                    },
                ]
            }
        },
        methods:{

        }
    }
</script>

<style  scoped>
.top_carousel_area{
    width:100%;
    height:500px;
    position: relative;
    background:pink;
    z-index: 1;
}
.banner_bg{
    width:100%;
    position: absolute;
    left: 0;
    top:0;
    height:500px;
    z-index: 2;
}
.middle_area1100{
    width:100%;
    position: absolute;
    left: 0;
    top:0;
    height:500px;
    z-index: 3;
}
.middle_area_content{
    width:1100px;
    height:263px;
    margin-left:auto;
    margin-right: auto;
    margin-top:210px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.btn_top_area{
    width:100%;
    height:66px;
    display: flex;
    justify-content: space-between;
}
.btn_bottom_area{
    width:100%;
    height:13px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.carousel_btn{
    width:66px;
    height:66px;
}
.specify_news{
    font-size:40px;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.btn_bottom_area_ul{
    
}
.btn_bottom_area_li{
    float:left;
    margin-right:21px;
    width:13px;
    height:13px;
    background:url('../../assets/images/newsInfo/circle.png');
}
.btn_bottom_area_li:nth-last-child(1){
    margin-right:0;
}
</style>