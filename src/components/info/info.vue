<template>
  <div class="info">
    <el-tabs type="border-card">
      <el-tab-pane label="未审核">
        <div class="left">
          <el-table @row-click="selectItem" :data="unInfoList" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="direction" label="领域">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="success" plain>审核成功</el-button>
                <el-button size="mini" type="danger" plain>审核失败</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已审核">
        <div class="right">
          <el-table @row-click="selectItem" :data="infoList" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="direction" label="领域">
            </el-table-column>
             <el-table-column label="状态">
              <template slot-scope="scope">
                <el-button size="mini" type="success">审核成功</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

  <script>
    export default {
      data() {
        return {
          unInfoList: [{
              date: '2018-01-01',
              name: '章三',
              direction: '金融'
            },
            {
              date: '2018-01-01',
              name: '章三',
              direction: '金融'
            },
            {
              date: '2018-01-01',
              name: '章三',
              direction: '金融'
            },
            {
              date: '2018-01-01',
              name: '章三',
              direction: '金融'
            },
            {
              date: '2018-01-01',
              name: '章三',
              direction: '金融'
            },
            {
              date: '2018-01-01',
              name: '章三',
              direction: '金融'
            }
          ],
          infoList: [{
              date: '2018-01-01',
              name: '章三',
              direction: '金融'
            },
            {
              date: '2018-01-01',
              name: '章三',
              direction: '金融'
            },
            {
              date: '2018-01-01',
              name: '章三',
              direction: '金融'
            },
            {
              date: '2018-01-01',
              name: '章三',
              direction: '金融'
            },
            {
              date: '2018-01-01',
              name: '章三',
              direction: '金融'
            },
            {
              date: '2018-01-01',
              name: '章三',
              direction: '金融'
            }
          ]
        }
      },
      methods:{
        selectItem(){
          this.$router.push({
            path:'/infoid'
          })
        }
      }
    }

  </script>

  <style lang="stylus" scoped>
  .el-tabs
    min-height 600px
    .left,.right
      width 90%
      margin 0 auto 

  </style>
