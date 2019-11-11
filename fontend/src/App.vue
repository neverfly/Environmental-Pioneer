<template>
  <div id="app" style="height:100vh">
      <!-- 回到顶部 -->
      <el-backtop :bottom="60"></el-backtop>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
</style>
