<template>
<el-card>
  <div class="slogon"><b>考试成绩</b></div>
  <el-table
    :data="gradeData"
    border
    style="width: 100%">
    <el-table-column
      prop="subject"
      label="科目"
      width="180">
    </el-table-column>
    <el-table-column
      prop="soccer"
      label="分数">
    </el-table-column>
  </el-table>
  <div class="slogon"><b>录取结果</b></div>
  <el-table
    :data="resultData"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="result"
      label="录取结果">
    </el-table-column>
  </el-table>
</el-card>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      gradeData: {
        subject: '',
        soccer: ''
      },
      resultData: {
        name: '',
        result: ''
      },
      id: ''
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    async getInfo () {
      this.id = this.$store.getters.id
      const { data: res } = await this.$http.get('exam/sinfo', this.id)
      if (res.code !== 200) {
        return this.$message.error('获取考试资料失败！')
      } else {
        const { data: ret } = await this.$http.get('aplly/sinfo', this.id)
        if (ret.code !== 200) {
          return this.$message.error('获取考试资料失败！')
        }
        this.gradeData = {
          subject: res.data.e_major,
          soccer: ret.data.a_soccer
        }
        this.resultData = {
          name: ret.data.a_name,
          result: ret.data.a_state
        }
      }
    }
  }
}
</script>

<style scoped>
  .slogon {
    width: 128px;
    height: 24px;
    background-color: #409EFF;
    transform: translate(-31%, 0);
    margin-bottom: 10px;
    text-align: center;
    line-height: 24px;
    font-size: 14px;
  }

  .slogon::before {
    content: '';
    position: absolute;
    top: 24px;
    left: 0px;
    height: 0;
    width: 0;
    border-top: 14px solid rgb(172, 207, 221);
    border-left: 20.5px solid transparent;

  }

  .slogon::after {
    content: '';
    position: absolute;
    top: 0;
    left: 124px;
    height: 0;
    width: 0;
    border-top: 12px solid #409EFF;
    border-right: 12px solid #ffffff;
    /* border-right: 20px solid #AF9E9E; */
    border-bottom: 12px solid #409EFF;
    background-color: #ffffff;
  }
</style>
