<template>
    <div class="footer">
        <el-row>
            <!-- pc端 -->
            <el-col class="hidden-md-and-down" :lg="6" :offset="5">
                <a href="">代码仓库</a>
                <a href="">github</a>
                <a href="">码云</a>
            </el-col>
            <el-col class="hidden-md-and-down" :lg="6" :offset="6">
                <a href="">UI 小邋遢</a>
                <a href="">前端 凡夫俗子</a>
                <a href="">后端 EliTsao</a>
            </el-col>
            <el-col class="hidden-lg-and-up" :md="8">
                <a href="">代码仓库</a><br/>
                <a href="">github</a><br/>
                <a href="">码云</a><br/>
            </el-col>
            <el-col class="hidden-lg-and-up" :md="8">
                <a href="">UI 小邋遢</a><br/>
                <a href="">前端 凡夫俗子</a><br/>
                <a href="">后端 EliTsao</a><br/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'footers'
}
</script>
<style scoped>
.footer{
    margin-top: 20px;
    width: 100%;
    padding-top: 20px;
    background-color: #14a53b;
    min-height: 100px;
}
a{
    color: #ffffff;
    font-size: 20px;
    line-height: 30px;
    height: 30px;
    overflow: hidden;
    display: block;
    padding-left: 100px;
}

</style>