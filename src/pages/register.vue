<template>
    <div class="content">
        <div class="tab">
            <div class="content_center">

            </div>
        </div>
        <div class="login_wrap">
            <div class="login" @keyup.enter="hjSubmite('user')">
                <div class="login_center">注册</div>
                <el-form
                    class="login_box"
                    ref="user"
                    :model="user"
                    :rules="rules2">
                    <div class="role">观众</div>
                    <div class="message">
                        <div class="mes_box">
                            <el-form-item class="mes_li" label="单  位" prop="danwei">
                                <input type="text" placeholder="" class="mes_text" v-model="user.danwei">
                            </el-form-item>
                            <el-form-item class="mes_li" label="姓  名" prop="name">
                                <input type="text" placeholder="" class="mes_text" v-model="user.name">
                            </el-form-item>
                            <el-form-item class="mes_li" label="邮  箱" prop="email">
                                <input type="text" placeholder="" class="mes_text" v-model="user.email">
                            </el-form-item>
                            <el-form-item class="mes_li" label="手机号" prop="phone">
                                <input type="text" placeholder="" class="mes_text" v-model="user.phone">
                            </el-form-item>
                            <el-form-item class="mes_li" label="验证码" prop="pas">
                                <input type="password" placeholder="" class="mes_text mes_text_short" v-model="user.pas">
                                <img class="checked" v-if="codeShow" @click="validateBtn()" src="../assets/images/login/sendmes.png" alt="">
                                <div class="checked checkTime" v-if="!codeShow">{{ btnTitle }}</div>
                            </el-form-item>
                            <div class="mes_but">
                                <div class="but">
                                    <img @click="hjSubmite('user')" src="../assets/images/login/register.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        validateNull, 
        validateLength, 
        validateSpace, 
        validateSpecial,
        validateMobile,
        validateEmail,
        validateNumber
    } from '../assets/javascript/validate.js';
    export default {
        name: "login",
        data() {
            return {
                codeShow:true,
                btnTitle:'',
                user: {
                    danwei:'',
                    name:'',
                    email:'',
                    phone: '',
                    pas: ''
                },
                rules2: {   // 表单验条件
                    danwei:[
                        {validator: validateNull, trigger: 'blur'},//表单验证填写（必填项不能为空）
                        {validator: validateLength, trigger: 'blur'},//表单验证填写（长度验证）
                    ],
                    name:[
                        {validator: validateNull, trigger: 'blur'},//表单验证填写（必填项不能为空）
                        {validator: validateLength, trigger: 'blur'},//表单验证填写（长度验证）
                    ],
                    email:[
                        {validator: validateNull, trigger: 'blur'},//表单验证填写（必填项不能为空）
                        {validator: validateEmail, trigger: 'blur'},//表单中输入邮箱验证
                    ],
                    phone: [
                        {validator: validateNull, trigger: 'blur'},//表单验证填写（必填项不能为空）
                        {validator: validateLength, trigger: 'blur'},//表单验证填写（长度验证）
                        {validator: validateSpace, trigger: 'blur'},//表单中出现空格验证
                        {validator: validateSpecial, trigger: 'blur'},  //表单中输入中出现特殊字符
                        {validator: validateMobile, trigger: 'blur'}   //手机号验证
                        
                    ],
                    pas: [
                        {validator: validateNull, trigger: 'blur'},//表单验证填写（必填项不能为空）
                        {validator: validateLength, trigger: 'blur'},//表单验证填写（长度验证）
                        {validator: validateSpace, trigger: 'blur'},//表单中出现空格验证
                        {validator: validateNumber, trigger: 'blur'}//表单验证填写 (必须为数字)
                    ]
                }
            }
        },
        methods: {
            hjSubmite(formName) {
                // 管理登陆方法.
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this._ajax('admin/adminLogin', {
                            account: this.user.name,
                            password: this.user.pas
                        }, data => {
                            console.log(data);
                            window.sessionStorage.setItem('bear', JSON.stringify(data));
                            this.$router.push({name: 'Home'});
                        })
                        // this.$router.push({name: 'Home'});
                    } else {
                        return false;
                    }
                });
            },
            validateBtn(){
                //倒计时
                let time = 60;
                let timer = setInterval(() => {
                    if(time == 0) {
                        clearInterval(timer);
                        this.codeShow = true;
                    } else {
                            this.codeShow = false;
                            this.btnTitle = time + '秒后重试';
                            time--
                    }
                },1000)
            },
        }
    }
</script>

<style scoped>
/* tab开始 */
.tab{
    width: 100%;
    background:#333333;
    display: flex;
    justify-content: center;
}
.tab .content_center{
    width: 1200px;
    height: 500px;
    background:url('../assets/images/congressTopics/tab.png')  no-repeat center;
}
/* tab结束*/
.login_wrap{
    width: 100%;
    display: flex;
    justify-content: center;
}
.login{
    width: 841px;
    height: 958px;
}
.login .login_center{
    text-align: center;
    margin-top: 24px;
    font-size:30px;
    height: 163px;
    line-height: 163px;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(21,119,201,1);
}
.login_box{
    height: 567px;
    width: 841px;
    background:url('../assets/images/login/reggisterback.png')  no-repeat center;
}
.login .login_box .role{
    font-size: 20px;
    text-align: center;
    color: #535353;
    height: 80px;
    line-height: 80px;
}
.login .login_box .message{
    display: flex;
    justify-content: center;
}
.mes_box{
    margin-top: 30px;
}
.login .login_box .message .mes_li{
    width: 440px;
    height: 50px;
    line-height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items:flex-end;
    position: relative;
}
.login .login_box .message .mes_li .mes_text{
    width: 367px;
    height: 30px;
    border-width: 0;
    border-bottom-width: 1px;
    border-bottom-color: #999;
    outline:none;

}
.login .login_box .message .mes_li .mes_text_short{
    width: 242px;
}
.checked{
    margin-top: 25px;
    height: 25px;
    width: 125px;
    position: absolute;
    top: -17px;
    right: -133px;
}
.login .login_box .message .mes_but{
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
}
.login .login_box .message .mes_li .but{
    height: 25px;
    width: 125px;
    border-radius: 12px;
}
.checkTime{
    height: 23px;
    width: 123px;
    border-radius: 12px;
    border: 1px solid #999;
    line-height: 25px;
    color: #999;
    text-align: center;
}
</style>
