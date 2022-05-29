<template>
<div class="logintitle">股票管理系统</div>
 <div style="display: flex;justify-content: center;margin-top: 40px">
      <el-card style="width: 400px;height:300px" align="middle">
       <!-- slot="header" -->
        <div  class="clearfix" >
          <span style="font-size:20px;">登录</span>
        </div>

        <table class="logintable" >

          <tr>
            <td>账号</td>
            <td>
              <el-input v-model="userid" 
               maxlength="10"
               onkeyup="value=value.replace(/[^\d]/g,'').replace(/^0{1,}/g, '')"
              placeholder="请输入1~10位数字账号"></el-input>
            </td>
          </tr>

          <tr>
            <td>密码</td>
            <td>
            <!-- <td> @keydown.enter.native="doLogin" -->
              <el-input type="password" v-model="password" 
               maxlength="30"
               placeholder="请输入1~30位密码"></el-input>
              <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
            </td>
          </tr>



        </table>
       
              <el-button style="width: 200px; margin-top: 30px;" type="primary" @click="doLogin">
               登录</el-button>
               
      </el-card>
    </div>


</template>


<script>
/* eslint-disable */ 
import qs from 'qs'

/* eslint-disable */ 
export default {
    data() {
      return{
        
          userid:'',
          password:'',      
        
      }
    },
    methods:{
      doLogin(){
        if(this.userid==''||this.password==''){
          this.$message({
                  type:"warning",
                  message:"输入不能为空"
              })

        }else if(this.userid==this.password){
          sessionStorage.setItem('userid',this.userid);
          sessionStorage.setItem('username',this.userid);
          sessionStorage.setItem('token',this.userid);
          this.$router.push('/pageoperate');
        }else{
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('username');
          sessionStorage.removeItem('userid');

          this.userid='';
          this.password='';
              this.$message({
                  type:"warning",
                  message:"密码错误",
              })

        }
        // let params={
        //   user_id:this.user_id,
        //   password:this.password,
        // };
        // this.$axios.get("url",{params:params
        // }).then((res)=>{       
        //     if(res.data.state===false){
        //       sessionStorage.removeItem('token');
        //       this.userid='';
        //       this.password='';
        //       this.$message({
        //           type:"warning",
        //           message:"密码错误",
        //       })
        
        //     }else{
        //       sessionStorage.setItem('token',res.data.user_id);
        //       sessionStorage.setItem('username',res.data.user_name);
        //       sessionStorage.setItem('userid',this.user_id);
        //       this.$router.push('/pageoperate');
        //       console.log('login sucucess');
        //     }
        // }).catch(err=>{
				//     console.log(err);
			  // })


        }

        
       
      }
    }
  

</script>

<style>
.logintitle {
  font-size: 30px;
  margin-top:150px;
  

}

* {
  text-decoration:none;
}

.logintable {
  height:150px;
  margin-top: 20px;
  text-align:center;
}



</style>