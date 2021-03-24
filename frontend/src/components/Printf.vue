<template>
  <div class="cardContain">
<!--    <el-dialog-->
<!--      width="1047px"-->
<!--      :close-on-click-modal="false"-->
<!--      :visible.sync="cardDialogVisible"-->
<!--      title="准考证"-->
<!--      class="printDialog"-->
<!--    >-->
      <el-card>
          <div v-for="(item, index) in multipleArr" :key="index">
            <h3 style="text-align: center;">准考证</h3>
            <table class="pttb">
              <tbody>
              <tr>
                <td style="width: 75px; height: 38px;" align="center">准考证号</td>
                <td style="width: 115px;">
                  <span id="Span1">{{item.admission}}</span>
                </td>
                <td style="width: 75px;" align="center">考试时间</td>
                <td style="width: 115px;">
                  <span id="Span2">{{item.examDate}}</span>
                </td>
                <td rowspan="4" style="width: 120px" align="center">
                  <img style="width: 100%;height: 152px;" :src="baseUrl + item.photo" alt="照片">
                </td>
              </tr>
              <tr>
                <td style="height: 38px;" align="center">姓名</td>
                <td>
                  <span id="Span3">{{item.name}}</span>
                </td>
                <td style="height: 38px;" align="center">民族</td>
                <td>
                  <span id="Span3">{{item.nation}}</span>
                </td>

              </tr>

              <tr>
                <td style="height: 38px;" align="center">性别</td>
                <td>
                  <span id="lbl_Nowzy">{{item.sex == '1' ? '男' : '女'}}</span>
                </td>
                <td style="width: 75px;" align="center">考试类型</td>
                <td style="width: 45px;">
                  <span id="Span2">笔试</span>
                </td>
              </tr>
              <tr>
                <td style="height: 38px;" align="center">考试机构</td>
                <td>
                  <span id="lbl_zhuanye2">福建XX职业技术学院</span>
                </td>
                <td style="height: 38px;" align="center">考试科目</td>
                <td>
                  <span id="lbl_zhuanye2">{{item.className}}</span>
                </td>
              </tr>
              <tr>
                <td style="height: 38px;" align="center">考点名称</td>
                <td>
                  <span id="lbl_Comnane">{{item.placeName}}</span>
                </td>

                <td align="center">考场位置</td>
                <td colspan="2">
                  <span id="lbl_year">{{item.placeAddress}}</span>
                </td>
              </tr>
              <tr>
                <td style="height: 38px;" align="center">身份证件类型</td>
                <td>
                  <span>身份证</span>
                </td>
                <td align="center">身份证件号</td>
                <td colspan="2">
                  <span id="lbl_tel">{{item.cardNo}}</span>
                </td>
              </tr>
              <tr>
                <td rowspan="5" colspan="5">
                  <p>考生注意事项：</p>
                  <p>1.&nbsp;&nbsp;携带本人有效身份证件及准考证提前30分钟进入考场，迟到15分钟不得入场。</p>
                  <p>2.&nbsp;&nbsp;遵守考场纪律，凡作弊者取消考试资格，考试完毕点击“交卷”按钮确认后立即离场。</p>
                  <p>3.&nbsp;&nbsp;妥善保管准考证，凭准考证领取资格证书。</p>
                  <p>4.&nbsp;&nbsp;补考考生请注意：逾期未进行考试的视为弃考。</p>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
      </el-card>
      <el-row class="dialog__footer dialog-footer-btn">
        <el-col>
          <el-button type="primary" v-print="'#cardWrap'" @click="print">打印</el-button>
          <!-- <el-button @click="closeDialog()">关闭</el-button> -->
        </el-col>
      </el-row>
<!--    </el-dialog>-->
  </div>
</template>

<script>
export default {
  name: 'Printf',
  data () {
    return {
      id: '',
      multipleArr: [{
        admission: '',
        examDate: '',
        photo: '',
        name: '',
        nation: '',
        sex: '',
        // examKind: '',
        className: '',
        placeName: '',
        placeAddress: '',
        cardNo: ''
      }]
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    async getInfo () {
      this.id = this.$store.getters.id
      const { data: res } = await this.$http.get('exam/sinfo/' + this.id)
      if (res.code !== 200) {
        return this.$message.error('获取考试资料失败！')
      } else {
        this.multipleArr = [{
          admission: res.data[0].e_admission,
          examDate: res.data[0].e_date,
          // photo: res.data[0].e_photo,
          name: res.data[0].e_name,
          nation: res.data[0].e_nation,
          sex: res.data[0].e_sex,
          className: res.data[0].e_major,
          placeName: res.data[0].e_place,
          placeAddress: res.data[0].e_address,
          cardNo: res.data[0].e_idno
        }]
        console.log(this.multipleArr)
      }
    },
    print () {
      this.$message.success('打印成功，祝考试顺利！')
      this.$store.commit('setState', 5)
    }
  }
}
</script>

<style scoped>
  .cardContain{
    width: 50%;
  }
  .pttb{
    min-height: 25px;
    line-height: 25px;
    text-align: center;
    border-collapse: collapse;
  }
  table,table tr th, table tr td
  { border:1px solid black; }
</style>
