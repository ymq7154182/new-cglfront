<template>
    <section class="main">
        
        <div class="container">
            <div class="ss_header">
                <template>
                  <el-select v-model="value" placeholder="请选择学年" @change="getYearValue(value)">
                    <el-option
                      v-for="item in options"
                      :key="item.id"
                      :label="item.academic_year"
                      :value="item.academic_year">
                    </el-option>
                  </el-select>

                  <el-select v-model="value2" placeholder="请选择学期" @change="getTermValue(value2)">
                    <el-option
                      v-for="item in terms"
                      :key="item.id"
                      :label="item.term"
                      :value="item.term">
                    </el-option>
                  </el-select>
                  <el-button type="primary" icon="el-icon-search" @click="searchAll()">搜索</el-button>
                </template>
                <template>
                  <el-select v-model="valueCopy" placeholder="请选择要复制的学年" @change="getCopyYearValue(valueCopy)">
                    <el-option
                      v-for="item in optionsCopy"
                      :key="item.id"
                      :label="item.academic_year"
                      :value="item.academic_year">
                    </el-option>
                  </el-select>

                  <el-select v-model="value2Copy" placeholder="请选择要复制的学期" @change="getCopyTermValue(value2Copy)">
                    <el-option
                      v-for="item in termsCopy"
                      :key="item.id"
                      :label="item.term"
                      :value="item.term">
                    </el-option>
                  </el-select>
                  <el-button type="primary" icon="el-icon-search" @click="searchAllCopy()">复制</el-button>
                </template>
            </div>
            
            <template>
                <div id="transfer_diy" style="text-align: center;margin-top: 30px;">
                    <el-transfer
                      style="text-align: left; display: inline-block; height: auto;"
                      v-model="value3"
                      filterable
                      :render-content="renderFunc"
                      :titles="['可选课程', '已选课程']"
                      :button-texts="['移除', '添加']"
                      :format="{
                        noChecked: '${total}',
                        hasChecked: '${checked}/${total}'
                      }"
                      @change="handleChange"
                      :data="data">
                        
                        <el-button type="primary" class="transfer-footer" slot="right-footer" size="small" @click="pushData()">保存</el-button>
                    </el-transfer>
                </div>
            </template> 
        </div>
    </section>
</template>

<script>
    import draggable from 'vuedraggable';
    import qs from 'qs';
    export default {
        name: 'draglist',
        data() {
            const generateData = _ => {
                const data = [];
                var class_url = 'http://58.119.112.12:11030/rest/get_course_base';
                this.$axios.get(class_url).then((res) => {
                    let temp = res.data.list;
                    for (let i = 0; i < temp.length; i++) {
                        data.push({
                            key: temp[i].classnameid,
                            label: temp[i].classname,
                            disabled: i < 3
                        });
                    }
                })
                .catch((err) => {
                    this.$message.success("提交失败");
                });
            console.log(data);
            return data;
        };
            return {
                data: generateData(),
                value3: ["1", "2", "3"],
                renderFunc(h, option) {
                  return <span>{ option.key } - { option.label }</span>;
                },
                dragOptions:{
                    animation: 120,
                    scroll: true,
                    group: 'sortlist',
                    ghostClass: 'ghost-style'
                },
                options: [],
                terms: [],
                optionsCopy: [],
                termsCopy: [],
                value: '',
                value2: '',
                valueCopy: '',
                value2Copy: '',
                currentYear: '',
                currentTerm: '',
                currentCopyYear: '',
                currentCopyTerm: '',
                currentRightList: ["1", "2", "3"]
            }
        },
        mounted: function() {
            var academicYear_url = 'http://58.119.112.12:11030/rest/get_academicyear';
            var term_url = 'http://58.119.112.12:11030/rest/get_term';
            

            this.$axios.get(academicYear_url).then((res) => {
                    this.options = res.data.academicYear;
                    this.optionsCopy = res.data.academicYear;
                })
                .catch((err) => {
                    this.$message.success("提交失败");
                });

            this.$axios.get(term_url).then((res) => {
                    this.terms = res.data.term;
                    this.termsCopy = res.data.term;
                })
                .catch((err) => {
                    this.$message.success("提交失败");
                });

            
        },
        components:{
            draggable
        },
        methods: {
            removeHandle(event){
                console.log(event);
                this.$message.success(`从 ${event.from.id} 移动到 ${event.to.id} `);
            },
            handleChange() {
                if(this.value3.length < this.currentRightList.length) {
                    var result = this.currentRightList.filter(key => !this.value3.includes(key));
                    this.currentRightList = this.value3;
                    var idArry =  result;
                    var jsonData = "";
                    for(let i = 0; i < idArry.length; i++) {
                        if(i == idArry.length - 1) {
                            jsonData = jsonData + `{"classnameid":"${idArry[i]}"}`
                        }else {
                            jsonData = jsonData + `{"classnameid":"${idArry[i]}"},`
                        }
                    }
                    var data = `{"delete_class":[${jsonData}]}`;
                    var url = "http://58.119.112.12:11030/rest/teacher_delete_class";
                    if(this.currentYear!= "" || this.currentTerm != "") {
                        this.$axios.post(url, this.$qs.stringify({
                            teacherid: '08018867',
                            academicyear: this.currentYear,
                            term: this.currentTerm,
                            data: data
                        })).then((res) => {
                            this.$message.success(res.data.errmsg);
                            this.value3 = this.currentRightList;
                        })
                        .catch((err) => {
                            this.$message.success("提交失败");
                        });
                    }else {
                        this.$message.success("请选择学期以及学年");
                    }

                }
            },
            pushData() {
                this.currentRightList = this.value3;
                var idArry =  this.value3;
                var jsonData = "";
                for(let i = 0; i < idArry.length; i++) {
                    if(i == idArry.length - 1) {
                        jsonData = jsonData + `{"classnameid":"${idArry[i]}"}`
                    }else {
                        jsonData = jsonData + `{"classnameid":"${idArry[i]}"},`
                    }
                }
                var data = `{"insert_class":[${jsonData}]}`;
                var url = "http://58.119.112.12:11030/rest/teacher_insert_class";
                if(this.currentYear!= "" || this.currentTerm != "") {
                    this.$axios.post(url, this.$qs.stringify({
                        teacherid: '08018867',
                        academicyear: this.currentYear,
                        term: this.currentTerm,
                        data: data
                    })).then((res) => {
                        this.$message.success(res.data.errmsg);
                        this.value3 = idArry;
                    })
                    .catch((err) => {
                        this.$message.success("提交失败");
                    });
                }else {
                    this.$message.success("请选择学期以及学年");
                }
                
            },
            getYearValue(value) {
                this.currentYear = value;
            },
            getTermValue(value) {
                this.currentTerm = value;
            },
            getCopyYearValue(value) {
                this.currentCopyYear = value;
            },
            getCopyTermValue(value) {
                this.currentCopyTerm = value;
            },
            searchAll() {
                var url = `http://58.119.112.12:11030/rest/teacher_get_class?teacherid=08018867&academicyear=${this.currentYear}&term=${this.currentTerm}`;
                this.$axios.get(url).then((res) => {
                    var items = res.data.classnames;
                    var classnameids = [];
                    for(var i = 0; i < items.length; i++) {
                        classnameids.push(items[i].classnameid);
                    }
                    this.value3 = classnameids;
                })
                .catch((err) => {
                    this.$message.success("该学期没有课程，请先添加");
                });
            },
            searchAllCopy() {
                var old_url = `http://58.119.112.12:11030/rest/teacher_get_class?teacherid=08018867&academicyear=${this.currentCopyYear}&term=${this.currentCopyTerm}`;
                var url = `http://58.119.112.12:11030/rest/teacher_copy_academicyear_term?old_academicyear=${this.currentCopyYear}&old_term=${this.currentCopyTerm}&teacherid=90807758&new_academicyear=${this.currentYear}&new_term=${this.currentTerm}`;
                

                this.$axios.post(url).then((res) => {
                    this.$message.success(res.data.errmsg);
                    this.$axios.get(old_url).then((res) => {
                        var items = res.data.classnames;
                        var classnameids = [];
                        for(var i = 0; i < items.length; i++) {
                            classnameids.push(items[i].classnameid);
                        }
                        this.value3 = classnameids;
                    })
                    .catch((err) => {
                        this.$message.success("该学期没有课程，请先添加");
                    });
                    
                });
            }
        }
    }

</script>

<style scoped>
    .ghost-style{
        display: block;
        color: transparent;
        border-style: dashed
    }
</style>
