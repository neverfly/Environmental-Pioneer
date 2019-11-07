<template>
    <div>
        <el-col :lg="5" class="hidden-md-and-down fixed"><img :src="leftImg" class="fixedL" alt=""></el-col>
        <el-col :lg="5" class="hidden-md-and-down fixed"><img :src="rightImg" class="fixedR" alt=""></el-col>
    </div>
</template>
<script>
import leftImg from '../assets/images/1.png'
import rightImg from '../assets/images/2.png'
export default {
    name:'cebian',
    data() {
        return {
            leftImg,
            rightImg
        }
    },
}
</script>
<style scoped>
    .fixedL{
        position: fixed;
        left: 0;
        top: 30%;
        width: 12%;
    }
    .fixedR{
        position: fixed;
        right: 0;
        top: 30%;
        width: 12%;
    }
</style>