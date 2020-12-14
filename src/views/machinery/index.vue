<template>
  <div class="machinery">
    <Header :title="title" />

    <div class="procedure">
      <div class="wire">
        <i class="iconfont icon-dian1"></i>
        <i class="iconfont icon-zhixian wire_strip"></i>
        <i class="iconfont icon-dian"></i>
      </div>
      <div class="namess">
        <span>基本信息</span>
        <span>完善信息</span>
      </div>
    </div>
    <div class="main">
      <div class="top">
        <div class="box">
          <div class="box_left">
            机械类别
          </div>
          <div class="box_right" @click="category_click">
            请选取
            <i class="iconfont  icon-arrow-right1"></i>
          </div>
        </div>
        <div class="box">
          <div class="box_left">
            机械名称-型号
          </div>
          <div class="box_right">
            请选取
            <i class="iconfont  icon-arrow-right1"></i>
          </div>
        </div>
        <div class="box">
          <div class="box_left">
            项目设备编码
          </div>
          <div class="box_right">
            请填写
          </div>
        </div>
        <div class="box">
          <div class="box_left">
            机械来源
          </div>
          <div class="box_right">
            请选取
            <i class="iconfont  icon-arrow-right1"></i>
          </div>
        </div>
        <div class="box">
          <div class="box_left">
            产权单位
          </div>
          <div class="box_right">
            请选取
            <i class="iconfont  icon-arrow-right1"></i>
          </div>
        </div>
        <div class="box">
          <div class="box_left">
            车牌号
          </div>
          <div class="box_right">
            请填写
          </div>
        </div>
        <div class="box">
          <div class="box_left">
            现场照片
          </div>
        </div>
        <div class="box_da">
          <div class="box_da_left">
            <i class="iconfont icon-xiangji imgs"></i>
            <p class="pictures">上传照片</p>
          </div>
          <p class="quantity">最多上传10张</p>
        </div>
        <div>
        </div>
      </div>

      <div class="bottom">
        <div class="box">
          <div class="box_left">
           实际进场日期
          </div>
          <div class="box_right">
                2020-12-11
            <i class="iconfont  icon-riqiicon"></i>
          </div>
        </div>
        <div class="box">
          <div class="box_left">
            拟退场日期
          </div>
          <div class="box_right">
           请选择日期
            <i class="iconfont  icon-riqiicon"></i>
          </div>
        </div>
        <div class="box">
          <div class="box_left">
        设备管理员
          </div>
          <div class="box_right">
            请选取
            <i class="iconfont  icon-arrow-right1"></i>
          </div>
        </div>
        <div class="box">
          <div class="box_left">
            使用单位
          </div>
          <div class="box_right">
            请选取
            <i class="iconfont  icon-arrow-right1"></i>
          </div>
        </div>
        <div class="box">
          <div class="box_left">
           安装拆除单位
          </div>
          <div class="box_right">
            请选取
            <i class="iconfont  icon-arrow-right1"></i>
          </div>
        </div>
        <div class="purpose">
            用途
        </div>
      </div>

      <div class="preserve">
              保存继续
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'Machinery',
  components: {
    Header
  },
  data () {
    return {
      title: '新增机械'
    }
  },
  methods: {
    category_click () {
      this.$router.push({ path: '/category' })
    }
  }
}
</script>

<style lang="scss">
.machinery {
  width: 100%;
  height: 100%;
  background: #ecedf0;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 97px;
    background: #2a87ff;
    display: flex;
    justify-content: space-between;
    padding: 25px 23px 25px 43px;
    color: #fff;
    .nav_left {
      width: 445px;
      height: 100%;
      // background-color: blueviolet;
      display: flex;
      .rollback {
        font-size: 48px;
      }
      .name {
        margin-left: 60px;
        font-size: 38px;
      }
    }
    .nav_right {
      width: 60px;
      height: 100%;
      // background-color: brown;
      .small {
        font-size: 39px;
      }
    }
  }

  .procedure {
    width: 100%;
    height: 153px;
    background: #fff;
    padding: 37px 50px 16px 50px;
    .wire {
      width: 100%;
      height: 52px;
      // background: crimson;
      text-align: center;
      i {
        height: 52px;
      }
      .wire_strip {
        display: inline-block;
        width: 460px;
      }
    }
    .namess {
      width: 100%;

      display: flex;
      justify-content: space-between;
      span {
        padding: 2px 30px;
      }
    }
  }
  .main {
    flex: 1;
    background: #ecedf0;
    margin-top: 15px;
    overflow: hidden;
    overflow-y: scroll;
    .top {
      width: 100%;
      height: auto;
      background: #fff;
      .box {
        width: 92%;
        height: 111px;
        // background: chocolate;
        margin: 0 auto;
        border-bottom: solid 2px #dedede;
        display: flex;
        justify-content: space-between;
        line-height: 111px;
        font-size: 27px;
        .box_left {
          padding-left: 12px;
        }
        .box_right {
          padding-right: 29px;
        }
      }
      .box_da {
        width: 92%;
        height: 228px;
        // background: chocolate;
        margin: 0 auto;
        padding: 44px 0 23px 35px;

        .box_da_left {
          width: 162px;
          height: 107px;
          border: solid 1px #ccc;
          border-radius: 10px;
          .imgs {
            width: 100%;
            height: 62px;
            padding: 10px 53px;
            display: inline-block;
          }
          .pictures {
            width: 100%;
            height: 38px;
            text-align: center;
            line-height: 38px;
            font-size: 26px;
          }
        }
        .quantity {
          margin-top: 27px;
          font-size: 22px;
        }
      }
    }

    .bottom {
      width: 100%;
      height: auto;
      margin-top: 15px;
      background: #fff;
      .box {
        width: 92%;
        height: 111px;
        // background: chocolate;
        margin: 0 auto;
        border-bottom: solid 2px #dedede;
        display: flex;
        justify-content: space-between;
        line-height: 111px;
        font-size: 27px;
        .box_left {
          padding-left: 12px;
        }
        .box_right {
          padding-right: 29px;
        }
      }
      .purpose{
               width: 92%;
        height: 213px;
        margin: 0 auto;
        // background: chocolate;
        line-height: 111px;
          padding-left: 12px;
           font-size: 27px;
      }
    }
    .preserve{
      width: 100%;
      height: 85px;
      background: #2988fe;
      line-height: 85px;
      text-align: center;
      font-size: 30px;
      color: #fff;
    }
  }
}
</style>
