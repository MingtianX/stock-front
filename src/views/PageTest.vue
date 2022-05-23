 methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },


      submitForm(formName) {
   this.ruleForm.username =  this.$store.getters.username;
   console.log(this.ruleForm);
   this.$refs[formName].validate(async valid => {
   if (!valid) return;
   const {status: status} = await this.axios.put("users/resetPassword", this.ruleForm);
    if (status !== 200) return this.$message.error('重置密码失败！');
       this.$message.success("重置密码成功，正在跳转登录页面");
        this.$router.push("/").catch(err => {err})
        });
      },