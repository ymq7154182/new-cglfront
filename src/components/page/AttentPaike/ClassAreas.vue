<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="基本信息" name="basicInfo">
            <VueEditor @showClassArea="showClassAreaFun"/>
        </el-tab-pane>
        <el-tab-pane label="课位区域" name="classArea" :disabled="disabledClassArea">课位区域</el-tab-pane>
        <el-tab-pane label="排课学生" name="classStudent" :disabled="disabledClassStudent">排课学生</el-tab-pane>
        <el-tab-pane label="排课老师" name="classTeacher" :disabled="disabledclassTeacher">排课老师</el-tab-pane>
        <el-tab-pane label="查看选课结果" name="searchResult" :disabled="disabledsearchResult">查看选课结果</el-tab-pane>
  </el-tabs>
    </div>
</template>

<script>
   
    export default {
        data() {
            return { 
               

            }
        },
        
        created() {
            
        },
        mounted: function() {
           
        },
        methods: {
          
        }

            
    }

</script>

<style scoped>
    
</style>
