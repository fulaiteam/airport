
<template>
  <el-container>
	<div class="login">
		<div class="login-panel">
			<div class="logo">Web IM</div>
			<van-cell-group>
				<van-field v-model="username" equired placeholder="用户名"/>
				<van-field v-model="password"  v-on:keyup.13="toLogin" type="password" placeholder="密码" required/>
				<van-field v-model="nickname" placeholder="昵称" v-show="this.isRegister == true"/>
			</van-cell-group>
			<van-button type="default" @click="toRegister" v-if="this.isRegister == true">注册</van-button>
			<van-button type="default" @click="toLogin" v-else>登录</van-button>
		</div>
		<p class="tip" v-if="this.isRegister == true">
			已有账号?
			<span class="green" v-on:click="changeType">去登录</span>
		</p>
		<p class="tip" v-else>
			没有账号?
			<span class="green" v-on:click="changeType">注册</span>
		</p>
	</div>
  </el-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default{
	data(){
		return {
			username: "",
			password: "",
			nickname: ""
		};
	},
	mounted: function(){
		const path = this.isRegister ? "/register" : "/login";
    
		if(path !== location.pathname){
			this.$router.push(path);
		}
	},
	components: {},
	computed: {
		isRegister(){
			return this.$store.state.login.isRegister;
		},
	},
	methods: {
		...mapActions(["onLogin", "setRegisterFlag", "onRegister"]),
		toLogin(){
			this.onLogin({
				username: this.username.toLowerCase(),
				password: this.password
			});
		},
		toRegister(){
			this.onRegister({
				username: this.username.toLowerCase(),
				password: this.password,
				nickname: this.nickname.toLowerCase(),
			});
		},
		changeType(){
			this.setRegisterFlag(!this.isRegister);
		}
	}
};
</script>





<style scoped>
.login {
  position: absolute;
  top: calc(-10%);
  left: 50%;
  margin: -144px 0 0 -177.5px;
}
.login .login-panel {
  width: 355px;
  height: auto;
  border: 0.5px solid #adb9c1;
  background-color: #fff;
  padding: 40px;
  border-radius: 2px;
  box-sizing: border-box;
}
.login .login-panel .logo {
  text-align: center;
  cursor: pointer;
  margin-bottom: 30px;
  vertical-align: text-bottom;
  font-size: 16px;
  display: inline-block;
  font-weight: bold;
  font-size: 18px;
  line-height: 1;
}
.login .login-panel .van-field__control {
  padding: 13px 20px;
  font-size: 14px;
  line-height: 1;
  height: auto;
  margin-bottom: 24px;
  width: 274px;
}
.login .login-panel .van-button--default {
  width: 100%;
  height: auto;
  padding: 13px;
  line-height: 1;
  color: #fff;
  background-color: #00ba6e;
  border-color: #00ba6e;
  font-size: 14px;
  border-radius: 2px;
}
.login .tip {
  color: #cccccc;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
}
.login .tip .green {
  color: #00ba6e;
  margin-left: 5px;
  cursor: pointer;
}
</style>
