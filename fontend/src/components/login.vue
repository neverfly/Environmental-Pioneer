<template>
    <div class="bgColor">
      <!-- 注册 -->
      <div class="content">
        <img :src="logo" alt="" class="logo"/>
        <el-form :model="zhuForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm center" v-show="!showss" style="max-Width:400px;min-Width:10%;marginTop:0 auto">
              <el-form-item label="用户名:" prop="name">
                  <el-input v-model="zhuForm.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码:" prop="pass">
                  <el-input type="password" v-model="zhuForm.pass" style="maxWidth:100%" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码:" prop="checkPass">
                  <el-input type="password" style="maxWidth:100%" v-model="zhuForm.checkPass"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="submitForm('zhuForm')">注册</el-button>
                  <el-button @click="resetForm('zhuForm')">重置</el-button><br/>
                  <span @click="exchange()">登录</span>
              </el-form-item>
          </el-form> 
        <!-- 登录 -->
          <el-form :model="dengForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm center" v-show="showss"  style="max-Width:400px;min-Width:10%;marginTop:0 auto">
              <el-form-item label="用户名:" prop="name">
                  <el-input type="name" v-model="dengForm.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码:" prop="pass">
                  <el-input type="password" v-model="dengForm.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="submitForm('dengForm')">登录</el-button>
                  <el-button @click="resetForm('dengForm')">重置</el-button><br/>
                  <p @click="exchange()">注册新账户</p>
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
      //验证密码输入
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.zhuForm.checkPass !== '') {
            this.$refs.zhuForm.validateField('checkPass');
          }
          callback();
        }
      };
      //注册密码一致
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.zhuForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        logo,
        showss:true,
        formss:{
          name: '',
          pass: '',
        },
        dengForm: {
          name: '',
          pass: '',
        },
        zhuForm:{
          name: '',
          pass: '',
          checkPass: '',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    created() {
      this.getuserIn();
      console.log(this.formss);
      
    },
    methods: {
      submitForm(ruleForm) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            //登录
            if(this.formss.name==this.dengForm.name&&this.formss.pass==this.dengForm.pass){
              this.login1Sucess();
              this.$router.go(-1);
            }else if(this.formss.name==this.dengForm.name&&this.formss.pass!=this.dengForm.pass){
              alert("密码错了，再看看呗");
            }else if(this.formss.name!=this.dengForm.name){
              alert("没找到你的名字楠");
            }
          } else {
            //注册
              if(this.formss.name==this.zhuForm.name){
                alert("不好意思，重名了");
              }else{
                if(this.zhuForm.name==""){
                  alert("输入账户");
                }else{
                  this.login2Sucess();
                  this.$router.go(-1);
                }
              }       
            return false;
          }
        });
      },
      login1Sucess:function(){
        this.$store.commit("madeShow",true);
        this.$store.commit("changeName",this.dengForm.name);
        sessionStorage.setItem('userName',this.dengForm.name);
        sessionStorage.setItem('userPass',this.dengForm.pass);
        this.$store.commit("changePass",this.dengForm.pass);
      },
      login2Sucess:function(){
        this.$store.commit("madeShow",true);
        this.$store.commit("changeName",this.zhuForm.name);
        sessionStorage.setItem('userName',this.zhuForm.name);
        sessionStorage.setItem('userPass',this.zhuForm.pass);
        this.$store.commit("changePass",this.zhuForm.pass);
      },
      resetForm(ruleForm){
        this.$refs.ruleForm.resetFields();
      },
      exchange(){
        this.showss=!this.showss;
      },
      //mock数据监测
      getuserIn(){
        axios.post("http://localhost:8080/goods/goodAll")
        .then((res)=>{
            console.log(res);
            this.formss.name=res.data.data.name;
            this.formss.pass=res.data.data.pass;
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
    }
</style>