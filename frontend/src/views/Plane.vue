<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Manage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>招生计划上传</el-breadcrumb-item>
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
        <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
        </el-col>
      </el-row>
      <el-table :data="userlist" border stripe>
        <el-table-column type="index" prop="p_id"></el-table-column>
        <el-table-column label="学院" prop="p_name"></el-table-column>
        <el-table-column label="专业" prop="p_mj_name"></el-table-column>
        <el-table-column label="专业代码" prop="p_mj_id"></el-table-column>
        <el-table-column label="招生人数" prop="p_number"></el-table-column>
        <el-table-column label="操作" width="180px">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="showEditDialog(scope.row.p_id)"
            ></el-button>
            <!-- 删除按钮 -->
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="removeUserById(scope.row.p_id)"
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
    <el-dialog title="添加用户" :visible.sync="addDialogVisible" width="50%" @close="addDialogClosed" :before-close="handleClose">
      <!-- 内容主体区域 -->
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px">
        <el-form-item label="学院" prop="p_name">
          <el-input v-model="addForm.p_name"></el-input>
        </el-form-item>
        <el-form-item label="专业" prop="p_mj_name">
          <el-input v-model="addForm.p_mj_name"></el-input>
        </el-form-item>
        <el-form-item label="专业代码" prop="p_mj_id">
          <el-input v-model="addForm.p_mj_id"></el-input>
        </el-form-item>
        <el-form-item label="招生人数" prop="p_number">
          <el-input v-model="addForm.p_number"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改用户的对话框 -->
    <el-dialog title="修改用户" :visible.sync="editDialogVisible" width="50%" @close="editDialogClosed" :before-close="handleClose">
      <!-- 内容主体区域 -->
      <el-form :model="editForm" :rules="addFormRules" ref="editFormRef" label-width="70px">
        <el-form-item label="学院">
          <el-input v-model="editForm.p_name" disabled></el-input>
        </el-form-item>
        <el-form-item label="专业">
          <el-input v-model="editForm.p_mj_name" disabled></el-input>
        </el-form-item>
        <el-form-item label="专业代码" prop="p_mj_id">
          <el-input v-model="editForm.p_mj_id"></el-input>
        </el-form-item>
        <el-form-item label="招生人数" prop="p_number">
          <el-input v-model="editForm.p_number"></el-input>
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
  name: 'Plane',
  data () {
    return {
      total: 0,
      addDialogVisible: false,
      editDialogVisible: false,
      // deleteDialogVisible: false,
      userlist: [],
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 2
      },
      addForm: {
        p_name: '',
        p_mj_name: '',
        p_mj_id: '',
        p_number: ''
      },
      editForm: {},
      addFormRules: {
        p_name: [
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur'
          },
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ],
        p_mj_name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
          // { validator: checkPassword, trigger: 'blur' }
        ],
        p_mj_id: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
          // { validator: checkEmail, trigger: 'blur' }
        ],
        p_number: [
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
      const { data: res } = await this.$http.get('plane/list')
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
    // async userStateChanged (userinfo) {
    //   const { data: res } = await this.$http.put(
    //     `users/${userinfo.id}/state/${userinfo.mg_state}`
    //   )
    //   if (res.meta.status !== 200) {
    //     userinfo.mg_state = !userinfo.mg_state
    //     return this.$message.error('更新用户状态失败')
    //   }
    //   this.$message.success('更新用户状态成功')
    // },
    addDialogClosed () {
      this.$refs.addFormRef.resetFields()
    },
    editDialogClosed () {
      this.$refs.editFormRef.resetFields()
    },
    addUser () {
      this.$refs.addFormRef.validate(async valid => {
        if (!valid) return
        // 可以发起添加用户的网络请求 POST用于创建
        const { data: res } = await this.$http.post('plane/add', this.addForm)

        if (res.meta.status !== 200) {
          this.$message.error('添加用户失败！')
        }

        this.$message.success('添加用户成功！')
        // 隐藏添加用户的对话框
        this.addDialogVisible = false
        // 重新获取用户列表数据
        this.getUserList()
      })
    },
    // 展示修改用户框
    async showEditDialog (id) {
      const { data: res } = await this.$http.get('plane/info/' + id)
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
          'plane/update',
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
      const { data: res } = await this.$http.post('plane/delete', { p_id: id })
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
