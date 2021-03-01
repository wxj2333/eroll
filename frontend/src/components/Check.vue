<template>
  <div>
    <span v-if="!flage">请等待学校招生人员审核</span>
    <span v-if="flage">审核已通过,您将在<span style="color:rgb(104, 151, 180)">{{time}}</span>秒后跳至缴费界面</span>
  </div>

</template>

<script>
export default {
  name: 'Check',
  data () {
    return {
      flage: 0,
      time: 0
    }
  },
  created () {
    this.flage = this.$store.getter.state
  },
  methods: {
    countDown () {
      const THIS = this;
      THIS.time--;
    }
  },
  mounted () {
    const THIS = this;
    THIS.time = 5;
    setInterval(THIS.countDown, 1000);
  },
  watch: {
    time: function (newVal, oldVal) {
      if (newVal === 0) {
        // this.$router.push('/index');
        this.$store.commit('setState', 3)
      }
    }
  }
}
</script>

<style scoped>

</style>
