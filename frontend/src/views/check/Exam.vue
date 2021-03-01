<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Manage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>资料审核</el-breadcrumb-item>
      <el-breadcrumb-item>报考资料审核</el-breadcrumb-item>
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
        <el-table-column type="index" prop="e_id"></el-table-column>
        <el-table-column label="姓名" prop="e_name"></el-table-column>
        <el-table-column label="准考证号" prop="e_admission"></el-table-column>
        <el-table-column label="考试时间" prop="e_date"></el-table-column>
        <el-table-column label="年龄" prop="e_nation"></el-table-column>
        <el-table-column label="性别" prop="e_sex"></el-table-column>
        <el-table-column label="考试科目" prop="e_major"></el-table-column>
        <el-table-column label="考点名称" prop="e_place"></el-table-column>
        <el-table-column label="考试地址" prop="e_address"></el-table-column>
        <el-table-column label="身份证号" prop="e_idno"></el-table-column>
        <!--        <el-table-column label="状态">-->
        <!--          <template slot-scope="scope">-->
        <!--            <el-switch v-model="scope.row.mg_state" @change="userStateChanged(scope.row)"></el-switch>-->
        <!--          </template>-->
        <!--        </el-table-column>-->
        <el-table-column label="操作" width="180px">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="showEditDialog(scope.row.e_id)"
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
    <el-dialog title="添加用户" :visible.sync="addDialogVisible" width="50%" @close="addDialogClosed" :before-close="handleClose">
      <!-- 内容主体区域 -->
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px">
        <el-form-item label="姓名" prop="e_name">
          <el-input v-model="addForm.e_name"></el-input>
        </el-form-item>
        <el-form-item label="准考证号" prop="e_admission">
          <el-input v-model="addForm.e_admission"></el-input>
        </el-form-item>
        <el-form-item label="考试时间" prop="e_date">
          <el-input v-model="addForm.e_date"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="e_nation">
          <el-input v-model="addForm.e_nation"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="e_sex">
          <el-input v-model="addForm.e_sex"></el-input>
        </el-form-item><el-form-item label="考试科目" prop="e_major">
        <el-input v-model="addForm.e_major"></el-input>
      </el-form-item><el-form-item label="考点名称" prop="e_place">
        <el-input v-model="addForm.e_place"></el-input>
      </el-form-item><el-form-item label="考试地址" prop="e_address">
        <el-input v-model="addForm.e_place"></el-input>
      </el-form-item><el-form-item label="身份证号" prop="e_idno">
        <el-input v-model="addForm.e_idno"></el-input>
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
        <el-form-item label="姓名">
          <el-input v-model="editForm.e_name" disabled></el-input>
        </el-form-item>
        <el-form-item label="准考证号">
          <el-input v-model="editForm.e_admission" disabled></el-input>
        </el-form-item>
        <el-form-item label="考试时间" prop="e_date">
          <el-input v-model="editForm.e_date"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="e_nation">
          <el-input v-model="editForm.e_nation"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="e_sex">
          <el-input v-model="editForm.e_sex"></el-input>
        </el-form-item><el-form-item label="考试科目" prop="e_major">
        <el-input v-model="editForm.e_major"></el-input>
      </el-form-item><el-form-item label="考点名称" prop="e_place">
        <el-input v-model="editForm.e_place"></el-input>
      </el-form-item><el-form-item label="考试地址" prop="e_address">
        <el-input v-model="editForm.e_address"></el-input>
      </el-form-item><el-form-item label="身份证号" prop="e_idno">
        <el-input v-model="editForm.e_idno"></el-input>
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
  name: 'Exam',
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
        e_name: '',
        e_admission: '',
        e_date: '',
        e_nation: '',
        e_sex: '',
        e_major: '',
        e_address: '',
        e_place: '',
        e_idno: ''
      },
      editForm: {},
      addFormRules: {
        e_name: [
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur'
          },
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ],
        e_admission: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
          // { validator: checkPassword, trigger: 'blur' }
        ],
        e_date: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
          // { validator: checkEmail, trigger: 'blur' }
        ],
        e_nation: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
          // { validator: checkMobile, trigger: 'blur' }
        ],
        e_sex: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
          // { validator: checkMobile, trigger: 'blur' }
        ],
        e_major: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
          // { validator: checkMobile, trigger: 'blur' }
        ],
        e_place: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
          // { validator: checkMobile, trigger: 'blur' }
        ],
        e_address: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
          // { validator: checkMobile, trigger: 'blur' }
        ],
        e_idno: [
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
      const { data: res } = await this.$http.get('exam/list')
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
        const { data: res } = await this.$http.post('exam/add', this.addForm)

        if (res.code !== 200) {
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
      const { data: res } = await this.$http.get('exam/info/' + id)
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
          'exam/update',
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
      const { data: res } = await this.$http.post('exam/delete', { e_id: id })
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
