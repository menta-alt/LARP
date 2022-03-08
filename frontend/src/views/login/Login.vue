<template>
  <div id="login">
    <div class="video_player">
      <!-- 背景视频 -->
      <video :style="fixStyle" id="background_video" autoplay loop muted>
        <source src="@/assets/starbroken.mp4" type="video/mp4" />
      </video>
      <!-- 蒙版 -->
      <div class="video_mask">
        <div class="login_interface">
          <!-- 登录表单 -->
          <h2>LARP-Login</h2>
          <div class="form_content">
            <div class="inputBox">
                <div class="check"><p>教练员</p><input type="checkbox" id="coach" /></div>
                <div class="check"><p>运动员</p><input type="checkbox" id="athlete" /></div>
            </div>
            <div class="inputBox"><input type="text" placeholder="用户名/手机号码" id="username" v-model="username"/></div>
            <div class="inputBox"><input type="password" placeholder="密码" id="password" v-model="password"/></div>
            <div class="forget_pwd"><a href="#">忘记密码</a></div>
            <button class="click_login"  @click="login">登录</button>
            <div class="unregistered"><a href="#">未注册，先去注册</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
import "@/style/base.css";
export default {
  name: "Login",
  data() {
    return {
      password:"",
      username:"",
      fixStyle:""
    };
  },
  methods: {
    login(){
      var data = {
        username:this.username,
        password:this.password,
      }
      axios
        .post()
        .then(res=>{       //申请成功
          console.log(res);
          if(res.data.code=='....'){   
            this.$router.push('')
            //路由跳转到主页
          }
          else{
            alert('用户名或密码错误')
          }
        })
        .catch(err=>console.log(err))
    },
    getCode(){
       axios
         .get()
         .then()
         .catch(res=>console.log(error))
    }    
  },
  mounted: function() {
    window.onresize = () => {
      const windowWidth = document.body.clientWidth
      const windowHeight = document.body.clientHeight
      const windowAspectRatio = windowHeight / windowWidth
      let videoWidth
      let videoHeight
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth
        videoHeight = videoWidth * 0.5625
        this.fixStyle = {
          height: windowWidth * 0.5625 + 'px',
          width: windowWidth + 'px',
          'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
          'margin-left': 'initial'
        }
      } else {
        videoHeight = windowHeight
        videoWidth = videoHeight / 0.5625
        this.fixStyle = {
          height: windowHeight + 'px',
          width: windowHeight / 0.5625 + 'px',
          'margin-left': (windowWidth - videoWidth) / 2 + 'px',
          'margin-bottom': 'initial'
        }
      }
    }
    window.onresize()
  }
};
</script>

<style scoped>
@import "../../style/base.css";
#login {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

#background_video {
  position: absolute;
  width: 100%;
}

.video_mask {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #0019212c;
}

.login_interface {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 400px;
  background-color: #001921af;
  border-radius: 15px;
}

.login_interface h2 {
  margin-top: 28px;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 25px;
}

.login_interface .form_content {
  padding: 20px 50px 0 50px;
}

.inputBox input {
  width: 100%;
  padding: 8px 0;
  font-size: 16px;
  color: #fff;
  letter-spacing: 2px; /* 字与字间的间距*/
  margin-bottom: 20px; /*输入框设置*/
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.inputBox input:hover{
  border-bottom: 1px solid #057db4e5;
  background: #00192169;
}
.inputBox .check{
  display: inline-block;
  width: 110px;
}
.inputBox .check p{
  display: inline-block;
  font-size: 17px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.42);
  letter-spacing: 2px;
}
.inputBox .check input{
  width: 25%;
  cursor: pointer;
}

.forget_pwd{
  padding-left: 180px;
}
.forget_pwd a:link{
  color:#bdbdbd;
  font-size: 15px;
}
.forget_pwd a:hover{
  color:#fff;
  font-size: 15px;
}
.forget_pwd a:visited{
  color:#057db4e5;
  font-size: 15px;
}

.unregistered {
  margin-top: 15px;
  text-align: center;
}
.unregistered a:link{
  color:#bdbdbd;
  font-size: 15px;
}
.unregistered a:hover{
  color:#fff;
  font-size: 15px;
}
.unregistered a:visited{
  color:#057db4e5;
  font-size: 15px;
}

.login_interface button {
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  background: #03a9f4;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  font-size: 17px;
  margin-top: 20px;
}
</style>
