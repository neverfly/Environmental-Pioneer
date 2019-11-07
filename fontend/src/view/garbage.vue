<template>
    <div>
        <navigation></navigation>
        <el-row>
            <cebian></cebian>
            <el-col :offset="6" class="hidden-md-and-down" style="borderLeft:10px solid #14a53b;marginRight:5px;;paddingLeft:10px" :lg="16">
                <div>
                    <h1 style="borderBottom:3px solid #14a53b;marginBottom:15px">疑问简答</h1><br>
                    <span style="fontSize:17px">ANSWER QUESTION</span>
                </div>
            </el-col>
            <el-col class="hidden-lg-and-up" style="borderLeft:10px solid #14a53b;marginRight:5px;;paddingLeft:10px" :lg="24">
                <div>
                    <h1 style="borderBottom:3px solid #14a53b;marginBottom:15px">疑问简答</h1><br>
                    <span style="fontSize:17px">ANSWER QUESTION</span>
                </div>
            </el-col>

            <el-col :lg="{span:12,offset:6}" :md="24" class="hidden-md-and-down" style="paddingTop:20px;borderBottom:20px;marginBottom:20px">
                 <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="垃圾分类是什么？" name="1">
                        <div class="content">垃圾分类，指按一定规定或标准将垃圾分类储存、分类投放和分类搬运，从而转变成公共资源的一系列活动的总称。分类的目的是提高垃圾的资源价值和经济价值，力争物尽其用。</div>
                    </el-collapse-item>
                    <el-collapse-item title="反馈 Feedback" name="2">
                        <div class="content">控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div class="content">页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    </el-collapse-item>
                    <el-collapse-item title="效率 Efficiency" name="3">
                        <div class="content">简化流程：设计简洁直观的操作流程；</div>
                        <div class="content">清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div class="content">帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div class="content">用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div class="content">结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                </el-collapse>
            </el-col>
            <!-- 概念简介 -->
            <el-col :offset="6" class="hidden-md-and-down" style="borderLeft:10px solid #14a53b;marginRight:5px;paddingLeft:10px;marginBottom:20px" :lg="16">
                <div>
                    <h1 style="borderBottom:3px solid #14a53b;marginBottom:15px">概念简介</h1><br>
                    <span style="fontSize:17px">CONCEPT INSTRODUCTION</span>
                </div>
            </el-col>
            <el-col class="hidden-lg-and-up" style="borderLeft:10px solid #14a53b;marginRight:5px;paddingLeft:10px;marginBottom:20px" :span="24">
                <div>
                    <h1 style="borderBottom:3px solid #14a53b;marginBottom:15px">概念简介</h1><br>
                    <span style="fontSize:17px">CONCEPT INSTRODUCTION</span>
                </div>
            </el-col>
            <el-col :lg="{span:12,offset:6}" class="hidden-md-and-down">
                <el-tabs type="border-card">
                    <el-tab-pane label="可回收物">
                        <el-row :gutter="20" :style="{backgroundImage: 'url('+bgImg+')',width:'100%',height:'432px',backgroundSize:'cover'}">
                            <el-col :span="6"><img :src="zuoImg" alt="" class="zuoImg"></el-col>
                            <el-col :span="12">
                                <span>可回收物</span>
                                <p>可回收物是指，适宜回收利用和资源化利用的生活废弃物，如废纸张、废塑料、废玻璃制品、废金属、废织物等</p>
                                <span>可回收物主要包括</span>
                                <p>报纸、纸箱、书本、广告单、塑料瓶、塑料玩具、油桶、酒瓶、玻璃杯、易拉罐、旧铁锅、旧衣服、包、旧玩偶、旧数码产品、旧家电</p>
                                <span>可回收物投放要求</span>
                                <ul>
                                    <li>1. 轻投轻放</li>
                                    <li>2. 清洁干燥、避免污染，废纸尽量平整</li>
                                    <li>3. 立体包装请清空内容物，清洁后压扁投放</li>
                                    <li>4. 有尖锐边角的，应包裹后投放</li>
                                </ul>
                            </el-col>
                            <el-col :span="6"></el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="湿垃圾">
                        <el-row :gutter="20" :style="{backgroundImage: 'url('+bgImg+')',width:'100%',height:'432px',backgroundSize:'cover'}">
                            <el-col :span="6"><img :src="zuoImg" alt="" class="zuoImg"></el-col>
                            <el-col :span="12">
                                <span>湿垃圾</span>
                                <p>湿垃圾又称为厨余垃圾、有机垃圾，即易腐垃圾，指食材废料、剩菜剩饭、过期食品、瓜皮果核、花卉绿植、中药药渣等易腐的生物质生活废弃物。</p>
                                <span>湿垃圾主要包括</span>
                                <p>园林垃圾和厨余垃圾。</p>
                                <span>湿垃圾投放要求</span>
                                <ul>
                                    <li>1. 纯流质的食物垃圾，如牛奶等，应直接倒进地下水口</li>
                                    <li>2. 有包装物的湿垃圾应将包装物去除后分类投放，包装物因投入对应的可回收物或干垃圾收集器</li>
                                    <li>3. 盛放湿垃圾的容器，如：塑料袋等应予以去除</li>
                                </ul>
                            </el-col>
                            <el-col :span="6"></el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="干垃圾">
                        <el-row :gutter="20" :style="{backgroundImage: 'url('+bgImg+')',width:'100%',height:'432px',backgroundSize:'cover'}">
                            <el-col :span="6"><img :src="zuoImg" alt="" class="zuoImg"></el-col>
                            <el-col :span="12">
                                <span>干垃圾</span>
                                <p>干垃圾即其它垃圾，指除可回收物、有害垃圾、厨余垃圾（湿垃圾）以外的其它生活废弃物。</p>
                                <span>干垃圾主要包括</span>
                                <p>砖瓦陶瓷、渣土、卫生间废纸、瓷器碎片等难以回收的废弃物，采取卫生填埋可有效减少对地下水、地表水、土壤及空气的污染，在当今社会，还无有效化解其他垃圾的好方法，所以需尽量少产生。</p>
                                <span>干垃圾投放要求</span>
                                <p>凡未列入本目录或者成分复杂难以分辨类别的生活垃圾，投入干垃圾收集器</p>
                            </el-col>
                            <el-col :span="6"></el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="有害垃圾">
                        <el-row :gutter="20" :style="{backgroundImage: 'url('+bgImg+')',width:'100%',height:'432px',backgroundSize:'cover'}">
                            <el-col :span="6"><img :src="zuoImg" alt="" class="zuoImg"></el-col>
                            <el-col :span="12">
                                <span>有害垃圾</span>
                                <p>有害垃圾含有对人体健康有害的重金属、有毒的物质或者对环境造成现实危害或者潜在危害的废弃物。包括电池、荧光灯管、灯泡、水银温度计、油漆桶、部分家电、过期药品、过期化妆品等。这些垃圾一般使用单独回收或填埋处理。</p>
                                <span>有害垃圾主要包括</span>
                                <p>废电池、废荧光灯管、废灯泡、废水银温度计、废油漆桶、过期药品等。有害有毒垃圾需特殊正确的方法安全处理。</p>
                                <span>有害垃圾投放要求</span>
                                <ul>
                                    <li>1. 轻投轻放</li>
                                    <li>2. 废灯管等易破损的有害垃圾应连带包装或包裹后投放；废弃药品宜连带包装一并投放</li>
                                    <li>3. 杀虫剂等压力罐装容器，应排空内容物后投放</li>
                                </ul>
                            </el-col>
                            <el-col :span="6"></el-col>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span="24" class="hidden-lg-and-up">
                <el-tabs type="border-card">
                    <el-tab-pane label="可回收物">
                        <el-row :gutter="20" :style="{backgroundImage: 'url('+bgImg+')',width:'100%',height:'432px',backgroundSize:'cover'}">
                            <el-col :span="24">
                                <span>可回收物</span>
                                <p>可回收物是指，适宜回收利用和资源化利用的生活废弃物，如废纸张、废塑料、废玻璃制品、废金属、废织物等</p>
                                <span>可回收物主要包括</span>
                                <p>报纸、纸箱、书本、广告单、塑料瓶、塑料玩具、油桶、酒瓶、玻璃杯、易拉罐、旧铁锅、旧衣服、包、旧玩偶、旧数码产品、旧家电</p>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="湿垃圾">
                        <el-row :gutter="20" :style="{backgroundImage: 'url('+bgImg+')',width:'100%',height:'432px',backgroundSize:'cover'}">
                            <el-col :span="24">
                                <span>湿垃圾</span>
                                <p>湿垃圾又称为厨余垃圾、有机垃圾，即易腐垃圾，指食材废料、剩菜剩饭、过期食品、瓜皮果核、花卉绿植、中药药渣等易腐的生物质生活废弃物。</p>
                                <span>湿垃圾主要包括</span>
                                <p>园林垃圾和厨余垃圾。</p>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="干垃圾">
                        <el-row :gutter="20" :style="{backgroundImage: 'url('+bgImg+')',width:'100%',height:'432px',backgroundSize:'cover'}">
                            <el-col :span="24">
                                <span>干垃圾</span>
                                <p>干垃圾即其它垃圾，指除可回收物、有害垃圾、厨余垃圾（湿垃圾）以外的其它生活废弃物。</p>
                                <span>干垃圾主要包括</span>
                                <p>砖瓦陶瓷、渣土、卫生间废纸、瓷器碎片等难以回收的废弃物，采取卫生填埋可有效减少对地下水、地表水、土壤及空气的污染，在当今社会，还无有效化解其他垃圾的好方法，所以需尽量少产生。</p>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="有害垃圾">
                        <el-row :gutter="20" :style="{backgroundImage: 'url('+bgImg+')',width:'100%',height:'432px',backgroundSize:'cover'}">
                            <el-col :span="24">
                                <span>有害垃圾</span>
                                <p>有害垃圾含有对人体健康有害的重金属、有毒的物质或者对环境造成现实危害或者潜在危害的废弃物。包括电池、荧光灯管、灯泡、水银温度计、油漆桶、部分家电、过期药品、过期化妆品等。这些垃圾一般使用单独回收或填埋处理。</p>
                                <span>有害垃圾主要包括</span>
                                <p>废电池、废荧光灯管、废灯泡、废水银温度计、废油漆桶、过期药品等。有害有毒垃圾需特殊正确的方法安全处理。</p>
                            </el-col>
                            <el-col :span="6"></el-col>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
            <!-- 标题 -->
            <img :src="lajifenlei" alt="" style="width:100%;marginTop:20px;marginBottom:20px">
            <el-col :offset="6" class="hidden-md-and-down" style="borderLeft:10px solid #14a53b;marginRight:5px;paddingLeft:10px;marginBottom:20px;marginTop:20px" :lg="16">
                <div>
                    <h1 style="borderBottom:3px solid #14a53b;marginBottom:15px">常见垃圾</h1><br>
                    <span style="fontSize:17px">COMMON GARBAGE</span>
                </div>
            </el-col>
            <el-col class="hidden-lg-and-up" style="borderLeft:10px solid #14a53b;marginRight:5px;paddingLeft:10px;marginBottom:20px;marginTop:20px" :lg="16">
                <div>
                    <h1 style="borderBottom:3px solid #14a53b;marginBottom:15px">常见垃圾</h1><br>
                    <span style="fontSize:17px">COMMON GARBAGE</span>
                </div>
            </el-col>
            <!-- 可回收垃圾 -->
            <el-col :offset="6" class="hidden-md-and-down" :lg="12">
                <h1 class="textCenter">可回收垃圾</h1><hr/>
                <el-row :gutter="20">
                    <el-col :lg="6" v-for="(item,i) in items" :key="i">
                        <div class="yige">
                            <p>{{item.title1}}</p>
                            <p>{{item.title2}}</p>
                        </div>
                        <div class="image" :span="24">
                            <img :src="feidianchi" alt="" class="innerImg">
                        </div>
                        <div class="innerText">
                            <p>{{item.text}}</p>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col  :span="24"  class="hidden-lg-and-up">
                <h1 class="textCenter">可回收垃圾</h1><hr/>
                <el-row :gutter="20">
                    <el-col :span="12" v-for="(item,i) in items" :key="i">
                        <div class="yige">
                            <p>{{item.title1}}</p>
                            <p>{{item.title2}}</p>
                        </div>
                        <div class="image" :span="24">
                            <img :src="feidianchi" alt="" class="innerImg">
                        </div>
                        <div class="innerText">
                            <p>{{item.text}}</p>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <!-- 有害垃圾 -->
            <el-col :offset="6" class="hidden-md-and-down" :lg="12">
                <h1 class="textCenter">有害垃圾</h1><hr/>
                <el-row :gutter="20">
                    <el-col :lg="6" v-for="(item,i) in items" :key="i">
                        <div class="yige">
                            <p>{{item.title1}}</p>
                            <p>{{item.title2}}</p>
                        </div>
                        <div class="image" :span="24">
                            <img :src="feidianchi" alt="" class="innerImg">
                        </div>
                        <div class="innerText">
                            <p>{{item.text}}</p>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col  class="hidden-lg-and-up" :span="24">
                <h1 class="textCenter">有害垃圾</h1><hr/>
                <el-row :gutter="20">
                    <el-col :span="12" v-for="(item,i) in items" :key="i">
                        <div class="yige">
                            <p>{{item.title1}}</p>
                            <p>{{item.title2}}</p>
                        </div>
                        <div class="image" :span="24">
                            <img :src="feidianchi" alt="" class="innerImg">
                        </div>
                        <div class="innerText">
                            <p>{{item.text}}</p>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <!-- 干垃圾 -->
            <el-col :offset="6" class="hidden-md-and-down" :lg="12">
                <h1 class="textCenter">干垃圾</h1><hr/>
                <el-row :gutter="20">
                    <el-col :lg="6" v-for="(item,i) in items" :key="i">
                        <div class="yige">
                            <p>{{item.title1}}</p>
                            <p>{{item.title2}}</p>
                        </div>
                        <div class="image" :span="24">
                            <img :src="feidianchi" alt="" class="innerImg">
                        </div>
                        <div class="innerText">
                            <p>{{item.text}}</p>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col  class="hidden-lg-and-up" :span="24">
                <h1 class="textCenter">干垃圾</h1><hr/>
                <el-row :gutter="20">
                    <el-col :span="12" v-for="(item,i) in items" :key="i">
                        <div class="yige">
                            <p>{{item.title1}}</p>
                            <p>{{item.title2}}</p>
                        </div>
                        <div class="image" :span="24">
                            <img :src="feidianchi" alt="" class="innerImg">
                        </div>
                        <div class="innerText">
                            <p>{{item.text}}</p>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :offset="6" class="hidden-md-and-down" :lg="12">
                <h1 class="textCenter">湿垃圾</h1><hr/>
                <el-row :gutter="20">
                    <el-col :lg="6" v-for="(item,i) in items" :key="i">
                        <div class="yige">
                            <p>{{item.title1}}</p>
                            <p>{{item.title2}}</p>
                        </div>
                        <div class="image" :span="24">
                            <img :src="feidianchi" alt="" class="innerImg">
                        </div>
                        <div class="innerText">
                            <p>{{item.text}}</p>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col class="hidden-lg-and-up" :span="24">
                <h1 class="textCenter">湿垃圾</h1><hr/>
                <el-row :gutter="20">
                    <el-col :span="12" v-for="(item,i) in items" :key="i">
                        <div class="yige">
                            <p>{{item.title1}}</p>
                            <p>{{item.title2}}</p>
                        </div>
                        <div class="image" :span="24">
                            <img :src="feidianchi" alt="" class="innerImg">
                        </div>
                        <div class="innerText">
                            <p>{{item.text}}</p>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <footers></footers>
    </div>
</template>
<script>
import changjianlaji from '../components/changjianlaji'
import lajifenlei from '../assets/images/lajifenlei_02.png'
import bgImg from '../assets/images/lajifenlei_03.png'
import zuoImg from '../assets/images/lajifenlei_33.png'
import feidianchi from '../assets/images/2_17.png'

import cebian from '../components/cebian'
export default {
    name: 'garbege',
    data() {
        return {
            activeNames: ['1'],
            bgImg,
            zuoImg,
            lajifenlei,
            feidianchi,
            items:[
                {
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    iamge: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                },{
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    iamge: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                },{
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    iamge: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                },{
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    iamge: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                }
            ],
            items2:[
                {
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    iamge: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                },{
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    iamge: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                },{
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    iamge: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                },{
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    iamge: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                }
            ],
            items3:[
                {
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    iamge: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                },{
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    iamge: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                },{
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    iamge: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                },{
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    iamge: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                }
            ],
        }
    },
    methods: {
        handleChange(val) {
            console.log(val);
      }
    },
    components:{
        changjianlaji,
        cebian
    }
}
</script>
<style scoped>
    .el-collapse-item__header{
        color: #2fb04f;
        font-size: 28px !important;
    }
    .content{
        font-size: 20px;
        color: #666666;
    }
    h1{
        display: inline;
    }
    .textCenter{
        display: block;
        text-align: center;
        margin-bottom: 5px;
        margin-top: 10px;
    }
    hr{
      width: 200px;
      height: 4px;
      color: #2fb04f;
      margin: 0 auto;
      border: 0;
      background-color: #2fb04f;
      margin-bottom: 20px;
  }
    /* 概念介绍 */
    .lajiNew{
        width: 100%;
    }
    .zuoImg{
        width: 70%;
        margin: 10% 10%;
    }
    span{
        font-size: 25px;
        color: #221815;
        margin-bottom: 20px;
        height: 30px;
        line-height: 45px;
    }
    p{
        font-size: 15px;
        color: #221815;
        margin-bottom: 20px;
        text-indent: 25px;
    }
    li{
        font-size: 15px;
        color: #221815;
        line-height: 35px;
    }
    /* 每个垃圾样子 */
    .yige{
         width: 100%;
         height: 100px;
         line-height: 25px;
         text-align: center;
         font-size:20px;
         background-color: #2fb04f;
    }
    .yige p{
        padding-top: 5px;
        font-family: MicrosoftYaHei;
        font-size: 20px;
        letter-spacing: 2px;
        color: #ffffff;
        text-indent: 0;
        margin-bottom: 5px;
    }
    .image{
        width: 100%;
        background-color: #d9efd9;
    }
    .innerImg{
        width: 40%;
        margin: 0 30%;
    }
    .innerText{
        width: 95%;
        padding: 2.5% 2.5%;
        font-size: 12px;
        background-color: #f0f3f0;
    }
</style>