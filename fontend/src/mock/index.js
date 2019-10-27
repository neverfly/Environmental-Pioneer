import Mock from 'mockjs'
//用户名
let userInfo=Mock.mock({
    right:true,
    data:{
        name:'mars',
        pass: '111111',
        email: '1559830979@q.com'
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
//game

// 用户名
Mock.mock(/goods\/goodAll/,'post',()=>{
    return userInfo
});
//文章
Mock.mock(/new\/article/,'post',()=>{
    return article
});
//game
Mock.mock(/game\/question/,'post',()=>{
    return game
});

