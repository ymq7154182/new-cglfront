<template>
    <div >
        <el-row>
            <el-col :span="12">
                <el-form ref="form" :model="form" :rules="rules" label-width="120px" class="form" size="large">
                    <el-form-item label="菜品校区" prop="campus_id">
                        <el-select v-model="form.campus_id" placeholder="请选择" class="input1" >
                            <el-option
                                v-for="item in option1"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="菜品对象" prop="role">
                        <el-select v-model="form.role" placeholder="请选择" class="input1" >
                            <el-option
                                v-for="item in option2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="菜品名字" prop="dishname">
                        <el-input v-model="form.dishname" placeholder="请输入菜品名字" class="input1"></el-input>
                    </el-form-item>
                    <el-form-item label="菜品描述" prop="dishdesc">
                        <el-input
                            type="textarea"
                            :autosize="{ minRows: 2, maxRows: 4}"
                            placeholder="请输入内容"
                            v-model="form.dishdesc"
                            class="input2">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="菜品时间" prop="meal">
                        <el-select v-model="form.meal" placeholder="请选择" class="input1" >
                            <el-option
                                v-for="item in option3"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="菜品类别" prop="dishclassid">
                        <el-select v-model="form.dishclassid" placeholder="请选择" class="input1" >
                            <el-option
                                v-for="item in option4"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="菜品图片" >
                        <el-upload
                            action="http://zhongkeruitong.top/canteen-system/rest/upload"
                            list-type="picture-card"
                            name="filename"
                            :limit="1"
                            :before-upload="beforeUpload"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove"
                            :on-success="handleSuccess"
                            :on-error="handleError"

                        >
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit('form')">提交保存</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card" style="margin-top: 40px;margin-right: 10%" >
                    <div slot="header" class="clearfix">
                        <span>今天已配菜品</span>
                    </div>
                    <div style="height: 500px">
                        <el-scrollbar style="height: 100%">
                            <el-table :data="List" size="large">
                                <el-table-column type="expand">
                                    <template slot-scope="props">
                                        <el-form label-position="left" inline class="demo-table-expand">
                                            <el-form-item label="菜品名称">
                                                <span>{{ props.row.dishBase.dishname }}</span>
                                            </el-form-item>
                                            <el-form-item label="配菜校区">
                                                <span>{{ props.row.campusName }}</span>
                                            </el-form-item>
                                            <el-form-item label="菜品时间">
                                                <span>{{ props.row.mealName }}</span>
                                            </el-form-item>
                                            <el-form-item label="菜品类别">
                                                <span>{{ props.row.dishclassName }}</span>
                                            </el-form-item>
                                            <el-form-item label="菜品对象">
                                                <span>{{ props.row.roleName }}</span>
                                            </el-form-item>
                                            <el-form-item label="配菜日期">
                                                <span>{{ props.row.dishBase.updatetime }}</span>
                                            </el-form-item>
                                            <el-form-item label="菜品描述">
                                                <span>{{ props.row.dishBase.dishdesc }}</span>
                                            </el-form-item>
                                            <el-form-item label="配菜图片">
                                                <!--<span>{{ props.row.interact.description }}</span>-->
                                                <el-image :src="props.row.dishBase.dishimgurl" style="width: 100px"></el-image>
                                            </el-form-item>
                                        </el-form>
                                    </template>
                                </el-table-column>
                                <el-table-column label="序号" type="index">
                                </el-table-column>
                                <el-table-column label="菜品名字">
                                    <template slot-scope="scope">
                                        <span>{{scope.row.dishBase.dishname}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="菜品时间">
                                    <template slot-scope="scope">
                                        <span>{{scope.row.mealName}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="菜品类别">
                                    <template slot-scope="scope">
                                        <span>{{scope.row.dishclassName}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="配菜校区">
                                    <template slot-scope="scope">
                                        <span>{{scope.row.campusName}}</span>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-scrollbar>

                    </div>
                </el-card>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        inject: ['reload'],
        name: "edit",
        data() {
            return {
                List: [],
                fileName: '',
                input: '',
                textarea1: '',
                form: {
                    campus_id: '',
                    role: '',
                    meal: '',
                    dishclassid: '',
                    dishdesc: '',
                    dishname: '',
                },
                option1: [{
                    value: '1',
                    label: '校本部'
                }, {
                    value: '2',
                    label: '清华园校区'
                }, {
                    value: '3',
                    label: '双榆树校区'
                }],
                option2: [{
                    value: '1',
                    label: '老师'
                }, {
                    value: '2',
                    label: '学生'
                }],
                option3: [{
                    value: '1',
                    label: '早餐'
                }, {
                    value: '2',
                    label: '午餐'
                }, {
                    value: '3',
                    label: '晚餐'
                }],
                option4: [{
                    value: '1',
                    label: '套餐'
                }, {
                    value: '2',
                    label: '小炒'
                }, {
                    value: '3',
                    label: '盖饭'
                }, {
                    value: '4',
                    label: '面点'
                }, {
                    value: '5',
                    label: '小吃'
                }, {
                    value: '6',
                    label: '清真'
                }, {
                    value: '7',
                    label: '其他'
                }],
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                dialogImageUrl: '',
                dialogVisible: false,
                openid: '',
                dishimgurl: '',
                fileList: [{name: '', url: ''}],
                rules: {
                    campus_id: [
                        {required: true, message: '请选择菜品校区', trigger: 'change'}
                    ],
                    role: [
                        {required: true, message: '请选择菜品对象', trigger: 'change'}
                    ],
                    dishname: [
                        {required: true, message: '请输入菜品名字', trigger: 'blur'}
                    ],
                    dishdesc: [
                        {required: true, message: '请输入菜品描述', trigger: 'blur'}
                    ],
                    meal: [
                        {required: true, message: '请选择菜品时间', trigger: 'change'}
                    ],
                    dishclassid: [
                        {required: true, message: '请选择菜品类别', trigger: 'change'}
                    ]
                }
            }
        },
        mounted() {
            this.openid = localStorage.getItem('openid')
            console.log(this.openid)
            this.getList()
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
                console.log(file)
            },
            handleSuccess(res, file) {
                this.$message({
                    type: 'info',
                    message: '图片上传成功',
                    duration: 6000
                });
                console.log(res)
                // if (file.response.success) {
                //     this.editor.picture = file.response.message; //将返回的文件储存路径赋值picture字段
                // }
                this.dishimgurl = res
            },
            handleError(res, file) {
                this.$message({
                    type: 'error',
                    message: '图片上传失败',
                    duration: 6000
                });
                console.log(res)
            },
            beforeUpload(file){

                console.log(file,'文件');
                const isJPG = file.type === 'image/jpeg';
                const isGIF = file.type === 'image/gif';
                const isPNG = file.type === 'image/png';
                const isBMP = file.type === 'image/bmp';
                // const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG && !isGIF && !isPNG && !isBMP) {
                    this.$message.error('上传图片必须是JPG/GIF/PNG/BMP 格式!');
                }
                // if (!isLt2M) {
                //     this.$message.error('上传图片大小不能超过 2MB!');
                // }
                return (isJPG || isBMP || isGIF || isPNG);

                // this.files = file;
                // console.log(this.files)
                //
                // const extension = file.name.split('.')[1] === 'jpg'
                //
                // const extension2 = file.name.split('.')[1] === 'png'
                //
                // // const isLt2M = file.size / 1024 / 1024 < 5(校验上传文件的大小)
                //
                // if (!extension && !extension2) {
                //
                //     this.$message.warning('上传文档只能是 png、jpg格式!')
                //
                //     return
                //
                // }
                //
                // console.log(file.name);
                //
                // this.fileName = file.name;
                //
                //
                // return false// 返回false不会自动上传

            },

            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid){
                        var url = 'http://zhongkeruitong.top/canteen-system/rest/insertBaseDishes'
                        this.$axios.post(url, this.$qs.stringify({
                            campus_id: this.form.campus_id,
                            role: this.form.role,
                            meal: this.form.meal,
                            dishclassid: this.form.dishclassid,
                            dishdesc: this.form.dishdesc,
                            dishname: this.form.dishname,
                            dishimgurl: this.dishimgurl,
                            openid: this.openid
                        })).then((res) => {
                            this.$message.success(res.data.errmsg)
                            this.reload()
                        }).catch((error => {
                            this.$message.error('访问失败！')
                        }))
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })

            },
            getList() {
                var url = 'http://zhongkeruitong.top/canteen-system/rest/findDishByDate'
                this.$axios.get(url).then((res) => {
                    this.List = res.data.searchList
                })
            }
        }
    }
</script>

<style>
    .form{
        margin-top: 40px;
        margin-left: 10%;
    }
    .input1{
        width: 250px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
    .input2{
        width: 300px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 100%;
    }
    .text {
        font-size: 20px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
    .el-scrollbar__wrap {
        overflow-x: hidden;
    }

</style>
