<template>
    <div>
        <navigation></navigation>
        <div class="personalCenter">
            <!-- 头像 -->
            <el-row class="demo-avatar demo-basic" style="background-image: linear-gradient(#dff5d6 90%, #98e778 100%);padding:50px 0">
                <el-col :lg="{span:4,offset:4}" :md="{span:4}">
                            <el-avatar :size="100" :src="form.avatar"></el-avatar>
                </el-col>
                <el-col :lg="{span:7,pull:2}" :md="{span:10,offset:3}" style="marginTop:20px" v-show="!showChange">
                    <div class="demo-basic--circle" >
                            <span @click="chooce(index)" v-for="(item,index) in iamgeChoice" :key="index"><el-avatar :size="50" :src="item.image" style="margin:0 10px" ></el-avatar></span>
                    </div>
                </el-col>
                <!-- 个人信息内容 -->
                <el-col :lg="{span:20,offset:4}" :md="{span:24}" v-if="showChange">
                    <el-divider></el-divider>
                    <span @click="change" v-if="showChange" style="color:rgb(77, 195, 48);float:right;paddingRight:200px;fontWeight:600">修改信息</span>
                    <el-form ref="form" :model="form" label-width="80px" style="maxWidth:800px">
                        <div class="info">
                            <span>ID:</span><span>{{this.$store.state.id}}</span><br><br>
                            <span>昵称:</span><span>{{form.name}}</span><br><br>
                            <span>邮箱:</span><span>{{form.email}}</span><br><br>
                            <span>姓名:</span><span>{{form.realname}}</span><br><br>
                            <span>简介:</span><span>{{form.user_description}}</span>
                        </div><br>
                    </el-form>
                </el-col>
                <el-col v-else  :lg="{span:20,offset:4}" :md="{span:24}">
                    <el-divider></el-divider>
                    <el-form ref="form" :model="form" label-width="80px" style="maxWidth:800px">
                        <div class="info">
                            <span>ID:</span><span>{{this.$store.state.id}}</span><br><br>
                            <span>昵称:</span><el-input v-model="form.name" :placeholder="this.$store.state.name" style="maxWidth:400px"></el-input><br><br>
                            <span>邮箱:</span><el-input v-model="form.email" :placeholder="this.$store.state.e_mail" style="maxWidth:400px"></el-input><br><br>
                            <span>姓名:</span><el-input v-model="form.realname" :placeholder="this.$store.state.real_name" style="maxWidth:400px"></el-input><br><br>
                            <span>简介:</span><el-input v-model="form.user_description" :placeholder="this.$store.state.user_description" style="maxWidth:400px"></el-input>
                        </div><br>
                    </el-form>
                    <el-button :plain="true" @click="change();open2()" style="marginBottom:50px">保存修改</el-button>
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
                avatar:'',
                email: ''
            },
            touxiang,
            showImg:false,
            name:'',
            imageUrl: '',
            showChange:true,
            iamgeChoice:[
                {image:'https://c-ssl.duitang.com/uploads/item/201801/17/20180117181801_KRYJQ.thumb.700_0.jpeg'},
                {image:'https://c-ssl.duitang.com/uploads/item/201709/26/20170926003219_RCjJE.thumb.700_0.jpeg'},
                {image:'https://c-ssl.duitang.com/uploads/item/201412/09/20141209183953_uiree.thumb.1900_0.jpeg'},
                {image:'https://c-ssl.duitang.com/uploads/item/201509/25/20150925110828_iMnGx.thumb.700_0.jpeg'},
                {image:'https://c-ssl.duitang.com/uploads/item/201802/21/20180221223815_xkkyq.thumb.700_0.jpg'}

            ]
        }
    },
    beforeMount(){
        this.hasToken();
        this.showImg=this.$store.state.show;
        var aid=this.$route.params.aid;
    },
    methods: {
        change(){
            this.showChange=!this.showChange;
        },
        chooce(item){
            this.form.avatar=this.iamgeChoice[item].image;
           
        },
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
                console.log(res);
                this.$store.commit("madeShow",true);
                this.$store.commit("changeName",res.data.result.username);
                this.$store.commit("changeId",res.data.result.uid);
                this.$store.commit("changeAvatar",res.data.result.avatar);
                this.$store.commit("changeuser_description",res.data.result.user_description);
                this.$store.commit("getEmail",res.data.result.e_mail);
                this.$store.commit("changerealname",res.data.result.real_name);
                
            })
            .catch(function(error){
                console.log("error");
            }).then(()=>{
                console.log(this.$store);
                this.form.id=this.$store.state.id;
                this.form.name=this.$store.state.name;
                this.form.email=this.$store.state.e_mail;
                this.form.realname=this.$store.state.real_name;
                this.form.avatar=this.$store.state.avatar;
                this.form.user_description=this.$store.state.user_description;

                this.showImg=true;
            })
        },
        open2() {
            //  axios.post("http://localhost:8080/api/User/viewSet",{
            //     token:localStorage.getItem("token"),
            //     id:this.form.id,
            //     name:this.form.name,
            //     e_mail:this.form.email,
            //     real_name:this.realname,
            //     avartar:null,
            //     user_description:this.form.user_description
            // })
            axios.put("http://localhost:8080/api/UserViewSet//",{
                data: {
                    "username":this.form.name,
                    "e_mail":this.form.email,
                    "real_name": this.form.realname,
                    "avatar": this.form.isStart,
                    "avatar": this.form.avatar,
                    "user_description":this.form.user_description,
                }
            })
            // .then((res)=>{
            //     console.log("信息修改了");
            //     console.log(res);
            //     this.$store.state.name=res.data.result.username;
            // })
            // .catch(function(error){
            //     console.log("error");
            // })
            // axios({
            //     method: 'put',
            //     url: 'http://localhost:8080/api/UserViewSet//',
            //     data: {
            //         "username":self.form.name,
            //         "e_mail":self.form.email,
            //         "real_name": self.form.realname,
            //         "avatar": self.form.isStart,
            //         "user_description":self.form.user_description,
 
            //     }
            // })
            .then((res)=>{
                console.log("修改后的返回值");
                var obody=eval('('+res.config.data+')');
                console.log(obody);
                obody=obody.data;
                this.$store.commit("madeShow",true);
                this.$store.commit("changeName",obody.username);
                this.$store.commit("changeAvatar",obody.avatar);
                this.$store.commit("changeuser_description",obody.user_description);
                this.$store.commit("getEmail",obody.e_mail);
                this.$store.commit("changerealname",obody.real_name);
                this.$message({
                    message: '保存成功',
                    type: 'success'
                });
            })
            .catch(function(error){
                console.log("error");
            }).then(()=>{
                console.log(this.$store);
                this.form.id=this.$store.state.id;
                this.form.name=this.$store.state.name;
                this.form.email=this.$store.state.e_mail;
                this.form.avatar=this.$store.state.avatar;
                this.form.user_description=this.$store.state.user_description;
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
            //校验成功上传文件
            if(isJPG && isLt2M == true){
            console.log(file);

            //将文件转化为formdata数据上传
            let fd = new FormData()
            fd.append('file', file)
            console.log(fd)
        
            // post上传图片

            let that = this
            
                new Promise(function (resolve, reject) {
                    that.axios,put('http://localhost:8080/api/userViewSet', fd, 
                        {
                            headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                        }).then((response) => {
                            that.imgId = response.data.data
                            resolve(that.imgId);
                        }).catch((error) =>{
                            this.$message.error('头像上传失败，请重新上传!');
                        })
                        }).then(function (id){
                            that.axios.get('/file/view/'+id)
                            .then((response) => {
                                that.imageUrl = response.request.responseURL;
                            })
                        })         
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
            background-color: #ffffff;
            width: 60%;
        }
        
    }
    @media (max-width:1200px) {
        .personalCenter{
            background-color: #ffffff;
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