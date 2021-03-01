<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="./assets/logo.png" alt />
      </div>
      <!-- 表单区域 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginrules"
        label-width="40px"
        class="info_box"
      >
        <el-form-item prop="post">
        <el-radio v-model="loginForm.post" label="0">学生</el-radio>
        <el-radio v-model="loginForm.post" label="1">老师</el-radio>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="手机号码"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="用户密码" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>

        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="success" plain size="small" round @click="submitForm()">登录</el-button>
          <el-button type="primary" plain size="small" round @click="setForm()">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-drawer
      title="欢迎注册 !"
      :before-close="handleClose"
      :visible.sync="dialog"
      direction="ltr"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="form" :rules="rules" ref="ruleForm">
          <el-form-item label="用户名称" :label-width="formLabelWidth">
            <el-input v-model="form.t_name"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" :label-width="formLabelWidth">
            <el-input v-model="form.t_telephone"></el-input>
          </el-form-item>
          <el-form-item label="用户密码" :label-width="formLabelWidth">
            <el-input v-model="form.t_password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" :label-width="formLabelWidth">
            <el-input v-model="form.checkpass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户身份" :label-width="formLabelWidth">
            <el-select v-model="form.post" placeholder="请选择用户身份">
              <el-option label="学生" value="0"></el-option>
              <el-option label="教师" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.t_password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      table: false,
      dialog: false,
      loading: false,
      form: {
        t_name: '',
        post: '',
        t_password: '',
        checkpass: '',
        t_telephone: ''
      },
      rules: {
        t_name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        post: [
          { required: true, message: '请选择职位', trigger: 'change' }
        ],
        t_password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkpass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        t_telephone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '手机号格式错误'
          }
        ]
      },
      formLabelWidth: '70px',
      timer: null,
      //   表单绑定数据
      loginForm: {
        username: '15616510431',
        password: '123456',
        post: ''
      },
      // 表单
      loginrules: {
        post: [
          { required: true, message: '请选择身份', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '手机号格式错误'
          }],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return false
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.code !== 200) {
          return this.$message.error('登陆失败')
        } else {
          if (this.loginForm.post === '0') {
            this.$store.commit('setId', res.s_id)
          }
          this.$message.success('登陆成功')
        }
        // window.sessionStorage.setItem('token', res.data.token)
        // console.log(this.loginForm.post)/
        // debugger
        if (this.loginForm.post === '0') {
          debugger
          this.$router.push('/Home')
        } else {
          debugger
          this.$router.push('/Manage')
        }
      })
    },
    setForm () {
      this.dialog = true
    },
    async signin () {
      delete this.form.checkpass
      if (this.form.post) {
        const { data: res } = await this.$http.post('teacher/add', this.form)
        debugger
        if (res.code !== 200) {
          return this.$message.error('注册失败！')
        } else {
          return this.$message.success('注册成功，请登录！')
        }
      } else {
        const sForm = {
          s_name: this.form.t_name,
          post: this.form.post,
          s_password: this.form.t_password,
          s_telephone: this.form.t_telephone
        }
        const { data: res } = await this.$http.post('student/add', sForm)
        if (res.code !== 200) {
          return this.$message.error('注册失败！')
        } else {
          return this.$message.success('注册成功，请登录！')
        }
      }
    },
    handleClose (done) {
      console.log(this.form)
      debugger
      if (this.loading) {
        return;
      }
      this.$confirm('确定要提交表单吗？')
        .then(_ => {
          this.loading = true;
          this.signin()
          this.loading = false;
          // this.timer = setTimeout(() => {
          //   done();
          //   // 动画关闭需要一定的时间
          //   setTimeout(() => {
          //   }, 400);
          // }, 2000);
        })
        .catch(_ => {});
    },
    cancelForm () {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
  }
}
</script>

<style lang="less" scoped>
  .login_container {
    height: 706px;
    width: 100%;
    background-color: rgb(104, 151, 180);
  }
  .login_box {
    width: 450px;
    height: 330px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar_box {
      height: 130px;
      width: 130px;
      background-color: #fff;
      border: 1px solid #eee;
      border-radius: 50%;
      box-shadow: 0 0 10px #dddddd;
      padding: 10px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
    .info_box {
      position: absolute;
      bottom: 0px;
      width: 100%;
      padding-right: 40px;
      box-sizing: border-box;
    }
    .btns {
      display: flex;
      justify-content: flex-end;
    }
    .el-form-item__content {
      text-align: center;
    }
  }
  .el-drawer{
    .el-input{
      width: 70%;
    }
  }
</style>
