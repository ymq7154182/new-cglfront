<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-cascades"></i> 学生选课</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <!-- Form -->
                <el-button type="primary" @click="dialogAcademicFormVisible = true">学年录入</el-button>
                <el-button type="primary" @click="dialogTermFormVisible = true">学期录入</el-button>

                <!-- 学年录入-->
                <el-dialog title="学年录入" :visible.sync="dialogAcademicFormVisible">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="学届" prop="academicbaseconfig">
                            <el-input v-model="ruleForm.academicbaseconfig"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button @submit.prevent="submit" type="primary" @click="submitForm('ruleForm')">提交</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>

                <!-- 学期录入-->
                <el-dialog title="学期录入" :visible.sync="dialogTermFormVisible">
                    <el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="学期" prop="termbaseconfig">
                            <el-input v-model="ruleForm2.termbaseconfig"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button @submit.prevent="submit" type="primary" @click="submitForm2('ruleForm2')">提交</el-button>
                            <el-button @click="resetForm('ruleForm2')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </div>
        </div>     
    </div>
</template>

<script>
  import qs from 'qs';
  export default {
    data() {
      return {
        dialogAcademicFormVisible: false,
        dialogTermFormVisible: false,
        ruleForm: {
          academicbaseconfig: ''
        },
        ruleForm2: {
          termbaseconfig: ''
        },
        rules: {
          academicbaseconfig: [
            { required: true, message: '请填学届信息', trigger: 'blur' }
          ],
          termbaseconfig: [
            { required: true, message: '请填学期信息', trigger: 'blur' }
          ]
        }
      };
    },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                var academicbaseconfig = this.ruleForm.academicbaseconfig;
                var url = 'http://58.119.112.12:11030/rest/insert_academic_year';
                this.$axios.post(url,this.$qs.stringify({
                    teacherid: '08018867',
                    academicbaseconfig: academicbaseconfig
                })).then((res) => {
                    this.$message.success(res.data.errmsg);
                    this.$refs[formName].resetFields();
                })
                .catch((err) => {
                    this.$message.success("提交失败");
                });
            } else {
                console.log('error submit!!');
                return false;
            }
        });
      },
      submitForm2(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                var termbaseconfig = this.ruleForm2.termbaseconfig;
                var url = 'http://58.119.112.12:11030/rest/insert_term';
                this.$axios.post(url, this.$qs.stringify({
                    teacherid: '08018867',
                    termbaseconfig: termbaseconfig
                })).then((res) => {
                    this.$message.success(res.data.errmsg);
                    this.$refs[formName].resetFields();
                })
                .catch((err) => {
                    this.$message.success("提交失败");
                });
            } else {
                console.log('error submit!!');
                return false;
            }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
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
</style>
