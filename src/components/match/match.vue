<template>
  <div class="match">
    <el-table :data="matchData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="program" label="项目">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="detail" size="mini" type="primary" plain>查看详情</el-button>
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-tag size="mini" :type="scope.row.state === '未联系' ? 'primary' :  scope.row.state === '已联系' ? 'success' : 'info'" plain>{{scope.row.state}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        matchData: [{
            program: '关于深度学习论文一篇',
            name: '李四',
            date: '2018-01-01',
            state: '未联系'
          },
          {
            program: '关于深度学习论文一篇',
            name: '李四',
            date: '2018-01-01',
            state: '未联系'
          },
          {
            program: '关于深度学习论文一篇',
            name: '李四',
            date: '2018-01-01',
            state: '已联系'
          },
          {
            program: '关于深度学习论文一篇',
            name: '李四',
            date: '2018-01-01',
            state: '已联系'
          },
          {
            program: '关于深度学习论文一篇',
            name: '李四',
            date: '2018-01-01',
            state: '已完成'
          }
        ]
      }
    },
    methods: {
      detail() {
        this.$router.push({
          path: '/match1'
        })
      }
    }
  }

</script>

<style lang="stylus" scoped>


</style>
