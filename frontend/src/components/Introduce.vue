<template>
<div>
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in imgList" :key="item" height="300px" >
        <h3><img :src="item.url" alt="" :fit="contain"> </h3>
<!--      <el-carousel-item v-for="(img,index) in imgList" :key="index">-->
<!--        <el-image-->
<!--          style="width: 600px; height: 300px"-->
<!--          :src="url"-->
<!--          :fit="fill"></el-image>-->
      </el-carousel-item>
    </el-carousel>

</div>
</template>

<script>
export default {
  name: 'Introduce',
  data () {
    return {
      imgList: [
        { url: require('../assets/image/intro1.jpg') },
        { url: require('../assets/image/intro2.jpg') },
        { url: require('../assets/image/intro3.jpg') },
        { url: require('../assets/image/intro4.jpg') },
        { url: require('../assets/image/intro5.jpg') }
      ]
    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    img{
      size: 100% 100%;
    }
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
