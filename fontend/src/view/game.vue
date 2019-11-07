<template>
    <div>
        <navigation></navigation>
        
        <el-row class="hidden-md-and-down">
            <el-col :lg="5" class="hidden-md-and-down fixed"><img :src="leftImg" class="fixedL" alt=""></el-col>
            <el-col :lg="5" class="hidden-md-and-down fixed"><img :src="rightImg" class="fixedR" alt=""></el-col>

            <el-col :offset="5" :lg="14">
                <h1 class="title">分类小测验</h1>
                <p class="textCenter" style="fontSize:25px;marginTop:10px">每天分一分,生活美十分</p>
                <p style="float:right;fontSize:25px">得分：<span style="fontSize:35px">{{score}}</span></p>
            </el-col>
            <el-col :offset="5" :class="{question:true,panduan:item.flag}" :lg="14" v-for="(item,i) in items" :key="i">
                <p class="wenti">{{i+1}}{{item.question}}？</p>
                <el-radio v-model="item.choice" label="1">{{item.choice1}}。</el-radio><br/>
                <el-radio v-model="item.choice" label="2">{{item.choice2}}。</el-radio><br/>
                <el-radio v-model="item.choice" label="3">{{item.choice3}}。</el-radio><br/>
                <el-radio v-model="item.choice" label="4">{{item.choice4}}。</el-radio>
                <p v-if="show" style="fontSize:25px;fontWeight:700">正确答案为：{{item.daan}}</p>
            </el-col>
            <el-col :offset="10" :lg="4" style="marginBottom:20px">
                <span class="jiaojuan" @click.once="tijiao">【提交】</span>
                <span class="jiaojuan">【状态<i class="el-icon-caret-bottom" style="fontSize:25px"></i>】</span>
            </el-col>
            <el-col :offset="9" :lg="6">
                <el-steps :space="200" :active="active" finish-status="success">
                    <el-step title="已答题"></el-step>
                    <el-step title="已提交"></el-step>
                    <el-step title="已审阅"></el-step>
                    <span style="fontSize:35px">得分：{{score}}</span>
                </el-steps>
            
            </el-col>
        </el-row>
        <el-row class="hidden-lg-and-up">
            <el-col :span="24">
                <h1 class="title">分类小测验</h1>
                <p class="textCenter" style="fontSize:25px;marginTop:10px">每天分一分,生活美十分</p>
                <p style="float:right;fontSize:25px">得分：<span style="fontSize:35px">{{score}}</span></p>
            </el-col>
            <el-col :class="{question:true,panduan:item.flag}" :span="24" v-for="(item,i) in items" :key="i" style="paddingBottom:230px">
                <p class="wenti">{{i+1}}{{item.question}}？</p>
                <el-radio v-model="item.choice" label="1">{{item.choice1}}。</el-radio><br/>
                <el-radio v-model="item.choice" label="2">{{item.choice2}}。</el-radio><br/>
                <el-radio v-model="item.choice" label="3">{{item.choice3}}。</el-radio><br/>
                <el-radio v-model="item.choice" label="4">{{item.choice4}}。</el-radio><br/>
                <p v-if="show" style="fontSize:25px;fontWeight:600">正确答案为：{{item.daan}}</p>
            </el-col>
            <el-col :offset="3" :span="18" style="marginBottom:20px">
                <span class="jiaojuan" @click="tijiao">【提交】</span>
                <span class="jiaojuan">【状态<i class="el-icon-caret-bottom" style="fontSize:25px"></i>】</span>
            </el-col>
            <el-col :offset="3" :span="21">
                <el-steps :space="200" :active="active" finish-status="success">
                    <el-step title="已答题"></el-step>
                    <el-step title="已提交"></el-step>
                    <el-step title="已审阅"></el-step>
                </el-steps>
            </el-col>
        </el-row>
        <footers></footers>
    </div>
</template>
<script>
import axios from 'axios'
import rankingList from '../components/rankingList'
import leftImg from '../assets/images/1.png'
import rightImg from '../assets/images/2.png'

export default {
    name: 'game',
    data() {
        return {
            score: "  ",
            active: 1,
            show: false,
            leftImg,
            rightImg,
            items:[
                {
                    question:"",
                    choice: '',
                    choice1:'',
                    choice2:'',
                    choice3:'',
                    choice4:'',
                    flag: false,
                    daan: ''
                },{
                    question:"",
                    choice: '',
                    choice1:'',
                    choice2:'',
                    choice3:'',
                    choice4:'',
                    flag: false,
                    daan: ''
                },{
                    question:"",
                    choice: '',
                    choice1:'',
                    choice2:'',
                    choice3:'',
                    choice4:'',
                    flag: false,
                    daan: ''
                },{
                    question:"",
                    choice: '',
                    choice1:'',
                    choice2:'',
                    choice3:'',
                    choice4:'',
                    flag: false,
                    daan: ''
                },{
                    question:"",
                    choice: '',
                    choice1:'',
                    choice2:'',
                    choice3:'',
                    choice4:'',
                    flag: false,
                    daan: ''
                },{
                    question:"",
                    choice: '',
                    choice1:'',
                    choice2:'',
                    choice3:'',
                    choice4:'',
                    flag: false,
                    daan: ''
                },{
                    question:"",
                    choice: '',
                    choice1:'',
                    choice2:'',
                    choice3:'',
                    choice4:'',
                    flag: false,
                    daan: ''
                },{
                    question:"",
                    choice: '',
                    choice1:'',
                    choice2:'',
                    choice3:'',
                    choice4:'',
                    flag: false,
                    daan: ''
                },{
                    question:"",
                    choice: '',
                    choice1:'',
                    choice2:'',
                    choice3:'',
                    choice4:'',
                    flag: false,
                    daan: ''
                },{
                    question:"",
                    choice: '',
                    choice1:'',
                    choice2:'',
                    choice3:'',
                    choice4:'',
                    flag: false,
                    daan: ''
                }
            ]
        }
    },
    components:{
        rankingList
    },
    beforeMount() {
        this.isLogin();
        this.getquestion();
    },
    methods: {
        tijiao:function(){
            console.log("ssssssssssssss");
            
            this.$confirm("确定提交吗?","提示",{
            confirmButtonText: "确定",
            cancleButtonText: '取消',
        }).then(()=>{
            // 判断答案是否正确
            this.score=0;
                for(let i=0;i<10;i++){
                    var m;
                    switch(this.items[i].daan){
                        case 'A': m='1';break;
                        case 'B': m='2';break;
                        case 'C': m='3';break;
                        case 'D': m='4';break;
                    }
                    if(this.items[i].choice==m){
                        this.score+=10;
                    }else{
                        // 错误改变背景颜色
                        this.items[i].flag='true';
                    }
                } 
                this.show=true;
                this.show=true;
                    this.$notify({
                    title: '成绩是'+this.score+"分",
                    message: "继续努力哟",
                    type: 'success'
                    });
                // 步骤条不超过3
                if (this.active+=2 > 2) this.active=3;
        }).catch(function(){
                console.log("error");
            })
        },
        // 获取问题
        getquestion(){
            axios.post("http://localhost:8080/game/question")
            .then((res)=>{
                for(var i=0;i<10;i++){
                    this.items[i].question=res.data.objectList[i].question;
                    this.items[i].choice1=res.data.objectList[i].choice1;
                    this.items[i].choice2=res.data.objectList[i].choice2;
                    this.items[i].choice3=res.data.objectList[i].choice3;
                    this.items[i].choice4=res.data.objectList[i].choice4;
                    this.items[i].daan=res.data.objectList[i].daan;
                }
            })
            .catch(function(error){
                console.log("error");
                
            })
        },
        //检查是否登录
        isLogin() {
            if(localStorage.getItem("token")==null){
                this.$router.push("/login");
            }
        }

    }
}
</script>
<style scoped>
    .title{
        text-align: center;
        border:1px solid #14a53b;
        font-size: 30px;
    }
    .question{
        height: 200px;
        background-color: #ccf0cc;
        margin-bottom: 15px;
        padding: 10px;
    }
    .wenti{
        color: #17a63d;
        font-size: 30px;
    }
    .jiaojuan{
        font-size: 25px;
    }
    .panduan{
        background-color: #f8b4b4;
    }
    .fixedL{
        position: fixed;
        left: 0;
        top: 30%;
        width: 12%;
    }
    .fixedR{
        position: fixed;
        right: 0;
        top: 30%;
        width: 12%;
    }
</style>