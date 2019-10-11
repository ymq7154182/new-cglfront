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

                    <el-select v-model="buildingName" placeholder="请选择教学楼" @change="getBuildingName(buildingName)" >
                        <el-option
                          v-for="item in buildingList"
                          :key="item.building"
                          :label="item.building"
                          :value="item.building">
                        </el-option>
                    </el-select>
                </template>

                <template>
                    
                    <el-select v-model="classType" placeholder="请选择类型" @change="getClassType(classType)">
                        <el-option
                          v-for="item in classTypeList"
                          :key="item.type"
                          :label="item.type"
                          :value="item.type">
                        </el-option>
                    </el-select>
                    
                    <el-button type="primary" icon="el-icon-search" @click="searchInfo()">搜索</el-button>
                    <el-button type="primary" icon="el-icon-back" @click="refreshTable()">清除</el-button>

                </template>
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
                    prop="classroom_id"
                    label="教室ID"
                    width="auto"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="classroom_name"
                    label="教室名称"
                    width="auto"
                    align="center">
                </el-table-column> 
                <el-table-column
                    prop="campus"
                    label="校区名称"
                    width="auto"
                    align="center">
                </el-table-column> 
                <el-table-column
                    prop="building"
                    label="教学楼"
                    width="auto"
                    align="center">
                </el-table-column> 
                <el-table-column
                    prop="type"
                    label="教室类别"
                    width="auto"
                    align="center">
                </el-table-column> 
                <el-table-column
                    prop="typeid"
                    label="教室类别ID"
                    width="auto"
                    align="center">
                </el-table-column> 
                <el-table-column
                    prop="state"
                    label="状态"
                    width="auto"
                    align="center">
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

                    <el-form-item prop='classroom_id' label="教室ID:">
                        <el-input type="classroom_id" v-model="form.classroom_id"></el-input>
                    </el-form-item>

                    <el-form-item prop='classroom_name'  label="教室名称:">
                        <el-input type="classroom_name" v-model.number="form.classroom_name"></el-input>
                    </el-form-item>

                    <el-form-item prop='campus' label="校区名称:">
                        <el-input type="campus" v-model.number="form.campus"></el-input>
                    </el-form-item>

                    <el-form-item prop='building' label="教学楼:">
                        <el-input type="building" v-model.number="form.building"></el-input>
                    </el-form-item>

                    <el-form-item prop='type' label="教室类别:">
                        <el-input type="type" v-model.number="form.type"></el-input>
                    </el-form-item>

                    <el-form-item prop='typeid' label="教室类别ID:">
                        <el-input type="typeid" v-model.number="form.typeid"></el-input>
                    </el-form-item>

                    <el-form-item prop='state' label="状态:">
                        <el-input type="state" v-model.number="form.state"></el-input>
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
        name: 'uploadSpace',
        data() {
            return {
                wb: '',
                tableTbody: [],
                saveTable: [],
                showEdit:[],
                editid: '',
                //搜索框字段
                campusName: '',
                buildingName: '',
                classType: '',
                
                currentCampusName: '',
                currentBuildingName: '',
                currentClassTypeName: '',

                campusList: [],
                buildingList: [],
                classTypeList: [],
              

                //详情弹框信息
                dialog: {
                    width:'400px',
                    show : false,
                    title: '修改信息',
                    formLabelWidth:'120px'
                },
                form:{
                    classroom_id:'',
                    classroom_name: '',
                    campus: '',
                    building:'',
                    type:'',
                    typeid: '',
                    state: ''
                },
                form_rules: {
                    classroom_id   : [
                        {required: true, message : '描述不能为空！',trigger : 'blur'}
                    ],
                    classroom_name   : [
                        { required: true, message : '描述不能为空！',trigger: 'blur'},
                    ],
                    campus   : [
                        {required: true, message : '描述不能为空！',trigger : 'blur'}
                    ],
                    building: [
                        {required: true, message : '描述不能为空！',trigger : 'blur'}
                    ],
                    type: [
                        {required: true, message : '描述不能为空！',trigger : 'blur'}
                    ],
                    typeid: [
                        {required: true, message : '描述不能为空！',trigger : 'blur'}
                    ],
                    state: [
                        {required: true, message : '描述不能为空！',trigger : 'blur'}
                    ] 
               }
            }
        },
        mounted: function() {
            var campus_url = 'http://58.119.112.12:11030/rest/get_campus_base';
            var building_url = 'http://58.119.112.12:11030/rest/get_building';
            var classType_url = 'http://58.119.112.12:11030/rest/get_classroom_type';

            this.$axios.get(campus_url).then((res) => {
                    this.campusList = res.data.list;
                })
                .catch((err) => {
                    this.$message.success("提交失败");
                });

            this.$axios.get(building_url).then((res) => {
                    this.buildingList = res.data.buildings;
                    
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });  

            this.$axios.get(classType_url).then((res) => {
                    this.classTypeList = res.data.classroom_types;
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });
            
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

                        var import_url = 'http://58.119.112.12:11030/rest/classroom_import';
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
                this.form.classroom_id = row.classroom_id;
                this.form.classroom_name = row.classroom_name;
                this.form.campus = row.campus;
                this.form.building = row.building;
                this.form.type = row.type;
                this.form.typeid = row.typeid;
                this.form.state = row.state;

                this.dialog.title = '修改信息';
                this.dialog.show  = true;
            },
            handleDelete(index, row) {
                alert(row);
            },

            //搜索按钮
            searchInfo() {
                var url = `http://58.119.112.12:11030/rest/get_classroom?campus=${this.currentCampusName}&building=${this.currentBuildingName}&type=${this.currentClassTypeName}`;
                this.$axios.get(url).then((res) => {
                    this.tableTbody = res.data.list;
                })
                .catch((err) => {
                    this.$message.success("查询失败");
                });
            },

            refreshTable() {
                this.campusName = "";
                this.buildingName = "";
                this.classType = "";
                
                this.tableTbody = this.saveTable;
            },
            editMoneyIncomePay(data){
                axios({
                    type:'get',
                    path:'http://58.119.112.12:11030/rest/update_student',
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
                            data.classroom_id = formData['classroom_id']
                            data.classroom_name = formData['classroom_name']
                            data.campus = formData['campus']
                            data.building = formData['building']
                            data.type = formData['type']
                            data.typeid = formData['typeid']
                            data.state = formData['state']
                        }
                        console.log(data);
                        if(this.editid != ""){
                            
                            let url = `http://58.119.112.12:11030/rest/update_classroom?classroom_id=${data.classroom_id}&classroom_name=${data.classroom_name}&campus=${data.campus}&building=${data.building}&type=${data.type}&typeid=${data.typeid}&state=${data.state}`;
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
            getBuildingName(value) {
                this.currentBuildingName = value;
            },
            getClassType(value) {
                this.currentClassTypeName = value;
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