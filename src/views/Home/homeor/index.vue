<template>
  <div class="Homeor">
    <div class="ipnDiv">
      <span>待办事项</span>
      <span class="To_audit">● 待审核机械40</span>
    </div>
    <div class="main">
      <h2 class="title">
        最新登记机械
      </h2>
      <div
        class="content"
        v-for="(item, index) in dataList"
        :key="index"
        @click="contentClick"
      >
        <div class="condition">
          <div class="but">
            使用中
          </div>

          <p>{{ item.machineryName }}</p>
          <p>{{ item.specification }}</p>
        </div>
        <div class="model">
          <div class="name">
            {{ item.projectEquipmentCode }}
          </div>
          <div class="size_type">{{ item.remark }}型</div>
          <div class="message">
            信息未完善
          </div>
        </div>
        <div class="enterTime">
          <p>{{ item.projectName }}</p>
          <p>进场时间:{{ item.actualApproachDate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMechanical } from '@/Api/api'
import { Indicator } from 'mint-ui'
export default {
  name: 'Homeor',
  data () {
    return {
      dataList: []
    }
  },

  methods: {
    // 数据
    async getMechanical () {
      Indicator.open()
      const res = await getMechanical()
      this.dataList = res.data.result.content
      // console.log(this.dataList);
      Indicator.close()
    },

    contentClick () {
      this.$router.push({ path: '/particulars' })
    }
  },
  mounted () {
    this.getMechanical()
  }
}
</script>

<style lang="scss">
.Homeor {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
}
</style>
