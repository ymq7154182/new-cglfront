<template>
<div class="form-box">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" size="large">
        <el-form-item label="排课名称" prop="class_scheduling_name">
            <el-input v-model="form.class_scheduling_name"
                      style="width: 300px; "
                      clearable
                      shadow="never"
                      @blur="blurButton"
                      placeholder="请输入排课名称">

            </el-input>
        </el-form-item>
        <el-form-item label="所属校区" prop="campus">
            <!--<el-input v-model="form.campus"-->
                      <!--style="width: 300px; "-->
                      <!--clearable-->
                      <!--placeholder="默认校区">-->

            <!--</el-input>-->
            <el-select v-model="form.campus"
                       placeholder="请选择"
                       @change="getGrade"
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
            <el-select v-model="form.academicyear"
                       placeholder="请选择"
                       style="width: 300px;">
                <el-option
                    v-for="item in Year"
                    :key="item.academic_year"
                    :label="item.academic_year"
                    :value="item.academic_year">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="所属学期" prop="term">
            <el-select v-model="form.term"
                       placeholder="请选择"
                       style="width: 300px;">
                <el-option
                    v-for="item in term"
                    :key="item.term"
                    :label="item.term"
                    :value="item.term">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="学届" prop="grade">
            <el-select v-model="form.grade"
                       placeholder="请选择"
                       style="width: 300px;">
                <el-option
                    v-for="item in grade"
                    :key="item.gradename"
                    :label="item.gradename"
                    :value="item.gradename">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="学习阶段" prop="period">
            <el-select v-model="form.period"
                       placeholder="请选择"
                       style="width: 300px;">
                <el-option
                    v-for="item in option4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" size="medium" @click="SaveSubmit('form')" style="margin-left: 15%">保存并下一步</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
    import Bus from "@/components/common/bus.js";
    export default {
        name: "BaseInformation",
        data() {
            return {
                form: {
                    class_scheduling_name: '',//排课名称
                    campus: '默认校区',//校区
                    academicyear: '',//学年
                    term: '',//学期
                    period: '',//学习阶段
                    grade: '',//学届
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
                Year: [],
                term: [],
                grade: [],
                option4: [{
                    value: '高中',
                    label: '高中'
                }, {
                    value: '初中',
                    label: '初中'
                }],
                campus: [],
                // value1: '',
                // value2: '',
            }
        },
        mounted() {

          this.getcampus();
          this.getacademicYear();
          this.getterm();

          this.getGrade();
        },
        methods: {
            SaveSubmit(formName) {
               
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var url = 'http://58.119.112.12:11030/arrange/add_arrange_base';
                        this.$axios.post(url, this.$qs.stringify({
                            class_scheduling_name: this.form.class_scheduling_name,
                            campus: this.form.campus,
                            academicyear: this.form.academicyear,
                            term: this.form.term,
                            period: this.form.period,
                            grade: this.form.grade
                        })).then((res) => {
                            this.$emit('showClassArea');
                            Bus.$emit("paikeName", this.form.class_scheduling_name);
                            localStorage.setItem('class_scheduling_name',this.form.class_scheduling_name);
                            localStorage.setItem('campus',this.form.campus);
                            localStorage.setItem('academicyear',this.form.academicyear);
                            localStorage.setItem('term',this.form.term);
                            localStorage.setItem('period',this.form.period);
                            localStorage.setItem('grade',this.form.grade);
                            this.$message.success(res.data.errmsg)
                            //this.$router.push('/CoursesArrangingStu')

                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }

                });
            },
            /**输入框失去焦点时触发 通@blur 用来验证课程名称是唯一的*/
            // blurButton() {
            //     // console.log(this.form.class_scheduling_name)
            //     var url = 'http://58.119.112.12:11030/arrange/get_arrange_base_by_name';
            //     this.$axios.post(url, this.$qs.stringify({
            //         class_scheduling_name: this.form.class_scheduling_name
            //     })).then((res) => {
            //         console.log(res)
            //         this.$message.error(res.data.errmsg)
            //     })
            // }
                /**获取学年列表*/
            getacademicYear() {
                var url = 'http://58.119.112.12:11030/rest/get_academicyear';
                this.$axios.get(url)
                    .then((res) => {
                        // console.log(res)
                        this.Year = res.data.academicYear
                    })
            },
            /**获取校区列表*/
            getcampus() {
                var url='http://58.119.112.12:11030/rest/get_campus_base'
                this.$axios.get(url)
                    .then((res) => {
                        // console.log(res)
                        this.campus=res.data.list


                    })
            },
            /**获取学期列表*/
            getterm(){
                var url = 'http://58.119.112.12:11030/rest/get_term';
                this.$axios.get(url)
                    .then((res) => {
                        // console.log(res)
                        this.term=res.data.term

                    })
            },
            /**获取学届列表*/
            getGrade() {
                var url = 'http://58.119.112.12:11030/rest/get_grade_base';
                this.$axios.post(url,this.$qs.stringify({
                    campusname: this.form.campus
                }))
                    .then((res) => {
                        // console.log(res)
                        this.grade=res.data.list

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
    /*.el-input{*/
        /*box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)*/
    /*}*/
</style>
