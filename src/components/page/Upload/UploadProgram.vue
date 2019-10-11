<template>
    <div>
      <div v-for="(item, index) in classes">
        <el-tag type="success">{{ item }}</el-tag>
        <v-administrative
          :schoolyear="schoolyear"
          :period="period"
          :teacherGroups1="teacherGroups1"
          :teacherGroups2="teacherGroups2"
          :teacherGroups3="teacherGroups3"
          :teacherGroups4="teacherGroups4"
          :teacherGroups5="teacherGroups5"
          :teacherGroups6="teacherGroups6"
          :teacherGroups7="teacherGroups7"
          :teacherGroups8="teacherGroups8"
          :teacherGroups9="teacherGroups9"
          :buildingList="buildingList"
          :classroomNameList="classroomNameList"
          :currentBanjiName="item"
          ></v-administrative>
      </div>
    </div>
</template>

<script>
    import VueCropper  from 'vue-cropperjs';
    import XLSX from 'xlsx';
    import vAdministrative from "./AdministrativeClass.vue";
    export default {
        name: 'upload',
        data() {
            return {
              schoolyear: '',
              period: '',
              currentBanjiName: '',
             
              teacherGroups1: [],
              teacherGroups2: [],
              teacherGroups3: [],
              teacherGroups4: [],
              teacherGroups5: [],
              teacherGroups6: [],
              teacherGroups7: [],
              teacherGroups8: [],
              teacherGroups9: [],

              buildingList: [],
              classroomNameList: [],
              classes: [],
              globalData: []
            }
        },
        methods: {

        },
        components: {
            VueCropper, vAdministrative
        },
        mounted: function() {
            
            var teacherID = localStorage.getItem('ms_username');
            var teacherPeriod = "";
            if(localStorage.getItem('ms_period') === '0') {
              teacherPeriod = "高中部";
            }else {
              teacherPeriod = "初中部";
            }

            var building_url = 'http://58.119.112.12:11030/rest/get_building';
            var classroom_url = 'http://58.119.112.12:11030/rest/get_classroom_no_param';
            var yuwen_url = `http://58.119.112.12:11030/rest/get_names?period=${teacherPeriod}&subjectgroup=语文组`;
            var shuxue_url = `http://58.119.112.12:11030/rest/get_names?period=${teacherPeriod}&subjectgroup=数学组`;
            var yingyu_url = `http://58.119.112.12:11030/rest/get_names?period=${teacherPeriod}&subjectgroup=英语组`;
            var wuli_url = `http://58.119.112.12:11030/rest/get_names?period=${teacherPeriod}&subjectgroup=物理组`;
            var huaxue_url = `http://58.119.112.12:11030/rest/get_names?period=${teacherPeriod}&subjectgroup=化学组`;
            var shengwu_url = `http://58.119.112.12:11030/rest/get_names?period=${teacherPeriod}&subjectgroup=生物组`;
            var zhengzhi_url = `http://58.119.112.12:11030/rest/get_names?period=${teacherPeriod}&subjectgroup=政治组`;
            var lishi_url = `http://58.119.112.12:11030/rest/get_names?period=${teacherPeriod}&subjectgroup=历史组`;
            var dili_url = `http://58.119.112.12:11030/rest/get_names?period=${teacherPeriod}&subjectgroup=地理组`;

            var teacher_info_url = `http://58.119.112.12:11030/rest/teacher_get_allclass?teacherid=${teacherID}`;

            var teacher_url = `http://58.119.112.12:11030/basicdata/getallclass?teacherid=${teacherID}`;

            this.$axios.get(teacher_url).then((res) => {
                    
                    this.classes = res.data.allclass;
                    //alert(this.period);
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });

            

            this.$axios.get(teacher_info_url).then((res) => {
                    this.schoolyear = res.data.schoolyear;
                    this.period = res.data.period;
                    //alert(this.period);
                    
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });

            this.$axios.get(yuwen_url).then((res) => {
                    this.teacherGroups1 = res.data.teachers;
                    
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });

            this.$axios.get(shuxue_url).then((res) => {
                    this.teacherGroups2 = res.data.teachers;
                    
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });

            this.$axios.get(yingyu_url).then((res) => {
                    this.teacherGroups3 = res.data.teachers;
                    
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });

            this.$axios.get(wuli_url).then((res) => {
                    this.teacherGroups4 = res.data.teachers;
                    
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });

            this.$axios.get(huaxue_url).then((res) => {
                    this.teacherGroups5 = res.data.teachers;
                    
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });

            this.$axios.get(shengwu_url).then((res) => {
                    this.teacherGroups6 = res.data.teachers;
                    
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });

            this.$axios.get(zhengzhi_url).then((res) => {
                    this.teacherGroups7 = res.data.teachers;
                    
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });

            this.$axios.get(lishi_url).then((res) => {
                    this.teacherGroups8 = res.data.teachers;
                    
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });

            this.$axios.get(dili_url).then((res) => {
                    this.teacherGroups9 = res.data.teachers;
                    
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });  

            this.$axios.get(building_url).then((res) => {
                    this.buildingList = res.data.buildings;
                    
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });  

            this.$axios.get(classroom_url).then((res) => {
                    this.classroomNameList = res.data.classroomname;
                    
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });

            
            
        }
    }
</script>

<style scoped>
    .buju {
        margin-top: 25px;
        margin-left: 20px;
    }
    .bujuitem {
        margin-top: 10px;
        margin-bottom: 20px;
        padding-left: 15px;
        padding-right: 15px; 
    } 
</style>