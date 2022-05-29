<template>
<div style="margin-top:20px">

 <el-row :gutter="0" style="margin-bottom:10px">
    <el-col :span="9"><div></div></el-col>
    <el-col :span="6"> <span class="indexinfo">当前指数:    {{indexNum}}</span></el-col>
    <el-col :span="9"> 
        <div class="btn">
            <el-button type="primary"  size="small" @click="handleEdit">  
                <el-icon><Edit/></el-icon>
                设置涨跌幅
            </el-button>
        </div>
    </el-col>
  </el-row>

</div>


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
    <el-table-column sortable label="成交额（元）" prop="total" width="160"/>
</el-table>
</div>
</template>

<script>


export default{
    created(){
        this.getIndexData();
        this.getIndexName();
    },
    data(){
        return{

            indexNum:'',
            indexData: [] 
        }
    },
    methods:{
        //获得指数名称
        getIndexName(){
    
            this.indexNum='123';
            // this.$axios.get('url',{params:{
            //     admin_id:adminid
            // }}).then((res)=>{
            //     this.inexName=res.data.indexName;
            //     this.indexNum=res.data.indexNum;
            // }).catch((err)=>{
            //     console.log(err);
            // })

        },
        //获取指数数据
        getIndexData(){
            let adminid=sessionStorage.getItem('userid');
            console.log('getindexdata:'+adminid);
            // this.$axios.get('url',{params:{
            //     admin_id:adminid
            // }}).then((res)=>{
            //     this.indexData=res.data;
            // }).catch((err)=>{
            //     console.log(err);
            // })

            //#region 
            this.indexData=[{
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
            {
                
                time:'2022-5-15 11:00',
                range:-0.2,
                curPrice:1411,
                count:12310,
                total:12121
            },
            ] 
            //#endregion
        },


        handleEdit(){
            this.$prompt('请输入需要设置的涨跌幅（小数），大小范围为0-1', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /^(0(\.\d{1,2})?|1(\.0{1,2})?)$/,
                inputErrorMessage: '格式不正确'
            }).then(({ value }) => {
                let adminid=sessionStorage.getItem('userid');
                console.log(adminid+"设置涨跌幅为"+value);
                // this.$axios.post("url",{
                //     admin_id:adminid,
                //     range:value
                // }).then((res)=>{
                    
                //     if(res.data.res===true){
                //         this.$message({
                //             type: 'success',
                //             message: '已成功设置涨跌幅为' + value
                //         })
                //     }else{
                //         this.$message({
                //             type: 'warning',
                //             message: '设置失败'
                //         })
                //     }
                // }).catch((err)=>{
                //     console.log(err);
                // })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });       
            });
        },

    }



}



</script>

<style>
.indexTable {
  margin:0 auto;
}

.indexinfo {
    margin-bottom:10px;
    margin-top:10px;
    font-size:20px;
    font-weight:500;
    

}
.btn {
    float:left;
}

</style>