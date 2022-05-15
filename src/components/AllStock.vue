<template>
<div class="allstock">

  <div class="stocktable">

    <el-table :data="tableData" style="width:95%; margin:0 auto" max-height=670px>
      <el-table-column label="序号" prop="order" width="60"/>
      <el-table-column type="selection" width="40" />
      <el-table-column label="代码" prop="number" width="120"/>
      <el-table-column label="名称" prop="stockName" width="130"/>
      <el-table-column label="涨跌幅" prop="range" width="120"/>
      <el-table-column label="现价" prop="curPrice" width="120" />
      <el-table-column label="买价" prop="buyPrice" width="120"/>
      <el-table-column label="卖价" prop="sellPrice" width="120"/>
      <el-table-column label="总手" prop="count" width="120"/>
      <el-table-column label="成交额" prop="total" width="120"/>


      <el-table-column align="left">

        <template #header>
          <el-input v-model="search" size="small" style="width:65%;margin-right:5px" placeholder="搜索股票" />
          停止/重启
        </template>

        <template #default="scope">
          <el-button size="small" style="width:30%"  
            >查看详细信息</el-button>

          <el-button size="small" type="primary" style="width:30%" @click="handleSet(scope.$index, scope.row)"
            >
            <el-icon color="#ffffff"><edit/></el-icon> 
            设置涨跌幅</el-button>

          <el-switch
              v-model="value"
              class="ml-2"
              active-color="#13ce66"
              inactive-color="#ff4949"
              style="margin-left:20px"
              
            />
        </template>

      </el-table-column>

    </el-table>
  </div>

  <!-- <el-divider style="margin: 2px 2px"></el-divider> -->

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
  
  

</div>
</template>

<script>
/* eslint-disable */ 

import { ref } from 'vue'

export default{

    data(){
        return{
            value:true,
     
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
            },           {
                order:3,
                number:6000000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:34.25,
                range:+1.30
            },            {
                order:4,
                number:6000000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:34.25,
                range:+1.30
            },            {
                order:5,
                number:6000000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:34.25,
                range:+1.30
            },            {
                order:6,
                number:6000000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:34.25,
                range:+1.30
            },            {
                order:7,
                number:6000000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:34.25,
                range:+1.30
            },            {
                order:8,
                number:6000000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:34.25,
                range:+1.30
            },            {
                order:9,
                number:6000000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:34.25,
                range:+1.30
            },    
                        {
                order:10,
                number:6000000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:34.25,
                range:+1.30
            },  
                  {
                order:11,
                number:6000000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:34.25,
                range:+1.30
            },  
                  {
                order:12,
                number:6000000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:34.25,
                range:+1.30
            },  
                  {
                order:13,
                number:6000000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:34.25,
                range:+1.30
            },  
                  {
                order:14,
                number:6000000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:34.25,
                range:+1.30
            }, 
                  
           
            ]

                    }
    },
    methods:{
      handleSet(){
         
        this.$prompt('请输入需要设置的涨跌幅，以小数格式输入', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }


      }

    }







</script>

<style>
.buttonPart {
  text-align:right;
  margin-top:7px;
  margin-right:7px;
}
.allstock {

  padding:0;
  border:0;
}

.stocktable {

     height:670px;
  
     padding:0;
 
     

}
</style>