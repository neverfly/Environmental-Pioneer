<template>
    <div>
        <img :src="recentNews" alt="" style="width:100%">
        <h1 class="recNew">近期要闻</h1>
        <ul>
            <li v-for="item in items" :key="item.key">
                
                <p><span>&nbsp;</span>&nbsp;{{item.content}}</p>
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
    li>p>span{
        width: 3px;
        height: 3px;
        padding: 0 3px;
        background-color: #2ca41e;
        border-radius: 50%;
    }
    li>p{
        line-height: 23px;
        font-family: MicrosoftYaHei;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 1px;
        color: #060606;
    }
</style>