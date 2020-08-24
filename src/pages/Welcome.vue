<template>
    <div class="no-msg top">
        <div>
            <div class="topb w10 flex-center">
                <span class="topl"  @click='ceshi' >你好!</span>
            </div>
            <div class="topb w10 flex-center">
                欢迎来到团购-管理系统V1.0
            </div>
            <div class="beian">
                <a href="http://www.beian.miit.gov.cn" target="_blank">
                    津ICP备19005240号-2
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "welcome",
        data(){
            return{
                // adminName:'',
            }
        },
        created(){
            // this.adminName = sessionStorage.getItem('admin_name')
        },
        methods: {
            ceshi(){
                this._ajax('/share/getShareData', {

                    url: 'http://www.123.com'
                }, data => {
                    console.log(data);
                   
                })
            }
        },
    }
</script>

<style scoped>
    .no-msg{
        padding-top: 220px;
        font-size: 20px;
        font-weight: bold;
        width:100%;
        height: 100%;
    }
    .top{
        /*color: #f57866;*/
        color: #409EFF;
    }
    .topb{
        margin-top: 20px;
    }
    .topl{
        margin-right: 10px;
    }
    .beian{
        text-align: center;
        margin: 20px 0;
        color: #999;
        font-size: 13px;
    }
</style>
