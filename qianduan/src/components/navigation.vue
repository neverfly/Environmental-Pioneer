<template>
    <div class="nav">
      <el-row  class="center">
        <el-col :lg="5" :offset="5">
          <img :src="logo" alt="" class="logo"/>
        </el-col>
        <el-col :lg="6" :offset="5" class="logoRight">
          <router-link to=""><img :src="people"  class="icons" alt=""/>&nbsp;<span>登录</span></router-link>
          <router-link to=""><img :src="login"  class="icons" alt=""/>&nbsp;<span>注册</span></router-link>
          <span>|| English switch</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="12" :offset="6">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><img :src="shouye" class="icon"/>首页</el-menu-item>
            <el-menu-item index="2"><img :src="news" class="icon"/>新闻</el-menu-item>
            <el-menu-item index="3"><img :src="laji" class="icon"/>垃圾分类</el-menu-item>
            <el-menu-item index="4"><img :src="jiandu" class="icon"/>监督与举报</el-menu-item>
            <el-menu-item index="5"><img :src="people" class="icon"/>个人中心</el-menu-item>
          </el-menu>
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

  export default {
    name: 'navigation',
    data() {
      return {
        shouye,
        news,
        laji,
        jiandu,
        people,
        logo,
        login,
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
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
    *{
        font-size: 25px;
    }
    .nav{
        width: 100%;
        background-color: #d4f9c5;
        padding-top: 5px;
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
    .el-menu-item{
        font-size: 18px;
        text-align: center;
        color: #14a53b;
        padding: 0 35px;
    }
    .el-menu{
        background-color: #d4f9c5;
        color: #14a53b;
    }
    .el-menu--horizontal>.el-menu-item.is-active{
        border-bottom: 2px solid #2ca41e;
        background-color: #d4f9c5;
    }
    .el-menu--horizontal>.el-menu-item:hover{
        background-color: #d4f9c5;
        color: #14a53b;
    }
    .el-menu--horizontal>.el-menu-item.is-active{
        color: #14a53b;
    }
    .el-menu.el-menu--horizontal{
        border-bottom: none;
    }
</style>