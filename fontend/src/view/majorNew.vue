<template>
    <div :model="article">
        <navigation></navigation>
        <div class="article">
            <el-row>
                <el-col :lg={span:16,offset:4} :md="24">
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
                src: ''
            }
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
    }
    p{
        text-align: left;
        font-size: 18px;
        text-indent: 36px;
        font-weight: 300;
        color: #000000;
    }
</style>