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
    code:200,
    count:3,
    next:null,
    preview:null,
    result:{
        'title|5-10':'标题1',
        date: Mock.Random.date('yyyy-MM-dd'),
        writer: Mock.Random.cword(4),
        source: Mock.Random.cword(4),
        content: "<p>我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段.</p><p>我是第二段，我是第二段我是第二段我是第第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是二段我是第二段我是第二段我是第二段，我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段。</p><p>我是第我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段，我是第三段我是第三段，三段</p><p>我是最我是最后一段我是最后一段我是最后一段我，是最后一段我是最后一段我是最后一段我是最后一段我是最后一段，后一段</p>",
        'readingQua': Mock.Random.integer(100,10000),
        src: Mock.Random.url('http')
    }
})
let article2=Mock.mock({
    code:200,
    count:3,
    next:null,
    preview:null,
    result:{
        'title|5-10':'标题2',
        date: Mock.Random.date('yyyy-MM-dd'),
        writer: Mock.Random.cword(4),
        source: Mock.Random.cword(4),
        content: "<p>我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段.</p><p>我是第二段，我是第二段我是第二段我是第第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是二段我是第二段我是第二段我是第二段，我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段。</p><p>我是第我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段，我是第三段我是第三段，三段</p><p>我是最我是最后一段我是最后一段我是最后一段我，是最后一段我是最后一段我是最后一段我是最后一段我是最后一段，后一段</p>",
        'readingQua': Mock.Random.integer(100,10000),
        src: Mock.Random.url('http')
    }
})
let article3=Mock.mock({
    code:200,
    count:3,
    next:null,
    preview:null,
    result:{
        'title|5-10':'标题3',
        date: Mock.Random.date('yyyy-MM-dd'),
        writer: Mock.Random.cword(4),
        source: Mock.Random.cword(4),
        content: "<p>我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段,我是第一段.</p><p>我是第二段，我是第二段我是第二段我是第第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段我是二段我是第二段我是第二段我是第二段，我是第二段我是第二段我是第二段我是第二段我是第二段我是第二段。</p><p>我是第我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段我是第三段，我是第三段我是第三段，三段</p><p>我是最我是最后一段我是最后一段我是最后一段我，是最后一段我是最后一段我是最后一段我是最后一段我是最后一段，后一段</p>",
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
Mock.mock(/new\/article/,'post',(option)=>{
    console.log("article");
    //解析json
    var obody=eval('('+option.body+')');
    for(var item in obody){
        if(obody[item]==1){
            return article;
        }else if(obody[item]==2){
            return article2;
        }else if(obody[item]==3){
            return article3;
        }
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

