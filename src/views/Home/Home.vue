<template>
  <div id="home">
    <div>
      <div class="header">
        <div class="nav">
          <div class="nav_left">
            <i class="iconfont icon-toggle-copy"></i>
            <span class="name">现场机械管理系统</span>
          </div>
          <div class="nav_right">
            <i class="iconfont icon-lingdang  small"></i>
          </div>
        </div>
      </div>
      <div class="project" @click="projectClick">
        {{name ?  name : '地铁12号线建设工程' }}
        <i class="iconfont icon-icon1"></i>
      </div>
    </div>
 
    <router-view></router-view>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  name: 'Home',
  data () {
    return {
      dataList: [],
      name: JSON.parse( sessionStorage.getItem("nameList")) 
    }
  },
  methods: {
    projectClick () {
      this.$router.push({ path: '/about' })
    }
  },
  mounted() {
        
      // console.log(this.name);
  }
}
</script>

<style lang="scss">
#home {
  width: 100%;
  height: 100%;
  padding: 30px 20px 0 20px;
  background-image: linear-gradient(#2a87ff, #62adf1, #a3cbff);

  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 90px;
    // background: violet;

    .nav {
      width: 100%;
      height: 40px;
      // background-color: aqua;
      display: flex;
      justify-content: space-between;
      color: #fff;
      .nav_left {
        width: 445px;
        height: 100%;
        // background-color: blueviolet;
        display: flex;
        .name {
          margin-left: 60px;
          font-size: 30px;
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
  }
  .project {
    width: 100%;
    height: 60px;
    text-align: center;
    // background-color: brown;
    color: #fff;
    font-size: 30px;
    line-height: 60px;
  }

  .ipnDiv {
    width: 100%;
    height: 80px;
    margin-top: 22px;
    background-color: #fff;
    border-radius: 17px;
    display: flex;
    justify-content: space-between;
    line-height: 80px;
    padding: 0 25px;
    font-size: 30px;
    .To_audit {
      color: red;
    }
  }

  .main {
    flex: 1;
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    overflow-y: auto;
    margin-top: 12px;
    .title {
      width: 100%;
      height: 85px;
      line-height: 85px;
      padding-left: 30px;
      font-size: 31px;
      font-weight: 500;
    }
    .content {
      width: 100%;
      height: 220px;
      // background-color: chocolate;
      padding: 30px 30px 40px 30px;
      border-bottom: solid 2px #e2e2e0;

      .condition {
        height: 38px;
        // background-color: rgb(210, 30, 135);
        display: flex;
        .but {
          width: 75px;
          height: 35px;
          border-radius: 10px;
          background-color: #1f85fd;
          color: #fff;
          font-size: 18px;
          text-align: center;
          line-height: 35px;
        }
        p {
          font-size: 26px;
          margin-left: 10px;
        }
      }
      .model {
        height: 35px;
        // background-color: cornflowerblue;
        margin-top: 20px;
        display: flex;
        text-align: center;
        line-height: 35px;
        .name {
          font-size: 18px;
        }
        .size_type {
          width: auto;
          height: 35px;
          border: solid 2px #c92232;
          border-radius: 15px;
          color: #c92232;
          margin-left: 10px;
          font-size: 18px;
        }
        .message {
          width: 130px;
          height: 35px;
          border: solid 2px #d9d9d9;
          border-radius: 13px;
          color: #d9d9d9;
          margin-left: 10px;
          font-size: 17px;
        }
      }
      .enterTime {
        height: 30px;
        // background-color: rgb(11, 184, 63);
        margin-top: 27px;
        display: flex;
        justify-content: space-between;
        font-size: 26px;
      }
    }
  }
}
</style>
