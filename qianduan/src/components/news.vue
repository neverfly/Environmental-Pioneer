<template>
    <div>
        <div v-for="item in items" :key="item.title">
            <p class="title">{{item.title}}</p>
            <p class="content">{{item.content}}</p>
            <p><a :href="item.href" class="more">了解详情></a></p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'news',
    data() {
        return {
            items:[
                {
                    title: "一、土壤污染防治法实施",
                    content:"2018年8月31日，十三届全国人大常委会第五次会议表决通过了《中华人民共和国土壤污染防治法》，将于2019年1月1日起施行。这是我国首次制定专门的法律来规范防治土壤污染，是继水污染防治法、大气污染防治法之后，土壤污染防治领域的专门性法律，填补了环境保护领域特别是污染防治的立法空白。",
                    href: ''
                },
                {
                    title: "二、第二轮中央环保督察",
                    content: "2018年12月15日，生态环境部部长李干杰出席中国生态文明论坛南京年会时表示，2019年将全面启动新一轮督察，并计划再花4年时间，开展第二轮中央环保督察。在第二轮中央环保督察的4年时间中，前3年为常规的全面督察行动，最后1年“回头看”。根据中央全面深化改革委员会的规划，下一步环保督察的工作是：解决突出环境问题，改善环境质量，推动经济高质量发展。",
                    href: ''
                }
            ]
        }
    },
}
</script>
<style>
    .title{
        font-family: MicrosoftYaHei-Bold;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 1px;
        padding-bottom: 5px;
        padding-top: 12px;
    }
    .content{
        font-family: MicrosoftYaHei;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 1px;
        color: #060606;
    }
    .more{
        float: right;
        color: #060606;
        font-weight: bold;
        width: 79px;
        height: 17px;
        font-family: MicrosoftYaHei;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 1px;
        color: #060606;
    }
</style>