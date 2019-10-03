<template>
    <div style="margin: 0 auto">
        <!-- 导航栏 -->
        <navigation></navigation>
        <!-- 搜索框 -->
        <search></search>
        <!-- 轮播图 -->
        <carousel></carousel>
        <!-- 主要信息 -->
        <h1 class="textCenter mainInfo">主要信息</h1><hr/>
        <el-row :gutter="20">
            <el-col class="hidden-md-and-down" :offset="4" :lg="3">
                <rankingList></rankingList>
            </el-col>
            <el-col class="hidden-lg-and-up" :lg="3">
                <rankingList></rankingList>
            </el-col>
            <el-col :lg="5">
                <recentNews></recentNews>
            </el-col>
            <el-col :lg="5">
                <news></news>
            </el-col>
            <el-col :lg="3">
                <quickSort class="over"></quickSort>
            </el-col>
        </el-row>
        <img :src="xianjie" alt="" style="width:100%"/>
        <h1 class="textCenter mainInfo">常见垃圾</h1><hr/>
        <el-row :gutter="20"> 
            <el-col class="hidden-md-and-down" :offset="4" :lg="8">
            </el-col>
            <el-col></el-col>
        </el-row>
        <footers></footers>
    </div>
</template>
<script>
import competition1 from '@/assets/images/index_15.png'
import competition2 from '@/assets/images/index_15.png'
import xianjie from '@/assets/images/6_02.png'

import search from '../components/search'
import carousel from '../components/carousel'
import rankingList from '../components/rankingList'
import recentNews from '../components/recentNews'
import news from '../components/news'
import quickSort from '../components/quickSort'
import footers from '../components/footers'

export default {
    name: 'mainPage',
    data() {
        return {
            xianjie
        }
    },
    components:{
        search,
        carousel,
        rankingList,
        recentNews,
        news,
        quickSort,
        footers
    }
}
</script>
<style scoped>
  /* 字体居中 */
  .textCenter{
    text-align: center;
    font-family: MicrosoftYaHei;
	font-size: 35px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 4px;
	color: #8bbf50;
  }
  .mainInfo{
    padding-top: 20px;
  }
  .over{
      width: 100%;
      height: auto;
  }
  hr{
      width: 200px;
      height: 3px;
      color: #8bbf50;
      margin: 0 auto;
      background-color: #8bbf50;
      margin-bottom: 20px;
  }
</style>