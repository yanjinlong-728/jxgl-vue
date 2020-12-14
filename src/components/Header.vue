<template>
  <div class="header">
    <div class="nav_left">
      <i class="iconfont icon-arrow-right  rollback" @click="go_back"></i>
      <span class="name">{{title}}</span>
    </div>
    <div class="nav_right">
      <i class="iconfont icon-lingdang  small"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
 props:{title:String},
  methods: {

     go_back() {
        this.$router.go(-1);//返回上一层
      }
  },
}
</script>

<style lang="scss">
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
</style>
