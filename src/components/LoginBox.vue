<template>
 
    <!--flex弹性盒子模型，justify-content：主抽 -->
    <div style="display: flex;justify-content: center;margin-top: 150px">
      <el-card style="width: 400px;height:300px" align="middle">
       <!-- slot="header" -->
        <div  class="clearfix" >
          <span style="font-size:20px;">登录</span>
        </div>

        <table id="logintable" >

          <tr>
            <td>用户名</td>
            <td>
              <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
            </td>
          </tr>

          <tr>
            <td>密码</td>
            <td>
            <!-- <td> @keydown.enter.native="doLogin" -->
              <el-input type="password" v-model="user.password" placeholder="请输入密码"></el-input>
              <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
            </td>
          </tr>



        </table>
        <router-link to="/pageoperate">
              <el-button style="width: 200px; margin-top: 30px;" type="primary" @click="doLogin">
               登录</el-button></router-link>
      </el-card>
    </div>

</template>
<script>
  export default {

    data() {
      //相当于以前的function data(){},这是es5之前的写法，新版本可以省略掉function
      return{
        
        user:{
          username:'zhangsan',
          password:'123',
         
        }
      }
    },
    methods:{
      doLogin(){//一点击登录按钮，这个方法就会执行
        // alert(JSON.stringify(this.user))//可以直接把this.user对象传给后端进行校验用户名和密码
      }
    }
  }
</script>

<style>
* {
  text-decoration:none;
}

#logintable {
  height:150px;
  margin-top: 20px;
  text-align:center;

  
}


</style>