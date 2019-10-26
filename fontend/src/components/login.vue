<template>
    <div class="bgColor">
      <navigation></navigation>
      <!-- 注册 -->
       <el-form :model="zhuForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm center" v-show="!showss" style="max-Width:400px;min-Width:10%;marginTop:0 auto">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="zhuForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="zhuForm.pass" style="maxWidth:100%" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
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
            <el-form-item label="用户名" prop="name">
                <el-input type="name" v-model="dengForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="dengForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('dengForm')">登录</el-button>
                <el-button @click="resetForm('dengForm')">重置</el-button><br/>
                <p @click="exchange()">注册</p>
            </el-form-item>
        </el-form> 
        <footers></footers>
    </div>
</template>
<script>
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
        showss:true,
        formss:{
          name: 'ss',
          pass: 'ss'
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
    
    methods: {
      submitForm(ruleForm) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            //登录
            if(this.formss.name==this.dengForm.name&&this.formss.pass==this.dengForm.pass){
              this.login1Sucess();
              this.$router.go(-1);
            }else{
              alert("输入有误");
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
      }
    }
  }
</script>
<style scoped>
    .bgColor{
      background: linear-gradient(to bottom,#bce9b3 50%,#72f766  100%);
    }
    .el-input__inner{
      border-radius:5px;
    }
</style>