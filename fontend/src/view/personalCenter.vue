<template>
    <div>
        <navigation></navigation>
        <div class="personalCenter">
            <el-row class="demo-avatar demo-basic">
                <el-col :lg="{span:12,offset:4}" :md="{span:4}">
                    <div class="demo-basic--circle">
                        <div class="block">
                            <el-avatar :size="100" :src="form.avatar"></el-avatar>
                        </div>
                    </div>
                </el-col>
                <el-col :lg="{span:5,pull:9}" :md="{span:10,offset:3}" style="marginTop:20px">
                    <el-upload
                        class="avatar-uploader"
                        action="http://localhost:8080/api/userViewSet"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-col>
                <el-col :lg="{span:20,offset:4}" :md="{span:24}">
                    <el-form ref="form" :model="form" label-width="80px" style="maxWidth:800px">
                        <div class="info">
                            <span>ID:</span><span>{{this.$store.state.id}}</span><br><br>
                            <span>昵称:</span><el-input v-model="form.name" :placeholder="this.$store.state.name" style="maxWidth:400px"></el-input><br><br>
                            <span>邮箱:</span><el-input v-model="form.email" :placeholder="this.$store.state.email" style="maxWidth:400px"></el-input><br><br>
                            <span>姓名:</span><el-input v-model="form.realname" :placeholder="this.$store.state.realname" style="maxWidth:400px"></el-input><br><br>
                            <span>简介:</span><el-input v-model="form.user_description" :placeholder="this.$store.state.user_description" style="maxWidth:400px"></el-input>
                        </div><br>
                    </el-form>
                    <el-button :plain="true" @click="open2" style="marginBottom:50px">保存修改</el-button>
                </el-col>
            </el-row>
            
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
                name: '',
                avtar: '',
                user_description:'',
                avartar:'',
                email: ''
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
            axios.get("http://localhost:8080/api/UserViewSet",{
            params: {
                token:localStorage.getItem("token")
            }
            })
            .then((res)=>{
                console.log("211e");
                this.$store.commit("madeShow",true);
                this.$store.commit("changeName",res.data.data.name);
                this.$store.commit("changeId",res.data.data.id);
                this.$store.commit("changeAvatar",res.data.data.avatar);
                this.$store.commit("changeuser_description",res.data.data.user_description);
                this.$store.commit("getEmail",res.data.data.email);
                this.$store.commit("changePass",res.data.data.pass);
                this.$store.commit("changerealname",res.data.data.realname);
                this.$store.commit("getToken",res.data.data.token);
            })
            .catch(function(error){
                console.log("error");
            }).then(()=>{
                console.log(this.$store);
                this.form.id=this.$store.state.id;
                this.form.name=this.$store.state.name;
                this.form.email=this.$store.state.email;
                this.form.avatar=this.$store.state.avatar;
                this.form.user_description=this.$store.state.user_description;

                this.showImg=true;
            })
        },
        open2() {
            var self = this;
            //  axios.post("http://localhost:8080/api/User/viewSet",{
            //     token:localStorage.getItem("token"),
            //     id:this.form.id,
            //     name:this.form.name,
            //     e_mail:this.form.email,
            //     real_name:this.realname,
            //     avartar:null,
            //     user_description:this.form.user_description
            // })
            axios({
                method: 'put',
                url: 'http://localhost:8080/api/UserViewSet',
                data: {
                    "username":self.form.name,
                    "e_mail":self.form.email,
                    "real_name": self.form.realname,
                    "avatar": self.form.isStart,
                    "user_description":self.form.user_description,
 
                }
            })
            .then((res)=>{
                console.log("asdasdasdkjh");
                
                console.log(res);
                
                this.$store.commit("madeShow",true);
                this.$store.commit("changeName",res.data.data.name);
                this.$store.commit("changeId",res.data.data.id);
                this.$store.commit("changeAvatar",res.data.data.avatar);
                this.$store.commit("changeuser_description",res.data.data.user_description);
                this.$store.commit("getEmail",res.data.data.email);
                this.$store.commit("changePass",res.data.data.pass);
                this.$store.commit("changerealname",res.data.data.realname);
                this.$store.commit("getToken",res.data.data.token);
                this.$message({
                    message: '保存成功',
                    type: 'success'
                });
            })
            .catch(function(error){
                console.log("error");
                
            }).then(()=>{
                console.log("s1232312");
                
                console.log(this.$store);
                this.form.id=this.$store.state.id;
                this.form.name=this.$store.state.name;
                this.form.email=this.$store.state.email;
                this.form.avatar=this.$store.state.avatar;
                console.log(this.$store.state.avatar);

                this.showImg=true;
            })
            
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
    .info span{
        line-height: 60px;
        font-size: 25px;
    }
    p{
        font-size: 20px;
        margin-left: calc(30% - 40px);
        height: 40px;
        line-height: 40px; 
        }
    .el-form-item__label{
        color: #98e778;
        font-size: 20px;
    }
    span{
        font-size: 20px;
    }
    .el-button{
        background-color: #ffffff;
        margin-left: calc(30% - 50px);
    }
    @media(min-width:1200px) {
        .el-form-item{
            width:500px;
        }
    }
    .demo-basic--circle{
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
    .el-input__inner{
        border-radius:5px 5px 5px 5px;
    }
    .el-form-item__label{
        font-size: 14px;
    }
</style>