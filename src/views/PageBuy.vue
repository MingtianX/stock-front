<template>
 
<div style="display: flex;justify-content: center;margin-top: 10px">
<el-card class="box-card">
  <el-container class="layout-container-demo" style="height: 750px">
    <el-aside width="200px">
     
     
    <el-menu
        default-active="3"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >

 <el-menu-item index="1" @click="back">
  <el-icon><Back /></el-icon>
  <span>返回</span>
 </el-menu-item>



        <el-menu-item index="2">
         <router-link to="/detail" >
          <el-icon><setting /></el-icon>
          <span>股票详情</span>
           </router-link>
        </el-menu-item>

        <el-sub-menu index="3">
          <template #title>
            <el-icon><location /></el-icon>
            <span>买卖操作</span>
          </template>
           <router-link to="/buy">
            <el-menu-item index="1-1">买操作</el-menu-item>
            </router-link>
            <router-link to="/sell">
            <el-menu-item index="1-2">卖操作</el-menu-item>
             </router-link>
          
        </el-sub-menu>
    
      </el-menu>
 
    </el-aside>

    <el-container>


      <el-main>
        <el-scrollbar>
          <el-table 
          :data="buyData"

    style="width:100%; margin:0 auto;padding:0" 
    max-height=750
    align="center"
   
    :default-sort="{ prop: 'price', order: 'descending' }"
    :header-cell-style="{textAlign: 'center'}"
    :cell-style="{ textAlign: 'center' }"
    >

            <el-table-column prop="userid1" label="用户名" width="280" />
            <el-table-column sortable prop="price" label="价格" width="240" />
            <el-table-column prop="time" label="进入系统的时间(买)" width="300"/>
             <el-table-column prop="amount" label="股数"  />
          
           
          </el-table>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
   </el-card>
  </div>
</template>

<script>
// import { ref } from 'vue'


// const item = {
  // userid1: '123',
  // price: '993',
  // time: '2022-5-15-1:57',
  // amount:20,
 

 
// }
// const buyData = ref(Array.from({ length: 5 }).fill(item))



export default
{
      created()
          {
              this.getStockBuy();
              console.log('买');
          },
 
 data(){
        return{

        buyData: []

        //   number:"",
        //  name:"",
        //   price:"",   
        // amount:"",
        }
    },

              methods: 
          {

              getStockBuy() 
              {
                          // let stockid=sessionStorage.getItem('stockid');
                          
                          // this.$axios.get('url',{params:{
                          //     stock_id:stockid
                          // }}).then((res)=>{
                          //     this.buyData=res.data;
                          // }).catch((err)=>{
                          //     console.log(err);
                          // })
                          this.buyData=[{
                        userid1: '1',
                      price: '1',
                      time: '2022-5-15-1:57',
                      amount:10,
            },
            {
                        userid1: '2',
                      price: '2',
                      time: '2022-5-15-2:57',
                      amount:20,
            },{
                        userid1: '3',
                      price: '3',
                      time: '2022-5-15-3:57',
                      amount:30,
            },{
                        userid1: '4',
                      price: '4',
                      time: '2022-5-15-4:57',
                      amount:40,
            },
            {
                        userid1: '5',
                      price: '5',
                      time: '2022-5-15-5:57',
                      amount:50,
            },
            ] 


              },
               back() 
                          {
                            sessionStorage.removeItem('stockid');
                               console.log('删除id');

                               this.$router.push(`/pageoperate`);
                         
             
                         }
          }

}



</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.box-card {
    width: 1380px;
  }
</style>