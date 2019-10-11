<template>
	<div class="form-box">
		<el-form ref="basicInfoForm" :model="basicInfoForm" :rules="rules" label-width="80px" size="large">
			<el-form-item label="排课名称" prop="class_scheduling_name">
				
				<el-input 
                    v-model="basicInfoForm.class_scheduling_name" 
                    size="medium" 
                    @change="getClassName(basicInfoForm.class_scheduling_name)"
                    style="width: 300px; "
                    clearable
                    shadow="never"
                    @blur="blurButton"
                    placeholder="请输入排课名称"></el-input>
			    
			</el-form-item>
			<el-form-item label="所属校区" prop="campus">
				<el-select 
                    v-model="basicInfoForm.campus"
                   placeholder="请选择"
                   @change="getGrade(basicInfoForm.campus)"
                   style="width: 300px;">
                <el-option
                    v-for="item in campus"
                    :key="item.campusname"
                    :label="item.campusname"
                    :value="item.campusname">
                </el-option>
            </el-select>
			    
			</el-form-item>
			<el-form-item label="所属学年" prop="academicyear">
			    <el-select id="schoolYearClass" v-model="basicInfoForm.academicyear" size="small" placeholder="请选择学年" @change="getAcademicYear(basicInfoForm.academicyear)"
                style="width: 300px;">
	                <el-option
	                  v-for="item in academicyears"
	                  :key="item.id"
	                  :label="item.academicyear"
	                  :value="item.academicyear">
	                </el-option>
	              </el-select>
			</el-form-item>
			<el-form-item label="所属学期" prop="term">
			 	<el-select v-model="basicInfoForm.term" placeholder="请选择学期" style="width: 300px;" @change="getTerm(basicInfoForm.term)" size="small">
	                <el-option
	                  v-for="item in terms"
	                  :key="item.id"
	                  :label="item.term"
	                  :value="item.term">
	                </el-option>
	              </el-select>
			</el-form-item>
			<el-form-item label="所属学届" prop="grade">
				<el-select v-model="basicInfoForm.grade" 
                style="width: 300px;" placeholder="请选择学届" @change="getGrade(basicInfoForm.grade)" size="small">
	                <el-option
	                  v-for="item in grades"
	                  :key="item.id"
	                  :label="item.gradename"
	                  :value="item.gradename">
	                </el-option>
	              </el-select>
			</el-form-item>
			<el-form-item label="学习阶段" prop="period">
				<el-select v-model="basicInfoForm.period" style="width: 300px;" placeholder="请选择学段" @change="getPeriodName(basicInfoForm.period)" size="small">
	                <el-option key="1" label="高中部" value="高中部"></el-option>
	                <el-option key="2" label="初中部" value="初中部"></el-option>
	            </el-select>
			</el-form-item>
		</el-form>
		<el-button type="primary" icon="el-icon-save" @click="saveInfo()" style="margin-left: 15%">保存并下一步</el-button>
	</div>
	 
</template>

<script>
import Bus from "@/components/common/bus.js";
    export default {
        data() {
            return {
                cur_page: 1,
                basicInfoForm: {
                    class_scheduling_name: '',
                    campus: '',
                    academicyear: '',
                    term: '',
                    period: '',
                    grade: ''
                },
                 rules: {
                    class_scheduling_name: [
                        {required: true, message: '请输入排课名称', trigger: 'blur'}
                    ],
                    campus: [
                        {required: true, message: '请选择所属校区', trigger: 'change'}
                    ],
                    academicyear: [
                        {required: true, message: '请选择所属学年', trigger: 'change'}
                    ],
                    term: [
                        {required: true, message: '请选择所属学期', trigger: 'change'}
                    ],
                    grade: [
                        {required: true, message: '请选择学届', trigger: 'change'}
                    ],
                    period: [
                        {required: true, message: '请选择学习阶段', trigger: 'change'}
                    ]
                },
                
                currentClass_scheduling_name: '',
                currentCampus: '',
                currentAcademicyear: '',
                currentTerm: '',
                currentPeriod: '',
                currentGrade: '' ,

                academicyears: [],  
                terms: [], 
                grades: [],
                campus: [],
            }
        },
        created() {
           
        },
        mounted: function() {
        	
            
            var teacher_url = 'http://58.119.112.12:11030/rest/teacher_get_academicyearAndterm?teacherid=90807758';


            var grade_url = 'http://58.119.112.12:11030/rest/get_grade_base?campusname=默认校区';
            this.$axios.get(teacher_url).then((res) => {
                    this.academicyears = res.data.academicyears;
                    this.terms = res.data.terms;
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                }); 

            this.$axios.get(grade_url).then((res) => {
                    this.grades = res.data.list;
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                }); 

            var url='http://58.119.112.12:11030/rest/get_campus_base'
                this.$axios.get(url)
                    .then((res) => {
                        // console.log(res)
                        this.campus=res.data.list


                    })  

            
        },
        methods: {
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
            },
            
            //获取第一行四个输入框的值
            getClassName(value) {
            	this.currentClass_scheduling_name = value;
            },
            getCampus(value) {
            	this.currentCampus = value;
            },
            getAcademicYear(value) {
            	this.currentAcademicyear = value;
            },
            getTerm(value) {
            	this.currentTerm = value;
            },
            getGrade(value) {
            	this.currentGrade = value;
            },
            saveInfo() {
                this.$refs.basicInfoForm.validate(valid => {
                    if(!valid) return;
                    
                var url = 'http://58.119.112.12:11030/arrange/add_arrange_base';
                    
                    this.$axios.post(url,this.$qs.stringify(
                        this.basicInfoForm
                    )).then((res) => {
                        this.$message.success(res.data.errmsg);
                        this.$emit('showClassArea');
                Bus.$emit("paikeName", this.currentClass_scheduling_name);
                    })
                    .catch((err) => {
                        this.$message.success("提交失败");
                    });
                })
            	
            }
        }
    }

</script>

<style scoped>
    .form-box{
        margin-top: 5%;
        margin-left: 25%;
    }
</style>
