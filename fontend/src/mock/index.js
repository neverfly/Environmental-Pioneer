import Mock from 'mockjs'
//token
let token=Mock.mock({
    right:true,
    token:'XXX'
})
let token2=Mock.mock({
    right:true,
    token:'YYY'
})
//用户名
let userInfo=Mock.mock({
    right:true,
    data:{
        name: 'mars',
        pass: '111111',
        email: '1559830979@qq.com',
        token: false,
        id:'1559830979',
        address:'五道口职业技术学院',
        qianming: "一位靓仔路过",
        gender:'1',
        realname:'XXX'
    }
})
let creatUserInfo=Mock.mock({
    right:true,
    data:{
        name: '',
        pass: '',
        email: '',
        token: false,
        id:'1559830979',
        address:'五道口职业技术学院',
        qianming: "一位靓仔路过",
        gender:'1',
        realname:'XXX'
    }
})
//文章
let article=Mock.mock({
    code:200,
    data:{
        'title|5-10':'标题',
        date: Mock.Random.date('yyyy-MM-dd'),
        writer: Mock.Random.cword(4),
        source: Mock.Random.cword(4),
        content: Mock.Random.cparagraph(100,200),
        'readingQua': Mock.Random.integer(100,10000),
        src: Mock.Random.url('http')
    }
})
//文章链接
let articleList=Mock.mock({
    code:200,
    data:{
        'title|5-10':'标题',
        date: Mock.Random.date('yyyy-MM-dd'),
        content: Mock.Random.cparagraph(50,100),
        src: Mock.Random.url('http'),
        liulan: 1111,
        tokens: 'sss'
    }
})
//game
    var zimu=function(){
        var data=Math.ceil(Math.random()*4);
        switch(data){
            case 1:return 'A';
            case 2:return 'B';
            case 3:return 'C';
            case 4:return 'D';
        } 
    }
    let objectList=[];
    for (let i=0;i<10;i++){
        let newObject={
            question: Mock.Random.cword(10),
            choice1: Mock.Random.cword(6),
            choice2: Mock.Random.cword(6),
            choice3: Mock.Random.cword(6),
            choice4: Mock.Random.cword(6),
            'daan|': zimu()
        }
        objectList.push(newObject);
    }
    let game=Mock.mock({
        objectList
    })
//排行榜
    let rankList=[];
    for (let i=0;i<10;i++){
        let obj={
            name: Mock.Random.cword(3),
            score: 100-i
        }
        rankList.push(obj);
    }
    let ranking=Mock.mock({
        rankList
    })
// 获取token
Mock.mock(/login\/token/,'post',(option)=>{
    console.log("getmocktoken");
    return token;
});
// 注册获取token
Mock.mock(/login\/zhu/,'post',(option)=>{
    console.log("getzhucetoken");
    return token2;
});
// 用户名
Mock.mock(/goods\/goodAll/,'post',(option)=>{
    console.log("用户名token验证");
    console.log(option.body);
    if('XXX'==token.token){
        return userInfo
    }else{
        return "error";
    }
});
//文章
Mock.mock(/new\/article/,'post',()=>{
    return article
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

