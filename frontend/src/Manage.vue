<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header class="header">
      <div class="logo">
<!--        <a href=""><img src="../assets/logo.png" /></a>-->
      </div>
      <div class="name">
        <div style="font-family: 华文隶书;font-size: 36px;">福建职业技术学院</div>
        <div style="font-family: Algerian;font-size: 22px;">Fujian Vocational College</div>
      </div>
      <div class="login">
        <el-button type="primary"  @click="logout"> <router-link to="/Login">退出</router-link></el-button>
      </div>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="iscollapse ? '64px':'200px'">
        <div class="toggle-button" @click="toggleCollapse">| | |</div>
        <!-- 菜单 -->
        <el-menu
          background-color="rgb(104, 151, 179)"
          text-color="#fff"
          active-text-color="rgb(114, 141, 179)"
          unique-opened
          :collapse="iscollapse"
          :collapse-transition="false"
          router
          :default-active="activePath"
        >
          <el-menu-item index="/plane" @click="savaNavState('/plane')">
            <i class="el-icon-setting"></i>
            <span slot="title">招生计划上传</span>
          </el-menu-item>
          <el-submenu >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>资料审核</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/check/exam" @click="savaNavState('/check/exam')">报考资料审核</el-menu-item>
              <el-menu-item index="/check/allow" @click="savaNavState('/')">报名资料审核</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>录取信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/result/eroll" @click="savaNavState('/result/eroll')">录取申请通过</el-menu-item>
            <el-menu-item index="/result/book" @click="savaNavState('/result/book')">录取通知书发放情况</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-aside>
      <!-- 主体内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'Manage',
  data () {
    return {
      // 左侧菜单
      activePath: '',
      iscollapse: false,
      iconsObj: {
        125: 'el-icon-user',
        103: 'el-icon-s-flag',
        101: 'el-icon-goods',
        102: 'el-icon-s-order',
        145: 'el-icon-s-marketing'
      }
    }
  },
  created () {
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 点击按钮，折叠菜单
    toggleCollapse () {
      this.iscollapse = !this.iscollapse
    },
    savaNavState (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>
<style lang="less" scoped>
  .home-container {
    height: 706px ;
  }
  .header{
    height: 120px !important;
    padding-bottom: 10px;
    /*margin: 0 40px;*/
  }
  .el-footer{
    height: 150px !important;
    width: 99%;
    background: url("./assets/background.jpg") no-repeat center;
    opacity:0.5;
    background-size: 100% 100%;
    position: absolute;
    bottom: 0px;
  }
  .logo{
    display: inline-block;
    width: 100px;
    height: 100px;
    background: url("./assets/logo.png") no-repeat center;
    background-size: 100% 100%;
    margin: 10px 20px 0 20px;
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
  .el-aside {
    background-color: rgb(90, 126, 150);
    .toggle-button {
      background-color: rgb(100, 151, 170);
      font-size: 10px;
      line-height: 24px;
      color: #fff;
      text-align: center;
      cursor: pointer;
    }
    .el-menu {
      border-right: none;
    }
  }
  .el-main {
    background-color: #eaedf1;
  }
  .el-button--primary {
    color: #FFF;
    background-color: rgb(104, 151, 180);
  }
</style>
