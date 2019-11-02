<template>
    <div>
        <navigation></navigation>
        <div class="personalCenter">
            <el-row class="demo-avatar demo-basic">
                <el-col :lg={span:12} :md="16">
                    <div class="demo-basic--circle">
                        <div class="block">
                        <el-avatar :size="100" :src="touxiang"></el-avatar>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-form ref="form" :model="form" label-width="80px" style="maxWidth:800px">
                <div>
                    <p><span>ID: </span><span>{{this.$store.state.id}}</span></p>
                    <p><span>昵称：</span>{{this.$store.state.name}}<span></span></p>
                    <p><span>绑定邮箱: </span>{{this.$store.state.email}}<span></span></p>
                    <p><span>姓名：</span>{{this.$store.state.realname}}<span></span></p>
                </div>
                <p>
                    <span>性别：</span>
                        <el-radio v-model="form.gender" label="1">男</el-radio>
                        <el-radio v-model="form.gender" label="2">女</el-radio>
                </p>
                <el-form-item label="详细地址" class="title">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="个性签名" class="title">
                    <el-input v-model="form.qianming"></el-input>
                </el-form-item>
            </el-form>
            <el-button :plain="true" @click="open2" style="marginBottom:50px">保存修改</el-button>
        </div>
        <footers></footers>
    </div>
</template>
<script>
import touxiang from '../assets/images/u=732757285,310735219&fm=26&gp=0.jpg'
import axios from 'axios'
export default {
    name:'personalCenter',
    data() {
        return {
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            form: {
                id: '',
                realname:'',
                phone: '',
                name: '',
                gender:'',
                address: '',
                qianming:'',
            },
            touxiang,
            showImg:false,
            name:'',
            imageUrl: ''
        }
    },
    beforeMount(){
        this.hasToken();
        this.showImg=this.$store.state.show;
        this.form.gender=this.$store.state.gender;
    },
    methods: {
        hasToken(){
            if(localStorage.getItem("token")!=null){
                this.getuserIn();
            }else{
                this.$router.push("/login");
            }
        },
        getuserIn(){
            axios.post("http://localhost:8080/goods/goodAll",{
            params: {
                token:localStorage.getItem("token")
            }
            })
            .then((res)=>{
                this.$store.commit("madeShow",true);
                this.$store.commit("changeName",res.data.data.name);
                this.$store.commit("changeId",res.data.data.id);
                this.$store.commit("changeGender",res.data.data.gender);
                this.$store.commit("changeAddress",res.data.data.address);
                this.$store.commit("changeqianming",res.data.data.qianming);
                this.$store.commit("getEmail",res.data.data.email);
                this.$store.commit("changePass",res.data.data.pass);
                this.$store.commit("changerealname",res.data.data.realname);
                this.$store.commit("getToken",res.data.data.token);
            })
            .catch(function(error){
                console.log("error");
                
            }).then(()=>{
                form.id=this.$store.data.data.id;
                form.name=this.$store.data.data.name;
                form.gender=this.$store.data.data.gender;
                form.email=this.$store.data.data.email;
                this.showImg=true;
            })
        },
        open2() {
            this.$message({
            message: '保存成功',
            type: 'success'
            });
            console.log(this.form);
            this.showImg=true;
            
        },
        handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
}
</script>
<style scoped>
    @media (min-width:1200px) {
        .personalCenter{
            margin-left: 20%;
            margin-right: 20%;
            background-image: linear-gradient(#dff5d6 90%, #98e778 100%);
            width: 60%;
        }
    }
    @media (max-width:1200px) {
        .personalCenter{
            background-image: linear-gradient(#dff5d6 90%, #98e778 100%);
            width: 100%;
        }
    }
    @media (min-width:1200px) {
        p{
        font-size: 20px;
        margin-left: calc(30% - 40px);
        height: 40px;
        line-height: 40px; 
        }
    }
    .el-form-item__label{
        color: #98e778;
        font-size: 20px;
    }
    span{
        font-size: 20px;
    }
    .el-button{
        background-color: #98e778;
        margin-left: calc(40% - 50px);
    }
    @media(min-width:1200px) {
        .el-form-item{
            margin-left: calc(30% - 40px);
        }
    }
    .demo-basic--circle{
        margin-left: calc(40% - 40px);
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #d9d9d9;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        background-color: #fff;
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
    }
    .avatar {
        width: 100px;
        height: 100px;
        display: block;
    }
</style>