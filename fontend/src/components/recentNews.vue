<template>
    <div style="width：90%;paddingLeft:5%;paddingRight:5%">
        <div class="block">
            
            <el-carousel height="150px">
            <el-carousel-item v-for="item in 3" :key="item">
                <img :src="recentNews" alt="" style="width:100%">
            </el-carousel-item>
            </el-carousel>
        </div>
        
        <h1 class="recNew">最新新闻</h1>
        <ul>
            <li v-for="item in items" :key="item.key">
                
                <p><a :href="item.href" target="_blank"><span class="yuan">&nbsp;</span>&nbsp;{{item.content}}</a></p>
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
                    content: "通州将推垃圾分类小程序",
                    href:'http://news.sina.com.cn/o/2019-11-04/doc-iicezuev7098807.shtml'
                },
                {
                    key:'2',
                    content: "市民积极参与企业规模运营",
                    href:'http://www.lzbs.com.cn/special/2019/wmcs/2019-11/04/content_4545336.htm'
                },
                {
                    key:'3',
                    content: "年底前沧州市中心城区全面启动生活垃圾分类",
                    href:'https://new.qq.com/omn/HEC20191/HEC2019110400095600.html'

                },
                {
                    key:'4',
                    content: "劲牌率先践行垃圾分类",
                    href:'http://www.cqn.com.cn/cj/content/2019-11/04/content_7724170.htm'
                },
                {
                    key:'5',
                    content: "小手拉大手”垃圾分类进校园",
                    href:'http://dy.newssc.org/system/20191104/002790310.html'
                },
                {
                    key:'6',
                    content: "智能垃圾分类让云和市民纷纷点赞",
                    href:'http://news.lsnews.com.cn/life/201911/t20191104_273879.shtml'
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