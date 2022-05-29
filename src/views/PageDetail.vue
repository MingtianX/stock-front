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
          :data="stockdetail"
           style="width:100%; margin:0 auto;padding:0" 
    max-height=750
    align="center"
   
    :default-sort="{ prop: 'time', order: 'descending' }"
    :header-cell-style="{textAlign: 'center'}"
    :cell-style="{ textAlign: 'center' }">
            <el-table-column prop="number" label="代码" width="240" />
            <el-table-column prop="name" label="名称" width="280"/>
             <el-table-column prop="price" label="最新成交价格" width="140" />
            <el-table-column prop="amount" label="最新成交数量"  />
           
          </el-table>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
   </el-card>
  </div>
</template>

<script >
//import { ref } from 'vue'


export default
{
      created()
          {
              this.getStockDetail();
              console.log('详情');
          },
 
 data(){
        return{

         stockdetail: []

        //   number:"",
        //  name:"",
        //   price:"",   
        // amount:"",
        }
    },

              methods: 
          {

                        getStockDetail() 
                        {
                                    // let stockid=sessionStorage.getItem('stockid');
                                    
                                    // this.$axios.get('url',{params:{
                                    //     stock_id:stockid
                                    // }}).then((res)=>{
                                    //     this.stockdetail=res.data;
                                    // }).catch((err)=>{
                                    //     console.log(err);
                                    // })
                                    this.stockdetail=[{
                                        number: '1',
                                        name: 'Los Angeles',
                                        price:20,
                                        amount:20,
                      },
                      {
                                        number: '2',
                                        name: 'Los Angeles',
                                        price:30,
                                        amount:20,
                      },{
                                                        number: '3',
                                        name: 'Los Angeles',
                                        price:40,
                                        amount:20,
                      },{
                                        number: '4',
                                        name: 'Los Angeles',
                                        price:50,
                                        amount:20,
                      },
                      {
                                        number: '5',
                                        name: 'Los Angeles',
                                        price:60,
                                        amount:20,
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
// const item = {
  //序号: '123',
  // number: '123',
  // name: 'Los Angeles',
  // price:20,
  // amount:20,

// }
// const stockdetail = ref(Array.from({ length: 20 }).fill(item))
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