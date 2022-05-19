<template>
   
<span style="margin-bottom:10px;margin-top:10px">{{indexName}}  {{indexNum}}</span>
<div class="indexTable">
<el-table 
    :data="indexData" 
    style="width:100%; margin:0 auto;padding:0" 
    max-height=675
    align="center"
   
    :default-sort="{ prop: 'time', order: 'descending' }"
    :header-cell-style="{textAlign: 'center'}"
    :cell-style="{ textAlign: 'center' }"
    >
    <el-table-column  sortable label="时间" prop="time" width="200" />
    <el-table-column sortable label="涨跌幅" prop="range" width="160"/>
    <el-table-column sortable label="现价" prop="curPrice" width="160" />
    <el-table-column sortable label="总手" prop="count" width="160"/>
    <el-table-column sortable label="成交额" prop="total" width="160"/>
</el-table>
</div>
</template>

<script>


export default{
    data(){
        return{
            indexName:'上证指数',
            indexNum:'000001',
     
            indexData:  [{
                 time:'2022-3-15 15:00',
                range:-0.1,
                curPrice:1411,
                count:1231,
                total:1211
            },
            {
             
                time:'2022-5-15 13:00',
                range:0.2,
                curPrice:1411,
                count:1031,
                total:211
            },{
                
                time:'2022-5-15 12:00',
                range:-0.2,
                curPrice:1411,
                count:11,
                total:12121
            },{
                
                time:'2022-5-15 11:00',
                range:-0.2,
                curPrice:1411,
                count:12310,
                total:12121
            },
                


            
        
            ]

                    }
    },
    methods:{

    }



}



</script>

<style>
.indexTable {
  margin:0 auto;
}
</style>