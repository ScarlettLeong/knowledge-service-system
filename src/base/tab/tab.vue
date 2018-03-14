<template>
  <div class="tab">
    <el-menu :default-active="activeIndex" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">
        <router-link to="/info">
          <div class="tab_item">审核信息</div>
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/match">
          <div class="tab_item">匹配需求</div>
        </router-link>
      </el-menu-item>
       <el-menu-item index="3">
        <router-link to="/result">
          <div class="tab_item">审核成果</div>
        </router-link>
      </el-menu-item>
       <el-menu-item index="4">
        <router-link to="/client">
          <div class="tab_item">客户中心</div>
        </router-link>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    }
  }

</script>

<style lang="stylus" scoped>
  .el-menu 
    padding-left 5%

</style>
