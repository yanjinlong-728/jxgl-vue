<template>
  <div id="about">
            <Header :title='title' />

    <div class="search">
      <div class="box">
        <i class="iconfont icon-arrow-right  rollback"></i>
        按名称过滤
      </div>
    </div>

    <div class="main">
      <div class="construction" @click="contentClick">
          <div >
               <i class="iconfont icon-up"></i>  <span>{{restitle.name}}</span> 
             <organization :List="resData" />
      </div>
          </div>
       
    </div>
  </div>
</template>

<script>
import { getOrganization } from '@/Api/api'
import organization from '@/components/organization'
import { Indicator } from 'mint-ui';
import Header from '@/components/Header'
export default {
  name: 'About',
  components: {
    organization,
    Header

  },
  data () {
    return {
      resData: [],
      restitle: [],
        show: '<span><i class="iconfont icon-icon-up"></i></span>',
          title: '组织结构'
    }
  },
  methods: {
    async getOrganization () {
      Indicator.open();
      const res = await getOrganization()
      this.restitle = res.data.result.childNodes[0]
      this.resData = res.data.result.childNodes[0].childNodes
      // console.log(this.resData)
      Indicator.close();
    },
    contentClick() {
           this.show =
        this.show === '<span><i class="iconfont icon-up"></i></span>'
          ? '<span><i class="icon-up"></i></span>'
          : '<span><i class="iconfont icon-icon-up"></i></span>'
    },
    go_back() {
        this.$router.go(-1);//返回上一层
      }
  },
  mounted () {
    this.getOrganization()
  }
}
</script>

<style lang="scss">
#about {
  width: 100%;
  height: 100%;
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

  .search {
    width: 100%;
    height: 90px;
    background: #ccc;
    padding: 15px 0;

    .box {
      width: 90%;
      height: 100%;
      margin: 0 auto;
      background: #fff;
      text-align: center;
      line-height: 60px;
      border-radius: 10px;
    }
  }
  .main {
    flex: 1;
    background: #fff;
    overflow: hidden;
    overflow-y: auto;
    .construction {
      width: 90%;
      height: 30px;
      // background: chartreuse;
      font-size: 30px;
      color: #aaaaac;

      margin: 50px auto;
      .intendance {
        width: 85%;
        height: auto;
        // background: chocolate;
        margin: 60px auto;

        .stand {
          width: 80%;
          height: 30px;
          // background: cornflowerblue;
          margin: 45px auto;
        }
      }
    }
  }
}
</style>
