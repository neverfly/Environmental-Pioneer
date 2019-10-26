<template>
    <div>
        <navigation></navigation>
        <div class="personalCenter">
            <el-row class="demo-avatar demo-basic">
                <el-col :lg="12" :md="16">
                <div class="demo-basic--circle">
                    <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
                    <div class="block" v-for="size in sizeList" :key="size">
                    <el-avatar :size="size" :src="circleUrl"></el-avatar>
                    </div>
                </div>
                </el-col> 
            </el-row>
            <p><span>ID:</span><span>{{name}}</span></p>
            <p><span>昵称：</span><span></span></p>
            <p><span>绑定手机</span><span></span></p>
            <p><span>姓名：</span><span></span></p>
            <p><span>性别：</span><span></span></p>
        </div>
        <footers></footers>
    </div>
</template>
<script>
export default {
    name:'personalCenter'
}
</script>
<style scoped>
    .personalCenter{
        margin-left: 20%;
        margin-right: 20%;
        background-image: linear-gradient(#dff5d6, #98e778);
        width: 60%;
        height: 700px;
    }
</style>