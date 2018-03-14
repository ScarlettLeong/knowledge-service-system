<template>
  <div id="app">
    <tab></tab>
    <div class="container">
       <router-view/>
    </div>
  </div>
</template>

<script>
import Tab from './base/tab/tab'

export default {
  components:{
    Tab
  }
}
</script>

<style lang="stylus" scoped>
@import './common/stylus/variable'

  .container
    width 90%
    margin 10px auto
    font-size $font-size-small 
</style>

