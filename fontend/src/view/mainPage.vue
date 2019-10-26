<template>
    <div style="margin: 0 auto">
        <!-- 导航栏 -->
        <navigation></navigation>

        <!-- 轮播图 -->
        <carousel></carousel>


        <!-- 主要信息 -->
        <h1 class="textCenter mainInfo">主要信息</h1><hr/>
        <el-row :gutter="20">
            <el-col class="hidden-md-and-down" :lg={span:3,offset:4}>
                <rankingList></rankingList>
            </el-col>
            <el-col :lg="5">
                <!-- 近期新闻 -->
                <recentNews></recentNews>
            </el-col>
            <el-col :lg="5">
                <!-- 新闻 -->
                <news></news>
            </el-col>
            <el-col :lg="3">
                <quickSort class="over"></quickSort>
            </el-col>
        </el-row>
        <!-- 一长串图 -->
        <img :src="xianjie" alt="" style="width:100%;marginTop:20px"/>


        <!-- 常见垃圾 -->
        <h1 class="textCenter mainInfo">常见垃圾</h1><hr/>
        <el-row> 
            <!-- 常见垃圾PC -->
            <el-col class="hidden-md-and-down" :lg={span:8,offset:4}>
                <div align="center">
                    <img :src="laji" alt=""/>
                    <div style="width:60%;height:250px;backgroundColor:#f0e0ba">
                        <img :src="lajiImg" alt=""/>
                    </div>
                    <p class="duanluo1" style="color:#6c4b12;backgroundColor:#f2c679">废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。</p>
                </div>
            </el-col>
            <el-col class="hidden-md-and-down" :lg="8">
                <div align="center">
                    <img :src="suliao" alt=""/>
                    <div style="width:60%;height:250px;backgroundColor:#c5e2ec">
                        <img :src="suliaoImg" alt=""/>
                    </div>
                    <p class="duanluo1" style="color: #0e3e7e;backgroundColor:#91befa;">破坏免疫力。有些塑料袋和纸质餐盒会添加一些增白剂、荧光粉，它们除了有潜在致癌性，还会破坏人体的免疫力。引起血液系统疾病。非食品用塑料袋中含有的聚氯乙烯，经高温加热后，就易产生二恶英等有害物质，引起肝肾以及中枢神经系统、血液系统疾病。</p>
                </div>
            </el-col>
            
            <!-- 常见垃圾移动 -->
            <el-col class="hidden-lg-and-up" :span=24>
                <div align="center">
                    <img :src="laji" alt="" style="width:80%"/>
                    <div style="width:100%;height:250px;backgroundColor:#f0e0ba">
                        <img :src="lajiImg" alt=""/>
                    </div>
                    <p style="color:#6c4b12;backgroundColor:#f2c679" class="duanluo2">废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。</p>
                </div><br/>
            </el-col>
            <el-col class="hidden-lg-and-up" :span="24">
                <div align="center">
                    <img :src="suliao" alt="" style="width:80%"/>
                    <div style="width:100%;height:250px;backgroundColor:#c5e2ec">
                        <img :src="suliaoImg" alt=""/>
                    </div>
                    <p class="duanluo2" style="color: #0e3e7e;backgroundColor:#91befa;">破坏免疫力。有些塑料袋和纸质餐盒会添加一些增白剂、荧光粉，它们除了有潜在致癌性，还会破坏人体的免疫力。引起血液系统疾病。非食品用塑料袋中含有的聚氯乙烯，经高温加热后，就易产生二恶英等有害物质，引起肝肾以及中枢神经系统、血液系统疾病。</p>

                </div>
            </el-col>
        </el-row>


        <el-row>
            <!-- 垃圾未分类PC -->
            <el-col class="hidden-md-and-down" :lg="16" :offset="4">
                <div>
                    <h1 class="textCenter">垃圾未分类危害</h1><hr/>
                    <p class="duanluo">垃圾分类这场战争的打响，已是迫在眉睫！早在2004年，中国就超越了美国，成为了世界第一垃圾制造国。而中国目前的全国生活垃圾年产量为4亿吨左右，还以大约每年8%的速度递增着。在2010年，《垃圾围城》这部纪录片震惊了世界。片中展示了光鲜亮丽的北京被周围或大或小的垃圾场包围，这些垃圾场组成了北京的“七环”。2018年9月16日，香港杏花新城的商场一层被倒灌的海水淹没。大量垃圾被冲入商场堆在扶梯口。这场台风引发的海水倒灌，把大量海洋中的垃圾冲入城市，许多地势低洼的地方变成了垃圾堆。海水借着台风，把人类倾倒在海里的垃圾成吨地还了回来，密密麻麻，塑料遍地，触目惊心……<br/><a href="" style="float: right;fontSize:20px">点击阅读全文></a></p>
                </div>
            </el-col>

            <!-- 垃圾未分类移动 -->
            <el-col class="hidden-lg-and-up" :span="24">
                <div>
                    <h1 class="textCenter">垃圾未分类危害</h1><hr class="hrLong" />
                    <p class="duanluo3">垃圾分类这场战争的打响，已是迫在眉睫！早在2004年，中国就超越了美国，成为了世界第一垃圾制造国。而中国目前的全国生活垃圾年产量为4亿吨左右，还以大约每年8%的速度递增着。在2010年，《垃圾围城》这部纪录片震惊了世界。片中展示了光鲜亮丽的北京被周围或大或小的垃圾场包围，这些垃圾场组成了北京的“七环”。2018年9月16日，香港杏花新城的商场一层被倒灌的海水淹没。大量垃圾被冲入商场堆在扶梯口。这场台风引发的海水倒灌，把大量海洋中的垃圾冲入城市，许多地势低洼的地方变成了垃圾堆。海水借着台风，把人类倾倒在海里的垃圾成吨地还了回来，密密麻麻，塑料遍地，触目惊心……<br/><a href="" style="float: right;fontSize:20px">点击阅读全文></a></p>
                </div>
            </el-col>
        </el-row>
        <footers></footers>
    </div>
</template>
<script>
import xianjie from '@/assets/images/6_02.png'
import laji from '@/assets/images/5_15.png'
import suliao from '@/assets/images/5_18.png'
import lajiImg from '@/assets/images/2_19.png'
import suliaoImg from '@/assets/images/2_17.png'


import carousel from '../components/carousel'
import rankingList from '../components/rankingList'
import recentNews from '../components/recentNews'
import news from '../components/news'
import quickSort from '../components/quickSort'

export default {
    name: 'mainPage',
    data() {
        return {
            xianjie,
            suliao,
            laji,
            suliaoImg,
            lajiImg
        }
    },
    components:{
        carousel,
        rankingList,
        recentNews,
        news,
        quickSort
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
      border: 0;
  }
  .hrLong{
      width: 300px !important;
      height: 3px;
      color: #8bbf50;
      margin: 0 auto;
      background-color: #8bbf50;
      margin-bottom: 20px;
  }
  .duanluo1{
      padding: 5%;
      font-size: 14px;
      width:50%;
      height:130px;
      text-indent: 28px;
  }
  .duanluo2{
      font-size: 14px;
      width:100%;
      height:100px;
      text-indent: 28px;

  }
  .duanluo{
      padding: 5%;
      font-size: 20px;
      height:200px;
      background-color: #e8f6e3;
      color: #76c55b;
      text-indent: 28px;
  }
  .duanluo3{
      padding: 5%;
      font-size: 20px;
      width:90%;
      height: 100%;
      background-color: #e8f6e3;
      height: 100%;
      color: #76c55b;
      text-indent: 28px;
  }

</style>