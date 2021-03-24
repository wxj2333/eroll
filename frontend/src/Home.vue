<template>
  <el-container>
    <el-header class="header">
      <div class="logo">
<!--                 <a href=""><img src="../assets/logo.png" /></a>-->
      </div>
      <div class="name">
        <div style="font-family: 华文隶书;font-size: 36px;">福建职业技术学院</div>
        <div style="font-family: Algerian;font-size: 22px;">Fujian Vocational College</div>
      </div>
      <div class="login">
        <el-button type="primary"  @click="logout"> <router-link to="/Login">退出</router-link></el-button>
      </div>
    </el-header>
    <el-main class="main">
      <el-tabs type="border-card">
        <el-tab-pane label="学校介绍">
          <Introduce></Introduce>
        </el-tab-pane>
        <el-tab-pane label="在线报名">
          <Application></Application>
        </el-tab-pane>
        <el-tab-pane label="录取查询">
          <Search></Search>
        </el-tab-pane>
      </el-tabs>
    </el-main>
    <el-footer>
      <div class="alogo">
        <!--         <a href=""><img src="../assets/logo.png" /></a>-->
      </div>
      <div class="aname">
        <div style="font-family: 华文隶书;font-size: 24px;">福建职业技术学院</div>
        <div style="font-family: Algerian;font-size: 14px;">Fujian Vocational College</div>
      </div>
      <el-divider></el-divider>
      <el-row :gutter="20" class="row">
        <el-col :span="8"><i class="el-icon-map-location"></i> 福建省福州市</el-col>
        <el-col :span="8"><i class="el-icon-mobile-phone"></i> 0591-000000</el-col>
        <el-col :span="8"><i class="el-icon-message"></i> xxxx@163.com</el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
import Introduce from './components/Introduce.vue'
import Application from './components/Application.vue'
import Search from './components/Search.vue'

export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    Introduce: Introduce,
    Application: Application,
    Search: Search
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  /*.el-container{*/
  /*  height: 1000px;*/
  /*  width: 1000px;*/
  /*}*/
  html{
    height: 100vh;
  }
  .el-container{
    min-height:100%;
    margin:0;
    padding:0;
    position:relative;
  }
  .header{
    height: 120px !important;
    padding-bottom: 10px;
    /*margin: 0 40px;*/
  }
  .el-footer{
    height: 150px !important;
    width: 100%;
    background: url("./assets/background.jpg") no-repeat center;
    opacity:0.5;
    background-size: 100% 100%;
    position: relative;
    bottom: 0px;
    line-height:30px;
    text-align:center;
  }
  .logo{
    display: inline-block;
    width: 100px;
    height: 100px;
    background: url("./assets/logo.png") no-repeat center;
    background-size: 100% 100%;
    margin: 10px 20px 0 20px;
  }
  .alogo{
    display: inline-block;
    width: 60px;
    height: 60px;
    background: url("./assets/logo.png") no-repeat center;
    background-size: 100% 100%;
    position: absolute;
    left: 64px;
    top: 15px;
  }
  .login{
    display: inline-block;
    position: absolute;
    right:40px;
    top:50px
  }
  .name{
    display: inline-block;
    position: absolute;
    top:37px
  }
  .aname{
    display: inline-block;
    position: absolute;
    left: 140px;
    top: 18px;
  }
  .el-divider {
    background-color: rgb(90, 126, 150);
    position: relative;
    top: 60px;
  }
  .row{
    position: relative;
    top: 25px;
  }
  .el-button--primary {
    color: #FFF;
    background-color: rgb(104, 151, 180);
  }
</style>
