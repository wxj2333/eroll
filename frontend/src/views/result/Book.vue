<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Manage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>录取信息</el-breadcrumb-item>
      <el-breadcrumb-item>录取通知书发放情况</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
      <!-- 搜索与添加 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="getUserList">
            <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
          </el-input>
        </el-col>
<!--        <el-col :span="4">-->
<!--          <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>-->
<!--        </el-col>-->
      </el-row>
      <el-table :data="userlist" border stripe>
        <el-table-column type="index" prop="l_id"></el-table-column>
        <el-table-column label="姓名" prop="l_name"></el-table-column>
        <el-table-column label="地址" prop="l_address"></el-table-column>
        <el-table-column label="学号" prop="l_s_id"></el-table-column>
        <el-table-column label="发放状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.l_state" @change="userStateChanged(scope.row)"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="快递订单号" prop="l_orderid" v-if="this.addForm.l_state"></el-table-column>
        <el-table-column label="操作" width="180px">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="showEditDialog(scope.row.l_id)"
            ></el-button>
            <!-- 删除按钮 -->
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="removeUserById(scope.row.id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <!--      <div class="block">-->
      <!--        <span class="demonstration"></span>-->
      <!--        <el-pagination-->
      <!--          @size-change="handleSizeChange"-->
      <!--          @current-change="handleCurrentChange"-->
      <!--          :current-page="queryInfo.pagenum"-->
      <!--          :page-sizes="[1, 2, 5, 10]"-->
      <!--          :page-size="queryInfo.pagesize"-->
      <!--          layout="total, sizes, prev, pager, next, jumper"-->
      <!--          :total="total"-->
      <!--        ></el-pagination>-->
      <!--      </div>-->
    </el-card>
    <!-- 添加用户的对话框 -->
    <!-- 修改用户的对话框 -->
    <el-dialog title="修改用户" :visible.sync="editDialogVisible" width="50%" @close="editDialogClosed" :before-close="handleClose">
      <!-- 内容主体区域 -->
      <el-form :model="editForm" :rules="addFormRules" ref="editFormRef" label-width="70px">
        <el-form-item label="姓名">
          <el-input v-model="editForm.l_name" disabled></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="editForm.l_address" disabled></el-input>
        </el-form-item>
        <el-form-item label="学号" prop="l_s_id">
          <el-input v-model="editForm.l_s_id"></el-input>
        </el-form-item>
        <el-form-item label="快递订单号" prop="l_orderid">
          <el-input v-model="editForm.l_orderid"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Letter',
  data () {
    return {
      total: 0,
      editDialogVisible: false,
      // deleteDialogVisible: false,
      userlist: [],
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 2
      },
      addForm: {
        l_name: '',
        l_address: '',
        l_s_id: '',
        l_state: '',
        l_orderid: ''
      },
      editForm: {},
      addFormRules: {
        l_name: [
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur'
          },
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ],
        l_address: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
          // { validator: checkPassword, trigger: 'blur' }
        ],
        l_s_id: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
          // { validator: checkEmail, trigger: 'blur' }
        ],
        l_orderid: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
          // { validator: checkMobile, trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.getUserList()
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    async getUserList () {
      const { data: res } = await this.$http.get('letter/list')
      if (res.code !== 200) {
        return this.$message.error('获取用户列表失败！')
      }
      this.userlist = res.data
      console.log(this.userlist)
      debugger
      // this.total = res.data.total
    },
    // handleSizeChange (val) {
    //   this.queryInfo.pagesize = val
    //   this.getUserList()
    // },
    // handleCurrentChange (val) {
    //   this.getUserList()
    // },
    async userStateChanged (userinfo) {
      const { data: res } = await this.$http.post('letter/update', userinfo)
      if (res.code !== 200) {
        return this.$message.error('获取修改用户失败！')
      }
      this.$message.success('更新用户状态成功')
    },
    addDialogClosed () {
      this.$refs.addFormRef.resetFields()
    },
    editDialogClosed () {
      this.$refs.editFormRef.resetFields()
    },
    // 展示修改用户框
    async showEditDialog (id) {
      const { data: res } = await this.$http.get('letter/info/' + id)
      if (res.code !== 200) {
        return this.$message.error('获取修改用户失败！')
      }
      // 填充数据
      this.editForm = res.data
      // 开启对话框
      this.editDialogVisible = true
      // this.$message.success('获取修改用户成功！')
      // 重新获取用户列表数据
      // this.getUserList()
    },
    // 提交修改数据
    editUser () {
      this.$refs.editFormRef.validate(async valid => {
        if (!valid) return
        // 可以发起添加用户的网络请求 Put用于更新
        const { data: res } = await this.$http.post(
          'letter/update',
          this.editForm
        )
        if (res.code !== 200) {
          this.$message.error('修改用户失败！')
        }
        // 隐藏添加用户的对话框
        this.editDialogVisible = false
        // 重新获取用户列表数据
        this.getUserList()
        this.$message.success('修改用户成功！')
      })
    },
    async removeUserById (id) {
      const confirmResult = await this.$confirm(
        '此操作将永久删除该用户, 是否继续?',
        '提示',
        {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).catch(err => err)
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      const { data: res } = await this.$http.post('letter/delete', { l_id: id })
      if (res.code !== 200) {
        return this.$message.error('删除用户失败')
      }
      this.getUserList()
      this.$message.success('删除用户成功')
    }
  }
}
</script>

<style lang="less" scope>
  .el-col {
    margin-top: 15px;
  }
</style>
