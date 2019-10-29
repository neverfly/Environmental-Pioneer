<template>
    <div style="width：90%;paddingLeft:5%;paddingRight:5%">
        <div class="block">
            
            <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
                <img :src="recentNews" alt="" style="width:100%">
            </el-carousel-item>
            </el-carousel>
        </div>
        
        <h1 class="recNew">最新新闻</h1>
        <ul>
            <li v-for="item in items" :key="item.key">
                
                <p><span class="yuan">&nbsp;</span>&nbsp;{{item.content}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import recentNews from '@/assets/images/3_20.png'
export default {
    name: 'recentNews',
    data() {
        return {
            recentNews,
            items:[
                {
                    key:'1',
                    content: "国务院印发《打赢蓝天保卫战三年行动计划》"
                },
                {
                    key:'2',
                    content: "国务院印发《打赢蓝天保卫战三年行动计划》"
                },
                {
                    key:'3',
                    content: "国务院印发《打赢蓝天保卫战三年行动计划》"
                },
                {
                    key:'4',
                    content: "国务院印发《打赢蓝天保卫战三年行动计划》"
                },
                {
                    key:'5',
                    content: "国务院印发《打赢蓝天保卫战三年行动计划》"
                },
                {
                    key:'6',
                    content: "国务院印发《打赢蓝天保卫战三年行动计划》"
                }
            ]
        }
    },
}
</script>
<style scoped>
    .recNew{
        border-bottom: 3px solid #98e778;
        color: #2ca41e;
        font-family: MicrosoftYaHei;
        font-size: 18px;
    }
    
    li>p{
        line-height: 34px;
        font-family: MicrosoftYaHei;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 1px;
        color: #060606;
    }
</style>