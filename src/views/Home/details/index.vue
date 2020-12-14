<template>
  <div class="details">
    <div class="main">
         
    </div>
    <div class="footer">
      <div class="footer-left">
        <i class="iconfont icon-qiandao-selected"></i> 日常检查
      </div>
      <div class="footer-right">
        <i class="iconfont icon-diaozhuangzuoye"></i> 吊装作业
      </div>
      <div class="footer-iconfont">
        <div class="footer-iconfont-box" @click="addClick"> 
          <i class="iconfont icon-jia">+</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Details',
  components: {

  },
  methods : {
    addClick() {
       this.$router.push({ path: '/Machinery' })
    }
  }

}
</script>

<style lang="scss">
.details {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
    background: chocolate;
  }
   .footer{
      width: 100%;
      height: 100px;
      background: #f6f6f6;
      color:#2c87fc;
      font-size: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 60px;
      box-sizing: border-box;
      position: relative;
      i{
        font-size: 30px;
      }
      .footer-iconfont{
        width: 150px;
        height: 150px;
        background: #f6f6f6;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin:  auto;
        .footer-iconfont-box{
          width: 103px;
          height: 103px;
          background: #2c87fc;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 38px;
        }
        
      }
    }

}
</style>
