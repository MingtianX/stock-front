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


  <el-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
      style="width: 100px"
        >原密码</span
      >




    <el-input 
    style="width: 360px"
    v-model="input"
    type="password"
    placeholder="Please input password"
    show-password
  />
  </el-row>

<div style="margin: 20px 0" />

<el-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
      style="width: 100px"
        >新密码</span
      >

    <el-input 
    style="width: 360px"
    v-model="input"
    type="newpassword"
    placeholder="Please input password"
    show-password
  />
  </el-row>


  <div style="margin: 20px 0" />

  <el-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
      style="width: 100px"
        >确认密码</span
      >

    <el-input 
    style="width: 360px"
    v-model="input"
    type="checkpassword"
    placeholder="Please input password"
    show-password
  />
  </el-row>

 <el-button style="width: 200px; margin-top: 30px;" type="primary">
               确定</el-button>



  </el-card>
</div>
</template>

<script >
 import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        input: ref(''),
      }
    },
  })



</script>

