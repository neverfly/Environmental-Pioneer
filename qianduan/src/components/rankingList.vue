<template>
    <div class="liBorder">
        <el-row>
            <h1 class="textCenter bgColor">环保排行榜</h1>
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
            <h1 class="textCenter bgColor"><a href="">立即参赛</a></h1>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'rankingList',
    data() {
        return {
            items:[
                {
                    num: 1,
                    name: 'mars',
                    grade: '99'
                },
                {
                    num: 2,
                    name: 'mars',
                    grade: '99'
                },
                {
                    num: 3,
                    name: 'mars',
                    grade: '99'
                },
                {
                    num: 4,
                    name: 'mars',
                    grade: '99'
                },
                {
                    num: 5,
                    name: 'mars',
                    grade: '99'
                },
                {
                    num: 6,
                    name: 'mars',
                    grade: '99'
                },
                {
                    num: 7,
                    name: 'mars',
                    grade: '99'
                },
                {
                    num: 8,
                    name: 'mars',
                    grade: '99'
                },
                {
                    num: 9,
                    name: 'mars',
                    grade: '99'
                },
                {
                    num: 10,
                    name: 'mars',
                    grade: '99'
                },
            ]
        }
    },
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
</style>