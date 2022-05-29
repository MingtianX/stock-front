<template>
  
<span class="username" >
      欢迎登录, {{username}}
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

      <el-menu-item index="3-2" @click="logout">注销</el-menu-item>
  </el-sub-menu>
    
</el-menu>
</template>


<script>
  export default {
    data() {
      return {
        activeIndex:'1',
        activeIndex2: '2',
        username:sessionStorage.getItem('username')
      };
    },
    methods: {
      logout() {
        this.$confirm("确认注销？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() =>{
          const token=sessionStorage.getItem('token');
          const username=sessionStorage.getItem('username');
          console.log('quit');
          console.log(token);
          console.log(username);
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('username');
          sessionStorage.removeItem('userid');
          this.$router.push(`/login`);
       })
      }
      
      },

      
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
  float:right;
  margin-top:18px;
  margin-right:20px;
  border:0;
  padding:0;
  
}


</style>