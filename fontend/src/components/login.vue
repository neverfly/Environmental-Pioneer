<template>
   <div :style="note">
      <div class="bgColor">
      <!-- pc端 -->
      <div class="content hidden-sm-and-down" style="borderRadius:20px;zIndex:444">
        <img :src="logo" alt="" class="logo"/>
        <el-form :model="zhuForm" status-icon :rules="rules" ref="zhuForm" class="demo-ruleForm center" v-show="!showss" style="max-Width:400px;min-Width:10%;marginTop:0 auto;width:500px">
              <el-form-item prop="name">
                  <el-input v-model="zhuForm.name" autocomplete="off" placeholder='用户名' class="inputs"></el-input>
              </el-form-item><br>
              <el-form-item prop="pass2">
                  <el-input type="password" v-model="zhuForm.pass2" style="maxWidth:100%;border-top:0;border-left:0;border-right:0;" autocomplete="off" placeholder="密码"></el-input>
              </el-form-item><br>
              <el-form-item prop="checkPass">
                  <el-input type="password" style="maxWidth:100%;border-top:0;border-left:0;border-right:0;" v-model="zhuForm.checkPass" placeholder="确认密码"></el-input>
              </el-form-item><br>
              <el-form-item prop="email">
                  <el-input v-model="zhuForm.email" style="maxWidth:100%;border-top:0;border-left:0;border-right:0;" autocomplete="off"  placeholder="邮箱"></el-input>
              </el-form-item><br>
              <el-form-item>
                  <el-button type="primary" @click="submitForm('zhuForm')">注册</el-button>
                  <el-button @click="resetForm('zhuForm')">重置</el-button><br/>
                  <span @click="exchange()">登录 | </span>
                  <span @click="forget()">忘记密码</span>
              </el-form-item>
          </el-form> 
        <!-- 登录 -->
          <el-form :model="dengForm" status-icon :rules="rules" ref="dengForm" class="demo-ruleForm center" v-show="showss"  style="max-Width:400px;min-Width:10%;marginTop:0 auto">
              <el-form-item  prop="name" style="minWidth:100px">
                  <el-input type="name" v-model="dengForm.name" autocomplete="off" style="border-top:0;border-left:0;border-right:0;" placeholder="用户名" class="inputs"></el-input>
              </el-form-item><br>
              <el-form-item prop="pass1">
                  <el-input type="password" v-model="dengForm.pass1" autocomplete="off" style="border-top:0;border-left:0;border-right:0;" placeholder="密码"></el-input>
              </el-form-item><br>
              <el-form-item>
                  <el-button type="primary" @click="submitForm('dengForm')">登录</el-button>
                  <el-button @click="resetForm('dengForm')">重置</el-button><br/>
                  <span @click="exchange()">注册新账户 | </span>
                  <span @click="forget()">忘记密码</span>
              </el-form-item><br>
          </el-form> 
      </div>
      <!-- 移动端 -->
      <div class="hidden-md-and-up" style="margin:0 auto;textAlign:center">
        <img :src="logo" alt="" class="logo"/>
        <!-- 注册 -->
        <el-form :model="zhuForm" status-icon :rules="rules" ref="zhuForm" class="demo-ruleForm" v-show="!showss" style="max-Width:400px;min-Width:10%;marginTop:0 auto">
              <el-form-item prop="name">
                  <el-input v-model="zhuForm.name" autocomplete="off" style="border-top:0;border-left:0;border-right:0;marginRight:10px" placeholder="用户名" class="inputs"></el-input>
              </el-form-item><br>
              <el-form-item prop="pass2">
                  <el-input type="password" v-model="zhuForm.pass2"  style="maxWidth:100%;border-top:0;border-left:0;border-right:0;marginRight:10px" autocomplete="off" placeholder="密码"></el-input>
              </el-form-item><br>
              <el-form-item prop="checkPass">
                  <el-input type="password" style="maxWidth:100%;border-top:0;border-left:0;border-right:0;marginRight:10px" v-model="zhuForm.checkPass" placeholder="确认密码"></el-input>
              </el-form-item><br>
              <el-form-item  prop="email">
                  <el-input v-model="zhuForm.email" style="maxWidth:100%;border-top:0;border-left:0;border-right:0;marginRight:10px" autocomplete="off" placeholder="邮箱"></el-input>
              </el-form-item><br>
              <el-form-item style="textAlign:center">
                  <el-button type="primary" @click="submitForm('zhuForm')">注册</el-button>
                  <el-button @click="resetForm('zhuForm')">重置</el-button><br/>
                  <span @click="exchange()">登录 | </span>
                  <span @click="exchange()">注册新账户</span>
                  <span @click="forget()">忘记密码</span>
              </el-form-item>
          </el-form> 
        <!-- 登录 -->
          <el-form :model="dengForm" status-icon :rules="rules" ref="dengForm" label-width="10px" class="demo-ruleForm" v-show="showss"  style="max-Width:400px;min-Width:10%">
              <el-form-item prop="name">
                  <el-input type="name" v-model="dengForm.name" autocomplete="off" style="border-top:0;border-left:0;border-right:0;marginRight:10px" placeholder="用户名" class="inputs mobiledeng"></el-input>
              </el-form-item><br>
              <el-form-item prop="pass1">
                  <el-input type="password" v-model="dengForm.pass1" autocomplete="off" style="border-top:0;border-left:0;border-right:0;marginRight:10px" placeholder="密码" class=" mobiledeng"></el-input>
              </el-form-item><br>
              <el-form-item style="textAlign:center">
                  <el-button type="primary" @click="submitForm('dengForm')" class="mobileBtn">登录</el-button><br>
                  <span @click="exchange()">注册新账户</span>
                  <span @click="forget()">忘记密码</span>
              </el-form-item><br>
          </el-form> 
      </div>
    </div>
   </div>
</template>
<script>
  import axios from 'axios'
  import logo from '@/assets/images/index_03.png'
  var rule;
  export default {
    data() {
      //注册密码输入
      var validatePass3 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.zhuForm.checkPass !== '') {
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
         note: {
          backgroundImage: "url(" + require("../assets/images/denglu.jpg") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          marginTop: "5px",
          zIndex:'-1'
        },
        logo,
        showss:true,
        dengForm: {
          name: '',
          id:'',
          avadar:'',
          qianming:'',
          pass: '',
          email: '',
          token:'',
          pass1: '',
          realname:''
        },
        zhuForm:{
          name: '',
          id:'',
          avadar:'',
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
    // mounted () {
    //   const that = this;
    //   window.onresize = () => {
    //     return (() => {
    //       if(document.body.clientWidth>992){
    //         import bgImg from '../assets/images/TIM20191109154834.png'
    //       }else{
    //         import bgImg from '../assets/images/TIM20191109154834.png'
    //       }
    //     })()
    //   }
    // },
    methods: {
      submitForm(ruleForm) {
        rule=ruleForm;
        //点击登录或者注册就去请求数据
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            if(rule=='dengForm'){
              this.getToekn();
            }else{
              this.getLoginToekn();
            }
          } else {
            this.$message({
              message: '请重新查看输入信息',
              type: 'warning'
            });
            return false;
          }
        });
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
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: "已重置密码请注意查收邮箱"
          });
          this.$router.push('/main');
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消重置'
          });       
        });
      },
      //登录获取token
      getToekn(){
        axios.post('http://localhost:8080/login', {
          username: this.dengForm.name,
          password: this.dengForm.pass1,
        }).then((res)=>{
          console.log("returnToken");
          console.log(res);
          if(res.data.msg=="Succeeded"){
            localStorage.setItem("token",res.data.token);
            this.$router.go(-1);
          }else{
            this.$message.error(res.data);
          }
        })
      },
      //注册验证
      getLoginToekn(){
        axios.post('http://localhost:8080/register', {
          username: this.zhuForm.name,
          e_mail: this.zhuForm.email,
          password: this.zhuForm.pass2,
        }).then((res)=>{
          console.log("注册验证返回");
          console.log(res);
          if(res.data.msg=="Succeeded"){
            this.loginGetToken();
          }else{
            this.$message.error(res.data);
          }
        })
      },
      //注册成功获取token
      loginGetToken(){
        axios.post('http://localhost:8080/login', {
          username: this.zhuForm.name,
          password: this.zhuForm.pass2
        }).then((res)=>{
          console.log("前台获取到返回的token");
          console.log(res);
          if(res.data.msg=="Succeeded"){
            localStorage.setItem("token",res.data.token);
            this.$router.go(-1);
            // this.getuserIn();
          }else{
            this.$message.error(res.data);
          }
        })
      },
    }
  }
</script>
<style scoped>
  .bgColor{
    width: 100%;
    margin: 0 auto;
    height: 100vh;
    position: relative;
  }
  .el-input__inner{
    /* border-radius:5px !important; */
    font-size: 19px !important;
  }
  .logo{
    width: 100%;
    height: auto;
    max-width: 420px;
    margin-bottom: 20px;
  }
  .content{
    top: 20%;
    width: 40%;
    margin: 0 auto;
    padding: 20px;
    padding-top:40px; 
    position: relative;
    background-color: rgba(255, 255, 255, 0.3);
  }
  .backTo{
    margin-bottom: 40px;
    position: absolute;
    top: 50px;
    right:30px;
  }
  .backTo>span{
    font-size: 30px;
    text-align: center;
    font-weight: 800;
  }
  .el-button--primary{
    background-color: #b5f0ab;
    border-color: #b5f0ab;
  }
  .el-checkbox:last-of-type{
    margin-left: 35px !important;
  }
  .inputs{
    border-top:0;
    border-left:0;
    border-right:0;
  }
  .inputs .el-input__inner{
    font-size: 19px;
  }
  /* 遮罩层 */
  
.mobileBtn{
  width: 80%;
  font-size: 30px;
}
.mobiledeng{
  border-radius: 30px; 
}
</style>