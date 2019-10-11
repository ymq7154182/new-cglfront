<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-cascades"></i> 基础表格</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <template>
                  <el-select id="schoolYearClass" v-model="schoolyear" size="small" placeholder="请选择学年" @change="getSchoolYear(schoolyear)">
                    <el-option
                      v-for="item in academicyears"
                      :key="item.id"
                      :label="item.academicyear"
                      :value="item.academicyear">
                    </el-option>
                  </el-select>

                  <el-select v-model="period" placeholder="请选择学期" @change="getPeriod(period)">
                    <el-option
                      v-for="item in terms"
                      :key="item.id"
                      :label="item.term"
                      :value="item.term">
                    </el-option>
                  </el-select>
                </template>
                <template>
                  <!-- <el-select v-model="className" placeholder="请选择班级" @change="getClass(className)">
                    <el-option
                      v-for="item in grades"
                      :key="item.classid"
                      :label="item.classnum"
                      :value="item.classnum">
                    </el-option>
                    <el-option key="0" label="全部班级" value="全部班级"></el-option>
                  </el-select>
                  <el-button type="primary" icon="el-icon-search" @click="searchClass()">按班级搜索</el-button> -->
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
                  <!-- <el-button type="primary" icon="el-icon-search" @click="searchSubject()">按学科搜索</el-button> -->
                  <el-select v-model="multipleScore" multiple placeholder="请选择第几次考试" @change="getScores(multipleScore)">
                        <el-option
                          v-for="item in scores"
                          :key="item.id"
                          :label="item.exam_name"
                          :value="item.exam_name">
                        </el-option>
                    </el-select>
                    <el-input class="fenceng" size="small" v-model="weight" placeholder="请输入考试权重用逗号分隔开" @change="getWeight(weight)"></el-input>
                    <el-input class="fenceng" type="Number" size="small" v-model="inputNumber" placeholder="请输入分班的个数" @change="getInputNumber(inputNumber)"></el-input>
                  <el-button type="primary" @click="divideClass()">分班</el-button>
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
                      v-loading="loading"
                      element-loading-text="正在分班中,请稍后..."
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="rgba(0, 0, 0, 0.8)"
                      :data="classStudentsInfo.slice((currentPage-1)*pageSize, currentPage*pageSize)"
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
                    <el-pagination 
                    v-if="showPagination"
                    background 
                    @current-change="handleCurrentChange" 
                    layout="prev, pager, next" 
                    :total="total"
                >
                </el-pagination>
                </template>
            </div>
            
            
            <div class="pagination">
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'basetable',
        data() {
            return { 
                total: 1000,
                pageSize: 10,
                currentPage: 1,
                showPagination: false,

                schoolyear: '',
                currentSchoolYear: '',
                period: '',
                currentPeriod: '',
                className: '',
                currentClassName: '',
                subject: '',
                currentSubject: '',
                multipleScore: [],
                scores: [],
                currentScores: [],               // 第二列第一个，选择那几次考试
                inputNumber: '',                 // 输入分班的数目
                currentInputNumber: '',
                weight: '',
                currentWeight: '',
                academicyears: [],               // 第一列第一个，学年，例如2018-2019学年
                terms: [],                       // 第一列第二个，学期，例如第一学期
                students: [],                    // 按科目搜索学生名单结果
                classStudentsInfo: [],           // 按班级查询学生选课信息结果
                showStudentsName: false,         // 是否展示按科目搜索结果
                showClassStudentsName: false,      // 是否展示按班级搜索结果
                loading: true
            }
        },
        created() {
            this.getData();
        },
        mounted: function() {
            var url = 'http://58.119.112.12:11030/rest/getExam';

            var teacher_url = 'http://58.119.112.12:11030/rest/teacher_get_academicyearAndterm?teacherid=90807758';

            this.$axios.get(teacher_url).then((res) => {
                    this.academicyears = res.data.academicyears;
                    this.terms = res.data.terms;
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });    

            this.$axios.get(url).then((res) => {
                    this.scores = res.data.exams;
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });    
        },
        methods: {
            // 分页导航
            handleCurrentChange(val) {
                this.currentPage = val;
            },
            // 获取 easy-mock 的模拟数据
            getData() {
                // 开发环境使用 easy-mock 数据，正式环境使用 json 文件
                if (process.env.NODE_ENV === 'development') {
                    this.url = '/ms/table/list';
                };
                this.$axios.post(this.url, {
                    page: this.cur_page
                }).then((res) => {
                    this.tableData = res.data.list;
                })
            },
            //获取第一行四个输入框的值
            getSchoolYear(value) {
                this.currentSchoolYear = value;
            },
            getPeriod(value) {
                this.currentPeriod = value;
            },
            getClass(value) {
                this.currentClassName = value;
            },
            getSubject(value) {
                this.currentSubject = value;
            },
            getScores(value) {
                this.currentScores = value;
            },
            getInputNumber(value) {
                this.currentInputNumber = value;
            },
            getWeight(value) {
                this.currentWeight = value;
            },
            divideClass() {
                if(!this.currentSchoolYear || !this.currentPeriod || !this.currentSubject) {
                    this.$message.success("请选择学年，学期以及学科进行查询");
                    return;
                }else {
                    
                    this.showClassStudentsName = true;
                    this.showStudentsName = false;
                    var exams = [];

                    var scoresArray = this.currentScores.toString().split(',');
                    var weightArray = this.currentWeight.split(',');
                   
                    for(var i = 0; i < scoresArray.length; i++) {
                        var obj = {};
                        obj['exam_name'] = scoresArray[i];
                        obj['weight'] = weightArray[i];
                        exams.push(obj);
                    }
                    console.log(exams);
                    var teacherID = localStorage.getItem('ms_username');
                    var temObj = {};
                    temObj['exams'] = exams;


                    var url = 'http://58.119.112.12:11030/rest/divideClass';
                    
                    this.$axios.post(url,this.$qs.stringify({
                        schoolyear: this.currentSchoolYear,
                        term: this.currentPeriod,
                        subject: this.currentSubject,
                        data: JSON.stringify(temObj),
                        classnum: this.currentInputNumber,
                        teacherid: teacherID
                    })).then((res) => {
                        this.$message.success(res.data.errmsg);
                        
                        this.classStudentsInfo = res.data.list;
                        this.total = res.data.people_counts;
                        this.showPagination = true;
                        this.loading = false;
                    })
                    .catch((err) => {
                        this.$message.success("提交失败");
                    });
                    this.loading = true;
                } 
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
    .handle-box .fenceng {
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
