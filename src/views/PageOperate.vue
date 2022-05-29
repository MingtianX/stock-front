<template>
  <div class="common-layout">
    <el-container>
      <!-- <sub-header></sub-header> -->
      <el-header class="header">
        <main-header></main-header>
      </el-header>
      <router-view></router-view>
    </el-container>
  </div>
</template>


<script>
/* eslint-disable */ 
import MainHeader from "../components/MainHeader.vue"
import AllStock from "../components/AllStock.vue"
import StockIndex from "./StockIndex.vue"
export default{
  components:{
    'main-header':MainHeader,
    'all-stock':AllStock,
    'stock-index':StockIndex
    

  }
}

</script>

<style>
.header {
  margin:0;
  padding:0;
  border:0;
}
</style>