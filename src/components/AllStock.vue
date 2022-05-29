<template>

<div class="allstock">

  <div class="stocktable">

    <el-table 
    :data="tableData" 
    :default-sort="{ prop: 'number', order: 'ascending' }"
    style="width:95%; margin:0 auto"
    max-height=670px
    @selection-change="handleSelectionChange">
 
      <el-table-column type="selection" width="80" align="center" />
      <el-table-column label="代码" prop="number" width="120"/>
      <el-table-column label="名称" prop="stockName" width="130"/>
      <el-table-column label="涨跌幅" prop="range" width="120"/>
      <el-table-column label="现价" prop="curPrice" width="120" />
      <el-table-column label="买价" prop="buyPrice" width="120"/>
      <el-table-column label="卖价" prop="sellPrice" width="120"/>
      <el-table-column label="总手" prop="count" width="130"/>
      <el-table-column label="成交额" prop="total" width="130"/>


      <el-table-column align="left">

        <template #header>
          停止/重启
        
          <el-input v-model="searchvalue" 
            size="small" 
            style="width:50%;margin-left:35px" 
            placeholder="输入股票名称" />
            
          <el-icon style="width: 1em; height: 1em;margin-left:4px;"><Search /></el-icon>
          
        </template>
        
        
        <template #default="scope">
          <el-switch
              v-model="scope.row.state"
              class="ml-2"
              active-color="#13ce66"
              inactive-color="#ff4949"
              style="margin-left:10px;margin-right:20px"
              @click="handleSwitch(scope.row)"
            />

            <el-button size="small" style="width:50%;  margin-left:30px;" type="primary" plain 
            @click="lookDetail(scope.row)">查看详细信息</el-button>
        </template>

      </el-table-column>

    </el-table>
  </div>


  <div class="buttonPart">
    <el-button
          size="small"
          type="danger"
          @click="handleStop()"
          >停止选中交易</el-button
        >
        <el-button
          size="small"
          type="success"
          @click="handleStart()"
          >重启选中交易</el-button
        >

  </div>
  
  

</div>
</template>

<script>
/* eslint-disable */ 

import { ref } from 'vue'

export default{
  created(){
      this.getStockData();
      console.log('fdhakfj');
      console.log(sessionStorage.getItem('username'));
      console.log(sessionStorage.getItem('userid'));
    },
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
          dialogFormVisible:false,   
          stockData: []
        }
    },

    //#endregion
    methods:{

      lookDetail(row){
        console.log('lookdetail');
        console.log(row.number);
        sessionStorage.setItem('stockid',row.number);
        this.$router.push('/detail');
      },


     
      //重启或暂停
      handleSwitch(row){ 
        let adminid=sessionStorage.getItem('userid');
        console.log('一行信息');
        //重启
        if(row.state==true){
          console.log("switch重启"+row.number+"false");

          // this.$axios.get('url',{params:{
          //           id:row.number,
          //           admin_id:adminid
          //         }}).then((res)=>{
          //           console.log(res);
          //           //失败则提示
          //           if(res.data.res==false){
          //             this.$message({
          //               type:"warning",
          //               message:"无法重启股票代码为"+row.number+"的股票"
          //             })
          //           }else{
          //             this.getdata();
          //           }
          //         }).catch(err=>{
          //             console.log(err);
          //         })
        }else{
          console.log("switch暂停"+row.number,row.state,"true");
        //   this.$axios.get('url',{params:{
        //       id:row.number,
        //       admin_id:adminid
        //     }}).then((res)=>{
        //       console.log(res);
        //       //失败则提示
        //       if(res.data.res==false){
        //         this.$message({
        //           type:"warning",
        //           message:"无法暂停股票代码为"+row.number+"的股票"
        //         })
        //       }else{
        //         this.getdata();
        //       }
        //     }).catch(err=>{
        //         console.log(err);
        //     })
        }      
        
      },


      //更新选中情况
      handleSelectionChange(val){
        this.multipleSelection=val;
        console.log(val);
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
            let adminid=sessionStorage.getItem('userid');
            //遍历获得多选选中的index值
            this.multipleSelection.forEach((value, index) => {
              //遍历多选框获取的数据
              this.tableData.forEach((v, i) => {
                //遍历数据表，任意一个属性值相同，则说明该数据被选中，其i则为索引值
                if (value.number == v.number) {
                  //处于运行状态的才暂停
                  if(v.state==true){
                    count++;
                    console.log('暂停'+v.number);
                                    // this.$axios.get('url',{params:{
                    //   id:v.number,
                    //   admin_id:adminid

                    // }}).then((res)=>{
                    //   console.log(res);
                    // //失败则提示
                    //   if(res.data.res==false){
                    //      this.$message({
                    //       type:"warning",
                    //       message:"无法重启股票代码为"+v.number+"的股票"
                    //     })
                    //   }
                    // }).catch(err=>{
                    //     console.log(err);
                    // })
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
              this.getStockData();//重新获取data
            }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消暂停操作",
          });
        });
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
          let adminid=sessionStorage.getItem('userid');
          //遍历获得多选选中的index值
          this.multipleSelection.forEach((value, index) => {
            //遍历多选框获取的数据
            this.tableData.forEach((v, i) => {
              //遍历数据表，任意一个属性值相同，则说明该数据被选中，其i则为索引值
              if (value.number == v.number) {
                //处于停止状态的才重启
                if(v.state==false){
                  count++;
                  console.log('重启'+v.number);
                  // this.$axios.get('url',{params:{
                  //   id:v.number,
                  //   admin_id:adminid

                  // }}).then((res)=>{
                  //   console.log(res);
                  //   如果成功，计数增加;失败则提示
                  //   if(res.data.res==false){
                  //      this.$message({
                  //       type:"warning",
                  //       message:"无法重启股票代码为"+v.number+"的股票"
                  //     })
                  //   }

                  // }).catch(err=>{
                  //     console.log(err);
                  // })
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
            this.getStockData();//重新获取data
          }
            
         
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消重启操作",
          });
        });
    },



      //#region   
    getStockData(){
      console.log("getdata");
      // this.$axios.get('url',{params:{
      //   admin_id:id
      // }}).then((res)=>{
      //   this.stockData=res.data;

      // }).catch((err)=>{
      //   console.log(err);
      // })


      this.stockData=[{
               
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
                stockName:'啥银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:34.25,
                range:+1.30,
                state:false
            },           {
               
                number:121000,
                stockName:'好发银行',
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
                total:3447819,
                range:+1.30,
                state:false
            },       {
               
                number:2130,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:3447819,
                range:+1.30,
                state:false
            },          {
               
                number:2393930,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:3447819,
                range:+1.30,
                state:true
            },          {
               
                number:600,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:3447819,
                range:+1.30,
                state:true
            },          {
               
                number:231000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:3447819,
                range:+1.30,
                state:true
            },          {
               
                number:231000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:3447819,
                range:+1.30,
                state:true
            },          {
               
                number:231000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:3447819,
                range:+1.30,
                state:true
            },          {
               
                number:231000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:3447819,
                range:+1.30,
                state:true
            },          {
               
                number:231000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:3447819,
                range:+1.30,
                state:true
            },          {
               
                number:231000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:3447819,
                range:+1.30,
                state:true
            },          {
               
                number:231000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:3447819,
                range:+1.30,
                state:true
            },          {
               
                number:231000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:3447819,
                range:+1.30,
                state:true
            },          {
               
                number:231000,
                stockName:'浦发银行',
                curPrice: 7.68,
                buyPrice:7.68,
                sellPrice: 7.68,
                count:1000,
                total:3447819,
                range:+1.30,
                state:true
            },             
           
            ]

    },

    //#endregion

    
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