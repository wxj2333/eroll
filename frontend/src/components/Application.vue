<template>
  <div>
      <el-steps :active="active" finish-status="success">
        <el-step title="查看招生简介">
        </el-step>
        <el-step title="填写报考信息">
        </el-step>
        <el-step title="审核报考信息">
        </el-step>
        <el-step title="缴纳报考费用">
        </el-step>
        <el-step title="打印准考证">
        </el-step>
<!--        <el-step title="录取结果查询">-->
<!--          <Result></Result>-->
<!--        </el-step>-->
<!--        <el-step title="录取通知书发放查询">-->
<!--          <Book></Book>-->
<!--        </el-step>-->
      </el-steps>
    <el-card>
        <Inform v-if="active===0"></Inform>
        <Write v-if="active===1"></Write>
        <Check v-if="active===2"></Check>
        <Expence v-if="active===3"></Expence>
        <Printf v-if="active===4"></Printf>
        <Result v-if="active===5"></Result>
        <Book v-if="active===6"></Book>
    </el-card>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    <el-button style="margin-top: 12px;" @click="front">上一步</el-button>

  </div>
</template>

<script>
import Printf from './Printf';
import Check from './Check';
import Expence from './Expence';
import Inform from './Inform';
import Result from './Result';
import Book from './Book';
import Write from './Write';

export default {
  name: 'Application',
  data () {
    return {
      active: 0,
      id: ''
    };
  },
  components: {
    Inform: Inform,
    Write: Write,
    Expence: Expence,
    Check: Check,
    Printf: Printf,
    Result: Result,
    Book: Book
  },
  methods: {
    next () {
      if (this.active++ > 6) this.active = 0;
    },
    front () {
      this.active--
    },
    async getInfo () {
      this.id = this.$store.getter.id
      this.active = this.$store.getter.state
    }
  },
  created () {
    this.getInfo()
  }
}
</script>

<style scoped>

</style>
