<template>
    <div :model="article">
        <navigation></navigation>
        <div class="article">
            <el-row>
                <cebian></cebian>
                <el-col :lg="{span:18,offset:3}"  :md="{span:20,offset:2}">
                    <h1>{{article.title}}</h1>
                    <el-row style="marginBottom:20px">
                        <el-col :span="6" :offset="3"><span>时间: {{article.date}}</span></el-col>
                        <el-col :span="6" :offset="6"><span>标签: {{article.source}}</span></el-col>
                        <!-- <el-col :span="6"><span>编辑：{{article.writer}}</span></el-col> -->
                        <!-- <el-col :span="6"><span>阅读量：{{article.readingQua}}</span></el-col> -->
                    </el-row>
                    <div>
                        <div class="content" v-html="article.content"></div>
                    </div>
                </el-col>
                <el-col :lg="{span:16,offset:4}" :md="{span:20,offset:2}" style="marginTop:20px">
                    <h1 style="color:#14a53b;float:left">我要评论</h1>
                    <el-form>
                        <el-form-item>
                            <el-input type="textarea" v-model="form" rows="6" resize="none" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);fontSize:25px"
                            maxlength="50"
                            show-word-limit
                            ></el-input>
                        </el-form-item>
                        <el-form-item style="float:right">
                            <el-button type="primary" @click="input" class="tijiao">提交</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :lg="{span:16,offset:4}" :md="{span:20,offset:2}">
                    <p v-if="pinglun.length==0" style="textAlign:center">暂无评论，我来发表第一篇评论！</p>
                    <div v-else>
                        <div class="demo-basic--circle" v-for="item in showPinglun" :key="item.name">
                            <el-divider></el-divider>
                            <div class="block"><el-avatar :size="40" :src="item.avatar" style="float:left"></el-avatar></div>
                            <span style="float:left;lineHeight:40px;paddingLeft:30px;fontSize:30px">{{item.user_name}}</span><br><br>
                            <p style="fontSize:23px;marginTop:15px">{{item.comment}}</p>
                            <p style="paddingTop:20px">{{item.creat_time}}</p>
                        </div>
                        <div class="block" style="float:right">
                            <el-pagination
                            background
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage1"
                            :page-sizes="[1, 2, 3, 4]"
                            :page-size="1"
                            layout="prev, pager, next, jumper"
                            :total="this.tiaoshu">
                            </el-pagination>
                        </div>
                    </div>
                </el-col>
                
            </el-row>
        </div>
        <footers></footers>
    </div>
</template>
<script>
import vue from 'vue'
import axios from 'axios'
import cebian from '../components/cebian'
export default {
    name: 'majorNew',
    data() {
        return {
            article:{
                title: "",
                date: "",
                // source: '',
                // writer: '',
                // readingQua: 0,
                // src: '',
            },
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 1,
            form: '',
            tiaoshu:'',
            showPinglun:[
            ],
            pinglun:[]
        }
    },
    components:{
        cebian
    },
    mounted() {
        var aid=this.$route.params.aid;
        this.getArticle(aid);
        this.getpinglun(aid);
    },
    methods:{
        getArticle(aids){
            console.log("获取文章信息");
            axios.get("http://localhost:8080/api/NewsViewSet/",{
                params:{
                    aid:aids
                }
            })
            .then((res)=>{
                var m=aids;
                console.log("XX( •̀ ω •́ )y新闻");
                console.log(m);
                
                console.log(res.data);
                
                this.article.title=res.data[m].results.topic;
                this.article.date=res.data[m].results.create_time;
                this.article.content=res.data[m].results.content;
                this.article.source=res.data[m].results.tag;
            })
            .catch(function(error){
                console.log("error");
            })
        },
        getpinglun(aids){
            axios.get("http://localhost:8080/api/NewsCommentViews/",{
                params:{
                    aid:aids
                }
            })
            .then((res)=>{
                console.log("pinglun");
                console.log(res.data.commentList);
                this.pinglun=res.data.commentList;
                console.log("评论");
                console.log(this.pinglun.length);
                console.log("edqwqqeq");
            })
            .catch(function(error){
                console.log("error");
            }).then(()=>{
                for(var i=0;i<3;i++){
                    this.showPinglun[i]=this.pinglun[i];
                }
                //条数
                console.log("sssssssaksdjasdjiadjio");
                this.tiaoshu=parseInt(this.pinglun.length/3);
                console.log("条数");
                console.log(this.tiaoshu);
            })
        },
        putpinglun(aids){
            axios.post("http://localhost:8080/api/NewsCommentViewSet/",{
                params:{
                    aid:aids
                }
            })
            .then((res)=>{
                console.log("pinglun");
            })
            .catch(function(error){
                console.log("error");
            })
        },
        input(){
            if(localStorage.getItem("token")==null){
                this.$message.error('请先登录');
            }else{
                this.putpinglun();
                this.$message({
                    message: "你已经成功提交评论",
                    type: 'success'
                });
            }
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            var page= `${val}`;
            console.log(this.show[0]);
            console.log(this.pinglun[0]);
            for(var i=0;i<3;i++){
                this.showPinglun[i]=this.pinglun[(page-1)*3+i];
                console.log(this.showPinglun[i]);
            }
        },
        //点击切换的数字
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            console.log("pinglunshow");
            var page= `${val}`;
            console.log(page);
            for(var i=0;i<3;i++){
                vue.set(this.showPinglun,i,this.pinglun[(page-1)*3+i])
            }
        }
    }
}
</script>
<style scoped>
    .article{
        text-align: center;
        max-width: 1500px;
        margin: 0 auto;
    }
    h1{
        text-align: center;
        margin-bottom: 20px;
        font-weight: 900;
        color: #000000;
        letter-spacing:8px;
    }
    p{
        text-align: left;
        font-size: 18px;
        text-indent: 36px;
        font-weight: 300;
        color: #000000;
    }
    .content /deep/ p{
        font-weight: 600;
        line-height: 40px;
        font-size:20px;
        text-indent: 40px;
        text-align: left; 
        color: #000000;
    }
    .el-button--primary{
        background-color: #cff9c8;
        border-color: #cff9c8;
    }
    .link{
        margin-top: 20px;
        margin-bottom: 20px;
        color: #14A53B;
    }
    .tijiao span{
        color: #ffffff !important;
    }
</style>