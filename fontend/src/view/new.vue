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
                    <el-tab-pane label="精选推荐">
                        <el-row v-for="(item,i) in items1" :key="i" :gutter="20"><br>
                            <el-col :lg="4"><br>
                                <img :src="item.image" alt="" width="100%" class="lajiNew"  fit="contain"/>
                            </el-col><br>
                            <el-col :lg="{span:20}">
                                <router-link :to="item.link+'/'+item.aid">
                                    <h2>{{item.title}}</h2><br>
                                    <p>{{item.content|ellipsis}}</p>
                                    <span>{{item.date}}</span><span style="float:right">浏览量：{{item.liulan}}</span>
                                </router-link>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="每日新闻">
                        <el-row v-for="(item,i) in items2" :key="i" :gutter="20"><br>
                            <el-col :lg="4"><br>
                                <img :src="item.image"  width="100%" alt="" class="lajiNew" fit="contain">
                            </el-col><br>
                            <el-col :lg="{span:20}">
                                <router-link :to="item.link+'/'+item.aid">
                                    <h2>{{item.title}}</h2><br>
                                    <p>{{item.content|ellipsis}}</p>
                                    <span>{{item.date}}</span><span style="float:right">浏览量：{{item.liulan}}</span>
                                </router-link>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="热点top">
                        <el-row v-for="(item,i) in items3" :key="i" :gutter="20"><br>
                            <el-col :lg="4"><br>
                                <img :src="item.image"  width="100%" alt="" class="lajiNew" fit="contain">
                            </el-col><br>
                            <el-col :lg="{span:20}">
                                <router-link :to="item.link+'/'+item.aid">
                                    <h2>{{item.title}}</h2><br>
                                    <p>{{item.content | ellipsis}}</p>
                                    <span>{{item.date}}</span><span style="float:right">浏览量：{{item.liulan}}</span>
                                </router-link>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="往期新闻">
                        <el-row v-for="(item,i) in items4" :key="i" :gutter="20"><br>
                            <el-col :lg="{span:4}"><br>
                                <img :src="item.image"  width="100%" alt="" class="lajiNew" fit="contain">
                            </el-col><br>
                            <el-col :lg="{span:20}">
                                <router-link :to="item.link+'/'+item.aid">
                                    <h2>{{item.title}}</h2><br>
                                    <p>{{item.content | ellipsis}}</p>
                                    <span>{{item.date}}</span><span style="float:right">浏览量：{{item.liulan}}</span>
                                </router-link>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="其他新闻">
                        <el-row v-for="(item,i) in items5" :key="i" :gutter="20"><br>
                            <el-col :lg="{span:4}"><br>
                                <img :src="item.image" alt=""  width="100%" class="lajiNew" fit="contain">
                            </el-col><br>
                            <el-col :lg="{span:20}">
                                <router-link :to="item.link+'/'+item.aid">
                                    <h2>{{item.title}}</h2><br>
                                    <p>{{item.content | ellipsis}}</p>
                                    <span>{{item.date}}</span><span style="float:right">浏览量：{{item.liulan}}</span>
                                </router-link>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
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
            <el-col :lg="{span:5,offset:5}" :md="{span:22}">
                <el-row>
                    <el-col style="borderLeft:8px solid #14a53b;marginRight:5px;marginBottom:10px" :lg="18" :md="20">
                        <div >
                            <h2>相关新闻</h2><br>
                            <span>RELATED REPORT</span>
                        </div>
                    </el-col>
                    <el-col :lg="5" class="hidden-md-and-down">
                    </el-col>
                    <el-col :lg="24" :md="{span:22,offset:1}">
                        <div :style="{backgroundImage: 'url('+xiangguan+')',width:'91%',height:'250px',backgroundSize:'cover'}">
                            <div class="bgColor">
                                <span class="xiangguanTitle">垃圾分类知识介绍</span>
                                <p class="xiangguancon">垃圾分类是社会进步和生态文明的标志，是人人均可参与其中来保护环境和改善环境的方式。我们追求进步，崇尚文明，希望有碧水蓝天净土，共建美好家园。</p>
                                <p><a href="http://www.sohu.com/a/328261782_100019774" style="color:#000000;float:right;backgroundColor:#E7E7E7;fontWeight:bold" target="_blank">了解详情></a></p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            
            <!-- 中间新闻 -->
            <el-col :lg="5">
                 <el-row>
                    <el-col style="borderLeft:8px solid #14a53b;paddingLeft:5px;marginBottom:10px" :span="18">
                        <div >
                            <h2>近期新闻</h2><br>
                            <span>RELATED REPORT</span>
                        </div>
                    </el-col>
                    <el-col :span="5" class="hidden-md-and-down">
                    </el-col>
                    <el-col :lg="24" class="hidden-md-and-down">
                        <ul>
                            <li v-for="(item,i) in items6" :key="i" style="width:100%;height:50px">
                                <p class="middleNewTitle"><span class="yuan">&nbsp;</span>&nbsp;{{item.title | less}}</p>
                                
                                <span><router-link :to="item.link+'/'+item.aid" href="" style="float:right;fontSize:10px;paddingRight:20px;marginTop:2px">了解详情></router-link></span>
                            </li>
                        </ul>
                    </el-col>
                    <!-- 中间新闻 -->
                    <el-col :span="22" :offset="1" class="hidden-lg-and-up" style="marginBottom:10px">
                        <ul>
                            <li v-for="(item,i) in items6" :key="i" style="width:100%;height:50px">
                                <p class="middleNewTitle"><span class="yuan">&nbsp;</span>&nbsp;{{item.title | less}}</p>
                                <p><router-link :to="item.link+'/'+item.aid" style="float:right;fontSize:20px;paddingRight:20px">了解详情></router-link></p>
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
import changtu from '../assets/images/new_3.png'
import xiangguan from '../assets/images/new_1.png'
import welcome from '../assets/images/new_4.png'
import imgNew from '../assets/images/new_1.png'

import axios from 'axios'

export default {
    name: "new",
    components:{
        recentNews
    },
    data() {
        return {
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            changtu ,
            xiangguan,
            imgNew,
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
            ],
            items1:[
                {
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '894',
                    aid:0,
                    image:'',
                },{
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '324',
                    image:'',
                    aid:1
                },{
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '534',
                    image:'',
                    aid:2
                }
            ],
            items2:[
                {
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '894',
                    image:'',
                    aid:3
                },{
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '324',
                    image:'',
                    aid:4
                },{
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '534',
                    image:'',
                    aid:5
                }
            ],
            items3:[
                {
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '894',
                    image:'',
                    aid:6
                },{
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '324',
                    image:'',
                    aid:7
                },{
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '534',
                    image:'',
                    aid:8
                }
            ],
            items4:[
                {
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '894',
                    aid:9
                },{
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '324',
                    image:'',
                    aid:10
                },{
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '534',
                    image:'',
                    aid:11
                }
            ],
            items5:[
                {
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '673',
                    image:'',
                    aid:12
                },{
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '235',
                    image:'',
                    aid:13
                },{
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '146',
                    image:'',
                    aid:14
                }
            ],
            items6:[
                {
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '673',
                    image:'',
                    aid:0
                },{
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '235',
                    image:'',
                    aid:1
                },{
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '146',
                    image:'',
                    aid:2
                },{
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '146',
                    image:'',
                    aid:3
                },{
                    title: '',
                    content: '',
                    link:'/majorNew',
                    date: '',
                    liulan: '146',
                    image:'',
                    aid:4
                }
            ],
            newLists:[]    
        }
    },
    filters: {
        ellipsis(value) {
            if (!value) return "";
            if (value.length > 200) {
                return value.slice(0, 200) + "...";
            }
            return value;
        },
        less(value) {
            if (!value) return "";
            if (value.length > 14) {
                return value.slice(0, 14) + "...";
            }
            return value;
        }
    },
        
    mounted(){
      this.getnewList();
    },
    methods: {
        getnewList(){
            axios.get("http://localhost:8080/api/NewsViewSet/",{
                params:{
                    ordering:localStorage.getItem("token")
                }
            })
            .then((res)=>{
                console.log("获取新闻信息");
                console.log(res.data);
                this.newLists=res.data;
                console.log(this.newLists);
                //把获取的新闻分开
                for(var i=0,j=0;i<3;i++,j++){
                    this.items1[j].title=this.newLists[i].results.topic;
                    this.items1[j].content=this.newLists[i].results.content;
                    this.items1[j].image=this.newLists[i].results.image;
                    this.items1[j].date=this.newLists[i].results.create_time;
                }
                for(var i=3,j=0;i<6;i++,j++){
                    this.items2[j].title=this.newLists[i].results.topic;
                    this.items2[j].content=this.newLists[i].results.content;
                    this.items2[j].image=this.newLists[i].results.image;
                    this.items2[j].date=this.newLists[i].results.create_time;
                }
                for(var i=6,j=0;i<9;i++,j++){
                    this.items3[j].title=this.newLists[i].results.topic;
                    this.items3[j].content=this.newLists[i].results.content;
                    this.items3[j].image=this.newLists[i].results.image;
                    this.items3[j].date=this.newLists[i].results.create_time;
                }
                for(var i=9,j=0;i<12;i++,j++){
                    this.items4[j].title=this.newLists[i].results.topic;
                    this.items4[j].content=this.newLists[i].results.content;
                    this.items4[j].image=this.newLists[i].results.image;
                    this.items4[j].date=this.newLists[i].results.create_time;
                }
                for(var i=12,j=0;i<15;i++,j++){
                    this.items5[j].title=this.newLists[i].results.topic;
                    this.items5[j].content=this.newLists[i].results.content;
                    this.items5[j].image=this.newLists[i].results.image;
                    this.items5[j].date=this.newLists[i].results.create_time;
                }
                for(var i=0,j=0;i<5;i++,j++){
                    this.items6[j].title=this.newLists[i].results.topic;
                    this.items6[j].content=this.newLists[i].results.content;
                    this.items6[j].image=this.newLists[i].results.image;
                    this.items6[j].date=this.newLists[i].results.create_time;
                }
                console.log(this.newLists);
            })
            .catch(function(error){
                console.log("error");
            })
        },
    },
}
</script>
<style scoped>
 .recentNews p{
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
@media (min-width:1000px){
    /deep/ .el-tabs__item{
        padding:0 75px !important;
    }
}
</style>