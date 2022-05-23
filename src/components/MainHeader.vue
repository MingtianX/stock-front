<template>
  
<span class="username" style='float:right;margin-top:18px;margin-right:10px;'>
      欢迎登录, 管理员A
</span>

<el-menu 
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >

  <div class="head-title">
    股票管理系统
  </div>

  <router-link to="/pageoperate/allstock">
    <el-menu-item index="1">
    <el-icon  color="#0" style="margin-right:3px"><View /></el-icon>股票信息</el-menu-item>
  </router-link> 

  <router-link to="/pageoperate/stockindex">
    <el-menu-item index="2"><el-icon  color="#0" style="margin-right:3px"><Histogram /></el-icon>股票指数</el-menu-item>
  </router-link> 

  <el-sub-menu index="3">
      <template #title>
      <el-icon  color="#0" style="margin-right:3px"
        ><setting
      /></el-icon> 
      账号管理</template>

      <router-link to="/changemm">
      <el-menu-item index="3-1">修改密码</el-menu-item>
      </router-link>
      <el-menu-item index="3-2">注销</el-menu-item>
  </el-sub-menu>
    
</el-menu>
</template>


<script>
  export default {
    data() {
      return {
        activeIndex:'1',
        activeIndex2: '2'
      };
    },
    methods: {
      
    }
  }
</script>

<style>
.head-title {
    border:0;
    margin:12px 30px 10px 30px ;
    color: black;
    font-size:20px;
}

.username{
  color:black;
  font-size:4px;
  margin-left: 10px;
  margin-right: auto;
  float:right;
  
}


</style>