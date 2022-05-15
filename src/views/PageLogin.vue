<template>
<div class="logintitle">股票管理系统</div>
<login-box></login-box>
 
</template>


<script>
/* eslint-disable */ 
import LoginBox from "../components/LoginBox.vue"
export default{
  components:{
    'login-box': LoginBox,

    

  }
}

</script>

<style>
.logintitle {
  font-size: 30px;
  margin-top:150px;
  

}

</style>