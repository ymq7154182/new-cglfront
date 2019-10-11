<template>
    <div class="buju">
        
        
        <div class="bujuitem" >
            <span>物理选考</span>
            <el-select v-model="keshi1" placeholder="请选择课时" @change="getKeshi1(keshi1)">
                <el-option key="1" label="1课时" value="1课时"></el-option>
                <el-option key="2" label="2课时" value="2课时"></el-option>
                <el-option key="3" label="3课时" value="3课时"></el-option>
                <el-option key="4" label="4课时" value="4课时"></el-option>
                <el-option key="5" label="5课时" value="5课时"></el-option>
                <el-option key="6" label="6课时" value="6课时"></el-option>
                <el-option key="7" label="7课时" value="7课时"></el-option>
                <el-option key="8" label="8课时" value="8课时"></el-option>
                <el-option key="9" label="9课时" value="9课时"></el-option>
                <el-option key="10" label="10课时" value="10课时"></el-option>
                <el-option key="11" label="11课时" value="11课时"></el-option>
                <el-option key="12" label="12课时" value="12课时"></el-option>
            </el-select>
            <el-select v-model="selectTeacherName1" placeholder="请选择物理教师" @change="getTeacherName1(selectTeacherName1)" >
                <el-option
                  v-for="item in teacherGroups1"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="selectClassName1" placeholder="请选择班级" @change="getClassName1(selectClassName1)" >
                <el-option
                  v-for="item in wuliClasses"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
            </el-select>
            <el-select v-model="buildingName1" placeholder="请选择教学楼" @change="getBuildingName1(buildingName1)" >
                <el-option
                  v-for="item in buildingList1"
                  :key="item.building"
                  :label="item.building"
                  :value="item.building">
                </el-option>
            </el-select>
            <el-select v-model="classroomName1" placeholder="请选择教室" @change="getClassroomName1(classroomName1)" >
                <el-option
                  v-for="item in classroomNameList1"
                  :key="item.type"
                  :label="item.type"
                  :value="item.type">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-upload" @click="importPlan1()">导入
            </el-button>
        </div>
    
        <div class="bujuitem">
            <span>化学选考</span>
            <el-select v-model="keshi2" placeholder="请选择课时" @change="getKeshi2(keshi2)">
                <el-option key="1" label="1课时" value="1课时"></el-option>
                <el-option key="2" label="2课时" value="2课时"></el-option>
                <el-option key="3" label="3课时" value="3课时"></el-option>
                <el-option key="4" label="4课时" value="4课时"></el-option>
                <el-option key="5" label="5课时" value="5课时"></el-option>
                <el-option key="6" label="6课时" value="6课时"></el-option>
                <el-option key="7" label="7课时" value="7课时"></el-option>
                <el-option key="8" label="8课时" value="8课时"></el-option>
                <el-option key="9" label="9课时" value="9课时"></el-option>
                <el-option key="10" label="10课时" value="10课时"></el-option>
                <el-option key="11" label="11课时" value="11课时"></el-option>
                <el-option key="12" label="12课时" value="12课时"></el-option>
            </el-select>
            <el-select v-model="selectTeacherName2" placeholder="请选择化学教师" @change="getTeacherName2(selectTeacherName2)" >
                <el-option
                  v-for="item in teacherGroups2"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="selectClassName2" placeholder="请选择班级" @change="getClassName2(selectClassName2)" >
                <el-option
                  v-for="item in huaxueClasses"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="buildingName2" placeholder="请选择教学楼" @change="getBuildingName2(buildingName2)" >
                <el-option
                  v-for="item in buildingList2"
                  :key="item.building"
                  :label="item.building"
                  :value="item.building">
                </el-option>
            </el-select>
            <el-select v-model="classroomName2" placeholder="请选择教室" @change="getClassroomName2(classroomName2)" >
                <el-option
                  v-for="item in classroomNameList2"
                  :key="item.type"
                  :label="item.type"
                  :value="item.type">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-upload" @click="importPlan2()">导入
            </el-button>
        </div>

        <div class="bujuitem">
            <span>生物选考</span>
            <el-select v-model="keshi3" placeholder="请选择课时" @change="getKeshi3(keshi3)">
                <el-option key="1" label="1课时" value="1课时"></el-option>
                <el-option key="2" label="2课时" value="2课时"></el-option>
                <el-option key="3" label="3课时" value="3课时"></el-option>
                <el-option key="4" label="4课时" value="4课时"></el-option>
                <el-option key="5" label="5课时" value="5课时"></el-option>
                <el-option key="6" label="6课时" value="6课时"></el-option>
                <el-option key="7" label="7课时" value="7课时"></el-option>
                <el-option key="8" label="8课时" value="8课时"></el-option>
                <el-option key="9" label="9课时" value="9课时"></el-option>
                <el-option key="10" label="10课时" value="10课时"></el-option>
                <el-option key="11" label="11课时" value="11课时"></el-option>
                <el-option key="12" label="12课时" value="12课时"></el-option>
            </el-select>
            <el-select v-model="selectTeacherName3" placeholder="请选择生物教师" @change="getTeacherName3(selectTeacherName3)" >
                <el-option
                  v-for="item in teacherGroups3"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="selectClassName3" placeholder="请选择班级" @change="getClassName3(selectClassName3)" >
                <el-option
                  v-for="item in shengwuClasses"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="buildingName3" placeholder="请选择教学楼" @change="getBuildingName3(buildingName3)" >
                <el-option
                  v-for="item in buildingList3"
                  :key="item.building"
                  :label="item.building"
                  :value="item.building">
                </el-option>
            </el-select>
            <el-select v-model="classroomName3" placeholder="请选择教室" @change="getClassroomName3(classroomName3)" >
                <el-option
                  v-for="item in classroomNameList3"
                  :key="item.type"
                  :label="item.type"
                  :value="item.type">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-upload" @click="importPlan3()">导入
            </el-button>
        </div>

        <div class="bujuitem">
            <span>政治选考</span>
            <el-select v-model="keshi4" placeholder="请选择课时" @change="getKeshi4(keshi4)">
                <el-option key="1" label="1课时" value="1课时"></el-option>
                <el-option key="2" label="2课时" value="2课时"></el-option>
                <el-option key="3" label="3课时" value="3课时"></el-option>
                <el-option key="4" label="4课时" value="4课时"></el-option>
                <el-option key="5" label="5课时" value="5课时"></el-option>
                <el-option key="6" label="6课时" value="6课时"></el-option>
                <el-option key="7" label="7课时" value="7课时"></el-option>
                <el-option key="8" label="8课时" value="8课时"></el-option>
                <el-option key="9" label="9课时" value="9课时"></el-option>
                <el-option key="10" label="10课时" value="10课时"></el-option>
                <el-option key="11" label="11课时" value="11课时"></el-option>
                <el-option key="12" label="12课时" value="12课时"></el-option>
            </el-select>
            <el-select v-model="selectTeacherName4" placeholder="请选择政治教师" @change="getTeacherName4(selectTeacherName4)" >
                <el-option
                  v-for="item in teacherGroups4"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="selectClassName4" placeholder="请选择班级" @change="getClassName4(selectClassName4)" >
                <el-option
                  v-for="item in zhengzhiClasses"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="buildingName4" placeholder="请选择教学楼" @change="getBuildingName4(buildingName4)" >
                <el-option
                  v-for="item in buildingList4"
                  :key="item.building"
                  :label="item.building"
                  :value="item.building">
                </el-option>
            </el-select>
            <el-select v-model="classroomName4" placeholder="请选择教室" @change="getClassroomName4(classroomName4)" >
                <el-option
                  v-for="item in classroomNameList4"
                  :key="item.type"
                  :label="item.type"
                  :value="item.type">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-upload" @click="importPlan4()">导入
            </el-button>
        </div>

        <div class="bujuitem">
            <span>历史选考</span>
            <el-select v-model="keshi5" placeholder="请选择课时" @change="getKeshi5(keshi5)">
                <el-option key="1" label="1课时" value="1课时"></el-option>
                <el-option key="2" label="2课时" value="2课时"></el-option>
                <el-option key="3" label="3课时" value="3课时"></el-option>
                <el-option key="4" label="4课时" value="4课时"></el-option>
                <el-option key="5" label="5课时" value="5课时"></el-option>
                <el-option key="6" label="6课时" value="6课时"></el-option>
                <el-option key="7" label="7课时" value="7课时"></el-option>
                <el-option key="8" label="8课时" value="8课时"></el-option>
                <el-option key="9" label="9课时" value="9课时"></el-option>
                <el-option key="10" label="10课时" value="10课时"></el-option>
                <el-option key="11" label="11课时" value="11课时"></el-option>
                <el-option key="12" label="12课时" value="12课时"></el-option>
            </el-select>
            <el-select v-model="selectTeacherName5" placeholder="请选择历史教师" @change="getTeacherName5(selectTeacherName5)" >
                <el-option
                  v-for="item in teacherGroups5"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="selectClassName5" placeholder="请选择班级" @change="getClassName5(selectClassName5)" >
                <el-option
                  v-for="item in lishiClasses"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="buildingName5" placeholder="请选择教学楼" @change="getBuildingName5(buildingName5)" >
                <el-option
                  v-for="item in buildingList5"
                  :key="item.building"
                  :label="item.building"
                  :value="item.building">
                </el-option>
            </el-select>
            <el-select v-model="classroomName5" placeholder="请选择教室" @change="getClassroomName5(classroomName5)" >
                <el-option
                  v-for="item in classroomNameList5"
                  :key="item.type"
                  :label="item.type"
                  :value="item.type">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-upload" @click="importPlan5()">导入
            </el-button>
        </div>

        <div class="bujuitem">
            <span>地理选考</span>
            <el-select v-model="keshi6" placeholder="请选择课时" @change="getKeshi6(keshi6)">
                <el-option key="1" label="1课时" value="1课时"></el-option>
                <el-option key="2" label="2课时" value="2课时"></el-option>
                <el-option key="3" label="3课时" value="3课时"></el-option>
                <el-option key="4" label="4课时" value="4课时"></el-option>
                <el-option key="5" label="5课时" value="5课时"></el-option>
                <el-option key="6" label="6课时" value="6课时"></el-option>
                <el-option key="7" label="7课时" value="7课时"></el-option>
                <el-option key="8" label="8课时" value="8课时"></el-option>
                <el-option key="9" label="9课时" value="9课时"></el-option>
                <el-option key="10" label="10课时" value="10课时"></el-option>
                <el-option key="11" label="11课时" value="11课时"></el-option>
                <el-option key="12" label="12课时" value="12课时"></el-option>
            </el-select>
           <el-select v-model="selectTeacherName6" placeholder="请选择地理教师" @change="getTeacherName6(selectTeacherName6)" >
                <el-option
                  v-for="item in teacherGroups6"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="selectClassName6" placeholder="请选择班级" @change="getClassName6(selectClassName6)" >
                <el-option
                  v-for="item in diliClasses"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="buildingName6" placeholder="请选择教学楼" @change="getBuildingName6(buildingName6)" >
                <el-option
                  v-for="item in buildingList6"
                  :key="item.building"
                  :label="item.building"
                  :value="item.building">
                </el-option>
            </el-select>
            <el-select v-model="classroomName6" placeholder="请选择教室" @change="getClassroomName6(classroomName6)" >
                <el-option
                  v-for="item in classroomNameList6"
                  :key="item.type"
                  :label="item.type"
                  :value="item.type">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-upload" @click="importPlan6()">导入
            </el-button>
        </div>

    </div>
</template>

<script>
    import VueCropper  from 'vue-cropperjs';
    import XLSX from 'xlsx';
    export default {
        props: ['banjiMingzi'],
        name: 'upload',
        data() {
            return {
                schoolyear: '',
                period: '',
                currentBanjiName: '',
                //物理选考
                buildingList1: [],
                teacherGroups1: [],
                classroomNameList1: [],
                wuliClasses: [],

                keshi1: '',
                buildingName1: '',
                selectTeacherName1: '',
                classroomName1: '',
                selectClassName1: '',


                currentKeshi1: '',
                currentBuildingName1: '',
                currentSelectTeacherName1: '',
                currentClassroomName1: '',
                currentSelectClassName1: '',

                savecurrentKeshi1: '',
                savecurrentBuildingName1: '',
                savecurrentSelectTeacherName1: '',
                savecurrentClassroomName1: '',
                savecurrentSelectClassName1: '',

                //化学选考
                buildingList2: [],
                teacherGroups2: [],
                classroomNameList2: [],
                huaxueClasses: [],

                keshi2: '',
                buildingName2: '',
                selectTeacherName2: '',
                classroomName2: '',
                selectClassName2: '',

                currentKeshi2: '',
                currentBuildingName2: '',
                currentSelectTeacherName2: '',
                currentClassroomName2: '',
                currentSelectClassName2: '',

                savecurrentKeshi2: '',
                savecurrentBuildingName2: '',
                savecurrentSelectTeacherName2: '',
                savecurrentClassroomName2: '',
                savecurrentSelectClassName2: '',

                //生物选考
                buildingList3: [],
                teacherGroups3: [],
                classroomNameList3: [],
                shengwuClasses: [],

                keshi3: '',
                buildingName3: '',
                selectTeacherName3: '',
                classroomName3: '',
                selectClassName3: '',

                currentKeshi3: '',
                currentBuildingName3: '',
                currentSelectTeacherName3: '',
                currentSelectClassName3: '',

                savecurrentKeshi3: '',
                savecurrentBuildingName3: '',
                savecurrentSelectTeacherName3: '',
                savecurrentSelectClassName3: '',

                //政治选考
                buildingList4: [],
                teacherGroups4: [],
                classroomNameList4: [],
                zhengzhiClasses: [],

                keshi4: '',
                buildingName4: '',
                selectTeacherName4: '',
                classroomName4: '',
                selectClassName4: '',

                currentKeshi4: '',
                currentBuildingName4: '',
                currentSelectTeacherName4: '',
                currentClassroomName4: '',
                currentSelectClassName4: '',

                savecurrentKeshi4: '',
                savecurrentBuildingName4: '',
                savecurrentSelectTeacherName4: '',
                savecurrentClassroomName4: '',
                savecurrentSelectClassName4: '',

                //历史选考
                buildingList5: [],
                teacherGroups5: [],
                classroomNameList5: [],
                lishiClasses: [],

                keshi5: '',
                buildingName5: '',
                selectTeacherName5: '',
                classroomName5: '',
                selectClassName5: '',

                currentKeshi5: '',
                currentBuildingName5: '',
                currentSelectTeacherName5: '',
                currentClassroomName5: '',
                currentSelectClassName5: '',

                savecurrentKeshi5: '',
                savecurrentBuildingName5: '',
                savecurrentSelectTeacherName5: '',
                savecurrentClassroomName5: '',
                savecurrentSelectClassName5: '',

                //地理选考
                buildingList6: [],
                teacherGroups6: [],
                classroomNameList6: [],
                diliClasses: [],

                keshi6: '',
                buildingName6: '',
                selectTeacherName6: '',
                classroomName6: '',
                selectClassName6: '',

                currentKeshi6: '',
                currentBuildingName6: '',
                currentSelectTeacherName6: '',
                currentClassroomName6: '',
                currentSelectClassName6: '',

                savecurrentKeshi6: '',
                savecurrentBuildingName6: '',
                savecurrentSelectTeacherName6: '',
                savecurrentClassroomName6: '',
                savecurrentSelectClassName6: '',

            }
        },
        methods: {

            // searchPlan() {
            //     var classes = this.classes;
            //     if(this.currentBanjiName == "1班") {
                    
            //     }
            // },


            getBanjiName(value) {
                this.currentBanjiName = value;
            },
            //物理选考
            getKeshi1(value) {
                this.currentKeshi1 = value;
                this.savecurrentKeshi1 = value;
            },
            getBuildingName1(value) {
                this.currentBuildingName1 = value;
                this.savecurrentBuildingName1 = value;
            },
            getTeacherName1(value) {
                this.currentSelectTeacherName1 = value;
                this.savecurrentSelectTeacherName1 = value;
            },
            getClassroomName1(value) {
                this.currentClassroomName1 = value;
                this.savecurrentClassroomName1 = value;
            },
            getClassName1() {
                this.currentSelectClassName1 = value;
                this.savecurrentSelectClassName1 = value;
            },

            //化学选考
            getKeshi2(value) {
                this.currentKeshi2 = value;
                this.savecurrentKeshi2 = value;
            },
            getBuildingName2(value) {
                this.currentBuildingName2 = value;
                this.savecurrentBuildingName2 = value;
            },
            getTeacherName2(value) {
                this.currentSelectTeacherName2 = value;
                this.savecurrentSelectTeacherName2 = value;
            },
            getClassroomName2(value) {
                this.currentClassroomName2 = value;
                this.savecurrentClassroomName2 = value;
            },
            getClassName2() {
                this.currentSelectClassName2 = value;
                this.savecurrentSelectClassName2 = value;
            },

            //生物选考
            getKeshi3(value) {
                this.currentKeshi3 = value;
                this.savecurrentKeshi3 = value;
            },
            getBuildingName3(value) {
                this.currentBuildingName3 = value;
                this.savecurrentBuildingName3 = value;
            },
            getTeacherName3(value) {
                this.currentSelectTeacherName3 = value;
                this.savecurrentSelectTeacherName3 = value;
            },
            getClassroomName3(value) {
                this.currentClassroomName3 = value;
                this.savecurrentClassroomName3 = value;
            },
            getClassName3() {
                this.currentSelectClassName3 = value;
                this.savecurrentSelectClassName3 = value;
            },

            //政治选考
            getKeshi4(value) {
                this.currentKeshi4 = value;
                this.savecurrentKeshi4 = value;
            },
            getBuildingName4(value) {
                this.currentBuildingName4 = value;
                this.savecurrentBuildingName4 = value;
            },
            getTeacherName4(value) {
                this.currentSelectTeacherName4 = value;
                this.savecurrentSelectTeacherName4 = value;
            },
            getClassroomName4(value) {
                this.currentClassroomName4 = value;
                this.savecurrentClassroomName4 = value;
            },
            getClassName4() {
                this.currentSelectClassName4 = value;
                this.savecurrentSelectClassName4 = value;
            },

            //历史选考
            getKeshi5(value) {
                this.currentKeshi5 = value;
                this.savecurrentKeshi5 = value;
            },
            getBuildingName5(value) {
                this.currentBuildingName5 = value;
                this.savecurrentBuildingName5 = value;
            },
            getTeacherName5(value) {
                this.currentSelectTeacherName5 = value;
                this.savecurrentSelectTeacherName5 = value;
            },
            getClassroomName5(value) {
                this.currentClassroomName5 = value;
                this.savecurrentClassroomName5 = value;
            },
            getClassName5() {
                this.currentSelectClassName5 = value;
                this.savecurrentSelectClassName5 = value;
            },

            //地理选考
            getKeshi6(value) {
                this.currentKeshi6 = value;
                this.savecurrentKeshi6 = value;
            },
            getBuildingName6(value) {
                this.currentBuildingName6 = value;
                this.savecurrentBuildingName6 = value;
            },
            getTeacherName6(value) {
                this.currentSelectTeacherName6 = value;
                this.savecurrentSelectTeacherName6 = value;
            },
            getClassroomName6(value) {
                this.currentClassroomName6 = value;
                this.savecurrentClassroomName6 = value;
            },
            getClassName6() {
                this.currentSelectClassName6 = value;
                this.savecurrentSelectClassName6 = value;
            },


            //导入
            importPlan1() {
                //alert(this.$refs.banjiName.value);
                
                var url = "http://58.119.112.12:11030/rest/insert_teacher_plan";
                if(this.currentKeshi1!= "" && this.currentSelectTeacherName1 != "" && this.currentBuildingName1 != "" && this.currentClassroomName1 != "") {
                    this.$axios.post(url, this.$qs.stringify({
                        group: this.schoolyear,
                        level: this.period,
                        classname: this.currentSelectClassName1,
                        subjectname: '物理选考',
                        oneweektime: this.currentKeshi1,
                        teachername: this.currentSelectTeacherName1,
                        building: this.currentBuildingName1,
                        classroomname: this.currentClassroomName1
                    })).then((res) => {
                        this.$message.success(res.data.errmsg);
                        //this.value3 = this.currentRightList;
                        this.savecurrentKeshi1 = this.currentKeshi1;
                        this.savecurrentSelectTeacherName1 = this.currentSelectTeacherName1;
                        this.savecurrentBuildingName1 = this.currentBuildingName1;
                        this.savecurrentClassroomName1 = this.currentClassroomName1;
                        this.savecurrentSelectClassName1 = this.currentSelectClassName1;
                    })
                    .catch((err) => {
                        this.$message.success("提交失败");
                    });
                }else {
                    this.$message.success("请选择完全");
                }
            },
            importPlan2() {
                
                var url = "http://58.119.112.12:11030/rest/insert_teacher_plan";
                if(this.currentKeshi2!= "" && this.currentSelectTeacherName2 != "" && this.currentBuildingName2 != "" && this.currentClassroomName2 != "") {
                    this.$axios.post(url, this.$qs.stringify({
                        group: this.schoolyear,
                        level: this.period,
                        classname: this.currentSelectClassName2,
                        subjectname: '化学选考',
                        oneweektime: this.currentKeshi2,
                        teachername: this.currentSelectTeacherName2,
                        building: this.currentBuildingName2,
                        classroomname: this.currentClassroomName2
                    })).then((res) => {
                        this.$message.success(res.data.errmsg);
                        //this.value3 = this.currentRightList;
                        this.savecurrentKeshi2 = this.currentKeshi2;
                        this.savecurrentSelectTeacherName2 = this.currentSelectTeacherName2;
                        this.savecurrentBuildingName2 = this.currentBuildingName2;
                        this.savecurrentClassroomName2 = this.currentClassroomName2;
                        this.savecurrentSelectClassName2 = this.currentSelectClassName2;
                    })
                    .catch((err) => {
                        this.$message.success("提交失败");
                    });
                }else {
                    this.$message.success("请选择完全");
                }
            },
            importPlan3() {
                var url = "http://58.119.112.12:11030/rest/insert_teacher_plan";
                if(this.currentKeshi3!= "" && this.currentSelectTeacherName3 != "" && this.currentBuildingName3 != "" && this.currentClassroomName3 != "") {
                    this.$axios.post(url, this.$qs.stringify({
                        group: this.schoolyear,
                        level: this.period,
                        classname: this.currentSelectClassName3,
                        subjectname: '生物选考',
                        oneweektime: this.currentKeshi3,
                        teachername: this.currentSelectTeacherName3,
                        building: this.currentBuildingName3,
                        classroomname: this.currentClassroomName3
                    })).then((res) => {
                        this.$message.success(res.data.errmsg);
                        //this.value3 = this.currentRightList;
                        this.savecurrentKeshi3 = this.currentKeshi3;
                        this.savecurrentSelectTeacherName3 = this.currentSelectTeacherName3;
                        this.savecurrentBuildingName3 = this.currentBuildingName3;
                        this.savecurrentClassroomName3 = this.currentClassroomName3;
                        this.savecurrentSelectClassName3 = this.currentSelectClassName3;
                    })
                    .catch((err) => {
                        this.$message.success("提交失败");
                    });
                }else {
                    this.$message.success("请选择完全");
                }
            },
            importPlan4() {
                var url = "http://58.119.112.12:11030/rest/insert_teacher_plan";
                if(this.currentKeshi4!= "" && this.currentSelectTeacherName4 != "" && this.currentBuildingName4 != "" && this.currentClassroomName4 != "") {
                    this.$axios.post(url, this.$qs.stringify({
                        group: this.schoolyear,
                        level: this.period,
                        classname: this.currentSelectClassName4,
                        subjectname: '政治选考',
                        oneweektime: this.currentKeshi4,
                        teachername: this.currentSelectTeacherName4,
                        building: this.currentBuildingName4,
                        classroomname: this.currentClassroomName4
                    })).then((res) => {
                        this.$message.success(res.data.errmsg);
                        //this.value3 = this.currentRightList;
                        this.savecurrentKeshi4 = this.currentKeshi4;
                        this.savecurrentSelectTeacherName4 = this.currentSelectTeacherName4;
                        this.savecurrentBuildingName4 = this.currentBuildingName4;
                        this.savecurrentClassroomName4 = this.currentClassroomName4;
                        this.savecurrentSelectClassName4 = this.currentSelectClassName4;
                    })
                    .catch((err) => {
                        this.$message.success("提交失败");
                    });
                }else {
                    this.$message.success("请选择完全");
                }
            },
            importPlan5() {
                var url = "http://58.119.112.12:11030/rest/insert_teacher_plan";
                if(this.currentKeshi5!= "" && this.currentSelectTeacherName5 != "" && this.currentBuildingName5 != "" && this.currentClassroomName5 != "") {
                    this.$axios.post(url, this.$qs.stringify({
                        group: this.schoolyear,
                        level: this.period,
                        classname: this.currentSelectClassName5,
                        subjectname: '历史选考',
                        oneweektime: this.currentKeshi5,
                        teachername: this.currentSelectTeacherName5,
                        building: this.currentBuildingName5,
                        classroomname: this.currentClassroomName5
                    })).then((res) => {
                        this.$message.success(res.data.errmsg);
                        //this.value3 = this.currentRightList;
                        this.savecurrentKeshi5 = this.currentKeshi5;
                        this.savecurrentSelectTeacherName5 = this.currentSelectTeacherName5;
                        this.savecurrentBuildingName5 = this.currentBuildingName5;
                        this.savecurrentClassroomName5 = this.currentClassroomName5;
                        this.savecurrentSelectClassName5 = this.currentSelectClassName5;
                    })
                    .catch((err) => {
                        this.$message.success("提交失败");
                    });
                }else {
                    this.$message.success("请选择完全");
                }
            },
            importPlan6() {
                var url = "http://58.119.112.12:11030/rest/insert_teacher_plan";
                if(this.currentKeshi6!= "" && this.currentSelectTeacherName6 != "" && this.currentBuildingName6 != "" && this.currentClassroomName6 != "") {
                    this.$axios.post(url, this.$qs.stringify({
                        group: this.schoolyear,
                        level: this.period,
                        classname: this.currentSelectClassName6,
                        subjectname: '地理选考',
                        oneweektime: this.currentKeshi6,
                        teachername: this.currentSelectTeacherName6,
                        building: this.currentBuildingName6,
                        classroomname: this.currentClassroomName6
                    })).then((res) => {
                        this.$message.success(res.data.errmsg);
                        //this.value3 = this.currentRightList;
                        this.savecurrentKeshi6 = this.currentKeshi6;
                        this.savecurrentSelectTeacherName6 = this.currentSelectTeacherName6;
                        this.savecurrentBuildingName6 = this.currentBuildingName6;
                        this.savecurrentClassroomName6 = this.currentClassroomName6;
                        this.savecurrentSelectClassName6 = this.currentSelectClassName6;
                    })
                    .catch((err) => {
                        this.$message.success("提交失败");
                    });
                }else {
                    this.$message.success("请选择完全");
                }
            }

        },
        components: {
            VueCropper
        },
        mounted: function() {
            //alert(localStorage.getItem('ms_username'));

            var teacherID = localStorage.getItem('ms_username');
            var teacherPeriod = "";
            if(localStorage.getItem('ms_period') === '0') {
              teacherPeriod = "高中部";
            }else {
              teacherPeriod = "初中部";
            }
            
            var building_url = 'http://58.119.112.12:11030/rest/get_building';
            var classroom_url = 'http://58.119.112.12:11030/rest/get_classroom_no_param';
            var yuwen_url = `http://58.119.112.12:11030/rest/get_names?period=${teacherPeriod}&subjectgroup=物理组`;
            var shuxue_url = `http://58.119.112.12:11030/rest/get_names?period=${teacherPeriod}&subjectgroup=化学组`;
            var yingyu_url = `http://58.119.112.12:11030/rest/get_names?period=${teacherPeriod}&subjectgroup=生物组`;
            var wuli_url = `http://58.119.112.12:11030/rest/get_names?period=${teacherPeriod}&subjectgroup=政治组`;
            var huaxue_url = `http://58.119.112.12:11030/rest/get_names?period=${teacherPeriod}&subjectgroup=历史组`;
            var shengwu_url = `http://58.119.112.12:11030/rest/get_names?period=${teacherPeriod}&subjectgroup=地理组`;

            var wuli_class_url = `http://58.119.112.12:11030/rest/get_classnum?subject=物理-选考&teacherid=${teacherID}`;
            var huaxue_class_url = `http://58.119.112.12:11030/rest/get_classnum?subject=化学-选考&teacherid=${teacherID}`;
            var shengwu_class_url = `http://58.119.112.12:11030/rest/get_classnum?subject=生物-选考&teacherid=${teacherID}`;
            var zhengzhi_class_url = `http://58.119.112.12:11030/rest/get_classnum?subject=政治-选考&teacherid=${teacherID}`;
            var lishi_class_url = `http://58.119.112.12:11030/rest/get_classnum?subject=历史-选考&teacherid=${teacherID}`;
            var dili_class_url = `http://58.119.112.12:11030/rest/get_classnum?subject=地理-选考&teacherid=${teacherID}`;

            
            this.$axios.get(wuli_class_url).then((res) => {
                    this.wuliClasses = res.data.classes;
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });

            this.$axios.get(huaxue_class_url).then((res) => {
                    this.huaxueClasses = res.data.classes;
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });

            this.$axios.get(shengwu_class_url).then((res) => {
                    this.shengwuClasses = res.data.classes;
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });
            this.$axios.get(zhengzhi_class_url).then((res) => {
                    this.zhengzhiClasses = res.data.classes;
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });

            this.$axios.get(lishi_class_url).then((res) => {
                    this.lishiClasses = res.data.classes;
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });

            this.$axios.get(dili_class_url).then((res) => {
                    this.diliClasses = res.data.classes;
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });


            
            var teacher_info_url = `http://58.119.112.12:11030/rest/teacher_get_allclass?teacherid=${teacherID}`;

            this.$axios.get(teacher_info_url).then((res) => {
                    this.schoolyear = res.data.schoolyear;
                    this.period = res.data.period;
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
 

            this.$axios.get(building_url).then((res) => {
                    this.buildingList1 = res.data.buildings;
                    this.buildingList2 = res.data.buildings;
                    this.buildingList3 = res.data.buildings;
                    this.buildingList4 = res.data.buildings;
                    this.buildingList5 = res.data.buildings;
                    this.buildingList6 = res.data.buildings;
                    
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });  

            this.$axios.get(classroom_url).then((res) => {
                    this.classroomNameList1 = res.data.classroomname;
                    this.classroomNameList2 = res.data.classroomname;
                    this.classroomNameList3 = res.data.classroomname;
                    this.classroomNameList4 = res.data.classroomname;
                    this.classroomNameList5 = res.data.classroomname;
                    this.classroomNameList6 = res.data.classroomname;
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
        margin-left: 10px;
    }
    .bujuitem {
        margin-top: 10px;
        margin-bottom: 20px;
        
    } 
    .el-select {
      width: 210px !important;
    } 
</style>