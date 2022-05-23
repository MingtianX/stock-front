<template>
  <el-container class="layout-container-demo" style="height: 800px">
    <el-aside width="200px">
     
     
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >

        <el-menu-item index="1">
         <router-link to="/detail" >
          <el-icon><setting /></el-icon>
          <span>股票详情</span>
           </router-link>
        </el-menu-item>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>买卖操作</span>
          </template>
            <el-menu-item index="1-1">买操作</el-menu-item>
            <router-link to="/sell">
            <el-menu-item index="1-2">卖操作</el-menu-item>
             </router-link>
          
        </el-sub-menu>
    
      </el-menu>
 
    </el-aside>

    <el-container>


      <el-main>
        <el-scrollbar>
          <el-table :data="tableData">
            <el-table-column prop="用户名" label="用户名" width="280" />
            <el-table-column prop="价格" label="价格" width="240" />
            <el-table-column prop="进入系统的时间" label="进入系统的时间(买)" width="300"/>
             <el-table-column prop="股数" label="股数"  />
          
           
          </el-table>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script  setup>
import { ref } from 'vue'


const item = {
  用户名: '123',
  价格: '993',
  进入系统的时间: '2022-5-15-1:57',
  股数:20,
 
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
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
</style>