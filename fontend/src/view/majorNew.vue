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
                            <el-input type="textarea" v-model="form"  runat="server" cols="85" rows="10" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)"></el-input>
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
                            <div class="block"><el-avatar :size="40" :src="item.img" style="float:left"></el-avatar></div>
                            <span style="float:left;lineHeight:40px;paddingLeft:30px;fontSize:30px">{{item.name}}</span><br><br>
                            <p style="fontSize:23px;marginTop:15px">{{item.content}}</p>
                            <p style="paddingTop:20px">{{item.time}}</p>
                        </div>
                        <div class="block" style="float:right">
                            <el-pagination
                            background
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage4"
                            :page-sizes="[1, 2, 3, 4]"
                            :page-size="1"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="tiaoshu">
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
            tiaoshu:'',
            showPinglun:[
                {
                    img: '',
                    name:'',
                    content:'',
                    time:'',
                },{
                    img: '',
                    name:'',
                    content:'',
                    time:'',
                },{
                    img: '',
                    name:'',
                    content:'',
                    time:'',
                },
            ],
            pinglun:[
                {
                    img: 'https://profile.csdnimg.cn/F/9/3/3_weixin_43958683',
                    name:'1sss',
                    content:'低者物取。回系色去决关回理周结就往六风同还通也响完情到管风',
                    time:'2019-10-24',
                },{
                    img: 'https://profile.csdnimg.cn/F/9/3/3_weixin_43958683',
                    name:'2sss',
                    content:'教去先究又保。局党更小半他青准候没反方响结应况则。识没参毛海车战形器自长你转群资就。',
                    time:'2019-10-24'
                },{
                    img: 'https://profile.csdnimg.cn/F/9/3/3_weixin_43958683',
                    name:'3sss',
                    content:'光养名。果众压学专采油住民八养还常联精际根。路干入',
                    time:'2019-10-24'
                },{
                    img: 'https://profile.csdnimg.cn/F/9/3/3_weixin_43958683',
                    name:'4sss',
                    content:'合得须济造。七手看展转该安率美年以把称。记志装并部快米满持始究思',
                    time:'2019-10-24'
                },{
                    img: 'https://profile.csdnimg.cn/F/9/3/3_weixin_43958683',
                    name:'5sss',
                    content:'下次打为法自。从该非发极京满总空写权如业如运。备学住马飞层',
                    time:'2019-10-24'
                },{
                    img: 'https://profile.csdnimg.cn/F/9/3/3_weixin_43958683',
                    name:'6sss',
                    content:'下次打为法自。从该非发极京满总空写权如业如运。备学住马飞层',
                    time:'2019-10-24'
                },{
                    img: 'https://profile.csdnimg.cn/F/9/3/3_weixin_43958683',
                    name:'7sss',
                    content:'下次打为法自。从该非发极京满总空写权如业如运。备学住马飞层',
                    time:'2019-10-24'
                },{
                    img: 'https://profile.csdnimg.cn/F/9/3/3_weixin_43958683',
                    name:'8sss',
                    content:'下次打为法自。从该非发极京满总空写权如业如运。备学住马飞层',
                    time:'2019-10-24'
                },{
                    img: 'https://profile.csdnimg.cn/F/9/3/3_weixin_43958683',
                    name:'9sss',
                    content:'下次打为法自。从该非发极京满总空写权如业如运。备学住马飞层',
                    time:'2019-10-24'
                },{
                    img: 'https://profile.csdnimg.cn/F/9/3/3_weixin_43958683',
                    name:'10sss',
                    content:'下次打为法自。从该非发极京满总空写权如业如运。备学住马飞层',
                    time:'2019-10-24'
                },{
                    img: 'https://profile.csdnimg.cn/F/9/3/3_weixin_43958683',
                    name:'11sss',
                    content:'下次打为法自。从该非发极京满总空写权如业如运。备学住马飞层',
                    time:'2019-10-24'
                },{
                    img: 'https://profile.csdnimg.cn/F/9/3/3_weixin_43958683',
                    name:'12sss',
                    content:'下次打为法自。从该非发极京满总空写权如业如运。备学住马飞层',
                    time:'2019-10-24'
                },{
                    img: 'https://profile.csdnimg.cn/F/9/3/3_weixin_43958683',
                    name:'12sss',
                    content:'下次打为法自。从该非发极京满总空写权如业如运。备学住马飞层',
                    time:'2019-10-24'
                }
            ]

        }
    },
    created() {
        this.getArticle();
        for(var i=0;i<3;i++){
            this.showPinglun[i]=this.pinglun[i];
        }
        //条数
        this.tiaoshu=parseInt(this.pinglun.length/3);
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
                this.showPinglun[i]=this.pinglun[(page-1)*3+i];
                console.log("少时诵诗书所");
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
    .content p{
        font-weight: 900;
        line-height: 30px;
        padding:0 10px 0 10px; 
    }
    .tijiao span{
        color: #ffffff !important;
    }
</style>