<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="基本信息" name="basicInfo">
            <BaseInformation @showClassArea="showClassAreaFun"/>
        </el-tab-pane>
        <el-tab-pane label="课位区域" name="classArea" :disabled="disabledClassArea">
          <!-- <ClassTeacher /> -->
        </el-tab-pane>
        <el-tab-pane label="排课学生" name="classStudent" :disabled="!disabledClassStudent">
          <CoursesArrangingStu />
        </el-tab-pane>
        <el-tab-pane label="排课老师" name="classTeacher" :disabled="!disabledClassTeacher">
          <ClassTeacher />
        </el-tab-pane>
        <el-tab-pane label="查看选课结果" name="searchResult" :disabled="!disabledSearchResult">
          <SearchResult :currentpaikename="currentClass_scheduling_name"/>
        </el-tab-pane>
  </el-tabs>
    </div>
</template>

<script>
    import BaseInformation from "@/components/page/AttentPaike/BaseInformation";
    import CoursesArrangingStu from "@/components/page/AttentPaike/CoursesArrangingStu";
    import ClassTeacher from "@/components/page/AttentPaike/ClassTeacher";
    import SearchResult from "@/components/page/AttentPaike/SearchResult";
    export default {
        data() {
            return {
              currentClass_scheduling_name: '', 
              activeName: 'basicInfo',
              disabledClassArea: true,
              disabledClassStudent: true,
              disabledClassTeacher: true,
              disabledSearchResult: true
            }
        },
        components: {
            BaseInformation,
            CoursesArrangingStu,
            ClassTeacher,
            SearchResult
        },
        created() {
            
        },
        mounted: function() {
           
        },
        methods: {
          showClassAreaFun(value) {
            this.currentClass_scheduling_name = value;
            this.disabledClassArea = false;
          },
          handleClick(tab, event) {
            console.log(tab, event);
          }
        }

            
    }

</script>

<style scoped>
    .buju {
        margin-top: 25px;
        margin-left: 10px;
    }
    .bujuitem {
        margin-top: 10px;
        margin-bottom: 20px;
        
    } 
</style>
