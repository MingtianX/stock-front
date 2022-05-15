<template>
   
<span style="margin-bottom:10px;margin-top:10px">上证指数  000001</span>
<div class="indexTable">
<el-table :data="indexData" style="width:100%; margin:0 auto;padding:0" max-height=675>
    <el-table-column  label="序号" prop="order" width="120" />
    <el-table-column label="时间" prop="time" width="200" />
    <el-table-column label="涨跌幅" prop="range" width="160"/>
    <el-table-column label="现价" prop="curPrice" width="160" />
    <el-table-column label="总手" prop="count" width="160"/>
    <el-table-column label="成交额" prop="total" width="160"/>
</el-table>
</div>
</template>

<script>


export default{
    data(){
        return{
       
     
            indexData:  [{
                order:1,
                time:'2022-5-15 15:00',
                range:-0.2,
                curPrice:1411,
                count:1231,
                total:1211
            },
            {
                order:1,
                time:'2022-5-15 15:00',
                range:-0.2,
                curPrice:1411,
                count:1231,
                total:1211
            },{
                order:1,
                time:'2022-5-15 15:00',
                range:-0.2,
                curPrice:1411,
                count:1231,
                total:1211
            },{
                order:1,
                time:'2022-5-15 15:00',
                range:-0.2,
                curPrice:1411,
                count:1231,
                total:1211
            },{
                order:1,
                time:'2022-5-15 15:00',
                range:-0.2,
                curPrice:1411,
                count:1231,
                total:1211
            },{
                order:1,
                time:'2022-5-15 15:00',
                range:-0.2,
                curPrice:1411,
                count:1231,
                total:1211
            },
            {
                order:1,
                time:'2022-5-15 15:00',
                range:-0.2,
                curPrice:1411,
                count:1231,
                total:1211
            },
            {
                order:1,
                time:'2022-5-15 15:00',
                range:-0.2,
                curPrice:1411,
                count:1231,
                total:1211
            },
            {
                order:1,
                time:'2022-5-15 15:00',
                range:-0.2,
                curPrice:1411,
                count:1231,
                total:1211
            },
            {
                order:1,
                time:'2022-5-15 15:00',
                range:-0.2,
                curPrice:1411,
                count:1231,
                total:1211
            },
            {
                order:1,
                time:'2022-5-15 15:00',
                range:-0.2,
                curPrice:1411,
                count:1231,
                total:1211
            },{
                order:1,
                time:'2022-5-15 15:00',
                range:-0.2,
                curPrice:1411,
                count:1231,
                total:1211
            },
            {
                order:1,
                time:'2022-5-15 15:00',
                range:-0.2,
                curPrice:1411,
                count:1231,
                total:1211
            },
            {
                order:1,
                time:'2022-5-15 15:00',
                range:-0.2,
                curPrice:1411,
                count:1231,
                total:1211
            },
            {
                order:1,
                time:'2022-5-15 15:00',
                range:-0.2,
                curPrice:1411,
                count:1231,
                total:1211
            },
            {
                order:1,
                time:'2022-5-15 15:00',
                range:-0.2,
                curPrice:1411,
                count:1231,
                total:1211
            },
            {
                order:1,
                time:'2022-5-15 15:00',
                range:-0.2,
                curPrice:1411,
                count:1231,
                total:1211
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