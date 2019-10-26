<template>
    <div>
    <!-- <div :style="{backgroundImage: 'url('+bgimg+')', width: '100%',minWidth:'100%',height:'180px',backgroundSize:'cover'}"> -->
        <el-row class="pad">
            <el-col :lg="6" class="hidden-md-and-down" :offset="8">
                <el-input class="search" v-model="input" placeholder="垃圾识别与分类"></el-input>
            </el-col>
            <el-col :md="16" :sm="16" class="hidden-lg-and-up">
                <el-input class="search" v-model="input" placeholder="垃圾识别与分类"></el-input>
            </el-col>
            <el-col :lg="2" :md="8" :sm="8">
                <el-button @click="searchLaji"><img :src="search" class="sou"/><span class="souText">搜索</span></el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import bgimg from '@/assets/images/index_01.png'
import search from '@/assets/images/index_07.png'

export default {
    name: 'search',
    data() {
        return {
            bgimg,
            search,
            input: ''
        }
    },
    methods: {
        searchLaji(){
            console.log(this.input);
            
        }
    },
}
</script>
<style>
.pad{
    padding-top: 60px;
}
.souText{
    color: #f2f2f2;
    font-size: 25px;
    height: 50%;
    line-height: 50%;
}
.el-button{
    height: 54px;
    width: 100%;
}
.sou{
    height: 20px;
}
.search{
    width: 100%;
}
.el-input.is-active .el-input__inner, .el-input__inner:focus{
    border: solid 1px #5ec74d;
}
.el-input__inner{
    border-radius:5px 0 0 5px;
    border: solid 1px #5ec74d;
    height: 55px;
    font-size: 25px;

}
.el-button{
    background-color: #5ec74d;
    border-radius:0 5px 5px 0;
    color: #f2f2f2;
    border: solid 1px #5ec74d;


}
.el-button:active,.el-button:focus,.el-button:hover{
    background-color: #5ec74d;
    border: solid 1px #5ec74d;

}
</style>