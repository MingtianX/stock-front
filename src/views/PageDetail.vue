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
          <el-icon><setting /></el-icon>
          <span>股票详情</span>
        </el-menu-item>

        <el-sub-menu index="2">
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
          <el-table :data="tableData">
            <el-table-column prop="序号" label="序号" width="280" />
            <el-table-column prop="代码" label="代码" width="240" />
            <el-table-column prop="名称" label="名称" width="280"/>
             <el-table-column prop="最新成交价格" label="最新成交价格" width="140" />
            <el-table-column prop="最新成交数量" label="最新成交数量"  />
           
          </el-table>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script  setup>
import { ref } from 'vue'


const item = {
  序号: '123',
  代码: '123',
  名称: 'Los Angeles',
  最新成交价格:20,
  最新成交数量:20,

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