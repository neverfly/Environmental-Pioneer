<template>
    <div class="nav"  :style="{backgroundImage: 'url('+bgimg+')',minWidth:'100%',height:'320px',backgroundSize:'cover'}">
      <!-- 导航栏pc端 -->
      <el-row class="hidden-md-and-down">
        <el-col :lg="5" :offset="4">
          <img :src="logo" alt="" class="logo"/>
        </el-col>
        <el-col :lg="7" :offset="4" class="logoRight" v-show="!shows">
          <router-link to="/login"><img :src="people" class="icons" alt=""/>&nbsp;<span>登录</span></router-link>
          <router-link to="login"><img :src="login"  class="icons" alt=""/>&nbsp;<span>注册</span></router-link>
          <span>|| English switch</span>
        </el-col>
        <el-col :lg="7" :offset="4" class="logoRight" v-show="shows">
          <img :src="people" class="icons" alt=""/>&nbsp;<span>{{getName}}</span>
          <span @click="logOut">退出</span>
          <span>|| English switch</span>
        </el-col>
      </el-row>
      <el-row>

        <el-col :lg="16" class="hidden-md-and-down" :offset="8">
          <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item class="navPC" index="/main"><img :src="shouye" class="icon"/>首页</el-menu-item>
            <el-menu-item class="navPC" index="/new"><img :src="news" class="icon"/>新闻</el-menu-item>
            <el-menu-item class="navPC" index="/garbage"><img :src="laji" class="icon"/>垃圾分类</el-menu-item>
            <el-menu-item class="navPC" index="/game"><i class="el-icon-edit icon" style="fontSize:25px;color:#14a53b"></i>分类答一答</el-menu-item>
            <el-menu-item class="navPC" index="/personalCenter"><img :src="people" class="icon"/>个人中心</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>

    <!-- 导航栏移动端 -->
    <el-row class="hidden-lg-and-up">
      <el-col :span="10">
        <img :src="logoSmall" style="100%" alt="">
      </el-col>
     <el-col :span="4" :offset="9">
        <span style="font-family:Comic Sans MS;font-size:14px;"><div class="menu-icon" @click="drawer = true" type="primary"></div></span>
     </el-col>
     <!-- 抽屉内容 -->
      <el-drawer
        :visible.sync="drawer"
        :direction="direction"
        size='60%'
        :before-close="handleClose">
        <el-row class="tac">
          <el-col :span="24">
            <p v-if="getShow" style="textAlign:center"><span>{{getName}}</span>&nbsp;&nbsp;<span @click="logOut">退出</span></p>
          
            <el-menu
              :default-active="activeIndex"
              router
              class="el-menu-vertical-demo"
              >
              <router-link style="marginLeft:10px" to="/login" v-if="!getShow"><img :src="people" class="icons" alt=""/>&nbsp;<span>登录</span></router-link>
              <router-link to="login" v-if="!getShow"><img :src="login"  class="icons" alt=""/>&nbsp;<span>注册</span></router-link>
              <el-menu-item index="/main">
                <span slot="title">首页</span>
                <span class="el-icon-arrow-right" style="float:right;lineHeight:56px"></span>
              </el-menu-item>
              <el-menu-item index="/new">
                <span slot="title">新闻</span>
                <span class="el-icon-arrow-right" style="float:right;lineHeight:56px"></span>
              </el-menu-item>
              <el-menu-item index="/garbage">
                <span slot="title">垃圾分类</span>
                <span class="el-icon-arrow-right" style="float:right;lineHeight:56px"></span>
              </el-menu-item>
              <el-menu-item index="/game">
                <span slot="title">分类答一答</span>
                <span class="el-icon-arrow-right" style="float:right;lineHeight:56px"></span>
              </el-menu-item>
              <el-menu-item index="personalCenter">
                <span slot="title">个人中心</span>
                <span class="el-icon-arrow-right" style="float:right;lineHeight:56px"></span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-drawer>
    </el-row>

      <!-- 搜索框 -->
      <el-row class="pad">
            <el-col :lg="6" class="hidden-md-and-down" :offset="8">
                <el-input class="search" v-model="input" placeholder="垃圾识别与分类"></el-input>
            </el-col>
            <el-col :lg="2" class="hidden-md-and-down">
                <el-button @click="searchLaji"><img :src="search" class="sou"/><span class="souText">搜索</span></el-button>
            </el-col>
            <!-- 搜索移动端 -->
            <el-col :span="15" class="hidden-lg-and-up" :offset="1">
                <el-input class="search" v-model="input" placeholder="垃圾识别与分类"></el-input>
            </el-col>
            <el-col :span="7" class="hidden-lg-and-up">
                <el-button @click="searchLaji"><i class="el-icon-search"></i><span class="souText">搜索</span></el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import shouye from '@/assets/images/8_03.png'
import news from '@/assets/images/8_08.png'
import laji from '@/assets/images/8_05.png'
import jiandu from '@/assets/images/8_11.png'
import people from '@/assets/images/_0.png'
import logo from '@/assets/images/index_03.png'
import login from '@/assets/images/index_06.png'
import bgimg from '@/assets/images/index_01.png'
import search from '@/assets/images/index_07.png'
import logoSmall from '@/assets/images/logoSmall.png'

import axios from 'axios'

export default {
  name: 'navigation',
  data() {
    return {
      shouye,
      news,
      bgimg,
      laji,
      jiandu,
      people,
      logo,
      login,
      search,
      logoSmall,
      input: '',
      shows: false,
      drawer: false,
      direction: 'ltr',
      navBg:{
          backgroundImage: 'url(' + require('@/assets/images/index_01.png') + ')',
          backgroundRepeat:'no-repeat',
          backgroundSize:'100% 100%'
      },
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
    },
    searchLaji(){
      axios.post("http://localhost:8080/main/search",{
          body: this.input
      })
      .then((res)=>{
          alert(res.data);
      })
      .catch(function(error){
          console.log("error");
          
      })
    },
    handleClose(done) {
        done();
    },
    // 退出
    logOut(){
      this.$confirm("确定退出吗?","提示",{
        confirmButtonText: "确定",
        cancleButtonText: '取消',
      }).then(()=>{
        localStorage.removeItem('token');
        this.$store.commit("madeShow",false);
        this.$store.commit("changeName","");
        this.$store.commit("changeId","");
        this.$store.commit("changeAvatar","");
        this.$store.commit("changeuser_description","");
        this.$store.commit("getEmail","");
        this.$store.commit("changePass","");
        this.$store.commit("changerealname","");
        this.$store.commit("getToken","");
        this.$router.push('/main');
        this.shows=false;
      }).catch(function(){

      })
    },
    getuserIn(){
      console.log("nav getuserIn");
      axios.get("http://localhost:8080/api/UserViewSet",{
        params: {
          token:localStorage.getItem("token")
        }
      })
      .then((res)=>{
        console.log("getuserIn");
        this.$store.state.name=res.data.data.name;
        this.$store.state.pass=res.data.data.pass;
        this.shows=true;
        console.log("kdjhaskdhakjsdjhkj");
        console.log(this.shows);
      })
      .catch(function(error){
          console.log("error");
          
      })
    }
  },
  created() {
    console.log("1111");
    console.log(localStorage.getItem("token"));
    if(localStorage.getItem("token")!=null){
      this.getuserIn();
    }
  },
  //登录注册模块监听
  
  computed:{
    getName:function(){
      return this.$store.state.name;
    },
    getShow:function(){
      return this.shows;
    }
  }
}
</script>
<style scoped>
*{
  font-size: 20px;
}
.nav{
  width: 100%;
  background-color: #d4f9c5;
  padding-top: 5px;
  margin-bottom: 20px;
}
.logo{
  width: 100%;
  height: auto;
  max-width: 420px;
}
.logoRight{
  padding-top: 10px;
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
.icons{
  width: 15px;
}
.navPC{
  font-size: 18px;
  color: #14a53b;
  padding: 0 25px;
}
.el-menu{
  background-color:transparent;
  color: #14a53b;
}
.el-menu--horizontal>.el-menu-item.is-active{
  border-bottom: 2px solid #2ca41e;
  background-color:transparent;
}
.el-menu--horizontal>.el-menu-item:hover{
  background-color:transparent;
  color: #14a53b;
}
.el-menu--horizontal>.el-menu-item.is-active{
  color: #14a53b;
}
.el-menu.el-menu--horizontal{
  border-bottom: none;
}
.little{
  font-size: 15px;
  padding: 0 15px;
}
.pad{
  padding-top: 60px;
}
.souText{
  color: #f2f2f2;
  font-size: 23px;
  height: 50%;
  line-height: 50%;
}
.el-button{
  height: 54px;
  width: 100%;
  padding: 0px;
}
.sou{
  height: 20px;
  font-size: 25px;
}
.search{
  width: 100%;
}
.el-input.is-active .el-input__inner, .el-input__inner:focus{
  border: solid 1px #5ec74d;
}
.el-button{
  background-color: #5ec74d;
  border-radius:0 5px 5px 0;
  color: #f2f2f2;
  border: solid 1px #5ec74d;
}
.el-button:active,.el-button:focus,.el-button:hover{
  background-color: #5ec74d;
  border: solid 1px #5ec74d;
}
.menu-icon{
  width: 30px;
  height: 6px;
  border-top: 5px solid #5ec74d;
  border-bottom: 5px solid #5ec74d;
  background-color: #5ec74d;
  padding: 5px 0;
  background-clip:content-box;
  float: right;
}
.el-icon-search:before{
  color: #14a53b;
}
</style>