import Mock from 'mockjs'
import { Avatar } from 'element-ui'
//token
let token1=Mock.mock({
    "msg":"Succeeded",
    "token":'XXX'
})
let token2=Mock.mock({
    "msg":"Succeeded",
    "token":'YYY'
})
let token3=Mock.mock({
    "msg":"Succeeded",
    "token":'ZZZ'
})
let tokenError=Mock.mock({
    "msg":"该邮箱已被注册",
})
let tokenError2=Mock.mock({
    "msg":"重名了",
})
let tokenError3=Mock.mock({
    "msg":"输入信息错误",
})
let zhuce=Mock.mock({
    "msg":"Succeeded",
})
//用户信息
let cao=Mock.mock({
    "count":3,
    "next":null,
    "previous":null,
    "result":{
        "uid": 2,
        "username": 'cao',
        "e_mail": '',
        "real_name":'caofeng',
        "avatar":'http://static.hdslb.com/images/member/noface.gif',
        "user_description": "曹丰靓仔路过"
        
    }
})
let newone=Mock.mock({
    "count":3,
    "next":null,
    "previous":null,
    "result":{
        "uid": 3,
        "username": '',
        "e_mail": '',
        "real_name":'',
        "avatar":'http://static.hdslb.com/images/member/noface.gif',
        "user_description": ""
    }
})
let mu=Mock.mock({
    "count":2,
    "next":null,
    "previous":null,
    "result":{
        "uid": 1,
        "username": 'mars',
        "e_mail": '1559830979@qq.com',
        "real_name":'mudingdiao',
        "avatar":'http://static.hdslb.com/images/member/noface.gif',
        "user_description": "牟定雕靓仔路过"
        
    }
})
//文章
let article=Mock.mock({
    "count":1,
    "next":null,
    "preview":null,
    "results":{
        "article_id": 1,
        "create_time":  " 2019年09月20日",
        "tag": "垃圾回收",
        "topic": "2019年，垃圾分类成为一种新时尚",
        "content": "<p>“一鸣惊人”上海迎来最严垃圾分类措施“垃圾分类”的火爆始于上海。今年1月31日，经历三次审议，《上海市生活垃圾管理条例》在上海市十五届人大第二次会议上获高票通过。这是全国首部由人代会通过的关于生活垃圾管理方面的省级地方性法规。针对个人违反该条例相关规定的，可处以人民币50元以上200元以下罚款。违反相关规定的垃圾处置单位，未保持生活垃圾处置设施、设备正常运行，影响生活垃圾及时处置的，责令限期改正；逾期不改正的，处5万元以上50万元以下罚款。7月1日，《上海市生活垃圾管理条例》正式实施，上海居民迎来史上最严垃圾分类措施。在条例实施第一周，上海市各部门“重磅出击”——各级人大代表走进社区、商场和园区，了解条例实施情况，听取市民建议；出动执法人员17800人次，开展执法检查9600次，依法查处各类生活垃圾分类案件190起，其中对个人处以罚款15起；公布首批20名生活垃圾管理社会监督员名单，监督员覆盖全市16个区……条例施行伊始，一直走在时尚前沿的上海市民几乎被垃圾分类给弄崩溃了。连日常的打招呼方式都从“侬好”，变成了“侬是什么垃圾？”</p><p>如今，条例已实施两个多月，效果如何？据上海市绿化市容局消息，截至8月底，上海市可回收物回收量达到4500吨/日，较2018年底增长了5倍；湿垃圾分出量已达9200吨/日，较2018年底增长了130%；干垃圾处置量控制在低于15500吨/日，比2018年底减少了26%。悄然提速多地进入垃圾分类“法治时代”我国首次进行生活垃圾分类尝试，是在2000年。原建设部将北京、上海、广州、深圳、杭州、南京、厦门、桂林8个城市确定为“生活垃圾分类收集试点城市”。2019年，成为全国地级及以上城市全面启动生活垃圾分类工作的“元年”。和北京一样启动修法的，还有杭州。8月，新修订的《杭州市生活垃圾管理条例》正式施行，最直观的变化是将“餐厨垃圾”改成“易腐垃圾”。与此同时，今年以来，《宜春市生活垃圾分类管理条例》《太原市生活垃圾分类管理条例》《长春市生活垃圾分类管理条例》先后施行。《无锡市生活垃圾分类管理条例》《宁波市生活垃圾分类管理条例》于9月1日、10月1日起正式实施。据了解，苏州、福州、南宁、深圳、成都等地的生活垃圾（分类）管理条例草案也已进入了立法程序。</p><p>各地陆续进入垃圾分类“法治时代”。为推进垃圾分类落地，不少地方都规定，违反垃圾强制分类规范的各类主体将面临包括罚款在内的多种处罚。重庆市、杭州市都规定，未分类投放生活垃圾且逾期未改的，对单位和个人处以不同额度的罚款。多地还明确了管理责任人的法律责任，加大处罚力度。厦门市规定，对违法管理责任人可以处以1万元以上5万元以下罚款，对单位直接负责的主管人员和其他直接责任人员处以单位罚款数额10%的罚款；杭州规定，对分类投放管理责任人未履行职责等行为，处以500元以上5000元以下的罚款，情节严重的处5000元以上3万元以下的罚款。在广州，《广州市生活垃圾分类管理条例》于去年7月1日起实施，常态化执法检查成为重要抓手。8月下旬，一个广州市民因不分类投放大件垃圾，被城管执法部门罚款200元，成为广州第一个因触犯该条例而被处罚的个人。各地纷纷制定和出台法规制度，按下了垃圾分类工作“快进键”，推动着越来越多的人参与其中，推动着我国垃圾分类工作由点到面逐步铺开。值得注意的是，一些农村地区的生活垃圾分类也取得一定进展。浙江金华市制定了农村生活垃圾分类管理条例。目前，农村垃圾分类处理已覆盖了金华市100%的乡镇和98%的行政村，垃圾减量达八成以上。</p>",
        
    }
})
// count:3,
//     next:null,
//     preview:null,
//     result:{
//         'title|5-10':'标题2',
//         date: Mock.Random.date('yyyy-MM-dd'),
//         writer: Mock.Random.cword(4),
//         source: Mock.Random.cword(4),
//         content: "<p>我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段.</p><p>我是第二段，我是第二段我是第二段我是第第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是二段我是第二段我是第二段我是第二段，我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段。</p><p>我是第我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段，我是第三段我是第三段，三段</p><p>我是最我是最后一段我是最后一段我是最后一段我，是最后一段我是最后一段我是最后一段我是最后一段我是最后一段，后一段</p>",
//         'readingQua': Mock.Random.integer(100,10000),
//         src: Mock.Random.url('http')
//     }
// })
let article2=Mock.mock({
    "count":2,
    "next":null,
    "preview":null,
    "results":{
        "article_id": 2,
        "create_time":  "2019年11月8日",
        "tag": "垃圾分类",
        "topic": "新规：2021年底青岛农村生活垃圾分类100%达标",
        "content": "<p>11月7日讯（记者 朱颖）为加快推进青岛农村生活垃圾分类，促进农村人居环境不断改善，7日下午，青岛市住房和城乡建设局正式出台了《青岛市农村生活垃圾分类工作行动方案》。方案显示，2021年底，青岛将实现农村生活垃圾分类100％达标率，垃圾回收利用率达45％以上、资源化利用率达50％以上，无害化处理率达100％。</p><p>根据方案，2019年底，实现农村生活垃圾分类达标率为70％，垃圾回收利用率达25％以上、资源化利用率达30％以上，无害化处理率达98％以上。</p><p>2020年底，力争实现农村生活垃圾分类达标率为100％，垃圾回收利用率达35％以上、资源化利用率达40％以上，无害化处理率达99％以上。</p><p>2021年底，实现农村生活垃圾分类达标率为100％，垃圾回收利用率达45％以上、资源化利用率达50％以上，无害化处理率达100％。</p><p>建立农户源头按湿垃圾（厨余垃圾）和干垃圾（其他垃圾）的“二分法”进行分类。村镇按可回收物、有害垃圾、湿垃圾、干垃圾和炉渣垃圾“4＋1”分类法进行分类。可回收物主要包括废纸类、废塑料、废玻璃制品、废金属和废织物等适宜回收循环使用和资源利用的废弃物。有害垃圾指废电池、废灯管、废药品、废油漆及其容器等对人体健康或者自然环境造成直接或者潜在危害的生活废弃物。湿垃圾即易腐垃圾，指食材废料、剩菜剩饭、过期食品、瓜皮果核、中药药渣等易腐的生物质生活废弃物。包括食物残渣、菜根、菜叶，动物蹄、角、瓜皮、果屑、蛋壳、鱼鳞、蛋壳、毛发等。干垃圾指除可回收物、有害垃圾、湿垃圾（厨余垃圾）以外的其它生活废弃物，包括污染的卫生纸（纸巾）、烟头、海鲜贝壳类以及少量砖瓦、陶瓷、渣土等难以回收的废弃物。</p>每户配备一组两格式或两个不同颜色的垃圾桶。村按每100户配置1辆分格式电动三轮车或手推车；配备密封性好、标识明显、节能环保、满足分类要求的专用运输车。<p>无收集车村应在收集点分别设置分类收集桶，蓝色垃圾桶用于可回收物，绿色垃圾桶用于湿垃圾，灰色垃圾桶用于干垃圾，红色垃圾桶用于有害垃圾收集。</p>",
        
    }
})
let article3=Mock.mock({
    "count":3,
    "next":null,
    "preview":null,
    "results":{
        "article_id": 3,
        "create_time":  "2019年11月8日",
        "tag": "垃圾利用",
        "topic": "厉害了！济南这个街道的所有社区用上智能垃圾分类机器人",
        "content": "<p>济南11月8日讯（记者 张稳 实习生 吕乐） 8日上午9点,济南市中区城管局携手区委编办、七里山办事处七东社区党委，在七东社区开展“做好垃圾分类 推动绿色发展”宣传活动。</p> <p>在活动现场，百姓城管志愿者表演了精心排练的“三句半”，用通俗易懂的语言把垃圾分类知识介绍给辖区居民。七东社区综合党委书记王美华讲解了不同颜色垃圾桶应该如何进行分类，从而使社区居民更熟练地掌握相关知识，为做好垃圾分类工作奠定基础。随后，活动单位和志愿者们现场演示“小黄狗”垃圾分类积分兑换过程。 七里山幼儿园的环保小卫士们也在老师的带领下积极参与到活动中来，小朋友们争先恐后的把不同种类的垃圾分别投入到相应的回收箱。通过现场垃圾分类实际操作实践，让辖区居民懂得把有用物资,从垃圾中分离出来重新回收利用，变废为宝，提高了资源利用水平，减少垃圾处置量，减少污染，节省了资源，让绿色环保理念深入人心。现场演示及耐心细致的讲解，赢得了在场居民的赞誉。大家纷纷表示，以后要自觉养成垃圾分类的好习惯，减少环境污染，为子孙后代造福。</p> <p>“生活垃圾分类工作不仅关系到城市的文明程度和城市形象，更能改善生存环境质量。垃圾分类，去掉能回收的、不易降解的物质，减少垃圾数量达50%以上。”市中区环卫管护中心副主任李涛说，垃圾分类的开展能有效降低垃圾处理厂的压力，还能变废为宝，既环保，又节约资源。 王美华说，辖区内295名党员全都主动签约承诺：垃圾分类带头做，带头宣传。 而且，社区党委还利用“532”工作法，即5条路线：政府领导为主线，社会支持、志愿服务、共建共享、以点带面为辅线；3个目标：节约资源、减少污染、变废为宝；2个坚持：坚持党员带动群众，坚持全民参与，点滴做起。此外，“小黄狗”入驻七里山街道七东社区，垃圾分类进入智能时代。值得一提的是，七东社区是市中区第一个安装智能垃圾分类回收机的社区，并且七里山办事处的十个社区也已全部覆盖。</p> <p>大众网·海报新闻记者在现场了解到，“小黄狗”是一款智能垃圾回收箱，能够满足可回收垃圾与有害垃圾两大类生活垃圾的分类回收，通过进驻城市居民社区、写字楼、酒店、闹市区及其他公共区域，以有偿回收方式接收市民投放的旧衣物、金属、废纸等垃圾，提高再生资源利用。并且由该设备开发公司进行闭环处理，部分垃圾可以再分解利用，部分进行环保处理。 “要想做好垃圾分类就要做好以下四点：分类投放、分类收集、分类运输和分类处理。”李涛告诉记者，坚持垃圾分类是为了给后代提供一个好的生活环境。现如今，每天所产生的垃圾量越来越大，以市中区为例，一天的垃圾量就是800吨。济阳垃圾场的数量已经达到饱和，并且现在在超负荷存储。</p> <p>为深入推进垃圾分类工作，进一步扩大垃圾分类的宣传面和知晓率，七东社区也想出了不少好主意。王美华告诉记者，七东社区为山东大学和济南大学的学生们提供了实践的平台，所有的入校新生都会来到这里进行加护广场和垃圾分类的培训。此外，他们还定制了一些手提袋，上面印有“今天你环保么？”“今天你垃圾分类了么？”等标语，全方位将垃圾分类理念灌输给人们，做到“入眼入脑入心”，让垃圾分类成为人们的一种习惯。 </p>",
        
    }
})
//文章链接
let articleList=Mock.mock({
    data:{
        'title|5-10':'标题',
        date: Mock.Random.date('yyyy-MM-dd'),
        content: Mock.Random.cparagraph(50,100),
        src: Mock.Random.url('http'),
        liulan: 1111,
        tokens: 'sss'
    }
})
//文章评论
let commentList=[
    {
        "user_name":"eli_tsao",
        "creat_time":"1111-10-12",
        "comment":"实力点赞",
        "avatar":"https://c-ssl.duitang.com/uploads/item/201709/26/20170926003219_RCjJE.thumb.700_0.jpeg",
    },{
        "user_name":"esao",
        "creat_time":"1999-10-12",
        "comment":"实力点实力点赞实力点赞赞",
        "avatar":"https://c-ssl.duitang.com/uploads/item/201801/17/20180117181801_KRYJQ.thumb.700_0.jpeg",
    },{
        "user_name":"eli_tsao",
        "creat_time":"1999-10-12",
        "comment":"实力点赞实实力点赞力点实力点赞实力点赞赞",
        "avatar":"http://static.hdslb.com/images/member/noface.gif",
    },{
        "user_name":"mu",
        "creat_time":"1999-10-12",
        "comment":"实力点赞",
        "avatar":"https://avatars0.githubusercontent.com/u/47131504?s=64&v=4",
    },{
        "user_name":"ding",
        "creat_time":"1999-10-12",
        "comment":"实力点赞",
        "avatar":"https://c-ssl.duitang.com/uploads/item/201509/25/20150925110828_iMnGx.thumb.700_0.jpeg",
    },{
        "user_name":"diao",
        "creat_time":"1999-10-12",
        "comment":"实力点赞",
        "avatar":"https://c-ssl.duitang.com/uploads/item/201802/21/20180221223815_xkkyq.thumb.700_0.jpg",
    },{
        "user_name":"eli_tsao",
        "creat_time":"1999-10-12",
        "comment":"实力点赞",
        "avatar":"https://c-ssl.duitang.com/uploads/item/201509/25/20150925110828_iMnGx.thumb.700_0.jpeg",
    },{
        "user_name":"eli_tsao",
        "creat_time":"1999-10-12",
        "comment":"实力点赞",
        "avatar":"http://static.hdslb.com/images/member/noface.gif",
    },{
        "user_name":"eli_tsao",
        "creat_time":"1999-10-12",
        "comment":"实力点赞",
        "avatar":"http://static.hdslb.com/images/member/noface.gif",
    },{
        "user_name":"eli_tsao",
        "creat_time":"1999-10-12",
        "comment":"实力点赞",
        "avatar":"http://static.hdslb.com/images/member/noface.gif",
    },{
        "user_name":"eli_tsao",
        "creat_time":"1999-10-12",
        "comment":"实力点赞",
        "avatar":"http://static.hdslb.com/images/member/noface.gif",
    },
];
let articleComment=Mock.mock({
    commentList
})
// NewsCommentViews
let NewsCommentViews=Mock.mock({
    'user_name':'标题',
    'create_time"': Mock.Random.date('yyyy-MM-dd'),
    'comment': Mock.Random.cparagraph(50,100),
})
//game
    function outList(){
        let objectList=[
            {
                question:"宝宝喝奶用的奶嘴属于什么垃圾",
                choice1:"干垃圾",
                choice2:"湿垃圾",
                choice3:"可回收物",
                choice4:"有害垃圾",
                daan:"A",
            },{
                question:"下列哪些不属于可回收哪里",
                choice1:"废铁丝、废铁",
                choice2:"用过的餐巾纸、茶叶渣",
                choice3:"玻璃瓶、废塑料",
                choice4:"旧衣服、废报纸",
                daan:"B",
            },{
                question:"毛发属于什么垃圾",
                choice1:"干垃圾",
                choice2:"湿垃圾",
                choice3:"可回收物",
                choice4:"有害垃圾",
                daan:"A",
            },{
                question:"吃剩下的大骨头属于什么垃圾",
                choice1:"干垃圾",
                choice2:"湿垃圾",
                choice3:"可回收物",
                choice4:"有害垃圾",
                daan:"A",
            },{
                question:"过期了的食品属于什么垃圾",
                choice1:"干垃圾",
                choice2:"湿垃圾",
                choice3:"可回收物",
                choice4:"有害垃圾",
                daan:"B",
            },{
                question:"鸡骨头、鱼刺属于什么垃圾",
                choice1:"干垃圾",
                choice2:"湿垃圾",
                choice3:"可回收物",
                choice4:"有害垃圾",
                daan:"B",
            },{
                question:"让你一秒变白的粉底液属于什么垃圾",
                choice1:"干垃圾",
                choice2:"湿垃圾",
                choice3:"可回收物",
                choice4:"有害垃圾",
                daan:"A",
            },{
                question:"家里切菜用的菜刀属于什么垃圾",
                choice1:"干垃圾",
                choice2:"湿垃圾",
                choice3:"可回收物",
                choice4:"有害垃圾",
                daan:"C",
            },{
                question:"过期药品属于什么垃圾",
                choice1:"干垃圾",
                choice2:"湿垃圾",
                choice3:"可回收物",
                choice4:"有害垃圾",
                daan:"D",
            },{
                question:"喝干净的牛奶盒属于什么垃圾",
                choice1:"干垃圾",
                choice2:"湿垃圾",
                choice3:"可回收物",
                choice4:"有害垃圾",
                daan:"C",
            },{
                question:"漂亮小姐姐涂的指甲油属于什么垃圾",
                choice1:"干垃圾",
                choice2:"湿垃圾",
                choice3:"可回收物",
                choice4:"有害垃圾",
                daan:"D",
            },{
                question:"旧衣服属于什么垃圾",
                choice1:"干垃圾",
                choice2:"湿垃圾",
                choice3:"可回收物",
                choice4:"有害垃圾",
                daan:"B",
            },{
                question:"有害垃圾应该投入哪个颜色的垃圾桶",
                choice1:"红色",
                choice2:"蓝色",
                choice3:"绿色",
                choice4:"灰色",
                daan:"A",
            },{
                question:"其他垃圾应该投入哪个颜色的垃圾桶",
                choice1:"红色",
                choice2:"蓝色",
                choice3:"绿色",
                choice4:"灰色",
                daan:"D",
            },{
                question:"垃圾分类可以减少排碳量吗",
                choice1:"可以",
                choice2:"不可以",
                choice3:"不知道",
                choice4:"可能可以",
                daan:"A",
            },{
                question:"用完的杀虫喷雾瓶属于哪一类",
                choice1:"可回收垃圾",
                choice2:"厨余垃圾",
                choice3:"其他垃圾",
                choice4:"有害垃圾",
                daan:"A",
            },{
                question:"下列哪个不是有害垃圾",
                choice1:"过期药品",
                choice2:"过期药瓶",
                choice3:"废水银温度计",
                choice4:"废电池",
                daan:"B",
            },{
                question:"易拉罐应放入哪个垃圾桶",
                choice1:"餐厨垃圾",
                choice2:"可回收垃圾",
                choice3:"有害垃圾",
                choice4:"其他垃圾",
                daan:"B",
            },{
                question:"抽完的烟头应投入哪个垃圾桶",
                choice1:"红色",
                choice2:"蓝色",
                choice3:"绿色",
                choice4:"灰色",
                daan:"A",
            },{
                question:"可回收垃圾可以分为几类",
                choice1:"三",
                choice2:"四",
                choice3:"五",
                choice4:"六",
                daan:"A",
            }
        ];
        let outList=[];
        var start=Mock.Random.natural(0,20);
        for(var i=0;i<10;i++){
            outList.push(objectList[((start++)%20)]);
        }
        return outList;
    }
    let game=Mock.mock({
        outList
    })
    
//排行榜
    let rankList=[
        {
            name:'mars',
            score:100
        },{
            name:'blue',
            score:98
        },{
            name:'cao',
            score:95
        },{
            name:'未知客人',
            score:90
        },{
            name:'星际霸主',
            score:90
        },{
            name:'蓝月亮',
            score:88
        },{
            name:'海森堡',
            score:85
        },{
            name:'鲁夫',
            score:77
        },{
            name:'道儿',
            score:76
        },{
            name:'哭泣的海神',
            score:69
        }
    ];
    // for (let i=0;i<10;i++){
    //     let obj={
    //         name: Mock.Random.cword(3),
    //         score: 100-i
    //     }
    //     rankList.push(obj);
    // }
    let ranking=Mock.mock({
        rankList
    })

// 第一步注册验证
Mock.mock(/register/,'post',(option)=>{
    console.log("获取注册验证的信息");
    var obody=eval('('+option.body+')');
    console.log(obody);
    if(obody.username=='mars'||obody.username=='cao'){
        return "名字重了";
    }else if(obody.e_mail==='100@qq.com'){
        console.log("ssss");
        return  "邮箱重名";
    }else{
        newone.result.username=obody.username;
        newone.result.e_mail=obody.e_mail;
        newone.result.password=obody.password;
        return zhuce;
    }
});
// 获取token
Mock.mock(/login/,'post',(option)=>{
    console.log("申请获取token");
    console.log(option);
    var obody=eval('('+option.body+')');
    console.log(obody.username);
    if(obody.username==mu.result.username&&obody.password==111111){
        return token1;
    }else if(obody.username==cao.result.username&&obody.password==111111){
        return token2;
    }else if(obody.username==newone.result.username&&obody.password==newone.result.password){
        return token3;
    }else{
        return "信息错误";
    }
});
// 根据token获取用户名
Mock.mock(/api\/UserViewSet/,'get',(option)=>{
    console.log("用户名token验证");
    console.log(option.url[option.url.length-2]);
    if(option.url[option.url.length-2]=='X'){
        return mu;
    }else if(option.url[option.url.length-2]=='Y'){
        return cao;
    }else if(option.url[option.url.length-2]=='Z'){
        return newone;
    }else{
        return "error";
    }
});
Mock.mock(/api\/UserViewSet/,'post',(option)=>{
    console.log("111111111111111s");
    console.log(option);
    if('XXX'==token.token){
        console.log("1234567890");
        return userInfo;
    }else{
        return "error";
    }
}); 
//根据uid修改用户信息
Mock.mock(/api\/UserViewSet\/\//,'put',(option)=>{
    console.log("修改信息已提交");
    console.log(option.body);
    // userInfo.name=option.body;
    var obody=eval('('+option.body+')');
    var gai;
    console.log(obody);
    obody=obody.data;
    if(obody.uid==1){
        gai=mu;
    }else if(obody.uid==2){
        gai=cao;
    }else{
        gai=newone;
    }
    gai.result.username=obody.username;
    gai.result.e_mail=obody.e_mail;
    gai.result.real_name=obody.real_name;
    gai.result.avatar=obody.avatar;
    gai.result.user_description=obody.user_description;
    console.log(cao);
    return cao;
});

//根据aid返回文章具体内容
Mock.mock(/api\/NewsViewSet\/\//,'get',(option)=>{
    console.log("article");
    console.log(option);
    var str=option.url;
    //解析json
    console.log(option);
    var l=str.indexOf("=");
    console.log(str[l+1]);
    
    if(str[l+1]==1){
        return article;
    }else if(str[l+1]==2){
        return article2;
    }else if(str[l+1]==3){
        return article3;
    }
    
});
//game
Mock.mock(/game\/question/,'post',()=>{
    return game
});
//排行榜
Mock.mock(/game\/ranking/,'post',()=>{
    return ranking
});
//搜索栏
Mock.mock(/main\/search/,'post',(option)=>{
    console.log(option);
    return "湿垃圾"
});
//文章链接
Mock.mock(/main\/articleList/,'post',(option)=>{
    console.log(option);
    return articleList
});
Mock.mock(/game\/score/,'get',(option)=>{
    console.log("成绩");
    
    console.log(option);
});
//文章评论
Mock.mock(/api\/NewsCommentViews/,'get',(option)=>{
    console.log("请求文章评论");
    return articleComment;
});

