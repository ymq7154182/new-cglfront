<template>
    <div class="buju">
        <div class="bujuitem" >
            <span>语文</span>
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
            <el-select v-model="selectTeacherName1" placeholder="请选择语文教师" @change="getTeacherName1(selectTeacherName1)" >
                <el-option
                  v-for="item in teacherGroups1"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="buildingName1" placeholder="请选择教学楼" @change="getBuildingName1(buildingName1)" >
                <el-option
                  v-for="item in buildingList"
                  :key="item.building"
                  :label="item.building"
                  :value="item.building">
                </el-option>
            </el-select>
            <el-select v-model="classroomName1" placeholder="请选择教室" @change="getClassroomName1(classroomName1)" >
                <el-option
                  v-for="item in classroomNameList"
                  :key="item.type"
                  :label="item.type"
                  :value="item.type">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-upload" @click="importPlan1()">导入
            </el-button>
        </div>
    
        <div class="bujuitem">
            <span>数学</span>
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
            <el-select v-model="selectTeacherName2" placeholder="请选择数学教师" @change="getTeacherName2(selectTeacherName2)" >
                <el-option
                  v-for="item in teacherGroups2"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="buildingName2" placeholder="请选择教学楼" @change="getBuildingName2(buildingName2)" >
                <el-option
                  v-for="item in buildingList"
                  :key="item.building"
                  :label="item.building"
                  :value="item.building">
                </el-option>
            </el-select>
            <el-select v-model="classroomName2" placeholder="请选择教室" @change="getClassroomName2(classroomName2)" >
                <el-option
                  v-for="item in classroomNameList"
                  :key="item.type"
                  :label="item.type"
                  :value="item.type">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-upload" @click="importPlan2()">导入
            </el-button>
        </div>

        <div class="bujuitem">
            <span>英语</span>
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
            <el-select v-model="selectTeacherName3" placeholder="请选择英语教师" @change="getTeacherName3(selectTeacherName3)" >
                <el-option
                  v-for="item in teacherGroups3"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>

            <el-select v-model="buildingName3" placeholder="请选择教学楼" @change="getBuildingName3(buildingName3)" >
                <el-option
                  v-for="item in buildingList"
                  :key="item.building"
                  :label="item.building"
                  :value="item.building">
                </el-option>
            </el-select>
            <el-select v-model="classroomName3" placeholder="请选择教室" @change="getClassroomName3(classroomName3)" >
                <el-option
                  v-for="item in classroomNameList"
                  :key="item.type"
                  :label="item.type"
                  :value="item.type">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-upload" @click="importPlan3()">导入
            </el-button>
        </div>

        <div class="bujuitem">
            <span>物理</span>
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
            <el-select v-model="selectTeacherName4" placeholder="请选择物理教师" @change="getTeacherName4(selectTeacherName4)" >
                <el-option
                  v-for="item in teacherGroups4"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="buildingName4" placeholder="请选择教学楼" @change="getBuildingName4(buildingName4)" >
                <el-option
                  v-for="item in buildingList"
                  :key="item.building"
                  :label="item.building"
                  :value="item.building">
                </el-option>
            </el-select>
            <el-select v-model="classroomName4" placeholder="请选择教室" @change="getClassroomName4(classroomName4)" >
                <el-option
                  v-for="item in classroomNameList"
                  :key="item.type"
                  :label="item.type"
                  :value="item.type">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-upload" @click="importPlan4()">导入
            </el-button>
        </div>

        <div class="bujuitem">
            <span>化学</span>
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
            <el-select v-model="selectTeacherName5" placeholder="请选择化学教师" @change="getTeacherName5(selectTeacherName5)" >
                <el-option
                  v-for="item in teacherGroups5"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="buildingName5" placeholder="请选择教学楼" @change="getBuildingName5(buildingName5)" >
                <el-option
                  v-for="item in buildingList"
                  :key="item.building"
                  :label="item.building"
                  :value="item.building">
                </el-option>
            </el-select>
            <el-select v-model="classroomName5" placeholder="请选择教室" @change="getClassroomName5(classroomName5)" >
                <el-option
                  v-for="item in classroomNameList"
                  :key="item.type"
                  :label="item.type"
                  :value="item.type">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-upload" @click="importPlan5()">导入
            </el-button>
        </div>

        <div class="bujuitem">
            <span>生物</span>
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
           <el-select v-model="selectTeacherName6" placeholder="请选择生物教师" @change="getTeacherName6(selectTeacherName6)" >
                <el-option
                  v-for="item in teacherGroups6"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="buildingName6" placeholder="请选择教学楼" @change="getBuildingName6(buildingName6)" >
                <el-option
                  v-for="item in buildingList"
                  :key="item.building"
                  :label="item.building"
                  :value="item.building">
                </el-option>
            </el-select>
            <el-select v-model="classroomName6" placeholder="请选择教室" @change="getClassroomName6(classroomName6)" >
                <el-option
                  v-for="item in classroomNameList"
                  :key="item.type"
                  :label="item.type"
                  :value="item.type">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-upload" @click="importPlan6()">导入
            </el-button>
        </div>

        <div class="bujuitem">
            <span>政治</span>
            <el-select v-model="keshi7" placeholder="请选择课时" @change="getKeshi7(keshi7)">
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
            <el-select v-model="selectTeacherName7" placeholder="请选择政治教师" @change="getTeacherName7(selectTeacherName7)" >
                <el-option
                  v-for="item in teacherGroups7"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="buildingName7" placeholder="请选择教学楼" @change="getBuildingName7(buildingName7)" >
                <el-option
                  v-for="item in buildingList"
                  :key="item.building"
                  :label="item.building"
                  :value="item.building">
                </el-option>
            </el-select>
            <el-select v-model="classroomName7" placeholder="请选择教室" @change="getClassroomName7(classroomName7)" >
                <el-option
                  v-for="item in classroomNameList"
                  :key="item.type"
                  :label="item.type"
                  :value="item.type">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-upload" @click="importPlan7()">导入
            </el-button>
        </div>

        <div class="bujuitem">
            <span>历史</span>
            <el-select v-model="keshi8" placeholder="请选择课时" @change="getKeshi8(keshi8)">
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
            <el-select v-model="selectTeacherName8" placeholder="请选择历史教师" @change="getTeacherName8(selectTeacherName8)" >
                <el-option
                  v-for="item in teacherGroups8"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="buildingName8" placeholder="请选择教学楼" @change="getBuildingName8(buildingName8)" >
                <el-option
                  v-for="item in buildingList"
                  :key="item.building"
                  :label="item.building"
                  :value="item.building">
                </el-option>
            </el-select>
            <el-select v-model="classroomName8" placeholder="请选择教室" @change="getClassroomName8(classroomName8)" >
                <el-option
                  v-for="item in classroomNameList"
                  :key="item.type"
                  :label="item.type"
                  :value="item.type">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-upload" @click="importPlan8()">导入
            </el-button>
        </div>

        <div class="bujuitem">
            <span>地理</span>
            <el-select v-model="keshi9" placeholder="请选择课时" @change="getKeshi9(keshi9)">
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
            <el-select v-model="selectTeacherName9" placeholder="请选择地理教师" @change="getTeacherName9(selectTeacherName9)" >
                <el-option
                  v-for="item in teacherGroups9"
                  :key="item.teachername"
                  :label="item.teachername"
                  :value="item.teachername">
                </el-option>
            </el-select>
            <el-select v-model="buildingName9" placeholder="请选择教学楼" @change="getBuildingName9(buildingName9)" >
                <el-option
                  v-for="item in buildingList"
                  :key="item.building"
                  :label="item.building"
                  :value="item.building">
                </el-option>
            </el-select>
            <el-select v-model="classroomName9" placeholder="请选择教室" @change="getClassroomName9(classroomName9)" >
                <el-option
                  v-for="item in classroomNameList"
                  :key="item.type"
                  :label="item.type"
                  :value="item.type">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-upload" @click="importPlan9()">导入
            </el-button>
        </div>

    </div>
</template>

<script>
    import VueCropper  from 'vue-cropperjs';
    import XLSX from 'xlsx';
    export default {
        props: {
          teacherGroups1: {
            type: Array
          },
          teacherGroups2: {
            type: Array
          },
          teacherGroups3: {
            type: Array
          },
          teacherGroups4: {
            type: Array
          },
          teacherGroups5: {
            type: Array
          },
          teacherGroups6: {
            type: Array
          },
          teacherGroups7: {
            type: Array
          },
          teacherGroups8: {
            type: Array
          },
          teacherGroups9: {
            type: Array
          },

          buildingList: {
            type: Array
          },
          classroomNameList: {
            type: Array
          },
          schoolyear: {
            type: String
          },
          period: {
            type: String
          },
          currentBanjiName: {
            type: String
          }
        },
        name: 'upload',
        data() {
            return {
  
                //语文
                keshi1: '',
                buildingName1: '',
                selectTeacherName1: '',
                classroomName1: '',


                currentKeshi1: '',
                currentBuildingName1: '',
                currentSelectTeacherName1: '',
                currentClassroomName1: '',

                savecurrentKeshi1: '',
                savecurrentBuildingName1: '',
                savecurrentSelectTeacherName1: '',
                savecurrentClassroomName1: '',

                //数学
                
                keshi2: '',
                buildingName2: '',
                selectTeacherName2: '',
                classroomName2: '',

                currentKeshi2: '',
                currentBuildingName2: '',
                currentSelectTeacherName2: '',
                currentClassroomName2: '',

                savecurrentKeshi2: '',
                savecurrentBuildingName2: '',
                savecurrentSelectTeacherName2: '',
                savecurrentClassroomName2: '',

                //英语
                
                keshi3: '',
                buildingName3: '',
                selectTeacherName3: '',
                classroomName3: '',

                currentKeshi3: '',
                currentBuildingName3: '',
                currentSelectTeacherName3: '',
                currentClassroomName3: '',

                savecurrentKeshi3: '',
                savecurrentBuildingName3: '',
                savecurrentSelectTeacherName3: '',
                savecurrentClassroomName3: '',

                //物理
                
                keshi4: '',
                buildingName4: '',
                selectTeacherName4: '',
                classroomName4: '',

                currentKeshi4: '',
                currentBuildingName4: '',
                currentSelectTeacherName4: '',
                currentClassroomName4: '',

                savecurrentKeshi4: '',
                savecurrentBuildingName4: '',
                savecurrentSelectTeacherName4: '',
                savecurrentClassroomName4: '',

                //化学
                
                keshi5: '',
                buildingName5: '',
                selectTeacherName5: '',
                classroomName5: '',

                currentKeshi5: '',
                currentBuildingName5: '',
                currentSelectTeacherName5: '',
                currentClassroomName5: '',

                savecurrentKeshi5: '',
                savecurrentBuildingName5: '',
                savecurrentSelectTeacherName5: '',
                savecurrentClassroomName5: '',

                //生物
               

                keshi6: '',
                buildingName6: '',
                selectTeacherName6: '',
                classroomName6: '',

                currentKeshi6: '',
                currentBuildingName6: '',
                currentSelectTeacherName6: '',
                currentClassroomName6: '',

                savecurrentKeshi6: '',
                savecurrentBuildingName6: '',
                savecurrentSelectTeacherName6: '',
                savecurrentClassroomName6: '',

                //政治
               
                keshi7: '',
                buildingName7: '',
                selectTeacherName7: '',
                classroomName7: '',

                currentKeshi7: '',
                currentBuildingName7: '',
                currentSelectTeacherName7: '',
                currentClassroomName7: '',

                savecurrentKeshi7: '',
                savecurrentBuildingName7: '',
                savecurrentSelectTeacherName7: '',
                savecurrentClassroomName7: '',

                //历史

                keshi8: '',
                buildingName8: '',
                selectTeacherName8: '',
                classroomName8: '',

                currentKeshi8: '',
                currentBuildingName8: '',
                currentSelectTeacherName8: '',
                currentClassroomName8: '',

                savecurrentKeshi8: '',
                savecurrentBuildingName8: '',
                savecurrentSelectTeacherName8: '',
                savecurrentClassroomName8: '',

                //地理
          
                keshi9: '',
                buildingName9: '',
                selectTeacherName9: '',
                classroomName9: '',

                currentKeshi9: '',
                currentBuildingName9: '',
                currentSelectTeacherName9: '',
                currentClassroomName9: '',

                savecurrentKeshi9: '',
                savecurrentBuildingName9: '',
                savecurrentSelectTeacherName9: '',
                savecurrentClassroomName9: '',
            }
        },
        methods: {


            getBanjiName(value) {
                this.currentBanjiName = value;
            },
            //语文
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

            //数学
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

            //英语
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

            //物理
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

            //化学
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

            //生物
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

            //政治
            getKeshi7(value) {
                this.currentKeshi7 = value;
                this.savecurrentKeshi7 = value;
            },
            getBuildingName7(value) {
                this.currentBuildingName7 = value;
                this.savecurrentBuildingName7 = value;
            },
            getTeacherName7(value) {
                this.currentSelectTeacherName7= value;
                this.savecurrentSelectTeacherName7= value;
            },
            getClassroomName7(value) {
                this.currentClassroomName7 = value;
                this.savecurrentClassroomName7 = value;
            },

            //历史
            getKeshi8(value) {
                this.currentKeshi8 = value;
                this.savecurrentKeshi8 = value;
            },
            getBuildingName8(value) {
                this.currentBuildingName8 = value;
                this.savecurrentBuildingName8 = value;
            },
            getTeacherName8(value) {
                this.currentSelectTeacherName8 = value;
                this.savecurrentSelectTeacherName8 = value;
            },
            getClassroomName8(value) {
                this.currentClassroomName8 = value;
                this.savecurrentClassroomName8 = value;
            },

            //地理
            getKeshi9(value) {
                this.currentKeshi9 = value;
                this.savecurrentKeshi9 = value;
            },
            getBuildingName9(value) {
                this.currentBuildingName9 = value;
                this.savecurrentBuildingName9 = value;
            },
            getTeacherName9(value) {
                this.currentSelectTeacherName9 = value;
                this.savecurrentSelectTeacherName9 = value;
            },
            getClassroomName9(value) {
                this.currentClassroomName9 = value;
                this.savecurrentClassroomName9 = value;
            },

            //导入
            importPlan1() {
                //alert(this.$refs.banjiName.value);
                
                var url = "http://58.119.112.12:11030/rest/insert_teacher_plan";
                if(this.currentKeshi1!= "" && this.currentSelectTeacherName1 != "" && this.currentBuildingName1 != "" && this.currentClassroomName1 != "") {
                    this.$axios.post(url, this.$qs.stringify({
                        group: this.schoolyear,
                        level: this.period,
                        classname: this.currentBanjiName,
                        subjectname: '语文',
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
                        classname: this.currentBanjiName,
                        subjectname: '数学',
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
                        classname: this.currentBanjiName,
                        subjectname: '英语',
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
                        classname: this.currentBanjiName,
                        subjectname: '物理',
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
                        classname: this.currentBanjiName,
                        subjectname: '化学',
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
                        classname: this.currentBanjiName,
                        subjectname: '生物',
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
                    })
                    .catch((err) => {
                        this.$message.success("提交失败");
                    });
                }else {
                    this.$message.success("请选择完全");
                }
            },
            importPlan7() {
                var url = "http://58.119.112.12:11030/rest/insert_teacher_plan";
                if(this.currentKeshi7!= "" && this.currentSelectTeacherName7 != "" && this.currentBuildingName7 != "" && this.currentClassroomName7 != "") {
                    this.$axios.post(url, this.$qs.stringify({
                        group: this.schoolyear,
                        level: this.period,
                        classname: this.currentBanjiName,
                        subjectname: '政治',
                        oneweektime: this.currentKeshi7,
                        teachername: this.currentSelectTeacherName7,
                        building: this.currentBuildingName7,
                        classroomname: this.currentClassroomName7
                    })).then((res) => {
                        this.$message.success(res.data.errmsg);
                        //this.value3 = this.currentRightList;
                        this.savecurrentKeshi7 = this.currentKeshi7;
                        this.savecurrentSelectTeacherName7 = this.currentSelectTeacherName7;
                        this.savecurrentBuildingName7 = this.currentBuildingName7;
                        this.savecurrentClassroomName7 = this.currentClassroomName7;
                    })
                    .catch((err) => {
                        this.$message.success("提交失败");
                    });
                }else {
                    this.$message.success("请选择完全");
                }
            },
            importPlan8() {
                var url = "http://58.119.112.12:11030/rest/insert_teacher_plan";
                if(this.currentKeshi8!= "" && this.currentSelectTeacherName8 != "" && this.currentBuildingName8 != "" && this.currentClassroomName8 != "") {
                    this.$axios.post(url, this.$qs.stringify({
                        group: this.schoolyear,
                        level: this.period,
                        classname: this.currentBanjiName,
                        subjectname: '历史',
                        oneweektime: this.currentKeshi8,
                        teachername: this.currentSelectTeacherName8,
                        building: this.currentBuildingName8,
                        classroomname: this.currentClassroomName8
                    })).then((res) => {
                        this.$message.success(res.data.errmsg);
                        //this.value3 = this.currentRightList;
                        this.savecurrentKeshi8 = this.currentKeshi8;
                        this.savecurrentSelectTeacherName8 = this.currentSelectTeacherName8;
                        this.savecurrentBuildingName8 = this.currentBuildingName8;
                        this.savecurrentClassroomName8 = this.currentClassroomName8;
                    })
                    .catch((err) => {
                        this.$message.success("提交失败");
                    });
                }else {
                    this.$message.success("请选择完全");
                }
            },
            importPlan9() {
                var url = "http://58.119.112.12:11030/rest/insert_teacher_plan";
                if(this.currentKeshi9!= "" && this.currentSelectTeacherName9 != "" && this.currentBuildingName9 != "" && this.currentClassroomName9 != "") {
                    this.$axios.post(url, this.$qs.stringify({
                        group: this.schoolyear,
                        level: this.period,
                        classname: this.currentBanjiName,
                        subjectname: '地理',
                        oneweektime: this.currentKeshi9,
                        teachername: this.currentSelectTeacherName9,
                        building: this.currentBuildingName9,
                        classroomname: this.currentClassroomName9
                    })).then((res) => {
                        this.$message.success(res.data.errmsg);
                        //this.value3 = this.currentRightList;
                        this.savecurrentKeshi9 = this.currentKeshi9;
                        this.savecurrentSelectTeacherName9 = this.currentSelectTeacherName9;
                        this.savecurrentBuildingName9 = this.currentBuildingName9;
                        this.savecurrentClassroomName9 = this.currentClassroomName9;
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
           //alert(this.currentBanjiName);
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