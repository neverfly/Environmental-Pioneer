<template>
    <div>
        <el-row v-for="item in items" :key="item.title" :gutter="20">
            <el-col :span="4"><br><img :src="imgNew" alt="" class="lajiNew"></el-col>
            <el-col :span="20"><br>
                <a :href="item.link">
                    <h2>{{item.title}}</h2><br>
                    <p>{{item.content}}</p>
                    <span>{{item.date}}</span><span style="float:right">浏览量：{{item.liulan}}</span>
                </a>
            </el-col>
        </el-row>
        
    </div>
</template>
<script>
import imgNew from '../assets/images/new_1.png'

export default {
    name: 'gezhonglaji',
    data() {
        return {
            imgNew,
            items:[
                {
                    title: '1土壤重金属污染日益加剧 修复之路需全员参与',
                    content: '目前国内对于土壤重金属污染常用的修复技术有物理修复技术、化学修复技术、生物修复技术和混合修复技术，其中每种修复技术中还包括更细的修复方法，虽然目前我们对土壤中重金属的污染实际情况及各项修复处理技术等有了深层次地认识及了解，但是，由于土壤修复的复杂性，重金属污染的危害性，土壤修复之路仍任重而道远',
                    link:'//WWW.HBZHAN.COM/NEWS/DETAIL/130904.HTML',
                    date: '2019年08月23日 14:59:12 ',
                    liulan: '513'
                },{
                    title: '2土壤重金属污染日益加剧 修复之路需全员参与',
                    content: '目前国内对于土壤重金属污染常用的修复技术有物理修复技术、化学修复技术、生物修复技术和混合修复技术，其中每种修复技术中还包括更细的修复方法，虽然目前我们对土壤中重金属的污染实际情况及各项修复处理技术等有了深层次地认识及了解，但是，由于土壤修复的复杂性，重金属污染的危害性，土壤修复之路仍任重而道远',
                    link:'//WWW.HBZHAN.COM/NEWS/DETAIL/130904.HTML',
                    date: '2019年08月23日 14:59:12 ',
                    liulan: '513'
                },{
                    title: '3土壤重金属污染日益加剧 修复之路需全员参与',
                    content: '目前国内对于土壤重金属污染常用的修复技术有物理修复技术、化学修复技术、生物修复技术和混合修复技术，其中每种修复技术中还包括更细的修复方法，虽然目前我们对土壤中重金属的污染实际情况及各项修复处理技术等有了深层次地认识及了解，但是，由于土壤修复的复杂性，重金属污染的危害性，土壤修复之路仍任重而道远',
                    link:'//WWW.HBZHAN.COM/NEWS/DETAIL/130904.HTML',
                    date: '2019年08月23日 14:59:12 ',
                    liulan: '513'
                }
            ]
        }
    },
}
</script>
<style>
    .lajiNew{
        width: 100%;
    }
</style>