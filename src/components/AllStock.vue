<template>




  <el-table :data="tableData"   style="width: 100%" height="600">
    <el-table-column label="序号" prop="order" width="60"/>
    <el-table-column type="selection" width="55" />
    <el-table-column label="代码" prop="number" width="150"/>
    <el-table-column label="名称" prop="stockName" width="150"/>
    <el-table-column label="涨跌幅" prop="range" width="120"/>
    <el-table-column label="现价" prop="curPrice" width="120" />
    <el-table-column label="买价" prop="buyPrice" width="120"/>
    <el-table-column label="卖价" prop="sellPrice" width="100"/>

    <el-table-column label="总手" prop="count" width="100"/>
    <el-table-column label="成交额" prop="total" width="100"/>



    <el-table-column align="left">
      <template #header>
        <el-input v-model="search" size="small" placeholder="搜索股票" />
      </template>

      <template #default="scope">
     
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >查看详细信息</el-button
        >
         <el-button size="small" 
          >设置涨跌幅</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >停止交易</el-button
        >
        
      </template>
    </el-table-column>
    
  </el-table>
<div class="buttonPart">
<el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >停止交易</el-button
        >
        <el-button
          size="small"
          type="success"
          @click="handleDelete(scope.$index, scope.row)"
          >重启交易</el-button
        >

</div>
  <page-count></page-count>

  
</template>

<script>
import PageCount from "./PageCount.vue"
export default{
  components:{
    'page-count':PageCount
  },
    data(){
        return{
            
     
            tableData:  [{
                order:1,
                number:3000122,
                stockName:'中国茅台',
                curPrice: 1768.00,
                buyPrice:1768.00,
                sellPrice: 1777.00,
                count:1000,
                total:34.25,
                range:-0.12
            },
            {
                order:2,
                number:6000000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:34.25,
                range:+1.30
                


            }
           
            ]

                    }
    },
    methods:{

    }



}



</script>

<style>
.buttonPart {
  text-align:right;
}
</style>