<template>
  <div class="organization">

     
    <div class="intendance" v-for="(item, index) in List" :key="index">
      <template v-if="item.childNodes">
        <i class="iconfont icon-up"></i>   {{ item.name }}
         <organization :List="item.childNodes" />
      </template>
     
        <div class="stand" v-else   :class="{ red:changeRed == index}" @click="change(index,item.name)">
        {{ item.name }}
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Organization',

    props: {
    List: Array
  },
  data(){
    return{
    changeRed:-1,
      lists:this.List,
      nameList: ''
    }
  },
   methods: {
   change(index,namess){
   this.changeRed = index;
       this.nameList= namess
   this.$router.push({ path: 'details' }) 

  //  console.log(  this.nameList );
   sessionStorage.setItem('nameList', JSON.stringify (this.nameList))
  }
  }

}
</script>

<style lang="scss">

 .stand{
  cursor: pointer;
 }
 .red{
  color: red;
 }


</style>
