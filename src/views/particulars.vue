<template>
  <div class="particulars">
    <div class="header">
      <div class="nav_left">
        <i class="iconfont icon-arrow-right  rollback" @click="go_back"></i>
        <span class="name">机械档案</span>
      </div>
      <div class="nav_right">
        <i class="iconfont icon-lingdang  small"></i>
      </div>
    </div>
    <div class="main">
      <div class="content">
        <div class="condition">
          <div class="but">
            使用中
          </div>

          <p>{{listDetails.machineryName}}</p>
          <p>{{listDetails.specification}}</p>
        </div>
        <div class="model">
          <div class="name">
          {{listDetails.projectEquipmentCode}}
          </div>
          <div class="size_type">
            da型
          </div>
          <div class="message">
            信息未完善
          </div>
        </div>

        <div class="worksite">
          <p>所属工地:aaa</p>
          <p>进场时间:2020</p>
        </div>
        <div class="name_box">
          <p>申报人:{{listDetails.declarantName}}</p>
          <p>进场时间:{{listDetails.actualApproachDate}}</p>
        </div>
      </div>
      <ul class="message_box">
        <li class="facility_message">
          设备信息
        </li>
        <li class="facility_data">
          设备资料
        </li>
        <li class="examine">
          检查及维护
        </li>
        <li class="more_message">
          更多信息
        </li>
      </ul>
      <div class="content_box">
        <!-- 滑块 -->
        <div class="sliding">
          <div class="basic_message_box">
            <h2 class="message">
              基本信息
            </h2>
            <ul class="message_content">
              <li>
                <p>机械名称</p>
                <span>{{listData.machineryName}}</span>
              </li>
              <li>
                <p>规格型号</p>
                <span>{{listData.specification}}</span>
              </li>
              <li>
                <p>项目设备编码</p>
                <span>{{listData.projectEquipmentCode}}</span>
              </li>
              <li>
                <p>属性</p>
                <span>{{listData.remark}}</span>
              </li>
              <div class="Show_more_box">
                <p class="Show_more">
                  查看更多
                  <i class="iconfont icon-angle-down   label  "></i>
                </p>
              </div>
              <ul class="more_contetnt">
                <li>
                  <p>来源</p>
                  <span>租赁(临时)</span>
                </li>
                <li>
                  <p>产权单位</p>
                  <span>广州市建筑科学研究院新技术开发中心有限公司</span>
                </li>
                <li>
                  <p>车牌号</p>
                </li>
                <li>
                  <p>现场照片</p>
                </li>
              </ul>
            </ul>
          </div>

          <div class="use_message_box">
            <h2 class="message">
              使用信息
            </h2>
            <ul class="message_content">
              <li>
                <p>实际进场时间</p>
                <span>{{listData.actualApproachDate}}</span>
              </li>
              <li>
                <p>拟退场时间</p>
              </li>
              <li>
                <p>设备管理员</p>
                <span>{{listData.managerName}}</span>
              </li>
              <li>
                <p>使用单位</p>
                <span>{{listData.useUnitName}}</span>
              </li>
            
            </ul>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getDetails} from '../Api/api'
export default {
  name: 'particulars',
     data() {
        return{
          listDetails: [],
          listData:[]
        }
     },
  methods: {
   async getDetails() {
          let res = await getDetails();
          this.listDetails = res.data.result
          this.listData =res.data.result.machineryDetail
          // console.log(   this.listData); 
    },
    
    go_back () {
      this.$router.go(-1) // 返回上一层
    }
  },
  mounted () {
    this.getDetails()
  }
}
</script>

<style lang="scss">
.particulars {
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
  .main {
    width: 100%;
    flex: 1;
    // background-color: #ccc;
    .content {
      width: 100%;
      height: 353px;
      // background-color: chocolate;
      padding: 45px 52px 54px 30px;
      //   border-bottom: solid 2px #e2e2e0;

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

      .worksite {
        width: 100%;
        height: 21px;
        // background: aqua;
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        font-size: 21px;
      }
      .name_box {
        width: 100%;
        height: 21px;
        // background: aqua;
        margin-top: 42px;
        display: flex;
        justify-content: space-between;
        font-size: 21px;
      }
    }
    .message_box {
      width: 100%;
      height: 48px;
      // background-color: #fff;
      display: flex;
      line-height: 30px;
      padding-right: 30px;
      box-sizing: border-box;
      justify-content: space-between;
      font-size: 18px;
      .facility_message {
        width: 25%;
        border-bottom: solid 4px red;
        height: 43px;
        text-align: center;
      }
    }
    .content_box {
      width: 100%;
      height: auto;
      background-color: #f5f5f5;
    //   overflow: hidden;
    //   overflow-y: auto;
      .sliding {
        .basic_message_box {
          width: 92%;
          // height: 250px;
          height: auto;
          background-color: #fff;
          margin: 20px auto;
          border-radius: 15px;
          padding: 20px 15px;
          box-sizing: border-box;
          .message {
            font-size: 20px;
          }
          .message_content {
            width: 100%;
            height: auto;
            li {
              width: 94%;
              // background-color: rgb(0, 255, 34);
              margin-top: 15px;
              font-size: 17px;
              display: flex;
              // justify-content: space-between;
              p {
                width: 230px;
                color: #ccc;
              }
              span {
                width: 314px;
                // background-color: darkgreen;
              }
            }
            .Show_more_box {
              width: 100%;
              height: 35px;
              // background-color: darkgreen;
              margin-top: 50px;
              .Show_more {
                width: 180px;
                height: 35px;
                border-radius: 15px;
                margin: 0 auto;
                text-align: center;
                line-height: 35px;
                background-color: #ccc;
                font-size: 18px;
                i {
                  font-size: 20px;
                  line-height: 35px;
                }
              }
            }
            .more_contetnt {
              display: none;
              // display: block;
            }
          }
        }
        .use_message_box {
            width: 93%;
          height: auto;
          background-color: #fff;
          margin: 20px auto;
          border-radius: 15px;
          padding: 20px 15px;
          box-sizing: border-box;
          .message {
            font-size: 20px;
            
          }
          .message_content {
            width: 100%;
            height: auto;
            li {
              width: 94%;
              // background-color: rgb(0, 255, 34);
              margin-top: 15px;
              font-size: 17px;
              display: flex;
              // justify-content: space-between;
              p {
                width: 230px;
                color: #ccc;
              }
              span {
                width: 314px;
                // background-color: darkgreen;
              }
            }
          }
        }
     
      }
    }
  }
}
</style>
