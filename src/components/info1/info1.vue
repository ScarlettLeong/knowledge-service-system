<template>
  <div class="info_detail">
    <div class="head">
        <span>专业信息</span>
        <el-button class="btn1" size="mini" type="success" plain>通过</el-button>
        <el-button class="btn2" size="mini" type="danger" plain>不通过</el-button>
    </div>
    <div class="major">
      <div class="wrapper">
        <span class="title">姓名</span>
        <div class="content">{{majorData.name}}</div>
      </div>
      <div class="wrapper">
        <span class="title">单位</span>
        <div class="content">{{majorData.company}}</div>
      </div>
      <div class="wrapper">
        <span class="title">最高学历</span>
        <div class="content">{{majorData.education}}</div>
      </div>
      <div class="wrapper">
        <span class="title">主攻方向</span>
        <div class="content">{{majorData.direction}}</div>
      </div>
      <div class="wrapper">
        <span class="title">身份信息核实</span>
        <img :src="majorData.confirmImg">
      </div>
      <div class="wrapper">
        <span class="title">发表的论文</span>
        <div class="content">
          <el-table border size="mini" :data="majorData.papers">
            <el-table-column prop="title" label="题目" width="250">
            </el-table-column>
            <el-table-column prop="source" label="发表期刊" width="250">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="wrapper">
        <span class="title">专业经历</span>
        <div class="experience content">{{majorData.experience}}</div>
      </div>
      <div class="wrapper">
        <span class="title">附件简历</span>
        <el-button class="content" type="text" icon="el-icon-download">点击下载</el-button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data(){
      return{
          majorData:
              {
                  name:'章三',
                  company:'华南理工大学',
                  education:'博士',
                  direction:'金融－投资学',
                  confirmImg:require('./u=1111486802,1870602914&fm=27&gp=0.jpg'),
                  papers:[
                      {
                          title:'政策改变对金融市场的影响',
                          source:'Finance Week'
                      },
                      {
                          title:'政策改变对金融市场的影响',
                          source:'Finance Week'
                      },
                      {
                          title:'政策改变对金融市场的影响',
                          source:'Finance Week'
                      },
                      {
                          title:'政策改变对金融市场的影响',
                          source:'Finance Week'
                      }
                  ],
                  experience:'1959年17岁的霍金入读牛津大学的大学学院攻读自然科学，用了很少时间而得到一等荣誉学位，随后转读剑桥大学研究宇宙学。1963年，21岁的他不幸被诊断患有肌肉萎缩性侧索硬化症即运动神经细胞病。[1]  当时，医生曾诊断身患绝症的他只能活两年，可他一直坚强地活了下来。1965年，23岁时他取得了博士学位留在剑桥大学进行研究工作。',
                  request:true
              }
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'

.info_detail
    position relative
    min-height 600px
    width 90%
    min-height 700px
    margin 20px auto
    font-size $font-size-small
    .head
        padding 0 0 20px 0
        border-bottom solid 1px #cccccc 
        font-size $font-size-medium
        .btn2
            position absolute
            right 0
        .btn1
            position absolute
            right 8%
    .wrapper
        position relative
        margin 15px 0
        .title
            position absolute
            right 88%
            vertical-align top
            font-size $font-size-small
            color #909399
        .content
            display inline-block
            position relative
            left 14%
        img 
            position relative
            left 15%
            width 250px
            height 200px
        .experience
            width 80%
            line-height $font-size-large
        .el-button
            padding 0
</style>
