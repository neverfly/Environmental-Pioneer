<template>
    <div class="hidden-md-only hidden-sm-only">
        <a href="">
            <img :src="search" alt="">
            <div>
                <p>垃圾快速分类</p>
            </div>
        </a>
    </div>
</template>
<script>
import search from '@/assets/images/5_23.png'
export default {
    name: 'quickSort',
    data() {
        return {
            search
        }
    },
}
</script>
<style scoped>
img{
    width: 100%;
    height: auto;
}
div{
    width: 100%;
    height: 20px;
    background-color: #2ca41e;
    padding-top: 1px;

}
p{
    text-align: center;
    color: #fcfcfc;
}
</style>