<template>
    <div>
        <navigation></navigation>
        <el-row class="hidden-md-and-down">
            <el-col :offset="5" :lg="14">
                <h1 class="title">分类小测验</h1>
                <p class="textCenter" style="fontSize:25px;marginTop:10px">每天分一分,生活美十分</p>
                <p style="float:right;fontSize:25px">得分：<span style="fontSize:35px">{{score}}</span></p>
            </el-col>
            <el-col :offset="5" :class="{question:true,panduan:item.flag}" :lg="14" v-for="(item,i) in items" :key="i">
                <p class="wenti">{{item.question}}</p>
                <el-radio v-model="item.answer" label="1">{{item.answer1}}</el-radio><br/>
                <el-radio v-model="item.answer" label="2">{{item.answer2}}</el-radio><br/>
                <el-radio v-model="item.answer" label="3">{{item.answer3}}</el-radio><br/>
                <el-radio v-model="item.answer" label="4">{{item.answer4}}</el-radio>
                <p></p>
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
                </el-steps>
            </el-col>
        </el-row>
        <el-row class="hidden-lg-and-up">
            <el-col :span="24">
                <h1 class="title">分类小测验</h1>
                <p class="textCenter" style="fontSize:25px;marginTop:10px">每天分一分,生活美十分</p>
                <p style="float:right;fontSize:25px">得分：<span style="fontSize:35px">{{score}}</span></p>
            </el-col>
            <el-col :class="{question:true,panduan:item.flag}" :span="24" v-for="(item,i) in items" :key="i">
                <p class="wenti">{{item.question}}</p>
                <el-radio v-model="item.answer" label="1">{{item.answer1}}</el-radio><br/>
                <el-radio v-model="item.answer" label="2">{{item.answer2}}</el-radio><br/>
                <el-radio v-model="item.answer" label="3">{{item.answer3}}</el-radio><br/>
                <el-radio v-model="item.answer" label="4">{{item.answer4}}</el-radio><br/>
            </el-col>
            <el-col :offset="3" :span="18" style="marginBottom:20px">
                <span class="jiaojuan" @click.once="tijiao">【提交】</span>
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
export default {
    name: 'game',
    data() {
        return {
            score: "  ",
            active: 1,
            show: false,
            items:[
                {
                    question:"1.湿垃圾能再利用么？",
                    answer: '',
                    answer1:'ssssss',
                    answer2:'mmmmmm',
                    answer3:'kkkkkk',
                    answer4:'wwwwww',
                    flag: false,
                    daan: '1'
                },{
                    question:"1.湿垃圾能再利用么？",
                    answer: '',
                    answer1:'ssssss',
                    answer2:'mmmmmm',
                    answer3:'kkkkkk',
                    answer4:'wwwwww',
                    flag: false,
                    daan: '1'
                },{
                    question:"1.湿垃圾能再利用么？",
                    answer: '',
                    answer1:'ssssss',
                    answer2:'mmmmmm',
                    answer3:'kkkkkk',
                    answer4:'wwwwww',
                    flag: false,
                    daan: '1'
                },{
                    question:"1.湿垃圾能再利用么？",
                    answer: '',
                    answer1:'ssssss',
                    answer2:'mmmmmm',
                    answer3:'kkkkkk',
                    answer4:'wwwwww',
                    flag: false,
                    daan: '1'
                },{
                    question:"1.湿垃圾能再利用么？",
                    answer: '',
                    answer1:'ssssss',
                    answer2:'mmmmmm',
                    answer3:'kkkkkk',
                    answer4:'wwwwww',
                    flag: false,
                    daan: '1'
                },{
                    question:"1.湿垃圾能再利用么？",
                    answer: '',
                    answer1:'ssssss',
                    answer2:'mmmmmm',
                    answer3:'kkkkkk',
                    answer4:'wwwwww',
                    flag: false,
                    daan: '1'
                },{
                    question:"1.湿垃圾能再利用么？",
                    answer: '',
                    answer1:'ssssss',
                    answer2:'mmmmmm',
                    answer3:'kkkkkk',
                    answer4:'wwwwww',
                    flag: false,
                    daan: '1'
                },{
                    question:"1.湿垃圾能再利用么？",
                    answer: '',
                    answer1:'ssssss',
                    answer2:'mmmmmm',
                    answer3:'kkkkkk',
                    answer4:'wwwwww',
                    flag: false,
                    daan: '1'
                },{
                    question:"1.湿垃圾能再利用么？",
                    answer: '',
                    answer1:'ssssss',
                    answer2:'mmmmmm',
                    answer3:'kkkkkk',
                    answer4:'wwwwww',
                    flag: false,
                    daan: '1'
                },{
                    question:"1.湿垃圾能再利用么？",
                    answer: '',
                    answer1:'ssssss',
                    answer2:'mmmmmm',
                    answer3:'kkkkkk',
                    answer4:'wwwwww',
                    flag: false,
                    daan: '1'
                }
            ]
        }
    },
    beforeMount() {
        this.isLogin();
    },
    methods: {
        tijiao:function(){
            this.$confirm("确定提交吗?","提示",{
            confirmButtonText: "确定",
            cancleButtonText: '取消',
        }).then(()=>{
            // 判断答案是否正确
            this.score=0;
                for(var i=0;i<10;i++){
                    if(this.items[i].answer==this.items[i].daan){
                        this.score+=10;
                    }else{
                        // 错误改变背景颜色
                        this.items[i].flag='true';
                    }
                } 
                this.show=true;
                // 步骤条不超过3
                if (this.active+=2 > 2) this.active=3;
        })
            
        },
        //检查是否登录
        isLogin() {
          if (sessionStorage.getItem('userName')) {
            this.$store.commit('changeName',sessionStorage.getItem('userName'))
          }else{
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
</style>