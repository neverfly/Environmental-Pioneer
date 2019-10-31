<template>
    <div class="bgColor">
      <!-- 注册 -->
      <div class="content hidden-md-and-down">
        <img :src="logo" alt="" class="logo"/>
        <el-form :model="zhuForm" status-icon :rules="rules" ref="zhuForm" label-width="70px" class="demo-ruleForm center" v-show="!showss" style="max-Width:400px;min-Width:10%;marginTop:0 auto">
              <el-form-item label="用户名:" prop="name">
                  <el-input v-model="zhuForm.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码:" prop="pass2">
                  <el-input type="password" v-model="zhuForm.pass2" style="maxWidth:100%" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码:" prop="checkPass">
                  <el-input type="password" style="maxWidth:100%" v-model="zhuForm.checkPass"></el-input>
              </el-form-item>
              <el-form-item label="邮箱:" prop="email">
                  <el-input v-model="zhuForm.email" style="maxWidth:100%" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="submitForm('zhuForm')">注册</el-button>
                  <el-button @click="resetForm('zhuForm')">重置</el-button><br/>
                  <span @click="exchange()">登录</span>
              </el-form-item>
          </el-form> 
        <!-- 登录 -->
          <el-form :model="dengForm" status-icon :rules="rules" ref="dengForm" label-width="70px" class="demo-ruleForm center" v-show="showss"  style="max-Width:400px;min-Width:10%;marginTop:0 auto">
              <el-form-item label="用户名:" prop="name">
                  <el-input type="name" v-model="dengForm.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码:" prop="pass1">
                  <el-input type="password" v-model="dengForm.pass1" autocomplete="off"></el-input>
              </el-form-item>
              <el-checkbox v-model="checked">记住密码</el-checkbox>
              <el-form-item>
                  <el-button type="primary" @click="submitForm('dengForm')">登录</el-button>
                  <el-button @click="resetForm('dengForm')">重置</el-button><br/>
                  <span @click="exchange()">注册新账户</span>
                  <span @click="forget()">忘记密码</span>
              </el-form-item>
          </el-form> 
      </div>
      <div class="hidden-lg-and-up" style="paddingRight:10px">
        <img :src="logo" alt="" class="logo"/>
        <el-form :model="zhuForm" status-icon :rules="rules" ref="zhuForm" label-width="70px" class="demo-ruleForm" v-show="!showss" style="max-Width:400px;min-Width:10%;marginTop:0 auto">
              <el-form-item label="用户名:" prop="name">
                  <el-input v-model="zhuForm.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码:" prop="pass2">
                  <el-input type="password" v-model="zhuForm.pass2" style="maxWidth:100%" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码:" prop="checkPass">
                  <el-input type="password" style="maxWidth:100%" v-model="zhuForm.checkPass"></el-input>
              </el-form-item>
              <el-form-item label="邮箱:" prop="email">
                  <el-input v-model="zhuForm.email" style="maxWidth:100%" autocomplete="off"></el-input>
              </el-form-item>
              <el-checkbox v-model="checked">记住密码</el-checkbox>
              <el-form-item>
                  <el-button type="primary" @click="submitForm('zhuForm')">注册</el-button>
                  <el-button @click="resetForm('zhuForm')">重置</el-button><br/>
                  <span @click="exchange()">登录</span>
                  <span @click="exchange()">注册新账户</span>
                  <span @click="forget()">忘记密码</span>

              </el-form-item>
          </el-form> 
        <!-- 登录 -->
          <el-form :model="dengForm" status-icon :rules="rules" ref="dengForm" label-width="70px" class="demo-ruleForm" v-show="showss"  style="max-Width:400px;min-Width:10%;marginTop:0 auto">
              <el-form-item label="用户名:" prop="name">
                  <el-input type="name" v-model="dengForm.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码:" prop="pass1">
                  <el-input type="password" v-model="dengForm.pass1" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="submitForm('dengForm')">登录</el-button>
                  <el-button @click="resetForm('dengForm')">重置</el-button><br/>
                  <span @click="exchange()">注册新账户</span>
              </el-form-item>
          </el-form> 
      </div>
    </div>
</template>
<script>
import axios from 'axios'
import logo from '@/assets/images/index_03.png'
  export default {
    data() {
      //注册密码输入
      var validatePass3 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.zhuForm.checkPass !== '') {
            console.log("sssssssssssss");
            this.$refs.zhuForm.validateField('checkPass');
          }
          callback();
        }
      };
      //登录密码
      var validatePass1 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else
          callback();
      };
      //输入名字
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          console.log(this);
          callback(new Error('请输入名字'));
        }else
          callback();
      };
      //注册密码一致
      var validatePass4 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.zhuForm.pass2) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      //邮箱
      var checkEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入邮箱'));
        }
        var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if(reg.test(value)){
          callback();
        }else{
          callback(new Error('邮箱格式不正确'));
        }
      };
      return {
        logo,
        checked:false,
        showss:true,
        formss:{
          name: '',
          id:'',
          gender:'',
          address:'',
          qianming:'',
          pass: '',
          email: '',
          token:''
        },
        dengForm: {
          name: '',
          id:'',
          gender:'',
          address:'',
          qianming:'',
          pass: '',
          email: '',
          token:'',
          name: '',
          pass1: '',
          nickName:''
        },
        zhuForm:{
          name: '',
          id:'',
          gender:'',
          address:'',
          qianming:'',
          pass: '',
          email: '',
          token:'',
          pass2: '',
          name: '',
          checkPass: '',
        },
        rules: {
          // 登录密码
          pass1: [
            { required:true,validator: validatePass1, trigger: 'blur' }
          ],
          //名字
          name: [
            { required:true,validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { required:true,validator: validatePass2, trigger: 'blur' }
          ],
          //注册密码
          pass2: [
            { required:true,validator: validatePass3, trigger: 'blur' }
          ],
          //注册检查密码
          checkPass: [
            { required:true,validator: validatePass4, trigger: 'blur' }
          ],
          email: [
            { required:true,validator: checkEmail, trigger: 'blur' }
          ],
        }
      };
    },
    beforeMount(){
    },
    methods: {
      submitForm(ruleForm) {
        //点击登录或者注册就去请求数据
        this.getuserIn();
        this.$refs[ruleForm].validate(valid => {
          if (valid) {
            //登录
            if(ruleForm=="dengForm"){
                if(this.formss.name==this.dengForm.name&&this.formss.pass==this.dengForm.pass1){
                  this.login1Sucess();
                  console.log(this.dengForm.id);
                  
                  console.log(this.$store.state);
                  
                  this.$router.go(-1);
                }else if(this.formss.name==this.dengForm.name&&this.formss.pass!=this.dengForm.pass1){
                  alert("密码错了,再看看呗");
                }else if(this.formss.name!=this.dengForm.name){
                  console.log(this.formss.name);
                  
                  alert("没找到你的名字楠");
                }
            }else if(ruleForm=='zhuForm'){
              if(this.formss.name==this.zhuForm.name){
                alert("重名了");
              }else{
                this.login2Sucess();
                this.$router.go(-1);
              }
            }
          } else {       
            return false;
          }
        });
      },
      //登录成功
      login1Sucess:function(){
        this.$store.commit("madeShow",true);
        this.$store.commit("changeName",this.formss.name);
        this.$store.commit("changeId",this.formss.id);
        this.$store.commit("changeGender",this.formss.gender);
        this.$store.commit("changeAddress",this.formss.address);
        this.$store.commit("changeqianming",this.formss.qianming);
        this.$store.commit("getEmail",this.formss.email);
        this.$store.commit("changePass",this.formss.pass);
        this.$store.commit("changeNickName",this.formss.nickName);
        this.$store.commit("getToken",this.formss.token);
        sessionStorage.setItem('userName',this.dengForm.name);
        sessionStorage.setItem('userPass',this.dengForm.pass);
      },
      //注册成功
      login2Sucess:function(){
        this.$store.commit("madeShow",true);
        this.$store.commit("changeName",this.zhuForm.name);
        sessionStorage.setItem('userName',this.zhuForm.name);
        sessionStorage.setItem('userPass',this.zhuForm.pass);
        this.$store.commit("changePass",this.zhuForm.pass);
        this.$store.commit("getToken",this.zhuForm.token);  
        this.$store.commit("getEmail",this.zhuForm.email);    
        console.log(this.zhuForm.email);
            
      },
      //清空内容
      resetForm(ruleForm){
        this.$refs[ruleForm].resetFields();
      },
      exchange(){
        this.showss=!this.showss;
      },
      //忘记密码
      forget(){
        alert("请查收邮箱");
      },
      //mock数据监测
      getuserIn(){
        axios.post("http://localhost:8080/goods/goodAll")
        .then((res)=>{
            console.log(res);
            this.formss.name=res.data.data.name;
            this.formss.pass=res.data.data.pass;
            this.formss.token=res.data.data.token;
            this.formss.nickName=res.data.data.nickName;
            this.formss.id=res.data.data.id;
            this.formss.gender=res.data.data.gender;
            this.formss.address=res.data.data.address;
            this.formss.qianming=res.data.data.qianming;
            this.formss.email=res.data.data.email;
        })
        .catch(function(error){
            console.log("error");
            
        })
      }
    }
  }
</script>
<style scoped>
    .bgColor{
      background: linear-gradient(to bottom,#bce9b3 50%,#72f766  100%);
      width: 100%;
      margin: 0 auto;
      padding-top: 10%;
      height: 100vh;
    }
    .el-input__inner{
      border-radius:5px !important;
    }
    .logo{
      width: 100%;
      height: auto;
      max-width: 420px;
      margin-bottom: 20px;
    }
    .content{
      width: 40%;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 5%;
      padding: 20px;
      padding-top:40px; 
    }
</style>