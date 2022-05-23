<template>


<div class="myTop">
  <router-link to="/pageoperate">
  <el-page-header @back="goBack" content=""></el-page-header>
  </router-link>
</div>



<div style="display: flex;justify-content: center;margin-top: 150px">
  
  <el-card class="box-card">
  <template #header>
      <div class="card-header">
        <span>修改密码</span>
      </div>
    </template>


  <el-form
  :model="ruleForm"
  status-icon
  :rules="rules"
  ref="ruleForm"
  label-width="100px"
  class="demo-ruleForm"
>

    <el-form-item label="原密码" prop="pass">
      <el-input 
    style="width: 360px"
    v-model="ruleForm.pass"
    type="password"
    placeholder="Please input the old password"
    show-password
  />
    </el-form-item>

    <el-form-item label="新密码" prop="newpass">
      <el-input 
    style="width: 360px"
    v-model="ruleForm.newpass"
    type="password"
    placeholder="Please input the new password"
    show-password
  />
    </el-form-item>

    <el-form-item label="确认密码" prop="checkPass">
      <el-input 
    style="width: 360px"
    v-model="ruleForm.checkPass"
    type="password"
    placeholder="Please check the new password"
    show-password
  />
    </el-form-item>
    
<el-form-item>

 <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>


    </el-form-item>


   
  </el-form>
  </el-card> 

</div>
</template>

<script>


export default {
    data() {
     
var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入原密码'))
        } 
          callback()
        }
      

      var validatenewPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'))
        } else {
          if (this.ruleForm.checkpass !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        }
      }
      var validateCheckPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请确认密码'))
        } else if (value !== this.ruleForm.newpass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }

      return {
        ruleForm: {
          pass: '',
          newpass: '',
          checkpass: '',
        },

        rules: {
          pass: [{ validator: validatePass, trigger: 'blur' }],
          newpass: [{ validator: validatenewPass, trigger: 'blur' }],
          checkPass: [{ validator: validateCheckPass, trigger: 'blur' }],
         
        },
      }
    },
    methods: {

submitForm(ruleForm) 
{
        var obj =
         {
            username: this.username,
            oldpwd: this.ruleForm.pass,
            newpwd: this.ruleForm.newpass
            };
            console.log(obj);
            postData("接口", obj).then(response => {
            if (response.status == 200) {
            this.$message({ message: "保存成功",
            type: "success"
            });
            } else 
            {
              this.$message({ message: "修改失败" + response.message,
              type: "error"
              });
          }
        });
},


      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
    },
  }




</script>