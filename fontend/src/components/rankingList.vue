<template>
    <div class="liBorder">
        <el-row>
            <h2 class="textCenter bgColor" style="display:block">环保排行榜</h2>
            <ul>
                <li>
                    <span style="paddingLeft:10px"><strong>姓名</strong></span>
                    <span class="floatRi"><strong>成绩</strong></span>
                </li>
                <li v-for="item in items" :key="item.num">
                    <span>{{item.num}}.</span>
                    <span>{{item.name}}</span>
                    <span class="floatRi">{{item.grade}}</span>
                </li>
            </ul>
            <el-menu router class="el-menu-demo" mode="horizontal">
                <el-menu-item @click="isLogin"><h1 class="textCenter bgColor">立即参赛</h1></el-menu-item></el-menu>
                <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
                <span>参赛需先登录,是否登录?</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false;toLogin()">确 定</el-button>
                </span>
                </el-dialog>
        </el-row>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'rankingList',
    data() {
        return {
             dialogVisible: false,
            items:[
                {
                    num: 1,
                    name: '',
                    grade: ''
                },
                {
                    num: 2,
                    name: '',
                    grade: ''
                },
                {
                    num: 3,
                    name: '',
                    grade: ''
                },
                {
                    num: 4,
                    name: '',
                    grade: ''
                },
                {
                    num: 5,
                    name: '',
                    grade: ''
                },
                {
                    num: 6,
                    name: '',
                    grade: ''
                },
                {
                    num: 7,
                    name: '',
                    grade: ''
                },
                {
                    num: 8,
                    name: '',
                    grade: ''
                },
                {
                    num: 9,
                    name: '',
                    grade: ''
                },
                {
                    num: 10,
                    name: '',
                    grade: ''
                },
            ]
        }
    },
    created() {
        this.getRankingIn();
    },
    methods:{
        getRankingIn(){
            axios.post("http://localhost:8080/game/ranking")
            .then((res)=>{
                for(var i=0;i<10;i++){
                    this.items[i].name=res.data.rankList[i].name;
                    this.items[i].grade=res.data.rankList[i].score;
                }
            })
            .catch(function(error){
                console.log("error");
            })
        },
        handleClose(done) {
        this.$confirm('确定退出？')
          .then(_ => {
              done();
          })
          .catch(_ => {});
        },
        isLogin(){
            if(localStorage.getItem("token")!=null){
                this.$router.push("/game");
            }else{
                this.dialogVisible=true;
            }
        },
        toLogin(){
            this.$router.push('/login');
        }
    }
}
</script>
<style scoped>
    .floatRi{
        float: right;
        padding-right: 10px;
    }
    .bgColor{
        background-color: #98e778;
        text-decoration: underline;        
    }
    li>span{
        font-weight: bold;
        font-size: 12px;
        line-height: 26px;
        color: #14a53b;
    }
    .liBorder{
        border: solid 1px #d4f9c5;
    }
    .el-menu--horizontal>.el-menu-item{
        width: 100%;
        padding: 0;
    }
</style>