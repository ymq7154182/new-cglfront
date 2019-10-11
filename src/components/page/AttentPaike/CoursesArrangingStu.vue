<template>
    <div>
        <div style="margin-top: 20px;margin-left: 20px">
            <el-button type="primary" @click="AddStu">添加学生</el-button>
            <el-dialog
                title="添加学生"
                :visible.sync="dialogVisible"
                width="60%"
                :before-close="handleClose"
                >
                <span>点击左侧栏中的班级组织，从中间栏勾选学生，右侧栏显示已选中的学生。</span>
                <div class="top-line"></div>
                <el-row>
                    <el-col :span="6">
                        <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose">
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>默认校区</span>
                                </template>
                                <el-menu-item-group>
                                    <template slot="title">分组一</template>
                                    <el-menu-item index="1-1">选项1</el-menu-item>
                                    <el-menu-item index="1-2">选项2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="分组2">
                                    <el-menu-item index="1-3">选项3</el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="1-4">
                                    <template slot="title">选项4</template>
                                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                                </el-submenu>
                            </el-submenu>
                            <el-menu-item index="2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">初中部</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
            <el-button type="danger">批量删除</el-button>
            <el-button type="danger">全部删除</el-button>
            <el-input v-model="input" placeholder="按姓名/用户名查找" class="inputSearch" clearable></el-input>
            <el-button type="primary" icon="el-icon-search" @click="SearchStu"></el-button>
        </div>
        <div style="margin-top: 20px;margin-left: 20px;margin-right: 20px">
            <el-table
                ref="multipleTable"
                :data="StuList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                tooltip-effect="dark"
                style="width: 100%"
                border
                stripe
                @selection-change="handleSelectionChange">
                <el-table-column
                    type="selection"
                    width="50">
                </el-table-column>
                <el-table-column

                    label="学生姓名"
                    width="310px">
                    <template slot-scope="scope">{{ scope.row.showname }}</template>
                </el-table-column>
                <el-table-column

                    label="用户名"
                    width="290">
                    <template slot-scope="scope">{{ scope.row.studentid }}</template>
                </el-table-column>

                <el-table-column
                    label="班级"
                    width="310"
                    show-overflow-tooltip>
                    <template slot-scope="scope">{{ scope.row.schoolyear+scope.row.period+scope.row.classname }}</template>
                </el-table-column>
                <el-table-column
                    label="操作"

                    show-overflow-tooltip>
                    <template slot-scope="scope">
                        <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>

            </el-table>
            <div style="margin-top: 20px">
                <!--<el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>-->
                <el-button @click="toggleSelection()" type="primary">取消选择</el-button>
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[5, 10, 20, 50,100]"
                    :page-size="pagesize"
                    layout="total, sizes, prev, pager, next, jumper"
                    background
                    :total="StuList.length"
                    style="margin-left: 590px">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CoursesArrangingStu",
        data() {
            return {
                input: '',
                tableData: [],
                multipleSelection: [],
                currentPage: 1,
                pagesize: 10,
                dialogVisible: false,
                class_scheduling_name:'',
                campus:'',
                academicyear:'',
                term:'',
                period:'',
                grade:'',
                StuList:[],
            }
        },
        mounted() {
            this.getData();
            this.getAllStu()

        },
        methods: {
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
                console.log(this.multipleSelection)
            },
            handleSizeChange: function (size) {
                this.pagesize = size;
            },
            handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            /**获得基本信息页面传来的数据*/
            getData() {
                this.class_scheduling_name = localStorage.getItem('class_scheduling_name');
                this.campus = localStorage.getItem('campus');
                this.academicyear = localStorage.getItem('academicyear');
                this.term = localStorage.getItem('term');
                this.period = localStorage.getItem('period');
                this.grade = localStorage.getItem('grade');
                console.log(this.class_scheduling_name);
                console.log(this.campus);
                console.log(this.academicyear);
                console.log(this.term);
                console.log(this.period);
                console.log(this.grade)

            },
            /**获得学生数据*/
            getAllStu() {
                var url = 'http://58.119.112.12:11030/rest/get_student'
                this.$axios.post(url,this.$qs.stringify({
                    // campus: this.campus,
                    campus: '默认校区',
                    // schoolyear: this.grade,
                    schoolyear: '2018级',
                    // period: this.period,
                    period: '高中',
                    role: '0',
                    classname: '1班'
                })).then((res) => {
                    // console.log(res.data.list);
                    this.StuList=res.data.list
                })
            },
            /**按姓名查找学生*/
            SearchStu() {
                var url = 'http://58.119.112.12:11030/rest/get_student_by_name';
                this.$axios.post(url, this.$qs.stringify({
                    role: '0',
                    showname: this.input
                })).then((res)=>{
                    console.log(res);

                    if (res.data.errno === 0) {
                        this.StuList=res.data.list;
                        this.$message.success(res.data.errmsg)
                    }
                    else {
                        this.$message.error(res.data.errmsg)
                    }
                })
            },
            AddStu() {
                this.dialogVisible=true;
                var url = 'http://localhost:8080/api/StuData';
                this.$axios.get(url).then((res) => {
                    // console.log(res);
                    this.tableData=res.data.data;
                    console.log(this.tableData)
                })

            }
        }
    }
</script>

<style scoped>
    .inputSearch{
        width: 200px;
        margin-left: 660px;
    }
    .top-line{
        width: 100%;
        height: 1px;
        border-top: solid #ACC0D8 1px;
        margin-top: 10px;
    }
</style>
