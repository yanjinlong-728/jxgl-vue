<template>
  <div class="category">
    <Header :title="title" />
    <div class="search">
      <div class="box">
        <i class="iconfont  icon-riqiicon"></i>
        搜索机械名称
      </div>
    </div>
    <div class="main">
      <div
        class="construction"
        v-for="(item, index) in categoryData"
        :key="index"
      >
        <template>
          <div
            v-if="item.children.length > 0 || item.children.length === 0"
            @click="showClick"
          >
            <i class="iconfont icon-up"></i>
            <span>{{ item.name }}</span>
          </div>
          <div v-else>
            {{ item.name }}
          </div>
        </template>
        <Apparatus :List="item.children" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { getcategory } from '@/Api/api'
import Apparatus from '@/components/apparatus'
export default {
  name: 'Category',
  components: {
    Header,
    Apparatus
  },
  data () {
    return {
      title: '机械类别',
      categoryData: [],
      show: '<span>收起<i class="el-icon-arrow-up"></i></span>'
    }
  },
  methods: {
    async getcategory () {
      const res = await getcategory()
      this.categoryData = res.data.result

      // console.log(this.categoryData)
    },
    // 展开
    showClick () {
      this.show =
        this.show === '<span>收起<i class="el-icon-arrow-up"></i></span>'
          ? '<span>展开<i class="el-icon-arrow-down"></i></span>'
          : '<span>收起<i class="el-icon-arrow-up"></i></span>'
    }
  },
  mounted () {
    this.getcategory()
  }
}
</script>

<style lang="scss">
.category {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .search {
    width: 100%;
    height: 92px;
    background: #eeeff1;
    padding: 15px;
    .box {
      width: 92%;
      height: 100%;
      background: #fff;
      margin: 0 auto;
      border-radius: 10px;
      text-align: center;
      line-height: 62px;
      font-size: 30px;
      color: #c5c3c6;
    }
  }
  .main {
    flex: 1;
    overflow: hidden;
    overflow-y: scroll;
    .construction {
      width: 90%;
      height: auto;
      // background: chartreuse;
      font-size: 30px;
      color: #aaaaac;
      margin: 50px auto;
      .intendance {
        width: 85%;
        height: auto;
        // background: chocolate;
        margin: 60px auto;
      }
    }
  }
}
</style>
