<template>
  <div id="app" style="height:100vh">
    <el-scrollbar style="height: 100%;"> <!-- 滚动条 -->
      <!-- 回到顶部 -->
      <el-backtop :bottom="60"></el-backtop>
      <router-view></router-view>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
</style>
