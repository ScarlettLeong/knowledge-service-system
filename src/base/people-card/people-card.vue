<template>
  <el-card :data="data">
    <div class="left">
      <img :src="data.avatar" width="70px" height="105px">
      <div>
        <el-button size="mini" type="primary" @click="confirm">推荐给用户</el-button>
      </div>
    </div>
    <div class="disc">
      <h1>{{data.name}}</h1>
      <div class="textwrapper">
        <span>单位：</span>
        <div class="text">{{data.company}}</div>
      </div>
      <div class="textwrapper">
        <span>职位：</span>
        <div class="text">{{data.profession}}</div>
      </div>
      <div class="textwrapper">
        <span>方向：</span>
        <div class="text">{{data.director}}</div>
      </div>
    </div>
  </el-card>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default: null
      }
    },
    methods: {
      confirm() {
          this.$message({
              message:'已推荐给用户！',
              type:'success'
          })
      }
    }
  }

</script>



<style lang="stylus" scoped>
.el-card
    display inline-block
    position relative
    margin 10px
    width 300px
    min-height 150px
    .left
        display inline-block
        .el-button
            margin 10px 0 0 5px
            padding 5px
            font-size 10px
        .primary
            color #409EFF
        .danger
            color #F56C6C
    .disc
        display inline-block
        position absolute
        top 10px
        right 10px
        width 65%
        margin-left 5px
        h1
            font-size 16px
            margin 10px
        .textwrapper
            margin 5px
            span,.text
                margin 5px
                font-size 14px
            .text
                display inline-block
                margin 0
                width 65%
                vertical-align top
</style>
