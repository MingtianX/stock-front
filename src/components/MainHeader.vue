<template>
<el-row style="border:0;padding:0">
<el-col :span="20">
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
    >

    <div class="head-title">股票管理系统</div>

    <el-menu-item index="1">股票信息</el-menu-item>
    <el-menu-item index="2">股票指数</el-menu-item>
    
  </el-menu>
</el-col>


<el-col :span="4" style="background-color:#545c64" id="tool">
   <div class="toolbar">

    <!-- <div class="drop"> -->
    <el-dropdown>
      <el-icon  color="#ffffff" style="margin-right:10px"
        ><setting
      /></el-icon> 


      
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>注销</el-dropdown-item>
        </el-dropdown-menu>
      </template>

    </el-dropdown>

    <span id="username">管理员A</span>
    </div>
</el-col>


</el-row>
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
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.head-title {
    border:0;
    margin:16px 30px 10px 30px ;
    color: #ffffff
}

#username{
  color:#ffffff;
  font-size:12px;
  
}

.toolbar {
  display: inline-flex; 
  justify-content: flex-end;
  height: 58px;
  align-items: center;

}


</style>