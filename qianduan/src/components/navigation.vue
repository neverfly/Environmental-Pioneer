<template>
    <div :style="navBg">
        <div>
            
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1"><img :src="shouye" class="icon"/>首页</el-menu-item>
          <el-menu-item index="2"><img :src="news" class="icon"/>新闻</el-menu-item>
          <el-menu-item index="3"><img :src="laji" class="icon"/>垃圾分类</el-menu-item>
          <el-menu-item index="4"><img :src="jiandu" class="icon"/>监督与举报</el-menu-item>
          <el-menu-item index="5"><img :src="people" class="icon"/>个人中心</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
import shouye from '@/assets/images/8_03.png'
import news from '@/assets/images/8_08.png'
import laji from '@/assets/images/8_05.png'
import jiandu from '@/assets/images/8_11.png'
import people from '@/assets/images/_0.png'

  export default {
    name: 'navigation',
    data() {
      return {
        shouye,
        news,
        laji,
        jiandu,
        people,
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
    .icon{
        width: 24px;
        height: auto;
        padding-right: 5px;
    }
    .el-menu-item{
        font-size: 14px;
        text-align: center;
    }
    .el-menu{
        background-color: #d4f9c5;
        padding-left: calc(50% - 291px);
    }
    .el-menu--horizontal>.el-menu-item.is-active{
        border-bottom: 2px solid #2ca41e;
        background-color: #d4f9c5;
        color: #909399;
    }
    .el-menu--horizontal>.el-menu-item:hover{
        background-color: #d4f9c5;
        color: #909399;
    }
</style>