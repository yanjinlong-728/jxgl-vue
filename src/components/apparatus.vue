<template>
  <div class="apparatus">
    <div class="intendance" v-for="(item,index) in List" :key="index">         
        {{ item.name }}  
    </div>
  </div>
</template>

<script>
export default {
  name: 'Apparatus',
  props: {
    List: Array
  },
  mounted () {
        // console.log(this.List);
  }
}
</script>

<style></style>
