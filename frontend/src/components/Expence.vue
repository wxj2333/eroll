<template>
  <div>
    <el-container v-if="!isCheck">
      <el-header style="color: #409EFF;font-size:large">确认报名信息</el-header>
      <el-divider style="color: #409EFF"></el-divider>
      <el-main>
        <ul>
          <li></li>
          <li></li>
        </ul>
        <el-table
          :data="tableData"
          border
          style="width: 60%">
          <el-table-column
            prop="e_name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="e_idno"
            label="身份证号码"
            width="180">
          </el-table-column>
          <el-table-column
            prop="e_major"
            label="考试科目">
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>
        <el-button @click="check">去支付</el-button>
        <el-button @click="wrong">信息有误，需要更改</el-button>
      </el-footer>
    </el-container>
    <div v-if="isCheck">
      考试报名费用已缴纳，请等候考试相关安排
    </div>
  </div>
</template>

<script>
export default {
  name: 'Expence',
  data () {
    return {
      isCheck: 0,
      tableData: [],
      id: ''
    }
  },
  methods: {
    async check () {
      this.id = this.$store.getter.id
      const { data: res } = await this.$http.get('exam/sinfo', this.id)
      if (res.code !== 200) {
        this.$message.error('添加用户失败！')
      }
      const obj = {
        a_name: res.e_name,
        a_major: res.e_major,
        a_s_id: res.e_s_id
      }
      const { data: ret } = await this.$http.get('apply/add', obj)
      if (ret.code !== 200) {
        this.$message.error('添加用户失败！')
      }
      this.isCheck = 1
      this.$store.commit('setState', 4)
    },
    async wrong () {
      const confirmResult = await this.$confirm(
        '确认返回修改数据吗，资料将重新审核！是否继续?',
        '提示',
        {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).catch(err => err)
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消修改')
      }
      this.$store.commit('setState', 2)
    }
  }
}
</script>

<style scoped>

</style>
