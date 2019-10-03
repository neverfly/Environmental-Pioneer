<template>
    <div>
        <!-- carousel（轮播图） -->
        <el-row class="padTop">
            <el-col :lg="24" class="hidden-md-and-down">
                <el-carousel :interval="4000" type="card" height="400px">
                    <el-carousel-item v-for="item in items" :key="item.name">
                        <a href="item.href"><img class="carousel" :src="item.img" alt=""></a>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
            <el-col :span="24" class="hidden-lg-and-up">
                <div class="block">
                    <el-carousel trigger="click" height="200px">
                    <el-carousel-item v-for="item in items" :key="item.name">
                        <a href="item.href"><img class="carousel" :src="item.img" alt=""></a>
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
import competition2 from '@/assets/images/index_15_ss.jpg'
import competition3 from '@/assets/images/index_15_ss.jpg'

export default {
    name: 'carousel',
    data() {
        return {
            items:[
                {
                    name: "competition1",
                    href: '#',
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
</style>