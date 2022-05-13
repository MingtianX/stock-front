<template>
<div class="demo-pagination-block">
    <el-pagination
      v-model:currentPage="currentPage4"
      v-model:page-size="pageSize4"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>

</template>

<script>
    export default{
        data(){
            return {
                
            }
        }

    }
</script>
<style>
.el-pagination{
  justify-content:center;
}
</style>

