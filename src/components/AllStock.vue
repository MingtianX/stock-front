<template>
<div class="allstock">

  <div class="stocktable">

    <el-table 
    :data="tableData" 
    :default-sort="{ prop: 'number', order: 'ascending' }"
    style="width:95%; margin:0 auto"
    max-height=670px
    @selection-change="handleSelectionChange">
 
      <el-table-column type="selection" width="80" />
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
          <el-input v-model="searchvalue" size="small" style="width:65%;margin-right:5px" placeholder="搜索股票" />
          停止/重启
        </template>

        <template #default="scope">
          <el-button size="small" style="width:30%"  
            >查看详细信息</el-button>

          <el-button size="small" type="primary" style="width:30%" @click="handleSet(scope.row)"
            >
            <el-icon color="#ffffff"><edit/></el-icon> 
            设置涨跌幅</el-button>

          <el-switch
              v-model="scope.row.state"
              class="ml-2"
              active-color="#13ce66"
              inactive-color="#ff4949"
              style="margin-left:20px"
              @click="handleSwitch(scope.row)"
              
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
          @click="handleStop()"
          >停止交易</el-button
        >
        <el-button
          size="small"
          type="success"
          @click="handleStart()"
          >重启交易</el-button
        >

  </div>
  
  

</div>
</template>

<script>
/* eslint-disable */ 

import { ref } from 'vue'

export default{
    computed:{
      //筛选后的信息
      tableData(){
        return this.stockData.filter((item)=>{
          return item.stockName.indexOf(this.searchvalue)!==-1
        })
        
      },
     

    },
    
    data(){
        return{
          searchvalue:"",
          multipleSelection:[],
           
     //#region 
            stockData:  [{
               
                number:3000122,
                stockName:'中国茅台',
                curPrice: 1768.00,
                buyPrice:1768.00,
                sellPrice: 1777.00,
                count:1000,
                total:34.25,
                range:-0.12,
                state:true
            },
            {
              
                number:220000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:34.25,
                range:+1.30,
                state:false
            },           {
               
                number:121000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:34.25,
                range:+1.30,
                state:true
            },            {
               
                number:231000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:34.25,
                range:+1.30,
                state:true
            },          
           
            ]

                    }
    },
    //#endregion
    methods:{
      


      //设置涨跌幅，更新后刷新视图
      handleSet(row){
        this.$prompt('请输入需要设置的涨跌幅（小数），大小范围为0-1', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^(0(\.\d{1,2})?|1(\.0{1,2})?)$/,
          inputErrorMessage: '格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '已成功设置'+row.stockName+'的涨跌幅为' + value
          });
          console.log(row.number,value);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      handleSwitch(index,row){       
        console.log(row.number);
        //
      },
      handleSelectionChange(val){
        this.multipleSelection=val;
        console.log(val);
      },

      //重启选中的股票
      handleStart(){
        this.$confirm("此操作将重启选中的所有股票交易, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
        .then(() => {
          let count=0;
          //遍历获得多选选中的index值
          this.multipleSelection.forEach((value, index) => {
            //遍历多选框获取的数据
            this.tableData.forEach((v, i) => {
              //遍历数据表，任意一个属性值相同，则说明该数据被选中，其i则为索引值
              if (value.number == v.number) {
                //处于停止状态的才重启
                if(v.state==false){
                  console.log('选中了'+v.number);
                  count++;
                }
              }
              
              
            });
            
          });
          if(count===0){
                this.$message({
                  type:"warning",
                  message:"未选中任何交易停止的股票"
                })
          }else{
            this.$message({
              type: "success",
              message: "重启成功",
            });
          }
            
         
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消重启",
          });
        });
    },


    //暂停选中的股票
    handleStop(){
        this.$confirm("此操作将暂停选中的所有股票交易, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
        .then(() => {
          let count=0;
          //遍历获得多选选中的index值
          this.multipleSelection.forEach((value, index) => {
            //遍历多选框获取的数据
            this.tableData.forEach((v, i) => {
              //遍历数据表，任意一个属性值相同，则说明该数据被选中，其i则为索引值
              if (value.number == v.number) {
                //处于运行状态的才暂停
                if(v.state==true){
                  count++;
                  console.log('选中了'+v.number)
                }
              }
            });
          });
           if(count===0){
                this.$message({
                  type:"warning",
                  message:"未选中任何正在交易的股票"
                })
          }else{
            this.$message({
              type: "success",
              message: "暂停成功",
            });
          }
          
         
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消暂停交易操作",
          });
        });
    },

        
        


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