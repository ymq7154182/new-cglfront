<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>文件上传</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="container">
            <div>
                <input style="margin-bottom: 20px;" type="file" @change="importExcel($event.target)" />
            </div>
            <div class="ss_header">
                <template>
                    <el-select v-model="campusName" clearable placeholder="请选择校区"  @change="getCampusName(campusName)">
                        <el-option
                          v-for="item in campusList"
                          :key="item.campusid"
                          :label="item.campusname"
                          :value="item.campusname">
                        </el-option>
                    </el-select>
                    <!-- <el-button type="primary" icon="el-icon-search" @click="searchCampus()">搜索</el-button> -->

                    <el-select v-model="schoolyearName" placeholder="请选择年级" @change="getSchoolyearName(schoolyearName)" @focus="getschoolyearNameLists()">
                        <el-option
                          v-for="item in schoolyearList"
                          :key="item.gradeid"
                          :label="item.gradename"
                          :value="item.gradename">
                        </el-option>
                    </el-select>
                    <!-- <el-button type="primary" icon="el-icon-search" @click="searchSchoolyearName()">搜索</el-button> -->
                </template>

                <template>

                    <el-select v-model="periodName" placeholder="请选择学段" @change="getPeriodName(periodName)">
                        <el-option key="1" label="高中部" value="高中部"></el-option>
                        <el-option key="2" label="初中部" value="初中部"></el-option>
                    </el-select>
                    <!-- <el-button type="primary" icon="el-icon-search" @click="searchPeriod()">复制</el-button> -->

                    <el-select v-model="subjectgroupName" placeholder="请选择学科组" @change="getSubjectgroupName(subjectgroupName)">
                        <el-option key="1" label="语文组" value="语文组"></el-option>
                        <el-option key="2" label="数学组" value="数学组"></el-option>
                        <el-option key="3" label="英语组" value="英语组"></el-option>
                        <el-option key="4" label="物理组" value="物理组"></el-option>
                        <el-option key="5" label="化学组" value="化学组"></el-option>
                        <el-option key="6" label="生物组" value="生物组"></el-option>
                        <el-option key="7" label="历史组" value="历史组"></el-option>
                        <el-option key="8" label="地理组" value="地理组"></el-option>
                        <el-option key="9" label="政治组" value="政治组"></el-option>
                  </el-select>
                    <el-button type="primary" icon="el-icon-search" @click="searchInfo()">搜索</el-button>
                    <el-button type="primary" icon="el-icon-back" @click="refreshTable()">清除</el-button>

                    <!-- <el-autocomplete
                        v-model="state4"
                        :fetch-suggestions="querySearchAsync"
                        placeholder="请输入搜索的内容"
                        @select="handleSelect"
                    ></el-autocomplete>
                    <el-button type="primary" icon="el-icon-search" @click="searchInfo()">搜索</el-button> -->
                </template>
                <!-- <template>
                    <el-autocomplete
                        v-model="mohuSearch"
                        :fetch-suggestions="querySearchAsync"
                        placeholder="请输入内容"
                        @select="handleSelect"
                    ></el-autocomplete>
                </template> -->
            </div>
            <el-table
              :data="tableTbody"
              style="width: 100%"
              border
              class="table"              
            >
                <el-table-column
                  type="selection"
                  width="40">
                </el-table-column>
                <el-table-column
                    type="index"
                    width="40"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="teacherid"
                    label="教师ID"
                    width="auto"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="showname"
                    label="名字"
                    width="auto"
                    align="center">
                </el-table-column> 
                <el-table-column
                    prop="schoolyear"
                    label="年级"
                    width="auto"
                    align="center">
                </el-table-column> 
                <el-table-column
                    prop="period"
                    label="学段"
                    width="auto"
                    align="center">
                </el-table-column> 
                <el-table-column
                    prop="role"
                    label="角色"
                    width="auto"
                    align="center">
                </el-table-column> 
                <el-table-column
                    prop="campus"
                    label="校区"
                    width="auto"
                    align="center">
                </el-table-column> 
                <el-table-column
                    prop="subjectgroup"
                    label="课题组"
                    width="auto"
                    align="center">
                </el-table-column>  
                </el-table-column>
                <el-table-column label="操作" width="200"
                    align="center">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  </template>
                </el-table-column> 
            </el-table>
        </div>
        <el-dialog 
            :title="dialog.title" 
            :visible.sync="dialog.show"
            :close-on-click-modal='false'
            :close-on-press-escape='false'
            :modal-append-to-body="false">
            <div class="form">
                <el-form 
                    ref="form" 
                    :model="form"
                    :rules="form_rules"
                    :label-width="dialog.formLabelWidth" 
                    style="margin:10px;width:auto;">

                    <el-form-item prop='teacherid' label="教师ID:">
                        <el-input type="teacherid" v-model="form.teacherid"></el-input>
                    </el-form-item>

                    <el-form-item prop='showname'  label="名字:">
                        <el-input type="showname" v-model.number="form.showname"></el-input>
                    </el-form-item>

                    <el-form-item prop='schoolyear' label="年级:">
                        <el-input type="schoolyear" v-model.number="form.schoolyear"></el-input>
                    </el-form-item>

                    <el-form-item prop='period' label="学段:">
                        <el-input type="period" v-model.number="form.period"></el-input>
                    </el-form-item>

                    <el-form-item prop='role' label="角色:">
                        <el-input type="role" v-model.number="form.role"></el-input>
                    </el-form-item>

                    <el-form-item prop='campus' label="校区:">
                        <el-input type="campus" v-model.number="form.campus"></el-input>
                    </el-form-item>

                    <el-form-item prop='subjectgroup' label="课题组:">
                        <el-input type="subjectgroup" v-model.number="form.subjectgroup"></el-input>
                    </el-form-item>

                    <el-form-item  class="text_right">
                        <el-button @click="dialog.show = false">取 消</el-button>
                        <el-button type="primary" @click='onSubmit("form")'>提  交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import VueCropper  from 'vue-cropperjs';
    import XLSX from 'xlsx';
    export default {
        name: 'uploadTeacher',
        data() {
            return {
                wb: '',
                tableTbody: [],
                saveTable: [],
                showEdit:[],
                editid: '',
                //搜索框字段
                campusName: '',
                periodName: '',
                schoolyearName: '',
                subjectgroupName: '',
                currentCampusName: '',
                currentPeriodName: '',
                currentSchoolyearName: '',
                currentSubjectgroupName: '',
                campusList: [],
                periodList: [],
                schoolyearList: [],
                subjectgroupList: [],
                //详情弹框信息
                dialog: {
                    width:'400px',
                    show : false,
                    title: '修改信息',
                    formLabelWidth:'120px'
                },
                form:{
                    teacherid:'',
                    showname: '',
                    schoolyear: '',
                    period:'',
                    role:'',
                    campus: '',
                    subjectgroup: ''
                },
                form_rules: {
                    teacherid   : [
                        {required: true, message : '描述不能为空！',trigger : 'blur'}
                    ],
                    showname   : [
                        { required: true, message : '描述不能为空！',trigger: 'blur'},
                    ],
                    schoolyear   : [
                        {required: true, message : '描述不能为空！',trigger : 'blur'}
                    ],
                    period: [
                        {required: true, message : '描述不能为空！',trigger : 'blur'}
                    ],
                    role: [
                        {required: true, message : '描述不能为空！',trigger : 'blur'}
                    ],
                    campus: [
                        {required: true, message : '描述不能为空！',trigger : 'blur'}
                    ],
                    subjectgroup: [
                        {required: true, message : '描述不能为空！',trigger : 'blur'}
                    ] 
               }
            }
        },
        mounted: function() {
            var campus_url = 'http://58.119.112.12:11030/rest/get_campus_base';

            this.$axios.get(campus_url).then((res) => {
                    this.campusList = res.data.list;
                })
                .catch((err) => {
                    this.$message.success("提交失败");
                });

            // this.$axios.get(schoolyear_url).then((res) => {
            //         this.schoolyearList = res.data.list;
            //     })
            //     .catch((err) => {
            //         this.$message.success("提交失败");
            //     });

            
        },
        methods: {
            importExcel(obj) {
                if (!obj.files) {
                    return;
                }
                let file = obj.files[0],
                    types = file.name.split('.')[1],
                    fileType = ["xlsx", "xlc", "xlm", "xls", "xlt", "xlw", "csv"].some(item => item === types);
                let param = new FormData();
                param.append('filename', file);
                
                if (!fileType) {
                    alert("格式错误！请重新选择");
                    return;
                }

                
                this.file2Xce(file).then(tabJson => {

                    if (tabJson && tabJson.length > 0) {

                        var import_url = 'http://58.119.112.12:11030/rest/teacher_import';
                        this.$axios.post(import_url, param)
                        .then((res) => {
                            this.$message.success(res.data.errmsg);
                        });
                        this.tableTbody = tabJson;
                        this.saveTable = tabJson; 
                    }
                });
            },
            file2Xce(file) {
                return new Promise(function (resolve, reject) {
                    let reader = new FileReader();
                    reader.onload = function (e) {
                        let data = e.target.result;
                        this.wb = XLSX.read(data, {
                            type: 'binary'
                        });
                        resolve(XLSX.utils.sheet_to_json(this.wb.Sheets[this.wb.SheetNames[0]]));
                    };
                    reader.readAsBinaryString(file);
                });
            },
            handleEdit(index, row) {
                console.log(row);
                this.editid = index;
                this.form.teacherid = row.teacherid;
                this.form.showname = row.showname;
                this.form.schoolyear = row.schoolyear;
                this.form.period = row.period;
                this.form.role = row.role;
                this.form.campus = row.campus;
                this.form.subjectgroup = row.subjectgroup;

                this.dialog.title = '修改信息';
                this.dialog.show  = true;
            },
            handleDelete(index, row) {
                alert(row);
            },

            //搜索按钮
            searchInfo() {
                var url = `http://58.119.112.12:11030/rest/get_teacher?campus=${this.currentCampusName}&schoolyear=${this.currentSchoolyearName}&period=${this.currentPeriodName}&subjectgroup=${this.currentSubjectgroupName}&role=7`;
                this.$axios.get(url).then((res) => {
                    this.tableTbody = res.data.list;
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });
            },

            refreshTable() {
                this.campusName = "";
                this.periodName = "";
                this.schoolyearName = "";
                this.subjectgroupName = "";

                this.tableTbody = this.saveTable;
            },
            editMoneyIncomePay(data){
                axios({
                    type:'get',
                    path:'http://58.119.112.12:11030/rest/update_teacher',
                    data:data,
                    fn:data=>{
                        this.$message('编辑成功'),
                         
                        this.dialog.show = false;
                    },
                    errFn:()=>{
                        this.$message.error('编辑失败请重试')
                    }
                })
            },
            //表单提交
            onSubmit(form){
                this.$refs[form].validate((valid) => {
                    if (valid) {//表单数据验证完成之后，提交数据;
                        let formData = this[form];
                        let data = {};
                    
                        for(var i in formData){
                            data.id = this.editid;
                            data.teacherid = formData['teacherid']
                            data.showname = formData['showname']
                            data.schoolyear = formData['schoolyear']
                            data.period = formData['period']
                            data.role = formData['role']
                            data.campus = formData['campus']
                            data.subjectgroup = formData['subjectgroup']
                        }
                        console.log(data);
                        if(this.editid != ""){
                            
                            let url = `http://58.119.112.12:11030/rest/update_teacher?teacherid=${data.teacherid}&showname=${data.showname}&campus=${data.campus}&schoolyear=${data.schoolyear}&period=${data.period}&subjectgroup=${data.subjectgroup}&role=${data.role}`;
                            this.$axios.post(url).then((res) => {
                                this.$message.success(res.data.errmsg);

                                this.dialog.show = false;

                            })
                            .catch((err) => {
                                this.$message.success("提交失败");
                            });
                        }else{
                            this.addMoneyIncomePay(data)
                        }
                       
                    }
                })
            },

            //获取搜索框的值
            getCampusName(value) {
                this.currentCampusName = value;
            },
            getSchoolyearName(value) {
                this.currentSchoolyearName = value;
            },
            getPeriodName(value) {
                this.currentPeriodName = value;
            },
            getSubjectgroupName(value) {
                this.currentSubjectgroupName = value;
            },
            getschoolyearNameLists() {
                if(!this.currentCampusName) {
                    this.$message.success("请选择校区进行查询");
                    return;
                }

                var schoolyear_url = `http://58.119.112.12:11030/rest/get_grade_base?campusname=${this.currentCampusName}`;

                this.$axios.get(schoolyear_url).then((res) => {
                        this.schoolyearList = res.data.list;
                    })
                    .catch((err) => {
                        this.$message.success("提交失败");
                    });
                }
        },
        components: {
            VueCropper
        }
    }
</script>

<style scoped>
    .ss_header {
        margin-bottom: 20px;
    }
</style>