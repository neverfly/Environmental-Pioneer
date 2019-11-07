<template>
    <div>
        <!-- carousel（轮播图） -->
        <el-row class="padTop">
            <el-col :lg="{span:22,offset:1}" class="hidden-md-and-down">
                <el-carousel :interval="4000" type="card" height="450px" class="mainBanner" arrow="always">
                    <el-carousel-item v-for="item in items" class="mainBanner" :key="item.name">
                        <router-link :to="item.href"><img class="carousel" :src="item.img" alt=""></router-link>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
            <el-col :span="24" class="hidden-lg-and-up">
                <div class="block">
                    <el-carousel trigger="click" height="200px" arrow="always">
                    <el-carousel-item v-for="item in items" :key="item.name">
                        <router-link :to="item.href"><img class="carousel" :src="item.img" alt=""></router-link>
                    </el-carousel-item>
                    </el-carousel>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import search from '../components/search'
import competition1 from '@/assets/images/index_15_ss.jpg'
import competition2 from '@/assets/images/2_14.png'
import competition3 from '@/assets/images/2_116.png'

export default {
    name: 'carousel',
    data() {
        return {
            items:[
                {
                    name: "competition1",
                    href: '/game',
                    img: competition1
                },
                {
                    name: "competition2",
                    href: '#',
                    img: competition2
                },
                {
                    name: "competition3",
                    href: '#',
                    img: competition3
                }
            ]
        }
    },
    components:{
        search
    }
}
</script>
<style scoped>
  /* 轮播图 */
  .carousel{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .padTop{
    padding-top: 20px;
  }
  .el-carousel__arrow{
    width: 80px;
    height: 80px;
 }
 .el-icon-arrow-left:before{
    font-size: 50px;
 }
 .el-icon-arrow-right:before{
    font-size: 50px;
 }
 .el-carousel__button{
    width: 70px;
    height: 14px;
 }
 .mainBanner .el-carousel__arrow{
     width:50px;
     height:50px;
 }
</style>