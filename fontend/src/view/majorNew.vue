<template>
    <div :model="article">
        <navigation></navigation>
        <div class="article">
            <el-row>
                <el-col :lg={span:16,offset:4}  :md="{span:20,offset:2}">
                    <h1>{{article.title}}</h1>
                    <el-row style="marginBottom:20px">
                        <el-col :span="6"><span>时间: {{article.date}}</span></el-col>
                        <el-col :span="6"><span>来源: {{article.source}}</span></el-col>
                        <el-col :span="6"><span>编辑：{{article.writer}}</span></el-col>
                        <el-col :span="6"><span>阅读量：{{article.readingQua}}</span></el-col>
                    </el-row>
                    <div class="content">
                        <p>{{article.content}}</p>
                        <p><small>链接：{{article.src}}</small></p>
                    </div>
                </el-col>
                <el-col :lg="{span:16,offset:4}" :md="{span:20,offset:2}">
                    <h1 style="color:#14a53b;float:left">我要评论</h1>
                    <el-form>
                        <el-form-item>
                            <el-input type="textarea" v-model="form" rows="10" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)"></el-input>
                        </el-form-item>
                        <el-form-item style="float:right">
                            <el-button type="primary" @click="input" class="tijiao">提交</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :lg="{span:16,offset:4}" :md="{span:20,offset:2}">
                    <div class="demo-basic--circle" v-for="item in show" :key="item.name">
                        <el-divider></el-divider>
                        <div class="block"><el-avatar :size="40" src="circleUrl" style="float:left"></el-avatar></div>
                        <span style="float:left;lineHeight:40px;paddingLeft:30px;fontSize:30px">{{item.name}}</span><br><br>
                        <p style="fontSize:25px"><b>{{item.content}}</b></p>
                        <p style="paddingTop:20px">{{item.time}}</p>
                    </div>
                    <div class="block" style="float:right">
                        <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                        </el-pagination>
                    </div>
                </el-col>
                
            </el-row>
        </div>
        <footers></footers>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'majorNew',
    data() {
        return {
            article:{
                title: "",
                date: "",
                source: '',
                writer: '',
                readingQua: 0,
                src: '',
            },
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 1,
            form: '',
            show:[
                {
                    img: '',
                    name:'',
                    content:'',
                    time:''
                },{
                    img: '',
                    name:'',
                    content:'',
                    time:''
                },{
                    img: '',
                    name:'',
                    content:'',
                    time:''
                }
            ],
            pinglun:[
                {
                    img: '',
                    name:'1sss',
                    content:'1111111111111111111',
                    time:'2019-10-24'
                },{
                    img: '',
                    name:'2sss',
                    content:'1111111111111111111',
                    time:'2019-10-24'
                },{
                    img: '',
                    name:'3sss',
                    content:'1111111111111111111',
                    time:'2019-10-24'
                },{
                    img: '',
                    name:'4sss',
                    content:'1111111111111111111',
                    time:'2019-10-24'
                },{
                    img: '',
                    name:'5sss',
                    content:'1111111111111111111',
                    time:'2019-10-24'
                }
            ]

        }
    },
    created() {
        this.getArticle();
    },
    methods:{
        getArticle(){
            axios.post("http://localhost:8080/new/article")
            .then((res)=>{
                console.log(res);
                
                this.article.title=res.data.data.title;
                this.article.date=res.data.data.date;
                this.article.content=res.data.data.content;
                this.article.source=res.data.data.source;
                this.article.writer=res.data.data.writer;
                this.article.readingQua=res.data.data.readingQua;
                this.article.src=res.data.data.src;
            })
            .catch(function(error){
                console.log("error");
                
            })
        },
        input(){
            if(localStorage.getItem("token")==null){
                this.$message.error('请先登录');
            }else{
                alert(this.form);
            }
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            var page= `${val}`;
            console.log(this.show[0]);
            console.log(this.pinglun[0]);
            
            for(var i=0;i<3;i++){
                this.show[i]=this.pinglun[(page-1)*3+i];
            }
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            console.log(this.show[0]);

            var page= `${val}`;
            for(var i=0;i<3;i++){
                this.show[i]=this.pinglun[(page-1)*3+i];
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
    .content p{
        font-weight: 900;
        line-height: 30px;
        padding:0 10px 0 10px; 
    }
    .tijiao span{
        color: #ffffff !important;
    }
</style>