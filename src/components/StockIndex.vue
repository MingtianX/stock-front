<template>
   
    <el-table :data="indexData">
        <el-table-column label="序号" prop="order" width="60"/>
        <el-table-column label="代码" prop="number" width="120"/>
        <el-table-column label="指数名称" prop="indexName" width="150"/>
        <el-table-column label="开盘" prop="initialPrice" width="150"/>
        <el-table-column label="最高" prop="maxPrice" width="150"/>
        <el-table-column label="最低" prop="minPrice" width="150"/>
        
        <el-table-column label="现价" prop="curPrice" width="150"/>
        <el-table-column label="涨跌" prop="range" width="120"/>
        <el-table-column label="比例" prop="ratio" width="120"/>
        <el-table-column label="时间" prop="time" width="120"/>


    </el-table>
     <!-- <el-input v-model="search" size="small" placeholder="输入指数名称" style="width:200px"/> -->



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
       
     
            indexData:  [{
                order:1,
                number:3000122,
                indexName:'上证指数',
                initialPrice:3000,
                maxPrice:3000,
                minPrice:3000,
                curPrice:3700.00,
                range:-0.2,
                ratio:-0.3,
                time:'15:13'

                
            }
           
                


            
        
            ]

                    }
    },
    methods:{

    }



}



</script>

<style>

</style>