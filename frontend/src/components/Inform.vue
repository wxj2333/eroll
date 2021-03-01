<template>
  <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="招生信息">
      <el-table :data="userlist" border stripe>
        <el-table-column type="index" prop="p_id"></el-table-column>
        <el-table-column label="学院" prop="p_name"></el-table-column>
        <el-table-column label="专业" prop="p_mj_name"></el-table-column>
        <el-table-column label="专业代码" prop="p_mj_id"></el-table-column>
        <el-table-column label="招生人数" prop="p_number"></el-table-column>
      </el-table>

    </el-tab-pane>
    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'Inform',
  data () {
    return {
      userlist: [],
      tabPosition: 'left'
    };
  },
  created () {
    this.getUserList()
  },
  methods: {
    async getUserList () {
      const { data: res } = await this.$http.get('plane/list')
      if (res.code !== 200) {
        return this.$message.error('获取用户列表失败！')
      }
      this.userlist = res.data
    // this.total = res.data.total
    }
  }

}
</script>

<style scoped>

</style>
