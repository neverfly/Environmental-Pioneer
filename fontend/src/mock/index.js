import Mock from 'mockjs'
import { Avatar } from 'element-ui'
//token
let token=Mock.mock({
    msg:"Succeeded",
    token:'XXX'
})
let token2=Mock.mock({
    msg:"Succeeded",
    token:'YYY'
})
let zhuce=Mock.mock({
    msg:"Succeeded",
})
//用户信息
let userInfo=Mock.mock({
    count:3,
    next:null,
    previous:null,
    data:{
        name: 'mars',
        pass: '111111',
        email: '1559830979@qq.com',
        token: false,
        id:'1559830979',
        user_description: "一位靓仔路过",
        realname:'XXX',
        avatar:'http://b-ssl.duitang.com/uploads/item/201806/07/20180607185957_fjrFt.thumb.700_0.jpeg'
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
        user_description: "一位靓仔路过",
        realname:'XXX'
    }
})
//文章
let article=Mock.mock({
    code:200,
    data:{
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
    data:{
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
    data:{
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
    console.log(option);
    return zhuce;
});
// 获取token
Mock.mock(/login/,'post',(option)=>{
    console.log("申请获取token");
    console.log(option);
    // var obody=eval('('+option.body+')');
    // for(var item in obody){
    //     if(obody[item]==1){
    //         return article;
    //     }else if(obody[item]==2){
    //         return article2;
    //     }else if(obody[item]==3){
    //         return article3;
    //     }
    // }
    var obody=eval('('+option.body+')');
    for(var item in obody){
        if(obody[item]==1){
            return token2;
        }else{
            return token;
        }
    }
    return token;
});
// 根据token获取用户名
Mock.mock(/api\/UserViewSet/,'get',(option)=>{
    console.log("用户名token验证");
    console.log(option);
    // var obody=eval('('+option.body+')');
    // console.log(obody);
    // return token2;
    // for(var item in obody){
    //     if(obody[item]==1){
    //         return token2;
    //     }else{
    //         return token;
    //     }
    // }
    return userInfo;
});
Mock.mock(/api\/UserViewSet/,'post',(option)=>{
    if('XXX'==token.token){
        console.log("1234567890");
        return userInfo;
    }else{
        return "error";
    }
}); 
//根据token修改用户信息
Mock.mock(/api\/UserViewSet/,'put',(option)=>{
    console.log("修改个人信息");
    console.log(option.body);
    console.log(userInfo.data);
    
    // userInfo.name=option.body;
    return userInfo;
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

