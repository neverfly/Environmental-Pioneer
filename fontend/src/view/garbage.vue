<template>
    <div class="demo-image__lazy">
        <navigation></navigation>
        <el-row>
            <cebian></cebian>
            <el-col class="hidden-md-and-down" style="borderLeft:10px solid #14a53b;marginRight:5px;;paddingLeft:10px" :lg="{span:16,offset:6}" :md="24">
                <div>
                    <h1 style="borderBottom:3px solid #14a53b;marginBottom:15px">疑问简答</h1><br>
                    <span style="fontSize:17px">ANSWER QUESTION</span>
                </div>
            </el-col>
            <el-col :lg="{span:12,offset:6}" :md="24" class="hidden-md-and-down" style="paddingTop:20px;borderBottom:20px;marginBottom:20px">
                 <el-collapse v-model="activeNames" @change="handleChange" accordion>
                    <el-collapse-item title="垃圾分类是什么？" name="1">
                        <div class="content">垃圾分类：指按一定规定或标准将垃圾分类储存、分类投放和分类搬运，从而转变成公共资源的一系列活动的总称。分类的目的是提高垃圾的资源价值和经济价值，力争物尽其用。垃圾在分类储存阶段属于公众的私有品，垃圾经公众分类投放后成为公众所在小区或社区的区域性准公共资源，垃圾分类驳运到垃圾集中点或转运站后成为没有排除性的公共资源。从国内外各城市对生活垃圾分类的方法来看，大致都是根据垃圾的成分构成、产生量，结合本地垃圾的资源利用和处理方式来进行分类的。</div>
                    </el-collapse-item>
                     <el-collapse-item title="为什么要垃圾分类" name="2">
                        <div class="content">垃圾分类是对垃圾进行处置前的重要处理环节。  </div>
                        <div class="content">通过分类投放、分类收集，把有用物资，如纸张、塑料、橡胶、玻璃、瓶罐、金属以及废旧家用电器等从垃圾中分离出来重新回收、利用，变废为宝。既提高垃圾资源利用水平，又可减少垃圾处置量。它是实现垃圾减量化和资源化的重要途径和手段。  </div>
                        <div class="content">垃圾通过分类收集后便于对不同类垃圾进行分类处置。如对有机垃圾进行堆肥发酵处理，把有机垃圾制成农田用肥和绿化用肥，对没有回收利用价值的无机垃圾进行填埋处置，对热值较高的可燃垃圾进行焚烧处置。  </div>
                        <div class="content">垃圾分类是对垃圾收集处置传统方式的改革，是对垃圾进行有效处置的一种科学管理方法。人们面对日益增长的垃圾产量和环境状况恶化的局面，如何通过垃圾分类管理，最大限度地实现垃圾资源利用，减少垃圾处置量，改善生存环境质量，是当前世界各国共同关注的迫切问题之一。</div>

                    </el-collapse-item>
                    <el-collapse-item title="垃圾分类的意义" name="3">
                        <div class="content">减少占地：生活垃圾中有些物质不易降解，使土地受到严重侵蚀。垃圾分类，去掉能回收的、不易降解的物质，减少垃圾数量达50%以上。</div>
                        <div class="content">减少环境污染：废弃的电池含有金属汞、镉等有毒的物质，会对人类产生严重的危害；土壤中的废塑料会导致农作物减产；抛弃的废塑料被动物误食，导致动物死亡的事故时有发生。因此回收利用可以减少危害。</div>
                        <div class="content">变废为宝：中国每年使用塑料快餐盒达40亿个，方便面碗5—7亿个，废塑料占生活垃圾的4—7%。1吨废塑料可回炼600公斤的柴油。回收1500吨废纸，可免于砍伐用于生产1200吨纸的林木。一吨易拉罐熔化后能结成一吨很好的铝块，可少采20吨铝矿。生产垃圾中有30%—40%可以回收利用，应珍惜这个小本大利的资源。 大家也可以利用易拉罐制作笔盒，既环保，又节约资源</div>

                    </el-collapse-item>
                   
                    <el-collapse-item title="如何做好垃圾分类" name="4">
                        <div class="content">一方面,要完善相关机制,明确管理者的职责,制定有效措施,使垃圾分类工作更有保障。比如,在德国,建立了垃圾可追溯制度,推行带条码的标准垃圾袋,一旦发现谁家垃圾没有分类,就“对号入座”地要求其重新分拣;另一方面,通过一些激励措施,让民众体验到分类扔垃圾带来的实际利益。比如,瑞典的政府部门在许多超级市场都设有易拉罐和玻璃瓶自动回收机,顾客喝完饮料将易拉罐和玻璃瓶投入其中,机器便会吐出收据,顾客凭收据可以领取一小笔钱。总之,多管齐下,抓好做实每一个环节,才会真正做好垃圾分类工作。</div>
                        <div class="content">可回收垃圾：主要包括废纸、塑料、玻璃、金属和布料五大类。</div>
                        <div class="content">废纸：主要包括报纸、期刊、图书、各种包装纸等。</div>
                        <div class="content">塑料：各种塑料袋、塑料泡沫、塑料包装、一次性塑料餐盒餐具、硬塑料、塑料牙刷、塑料杯子、矿泉水瓶等。</div>
                        <div class="content">玻璃：主要包括各种玻璃瓶、碎玻璃片、镜子、暖瓶等。</div>
                        <div class="content">金属物：主要包括易拉罐、罐头盒等。</div>
                        <div class="content">布料：主要包括废弃衣服、桌布、洗脸巾、书包、鞋等。</div>
                        <div class="content">厨余垃圾：包括剩菜剩饭、骨头、菜根菜叶、果皮等食品类废物。</div>
                        <div class="content">其他垃圾：包括除上述几类垃圾之外的砖瓦陶瓷、渣土、卫生间废纸、纸巾等难以回收的废弃物。</div>
                        <div class="content">有害垃圾：包括电池、荧光灯管、灯泡、水银温度计、油漆桶、部分家电、过期药品、过期化妆品等。</div>


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
                                    <li>1. 废灯管等易破损的有害垃圾应连带包装或包裹后投放；废弃药品宜连带包装一并投放</li>
                                    <li>2. 杀虫剂等压力罐装容器，应排空内容物后投放</li>
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
                    <el-col :lg="6" v-for="(item,i) in items4" :key="i">
                        <div class="yige">
                            <p>{{item.title1}}</p>
                            <p>{{item.title2}}</p>
                        </div>
                        <div class="image" :span="24">
                            <el-image :src="item.image" class="innerImg" lazy></el-image>
                        </div>
                        <div class="innerText" style="height:150px">
                            <p>{{item.text}}</p>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col  :span="24"  class="hidden-lg-and-up">
                <h1 class="textCenter">可回收垃圾</h1><hr/>
                <el-row :gutter="20">
                    <el-col :span="24" v-for="(item,i) in items4" :key="i">
                        <div class="yige">
                            <p>{{item.title1}}</p>
                            <p>{{item.title2}}</p>
                        </div>
                        <div class="image" :span="24">
                            <el-image :src="item.image" alt="" class="innerImg" lazy></el-image>
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
                    <el-col :lg="6" v-for="(item,i) in items5" :key="i">
                        <div class="yige">
                            <p>{{item.title1}}</p>
                            <p>{{item.title2}}</p>
                        </div>
                        <div class="image" :span="24">
                            <el-image :src="item.image" alt="" class="innerImg" lazy></el-image>
                        </div>
                        <div class="innerText" style="height:150px">
                            <p>{{item.text}}</p>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col  class="hidden-lg-and-up" :span="24">
                <h1 class="textCenter">有害垃圾</h1><hr/>
                <el-row :gutter="20">
                    <el-col :span="24" v-for="(item,i) in items5" :key="i">
                        <div class="yige">
                            <p>{{item.title1}}</p>
                            <p>{{item.title2}}</p>
                        </div>
                        <div class="image" :span="24">
                            <el-image :src="item.image" alt="" class="innerImg" lazy></el-image>
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
                    <el-col :lg="6" v-for="(item,i) in items6" :key="i">
                        <div class="yige">
                            <p>{{item.title1}}</p>
                            <p>{{item.title2}}</p>
                        </div>
                        <div class="image" :span="24">
                            <el-image :src="item.image" alt="" class="innerImg" lazy></el-image>
                        </div>
                        <div class="innerText" style="height:150px">
                            <p>{{item.text}}</p>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col  class="hidden-lg-and-up" :span="24">
                <h1 class="textCenter">干垃圾</h1><hr/>
                <el-row :gutter="20">
                    <el-col :span="24" v-for="(item,i) in items6" :key="i">
                        <div class="yige">
                            <p>{{item.title1}}</p>
                            <p>{{item.title2}}</p>
                        </div>
                        <div class="image" :span="24">
                            <el-image :src="item.image" alt="" class="innerImg" lazy></el-image>
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
                    <el-col :lg="6" v-for="(item,i) in items7" :key="i">
                        <div class="yige">
                            <p>{{item.title1}}</p>
                            <p>{{item.title2}}</p>
                        </div>
                        <div class="image" :span="24">
                            <el-image :src="item.image" alt="" class="innerImg" lazy></el-image>
                        </div>
                        <div class="innerText" style="height:150px">
                            <p>{{item.text}}</p>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col class="hidden-lg-and-up" :span="24">
                <h1 class="textCenter">湿垃圾</h1><hr/>
                <el-row :gutter="20">
                    <el-col :span="24" v-for="(item,i) in items7" :key="i">
                        <div class="yige">
                            <p>{{item.title1}}</p>
                            <p>{{item.title2}}</p>
                        </div>
                        <div class="image" :span="24">
                            <el-image :src="item.image" alt="" class="innerImg" lazy></el-image>
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
import boli2 from '../assets/images/boli2.png'
import buliao2 from '../assets/images/buliao2.png'
import feizhi2 from '../assets/images/feizhi2.png'
import suliao2 from '../assets/images/suliao2.png'
import feidian from '../assets/images/feidian.png'
import wen from '../assets/images/wen.png'
import feiyao from '../assets/images/feiyao.png'
import youqi from '../assets/images/youqi1.png'
import jiao from '../assets/images/jiao.png'
import maojing2 from '../assets/images/maojing2.png'
import mao from '../assets/images/mao.png'
import ying from '../assets/images/ying.png'
import guo from '../assets/images/guo.png'
import sheng from '../assets/images/sheng.png'
import yugu2 from '../assets/images/yugu2.png'
import zhi from '../assets/images/zhi.png'



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
            items2:[
                {
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    image: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                },{
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    image: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                },{
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    image: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                },{
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    image: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                }
            ],
            items3:[
                {
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    image: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                },{
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    image: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                },{
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    image: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                },{
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    image: feidianchi,
                    text: '废弃在自然界电池中的汞会慢慢从电池中溢出来，进入土壤或水源，再通过农作物进入人体，损伤人的肾脏。在微生物的作用下，无机汞可以转化成甲基汞，聚集在鱼类的身体里，人食用了这种鱼后，甲基汞会进入人的大脑细胞，使人的神经系统受到严重破坏，重者会发疯致死。著名的日本水俣病就是甲基汞所致。'
                }
            ],
            items4:[
                {
                    title1: '玻璃',
                    title2: 'WASTE BATTERY ',
                    image: boli2,
                    text: '目前玻璃制品的回收利用有几种类型：作为铸造熔剂、转型利用、回炉再造、原料回收和重复利用等。'
                },{
                    title1: '布料',
                    title2: 'MATERIAL',
                    image: buliao2,
                    text: '旧纺织衣物和纺织制品。比较新的、符合民政捐赠标准的布料经过分拣、消毒等处理后，通过公益组织中心进行捐赠。不符合捐赠的，废旧织物资源化处理工厂，可以把废旧纺织品再生为棉花、棉纱、各类手套、布料、拖把等。'
                },{
                    title1: ' 废纸',
                    title2: 'WASTE PAPER ',
                    image: feizhi2,
                    text: '纸类：未严重玷污的文字用纸、包装用纸和其他纸制品等。如报纸、各种包装纸、办公用纸、广告纸片等每回收1吨废纸可造好纸850公斤，节省木材300公斤，比等量生产减少污染74%'
                },{
                    title1: '塑料',
                    title2: 'PLASTIC',
                    image: suliao2,
                    text: '塑料：废容器塑料、包装塑料等塑料制品。如塑料袋、塑料瓶、泡沫塑料、一次性塑料餐盒餐具、硬塑料等，塑料回收的好处：增加土地资源的利用率、助植物生产增作物产量、保护大气环境、减少因塑料导致的生物多样性降低的事件'
                }
            ],
            items5:[
                {
                    title1: '废电池',
                    title2: 'WASTE BATTERY ',
                    image: feidian,
                    text: '一颗钮扣电池可以污染60万升水，相当于一人一生用水量，而中国每年要消耗这样的电池70亿只。废电池无论在大气中还是深埋在地下，其重金属成份都会随渗液溢出，造成地下水和土壤的污染。《国家危险废物名录》上定出汞、镉、锌、铅、铬为危险废弃物。'
                },{
                    title1: '废弃药品',
                    title2: 'ABABDOBED DRUGS',
                    image: feiyao,
                    text: '过期药品属于有害垃圾。根据《国家危险废物名录》，生产、销售及使用过程中产生的过期失效的药品属于危险废物。与一般废弃物不同，危险废物危害更大，随意排放、贮存的危废，在雨水地下水的长期渗透、扩散作用下，会污染水体和土壤，进而影响人类健康。'
                },{
                    title1: '温度计',
                    title2: 'THERMOMETER',
                    image: wen,
                    text: '完好无损的水银温度计，对环境和人的健康都是没有危害的。破损后的水银温度计可严重污染环境，对人体健康造成严重威胁。由于存在诸多不确定因素，破损的水银温度计造成的危害程度是不确定的。'
                },{
                    title1: '油漆',
                    title2: 'OIL PAINT',
                    image: youqi,
                    text: '废油漆主要危害是吸入有机溶剂蒸气。各种油漆都是由成膜物质（各种树脂）、溶剂、颜料、干燥剂、添加剂组成。普通废油漆通常用汽油作溶剂，环氧铁红底漆含少量二甲苯.得再生障碍性贫血、白血病、结核、胸膜炎等严重疾病的比例也相当高。 '
                }
            ],
            items6:[
                {
                    title1: '胶水',
                    title2: 'GLUE',
                    image: jiao,
                    text: '胶水是属于干垃圾。常见的干垃圾有：坛子、旧浴缸、杯子、核桃、一次性筷子、坏的花盆、木质梳子、赃污衣服、篮球、卫生纸、陶瓷碗、垃圾袋、瓦片、扫把等'
                },{
                    title1: ' 毛发',
                    title2: 'HAIR',
                    image: mao,
                    text: '头发、狗毛、猫毛，这类人和动物身上的毛发都可归类于干垃圾。头发的主要成分是角质蛋白，含量约为97%，角质蛋白是由氨基酸构成，能被自然所分解。分解时长视环境微生物数量而定。'
                },{
                    title1: '旧毛巾',
                    title2: 'OLD TOWEL',
                    image: maojing2,
                    text: '旧毛巾属于干垃圾，旧毛巾附着的细菌过多，并且可回收利用价值低，需投放至干垃圾桶中，毛巾最好每隔3个月更换一次，避免对于皮肤造成影响，可回收物中的织物主要是包括废弃的衣服、书包以及鞋子等，这些物品可回收再利用。'
                },{
                    title1: '硬果壳',
                    title2: 'HARD SHELLS',
                    image: ying,
                    text: '硬果壳是属于干垃圾。干垃圾即其它垃圾，指除可回收物、有害垃圾、湿垃圾以外的其它生活废弃物'
                }
            ],
            items7:[
                {
                    title1: '过期食品',
                    title2: 'OUTDATED ITEMS OF FOOD',
                    image: guo,
                    text: '过期食物容易生成多种霉菌，霉菌本身是无害的，但是霉菌的代谢物，也就是我们常说的霉素，大多数的霉素是有毒的，还有几种如曲霉菌类产生的去霉素有致癌作用。'
                },{
                    title1: '剩菜',
                    title2: 'LEFTOVERS',
                    image: sheng,
                    text: '剩菜存放时间不宜过长，最好能在5—6个小时内吃掉。剩菜并不是绝对不能吃，保存条件一定要格外注意，凉透后应立即放入冰箱。 晾凉再放是因为热食物突然进入低温环境，食物的热气会引起水蒸气凝结，促使霉菌生长，从而导致冰箱里的食物霉变。'
                },{
                    title1: '鱼骨',
                    title2: 'FISHBONE',
                    image: yugu2,
                    text: '吃剩的鱼骨属于湿垃圾中的剩饭剩菜分类。湿垃圾中的剩饭剩菜包含有鱼骨、碎骨、火锅汤底等，吃剩的鱼骨也属于鱼骨，因此属于该分类。'
                },{
                    title1: '花卉',
                    title2: 'FLOWERS ',
                    image: zhi,
                    text: '花卉植物是属于湿垃圾。湿垃圾：易腐的生物质废弃物，湿垃圾就是有机垃圾，指日常生活垃圾中可分解的有机物质部分，包括食物残渣、菜根、菜叶，动物蹄、角、瓜皮、果屑、蛋壳、鱼鳞、蛋壳、毛发、植物枝干、树叶、杂草、动物尸体、牲畜粪便等。'
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
        text-indent: 40px;
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
        font-size: 13px;
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
        height: 70%;
        overflow: hidden;
        text-align:center;
    }
    .innerImg{
        height: 30%;
        margin: 0 auto;
    }
    .innerText{
        width: 95%;
        padding: 2.5% 2.5%;
        font-size: 12px;
        background-color: #f0f3f0;
    }
</style>