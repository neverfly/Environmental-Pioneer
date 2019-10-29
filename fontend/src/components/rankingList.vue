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
                <el-menu-item index="/game"><h1 class="textCenter bgColor">立即参赛</h1></el-menu-item></el-menu>
        </el-row>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'rankingList',
    data() {
        return {
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