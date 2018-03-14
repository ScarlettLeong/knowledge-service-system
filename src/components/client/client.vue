<template>
  <div class="notice">
    <div class="head">
      <el-tabs>
        <el-tab-pane label="疑问解答" name="first"></el-tab-pane>
        <el-tab-pane label="合作纠纷" name="second"></el-tab-pane>
        <el-tab-pane label="投诉" name="third"></el-tab-pane>
      </el-tabs>
    </div>
    <el-collapse v-for="list in noticeList">
      <el-collapse-item name="1">
        <template slot="title">{{list.date}}</template>
        <ul>
          <li v-for="item in list.disc" class="text">
            <el-badge is-dot class="item">{{item.content}}</el-badge>
            <span class="time">{{item.time}}</span>
          </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data(){
      return{
          noticeList:[
            {
              date:'今天',
              disc:[
                  {
                  time:'19:00',
                  content:'用户aaa投诉“回复不及时”'
                  },
                   {
                  time:'16:00',
                  content:'用户bb发起合作纠纷介入'
                  },
                   {
                  time:'10:00',
                  content:'用户cc对“审核成果”有疑问'
                  }]
            },
             {
              date:'昨天',
              disc:[
                  {
                  time:'19:00',
                  content:'用户aaa投诉“回复不及时”'
                  },
                   {
                  time:'16:00',
                  content:'用户bb发起合作纠纷介入'
                  },
                   {
                  time:'10:00',
                  content:'用户cc对“审核成果”有疑问'
                  }]
            },
             {
              date:'02-20',
              disc:[
                   {
                  time:'19:00',
                  content:'用户aaa投诉“回复不及时”'
                  },
                   {
                  time:'16:00',
                  content:'用户bb发起合作纠纷介入'
                  },
                   {
                  time:'10:00',
                  content:'用户cc对“审核成果”有疑问'
                  }]
            }
          ]
      }
  }
}
</script>

<style lang="stylus" scoped>
.notice
    margin 20px
    .item 
        margin-top 10px
        margin-right 40px
    .time
        float right
        font-size 12px
        color #909399
</style>
