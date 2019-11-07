<template>
    <div class="footer">
        <el-row>
            <el-col :md="8" :lg="{span:6,offset:5}">
                <a href="">代码仓库</a>
                <a href="https://github.com/1559830979/Environmental-Pioneer" target="_blank">github</a>
                <a href="">码云</a>
            </el-col>
            <el-col :md="8" :lg="{span:6,offset:5}">
                <a href="">UI 小邋遢</a>
                <a href="">前端 凡夫俗子</a>
                <a href="">后端 EliTsao</a>
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