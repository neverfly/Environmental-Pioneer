<template>
    <div>
        <navigation></navigation>
        <el-row>
            <el-col class="hidden-md-and-down" :lg="{span:4,offset:4}" :md="24" style="marginRight:10px">
                <div class="borLeft"><h1>新闻资讯</h1></div>
                <recentNews></recentNews>
            </el-col>
            <el-col :lg="12" style="marginTop:10px;marginBottom:10px">
                <el-tabs type="border-card">
                    <el-tab-pane label="常见垃圾"><gezhonglaji></gezhonglaji></el-tab-pane>
                    <el-tab-pane label="可回收垃圾"><gezhonglaji></gezhonglaji></el-tab-pane>
                    <el-tab-pane label="湿垃圾"><gezhonglaji></gezhonglaji></el-tab-pane>
                    <el-tab-pane label="干垃圾"><gezhonglaji></gezhonglaji></el-tab-pane>
                    <el-tab-pane label="有害垃圾"><gezhonglaji></gezhonglaji></el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
        <!-- 长图 -->
        <el-row>
            <el-col class="hidden-md-and-down" :lg="{span:16,offset:4}" :md="24" style="marginTop:20px;marginBottom:20px">
                <img :src="changtu" alt="" style="width:100%">
            </el-col>
        </el-row>
        <el-row style="width:100%">
            <!-- 左侧新闻 -->
            <!-- pc -->
            <el-col :lg="{span:5,offset:5}" :md="{span:22}">
                <el-row>
                    <el-col style="borderLeft:8px solid #14a53b;marginRight:5px;marginBottom:10px" :lg="18" :md="20">
                        <div >
                            <h2>相关新闻</h2><br>
                            <span>RELATED REPORT</span>
                        </div>
                    </el-col>
                    <el-col :lg="5" class="hidden-md-and-down">
                        <span style="color:#666666">更多></span>
                    </el-col>
                    <el-col :lg="24" :md="{span:22,offset:1}">
                        <div :style="{backgroundImage: 'url('+xiangguan+')',width:'91%',height:'250px',backgroundSize:'cover'}">
                            <div class="bgColor">
                                <span class="xiangguanTitle">第十届中国国际纳米技术产业博览会10月将隆</span>
                                <p class="xiangguancon">2018年第九届纳博会组织了14场专业报,221个行业报告，邀请国内外院士15人。</p>
                                <p><a href="" style="color:#000000;float:right;backgroundColor:#E7E7E7;fontWeight:bold">了解详情></a></p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            
            <!-- 中间新闻 -->
            <!-- pc -->
            <el-col :lg="5">
                 <el-row>
                    <el-col style="borderLeft:8px solid #14a53b;paddingLeft:5px;marginBottom:10px" :span="18">
                        <div >
                            <h2>近期活动</h2><br>
                            <span>RELATED REPORT</span>
                        </div>
                    </el-col>
                    <el-col :span="5" class="hidden-md-and-down">
                        <span style="color:#666666">更多></span>
                    </el-col>
                    <el-col :lg="24" class="hidden-md-and-down">
                        <ul>
                            <li v-for="item in items" :key="item.key" style="width:100%;height:50px">
                                <p class="middleNewTitle"><span class="yuan">&nbsp;</span>&nbsp;{{item.title}}</p>
                                &nbsp;&nbsp;&nbsp;<span  class="middleCon">时间：{{item.date}}</span>&nbsp;
                                <span  class="middleCon">{{item.location}}</span>
                                <span><a href="" style="float:right;fontSize:20px;paddingRight:20px;marginTop:-5px">了解详情></a></span>
                            </li>
                        </ul>
                    </el-col>
                    <!-- 中间新闻mobile -->
                    <el-col :span="22" :offset="1" class="hidden-lg-and-up" style="marginBottom:10px">
                        <ul>
                            <li v-for="item in items" :key="item.key" style="width:100%;height:50px">
                                <p class="middleNewTitle"><span class="yuan">&nbsp;</span>&nbsp;{{item.title}}</p>
                                <p><a href="" style="float:right;fontSize:20px;paddingRight:20px">了解详情></a></p>
                            </li>
                        </ul>
                    </el-col>
                </el-row>
            </el-col>
            <!-- 右边新闻 -->
            <el-col :lg="5" :md="24">
                <el-row>
                    <el-col style="borderLeft:8px solid #14a53b;paddingLeft:5px;marginBottom:10px" :span="18">
                        <div >
                            <h2>咨询投稿</h2><br>
                            <span>POST SUBMISSION</span>
                        </div>
                    </el-col>
                </el-row>
                <img style="paddingLeft:7%;paddingRight:7%;width:86%" :src="welcome" alt="">
                <span class="welcome">加入我们></span>
            </el-col>
        </el-row>
        <footers></footers>
    </div>
</template>
<script>
import recentNews from '../components/recentNews'
import gezhonglaji from '../components/gezhonglaji'
import changtu from '../assets/images/new_3.png'
import xiangguan from '../assets/images/new_1.png'
import welcome from '../assets/images/new_4.png'

export default {
    name: "new",
    components:{
        recentNews,
        gezhonglaji
    },
    data() {
        return {
            changtu ,
            xiangguan,
            welcome,
            items:[
                {
                    title: 'CERE 2019中国生态修复展览会',
                    date: '2019-10-11 ',
                    location: '展馆：北京国际展览中心',
                    href: ''
                },{
                    title: 'CERE 2019中国生态修复展览会',
                    date: '2019-10-11 ',
                    location: '展馆：北京国际展览中心',
                    href: ''
                },{
                    title: 'CERE 2019中国生态修复展览会',
                    date: '2019-10-11 ',
                    location: '展馆：北京国际展览中心',
                    href: ''
                },{
                    title: 'CERE 2019中国生态修复展览会',
                    date: '2019-10-11 ',
                    location: '展馆：北京国际展览中心',
                    href: ''
                },{
                    title: 'CERE 2019中国生态修复展览会',
                    date: '2019-10-11 ',
                    location: '展馆：北京国际展览中心',
                    href: ''
                }
            ]        
        }
    },
}
</script>
<style scoped>
recentNews p{
    line-height: 30px;
    height: 30px;
}
.borLeft{
    border-left: 10px solid #14a53b;
    padding-left: 10px;
}

.xiangguanTitle{
     font-size:14px;
     color:#000000;
     font-weight:bold;
     line-height: 40px;
     height: 40px;
}
.xiangguancon{
    text-indent: 20px;
    font-size: 14px;
    color: #000000;
}
.middleNewTitle{
    font-size: 20px;
    color: #000000;
     font-weight:550;
}
.middleCon{
    color: #000000;
    font-size: 10px;
}
.welcome{
     float:right;
     margin-right: 7%;
     background-color:#2fb04f;
     color: #ffffff;
     font-size: 20px;
}
.bgColor{
    background-color: #ffffff;
    opacity: 0.82;
    position: absolute;
    bottom: 0;
    width: 91%;
}
.bgColorMo{
    background-color: #ffffff;
    opacity: 0.82;
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>