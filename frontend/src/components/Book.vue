<template>
<div class="book"
>
  <span class="name">
    {{name}}
  </span>
</div>
</template>

<script>
export default {
  name: 'Book',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    async getInfo () {
      this.id = this.$store.getter.id
      const { data: res } = await this.$http.post('student/info' + this.id)
      if (res.code !== 200) {
        return this.$message.error('获取用户失败')
      }
      this.name = res.data.s_name
    }
  },
  created () {
    this.getInfo()
  }
}
</script>

<style scoped>
.book{
  display: inline-block;
  width: 606px;
  height: 432px;
  background: url("../assets/book.jpg") no-repeat center;
  background-size: 100% 100%;
  margin: 10px 20px 0 20px;
}
  .name{

  }
</style>
