<template>
    <div class="table">
        <div class="container">
            <div class="handle-box">
                <template>
                  <el-select v-model="className" placeholder="请选择班级" @change="getClass(className)">
                    <el-option
                      v-for="item in grades"
                      :key="item.classid"
                      :label="item.classnum"
                      :value="item.classnum">
                    </el-option>
                    <el-option key="0" label="全部班级" value="全部班级"></el-option>
                  </el-select>
                  <el-button type="primary" icon="el-icon-search" @click="searchClass()">按班级搜索</el-button>
                  <el-select v-model="subject" placeholder="请选择学科" @change="getSubject(subject)">
                    <el-option key="1" label="物理-选考" value="物理-选考"></el-option>
                    <el-option key="2" label="物理-学考" value="物理-学考"></el-option>
                    <el-option key="3" label="化学-选考" value="化学-选考"></el-option>
                    <el-option key="4" label="化学-学考" value="化学-学考"></el-option>
                    <el-option key="5" label="生物-选考" value="生物-选考"></el-option>
                    <el-option key="6" label="生物-学考" value="生物-学考"></el-option>
                    <el-option key="7" label="历史-选考" value="历史-选考"></el-option>
                    <el-option key="8" label="历史-学考" value="历史-学考"></el-option>
                    <el-option key="9" label="地理-选考" value="地理-选考"></el-option>
                    <el-option key="10" label="地理-学考" value="地理-学考"></el-option>
                    <el-option key="11" label="政治-选考" value="政治-选考"></el-option>
                    <el-option key="12" label="政治-学考" value="政治-学考"></el-option>
                  </el-select>
                  <el-button type="primary" icon="el-icon-search" @click="searchSubject()">按学科搜索</el-button>
                </template>
            </div>
            <div v-if="showStudentsName">
                <template>
                    <el-tag size="medium" type="success">{{this.currentSchoolYear}}{{this.currentPeriod}}选择{{this.currentSubject}}的学生名单如下：</el-tag>
                    <el-tag size="medium" type="danger">总人数有{{this.students.length}}人</el-tag>
                    <ul id="libiao">
                        <li v-for="student in students">
                            <el-tag>{{student.studentname}}-{{student.classname}}</el-tag>
                        </li>
                    </ul>
            </template>
            </div>
            <div v-if="showClassStudentsName">
                <template>
                    <el-table
                      :data="classStudentsInfo"
                      style="width: 100%"
                      border
                      class="table"                      
                      >
                        <el-table-column
                          type="index"
                          width="40"
                          align="center">
                        </el-table-column>
                        <el-table-column
                            prop="showname"
                            label="姓名"
                            width="75"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="studentid"
                            label="学生ID"
                            width="102"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            
                            label="物理-选考"
                            width="82"
                            align="center">
                            <template slot-scope="scope">
                                <el-tag v-if="!scope.row.wlxk_classlevel"  v-show="scope.row.wlxk === '1'">已选</el-tag>
                                <el-tag type="danger" v-if="scope.row.wlxk_classlevel" v-show="scope.row.wlxk_classlevel" >{{scope.row.wlxk_classlevel}}班</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="物理-学考"
                            width="82"
                            align="center">
                            <template slot-scope="scope">
                                <el-tag v-if="!scope.row.wl_xk_classlevel"  v-show="scope.row.wl_xk === '1'">已选</el-tag>
                                <el-tag type="danger" v-if="scope.row.wl_xk_classlevel" v-show="scope.row.wl_xk_classlevel" >{{scope.row.wl_xk_classlevel}}班</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="化学-选考"
                            width="82"
                            align="center">
                            <template slot-scope="scope">
                                <el-tag v-if="!scope.row.hxxk_classlevel"  v-show="scope.row.hxxk === '1'">已选</el-tag>
                                <el-tag type="danger" v-if="scope.row.hxxk_classlevel" v-show="scope.row.hxxk_classlevel" >{{scope.row.hxxk_classlevel}}班</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="化学-学考"
                            width="82"
                            align="center">
                            <template slot-scope="scope">
                                <el-tag v-if="scope.row.hx_xk === '1'">已选</el-tag>
                                <el-tag v-if="!scope.row.hx_xk_classlevel"  v-show="scope.row.hx_xk === '1'">已选</el-tag>
                                <el-tag type="danger" v-if="scope.row.hx_xk_classlevel" v-show="scope.row.hx_xk_classlevel" >{{scope.row.hx_xk_classlevel}}班</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="生物-选考"
                            width="82"
                            align="center">
                            <template slot-scope="scope">
                                <el-tag v-if="!scope.row.swxk_classlevel"  v-show="scope.row.swxk === '1'">已选</el-tag>
                                <el-tag type="danger" v-if="scope.row.swxk_classlevel" v-show="scope.row.swxk_classlevel" >{{scope.row.swxk_classlevel}}班</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="生物-学考"
                            width="82"
                            align="center">
                            <template slot-scope="scope">
                                <el-tag v-if="!scope.row.sw_xk_classlevel"  v-show="scope.row.sw_xk === '1'">已选</el-tag>
                                <el-tag type="danger" v-if="scope.row.sw_xk_classlevel" v-show="scope.row.sw_xk_classlevel" >{{scope.row.sw_xk_classlevel}}班</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="历史-选考"
                            width="82"
                            align="center">
                            <template slot-scope="scope">
                                <el-tag v-if="!scope.row.lsxk_classlevel"  v-show="scope.row.lsxk === '1'">已选</el-tag>
                                <el-tag type="danger" v-if="scope.row.lsxk_classlevel" v-show="scope.row.lsxk_classlevel" >{{scope.row.lsxk_classlevel}}班</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="历史-学考"
                            width="82"
                            align="center">
                            <template slot-scope="scope">
                                <el-tag v-if="!scope.row.ls_xk_classlevel"  v-show="scope.row.ls_xk === '1'">已选</el-tag>
                                <el-tag type="danger" v-if="scope.row.ls_xk_classlevel" v-show="scope.row.ls_xk_classlevel" >{{scope.row.ls_xk_classlevel}}班</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="地理-选考"
                            width="82"
                            align="center">
                            <template slot-scope="scope">
                                <el-tag v-if="!scope.row.dlxk_classlevel"  v-show="scope.row.dlxk === '1'">已选</el-tag>
                                <el-tag type="danger" v-if="scope.row.dlxk_classlevel" v-show="scope.row.dlxk_classlevel" >{{scope.row.dlxk_classlevel}}班</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="地理-学考"
                            width="82"
                            align="center">
                            <template slot-scope="scope">
                                <el-tag v-if="!scope.row.dl_xk_classlevel"  v-show="scope.row.dl_xk === '1'">已选</el-tag>
                                <el-tag type="danger" v-if="scope.row.dl_xk_classlevel" v-show="scope.row.dl_xk_classlevel" >{{scope.row.dl_xk_classlevel}}班</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="政治-选考"
                            width="82"
                            align="center">
                            <template slot-scope="scope">
                                <el-tag v-if="!scope.row.zzxk_classlevel"  v-show="scope.row.zzxk === '1'">已选</el-tag>
                                <el-tag type="danger" v-if="scope.row.zzxk_classlevel" v-show="scope.row.zzxk_classlevel" >{{scope.row.zzxk_classlevel}}班</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="政治-学考"
                            width="82"
                            align="center">
                            <template slot-scope="scope">
                                <el-tag v-if="!scope.row.zz_xk_classlevel"  v-show="scope.row.zz_xk === '1'">已选</el-tag>
                                <el-tag type="danger" v-if="scope.row.zz_xk_classlevel" v-show="scope.row.zz_xk_classlevel" >{{scope.row.zz_xk_classlevel}}班</el-tag>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </div>
            
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import Bus from "@/components/common/bus.js";
    export default {
        data() {
            return {
                cur_page: 1,
                form: {
                    name: '',
                    date: '',
                    address: ''
                },
                idx: -1,
                
                currentAcademicyear: '',
                currentGrade: '',
                currentCampus: '',
                currentPeriod: '',
                currentTerm: '',
                className: '',
                currentClassName: '',
                subject: '',
                currentSubject: '',

                grades: [],
                students: [],                    // 按科目搜索学生名单结果
                classStudentsInfo: [],           // 按班级查询学生选课信息结果
                showStudentsName: false,         // 是否展示按科目搜索结果
                showClassStudentsName: false,      // 是否展示按班级搜索结果
                currentPaikeName: ''
            }
        },
        created() {
            this.getData();
        },
        mounted: function() {
            Bus.$on("paikeName", (value) =>  {
               var paike_url = `http://58.119.112.12:11030/arrange/get_arrange_base?class_scheduling_name=${value}`;
               this.$axios.get(paike_url).then((res) => {
                    this.currentCampus = res.data.data.campus;
                    this.currentPeriod = res.data.data.period;
                    this.currentGrade = res.data.data.grade;
                    this.currentAcademicyear = res.data.data.academicyear;
                    this.currentTerm = res.data.data.term;
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                }); 
            });

            var teacherID = localStorage.getItem('ms_username');
            var class_url = `http://58.119.112.12:11030/rest/teacher_get_allclass?teacherid=${teacherID}`;

            this.$axios.get(class_url).then((res) => {
                    this.grades = res.data.classes;
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });     
            
              
        },
        methods: {
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
            },

            //获取第一行四个输入框的值

            getClass(value) {
                this.currentClassName = value;
            },
            getSubject(value) {
                this.currentSubject = value;
            },
            searchClass() {
                var teacherID = localStorage.getItem('ms_username');
                this.showStudentsName = false;
                this.showClassStudentsName = true;
                
                var url = `http://58.119.112.12:11030/rest/getStudentSelectByClass?academicyear=${this.currentAcademicyear}&term=${this.currentTerm}&teacherid=${teacherID}&classname=${this.currentClassName}`;

                this.$axios.get(url).then((res) => {
                    this.classStudentsInfo = res.data.students;

                })
                .catch((err) => {
                    this.$message.success("提交失败");
                });

            },
            searchSubject() {
                var teacherID = localStorage.getItem('ms_username');
                this.showStudentsName = true;
                this.showClassStudentsName = false;
                var url = `http://58.119.112.12:11030/rest/getStudentSelectByCourse?academicyear=${this.currentSchoolYear}&term=${this.currentPeriod}&teacherid=${teacherID}&classname=${this.currentSubject}`;
                this.$axios.get(url).then((res) => {
                     this.students = res.data.studentlist;
                })
                .catch((err) => {
                    this.$message.success("提交失败");
                });
            }
        }
    }

</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }
    .table{
        width: 100%;
        font-size: 14px;
    }
    .red{
        color: #ff0000;
    }
    /*.handle-box .el-select {
        display: inline-block;
        position: relative;
        width: 185px;
    }*/
    .splitClass {
        margin-bottom: 20px;
    }
    .splitClass .fenceng{
        width: 214px;
    }
    #libiao{
        list-style: none;    
    }
    #libiao li {
        display: inline-block;
        width:80px;
        height:20px;
        line-height: 20px;
        font-size:20px;
        font-family:PingFangSC-Medium;
        color:rgba(19,84,122,1);
        margin-top: 27px;
        margin-right: 10px;
    }
    #studentinfolibiao {
        list-style: none;
    }
    #studentinfolibiao li {
        display: inline-block;
        width:60px;
        height:20px;
        line-height: 20px;
        font-size:16px;
        font-family:PingFangSC-Medium;
        color:rgba(19,84,122,1);
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 5px;
    }
</style>
