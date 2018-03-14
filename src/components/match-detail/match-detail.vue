<template>
  <div class="match_detail">
    <el-row :gutter="50">
      <el-col :span="12">
        <div class="head">
          <span>需求详情</span>
          <el-tag size="mini" :type="demandData.state === '未联系' ? 'primary' :  demandData.state === '已联系' ? 'success' : 'info'" plain>{{demandData.state}}</el-tag>
          <div class="result">
            <el-form size="mini" ref="form" :model="demandData" label-width="80px">
              <el-form-item label="结果">
                <el-select v-model="demandData.state" placeholder="请选择状态">
                  <el-option label="未联系" value="未联系"></el-option>
                  <el-option label="已联系" value="已联系"></el-option>
                  <el-option label="已完成" value="已完成"></el-option>
                </el-select>
                <el-button type="primary" size="mini">确认</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="main">
          <div class="wrapper">
            <span class="title">类型</span>
            <div class="content">{{demandData.type}}</div>
          </div>
          <div class="wrapper">
            <span class="title">名称</span>
            <div class="content">{{demandData.name}}</div>
          </div>
          <div class="wrapper">
            <span class="title">时间</span>
            <div class="content">{{demandData.startTime}} -- {{demandData.endTime}}</div>
          </div>
          <div class="wrapper">
            <span class="title">需求人才</span>
            <div class="content">
              <el-table border size="mini" :data="demandData.people">
                <el-table-column prop="direction" label="领域" width="250">
                </el-table-column>
                <el-table-column prop="num" label="需求人数" width="250">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="wrapper">
            <span class="title">需求描述</span>
            <div class="content experience">{{demandData.disc}}</div>
          </div>
          <div class="wrapper">
            <span class="title">预期价格</span>
            <div class="content">¥{{demandData.price}}</div>
          </div>
          <div class="head head2">
            <span>补充</span>
          </div>
          <el-form>
            <el-form-item class="supply">
              <el-input type="textarea" v-model="form.supplyment"></el-input>
            </el-form-item>
            <el-form-item class="supply">
              <el-button size="small" type="primary">确认</el-button>
            </el-form-item>
          </el-form>
          <div class="head head2">
            <span>联系方式</span>
          </div>
          <div class="wrapper">
            <span class="title">电话</span>
            <div class="content">{{demandData.phone}}</div>
          </div>
          <div class="wrapper">
            <span class="title">邮箱</span>
            <div class="content">{{demandData.email}}</div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="system">
          <div class="head3">
            <span>匹配系统</span>
          </div>
          <el-form label-position="right" label-width="80px">
           <el-form-item label="领域">
          <prov-city></prov-city>
        </el-form-item>
        <el-form-item label="关键字">
             <el-input size="small"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="toggleShow" type="primary" size="small">搜索</el-button>
        </el-form-item>
         </el-form>
         <ul v-if="show">
             <li v-for="item in feedback">
                 <p-card :data="item"></p-card>
             </li>
         </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import ProvCity from '../../base/prov-city/prov-city'
import PCard from '../../base/people-card/people-card'

  export default {
    data() {
      return {
        demandData: {
          state: '未联系',
          type: '写作助手',
          name: '深度论文一篇',
          startTime: '2018-01-01',
          endTime: '2018-02-01',
          people: [{
              direction: '金融－投资学',
              num: 1
            },
            {
              direction: '计算机',
              num: 2
            }
          ],
          disc: '1、熟悉HTML/JavaScript/CSS等Web开发技术2、熟悉常用JavaScript语言，AngularJS、Recact、Vuejs框架的设计思想和实现方式 3、熟悉Sass, Bootstrap等CSS框架4、熟练使用Git等版本控制工具 5、了解Java后端技术和框架的实现方式 6、具有良好的沟通协调能力，团队合作精神和执行力，能够承受工作压力和挑战 7、有Web前端实际项目开发经验者优先 8、有了解Java后端技术和框架的实现方式者为佳',
          price: 1000,
          phone: 12345678,
          email: '938593453@163.com'
        },
        form:{
            supplyment:''
        },
        show:false,
        feedback: [{
            name: '张三',
            company: '华南理工大学',
            profession: '华南理工大学计算机学院副教授',
            director: '深度学习',
            avatar: require('./timg (6).jpeg')
          },
          {
            name: '张三',
            company: '华南理工大学',
            profession: '华南理工大学计算机学院副教授',
            director: '深度学习',
            avatar: require('./timg (6).jpeg')
          },
          {
            name: '张三',
            company: '华南理工大学',
            profession: '华南理工大学计算机学院副教授',
            director: '深度学习',
            avatar: require('./timg (6).jpeg')
          }
        ],
      }
    },
    methods:{
        toggleShow(){
            this.show = true
        }
    },
    components:{
        ProvCity,
        PCard
    }
  }

</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'

.match_detail
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
    .head2
        margin-top 50px
    .result
        position relative
        right 0
        display inline-block
        .el-form
            margin 0 auto
    .supply
        margin 20px auto
        width 80%
        text-align center
    .system
        height 750px
        border solid 1px #cccccc
        overflow auto 
        .head3
            padding 20px
            margin 0 auto
            width 90%
            border-bottom solid 1px #cccccc 
            font-size $font-size-medium
        .el-form
            display inline-block
            width 90%
            margin 20px auto
        .el-input
            width 75% 
</style>
