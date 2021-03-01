<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="考生姓名" prop="s_name">
      <el-input v-model="ruleForm.s_name"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="s_sex">
      <el-select v-model="ruleForm.s_sex" placeholder="请选择活动区域">
        <el-option label="男" value="1"></el-option>
        <el-option label="女" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="民族" prop="s_nation">
      <el-input type="textarea" v-model="ruleForm.s_nation"></el-input>
    </el-form-item>
    <el-form-item label="身份证号码" prop="s_idno">
      <el-input type="textarea" v-model="ruleForm.s_idno"></el-input>
    </el-form-item>
    <el-form-item label="报考专业" prop="s_major">
      <el-input type="textarea" v-model="ruleForm.s_major"></el-input>
    </el-form-item>
    <el-form-item label="联系方式" prop="s_telephone">
      <el-input type="textarea" v-model="ruleForm.s_telephone"></el-input>
    </el-form-item>
    <el-form-item label="家庭住址" prop="s_address">
      <el-input type="textarea" v-model="ruleForm.s_address"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即报名</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Write',
  data () {
    return {
      ruleForm: {
        s_name: '',
        s_sex: '',
        s_nation: '',
        s_idno: '',
        s_major: '',
        s_address: ''
      },
      rules: {
        s_name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        s_sex: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        s_nation: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ],
        s_idno: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ],
        s_major: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ],
        s_address: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const { data: res } = await this.$http.post('student/getid/', formName.s_telephone)
          if (res.code !== 200) {
            return this.$message.error('失败')
          } else {
            formName.s_id = res.s_id
            const { data: ret } = await this.$http.post(
              'plane/update',
              formName
            )
            if (ret.code !== 200) {
              this.$message.error('修改用户失败！')
            }
            this.$store.commit('setState', 2)
            this.$message.success('报名成功')
          }
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>

</style>
