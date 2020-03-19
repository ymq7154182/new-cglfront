<template>
    <div class="contents">
        <div class="title_text">
            <span>分词</span>
        </div>
        <div style="width: 800px;margin: 40px auto">
            <el-select v-model="value1" placeholder="选择输入方式" class="selceted">
                <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value2" placeholder="请选择数据类型" style="margin-left: 90px" class="selceted" @change="change_select">
                <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value3" placeholder="请选择分词器类型" style="margin-left: 90px" class="selceted">
                <el-option
                    v-for="item in options3"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div style="width: 1000px;margin: 40px auto">
            <div>
                <el-button type="primary" @click="show_import" v-if="value1==='导入文件'">导入文件</el-button>
                <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible1"
                    width="30%">
                    <el-upload
                        class="upload-demo"
                        ref="upload"
                        action="/"
                        :before-upload="beforeUpload"
                        accept=".txt">
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传txt文件</div>
                    </el-upload>
                    <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible1 = false">取 消</el-button>
                    <el-button type="primary" @click="importfile">确 定</el-button>
                </span>
                </el-dialog>
                <el-button type="success" @click="import_dic">导入用户词典</el-button>
                <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible2"
                    width="30%">
                    <el-upload
                        class="upload-demo"
                        ref="upload"
                        action="/"
                        :before-upload="beforeUpload"
                        accept=".txt">
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传txt文件</div>
                    </el-upload>
                    <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible2 = false">取 消</el-button>
                    <el-button type="primary" @click="importdic">确 定</el-button>
                </span>
                </el-dialog>
            </div>

            <el-input
                type="textarea"
                :autosize="{ minRows: 12, maxRows: 12}"
                placeholder="请输入内容"
                v-model="textarea2" style="margin-top: 10px" :disabled="value1 === '导入文件'" class="textareas">
            </el-input>
        </div>
        <div class="button_start">
            <el-button size="large" class="button_starts" @click="button_starts">开始分词</el-button>
        </div>
        <div class="foot_content">
            <div class="content_child">
                <div v-if="show_result">
                    <el-tag v-for="(item, index) in result" :key="index" class="tag_result" :style="style_reslut(index)">{{item}}</el-tag>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fenciapplication",
        data () {
            return {
                dialogVisible1: false,
                textData: '',
                result: [],
                colorList: ['#0099CC', '#FF6666', '#FFCC99', '#FF9900', '#99CC99', '#99CCFF', '#CCFFF', '#FFCC33', '#CCCCCC', '#66CCCC', '#FF99CC', '#339999', '#CCFF99', '#669999', '#CCFFFF', '#0099CC', '#FF9999', '#CCFF66', '#FF99CC', '#CCCCFF'],
                show_result: false,
                isactive: -1,
                dialogVisible2: false,
                value1: '',
                value2: '',
                value3: '',
                textarea2: '母亲，对于任何人来说，都是那么神圣，那么亲切。我知道祖国是我们的伟大母亲，因为我们每个人的生命、欢乐和幸福都与祖国母亲的安危息息相关，紧密相连，我感到身在祖国温暖的怀抱中是多么的骄傲',
                options1: [{
                    value: '输入内容',
                    label: '输入内容'
                },{
                    value: '导入文件',
                    label: '导入文件'
                }],
                options2: [{
                    value: '金矿数据',
                    label: '金矿数据'
                },{
                    value: '生物数据',
                    label: '生物数据'
                },{
                    value: '其他数据',
                    label: '其他数据'
                }],
                options3: [{
                    value: 'Thulac',
                    label: 'Thulac'
                },{
                    value: 'Ansj',
                    label: 'Ansj'
                },{
                    value: 'Hanlp',
                    label: 'Hanlp'
                },{
                    value: 'Jieba',
                    label: 'Jieba'
                }]
            }
        },
        beforeCreate() {
            // 读取文件
            FileReader.prototype.reading = function ({encode} = pms) {
                let bytes = new Uint8Array(this.result);    //无符号整型数组
                let text = new TextDecoder(encode || 'UTF-8').decode(bytes);
                return text;
            };
            /* 重写readAsBinaryString函数 */
            FileReader.prototype.readAsBinaryString = function (f) {
                if (!this.onload)       //如果this未重写onload函数，则创建一个公共处理方式
                    this.onload = e => {  //在this.onload函数中，完成公共处理
                        let rs = this.reading();
                        console.log(rs);
                    };
                this.readAsArrayBuffer(f);  //内部会回调this.onload方法
            };
        },
        methods: {
            show_import () {
                if (this.value2 === '' || this.value3 === '') {
                    this.$message.warning('请选择数据类型和分词器类型')
                } else {
                    this.dialogVisible1 = true
                }

            },
            beforeUpload(file){
                // this.fileList = [file]
                console.log('选择了文件beforeUpload')
                this.files = file
                // 读取数据
                this.read(file);
                return false
            },
            read(f) {
                let rd = new FileReader();
                rd.onload = e => {
                    //this.readAsArrayBuffer函数内，会回调this.onload函数。在这里处理结果
                    let cont = rd.reading({encode: 'utf-8'});
                    console.log(cont);
                    if (this.dialogVisible1 === true) {
                        this.textarea2 = cont
                    }
                    let  formerData = this.textData;
                    this.textData = formerData + "\n" + cont;
                    console.log(this.textData)
                };
                rd.readAsBinaryString(f);
            },
            importfile () {
                var url = ''
                if (this.value3 === 'Thulac') {
                    url = 'http://zhongkeruitong.top/AIshow/AIPlatform/ReadTxtThulacSegmentDictionary'
                } else if (this.value3 === 'Ansj') {
                    url = 'http://zhongkeruitong.top/AIshow/AIPlatform/ReadTxtNlpAnalysisSegmentDictionary'
                } else if (this.value3 === 'Hanlp') {
                    url = 'http://zhongkeruitong.top/AIshow/AIPlatform/ReadTxtNLPTokenizerSegment'
                } else if (this.value3 === 'Jieba') {
                    url = 'http://zhongkeruitong.top/AIshow/AIPlatform/ReadTxtSentenceProcessDictionary'
                }
                const fileFormData = new FormData()
                fileFormData.append('filename', this.files)
                this.$axios.post(url,fileFormData).then((res) => {
                    // this.result1 = res.data.result
                    // localStorage.setItem('rule1', res.data.result)
                    this.result = res.data.segment
                    this.dialogVisible1 = false
                    this.$message.success('上传成功')


                })
            },
            change_select () {
                if (this.value2 === '金矿数据') {
                    this.value3 = 'Thulac'
                } else if (this.value2 === '生物数据') {
                    this.value3 = 'Ansj'
                } else if (this.value2 === '其他数据') {
                    this.value3 = 'Hanlp'
                }
            },
            button_starts () {
                if (this.value1 === '输入内容') {
                    this.getdata()
                } else if (this.value1 === '导入文件') {
                    this.show_result = true
                }

            },
            style_reslut(index) {
                // this.isactive = index
                // var s1 = Math.round(Math.random()*255);
                // var s2 = Math.round(Math.random()*255);
                // var s3 = Math.round(Math.random()*255);
                // var rgb = 'rgb(' + s1 + ',' + s2 + ',' + s3 + ')'
                return 'background-color:' + this.colorList[index]
                // return 'background-color:' + rgb
            },
            // 随机生成数
            randomNum(minNum,maxNum){
                switch(arguments.length){
                    case 1:
                        return parseInt(Math.random()*minNum+1,10);
                        break;
                    case 2:
                        return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
                        break;
                    default:
                        return 0;
                        break;
                }
            },
            getdata () {
                var url = ''
                if (this.value3 === 'Thulac') {
                    url = 'http://zhongkeruitong.top/AIshow/AIPlatform/ThulacSegmentDictionary?sentence=' + this.textarea2
                } else if (this.value3 === 'Ansj') {
                    url = 'http://zhongkeruitong.top/AIshow/AIPlatform/NlpAnalysisSegmentDictionary?sentence=' + this.textarea2
                } else if (this.value3 === 'Hanlp') {
                    url = 'http://zhongkeruitong.top/AIshow/AIPlatform/NLPTokenizerSegment?sentence=' + this.textarea2
                } else if (this.value3 === 'Jieba') {
                    url = 'http://zhongkeruitong.top/AIshow/AIPlatform/sentenceProcessDictionary?sentence=' + this.textarea2
                }
                this.$axios.get(url).then((res) => {
                    this.result = res.data.segment
                    this.show_result = true
                })
            },
            import_dic () {
                if (this.value2 === '' || this.value3 === '') {
                    this.$message.warning('请选择数据类型和分词器类型')
                } else {
                    this.dialogVisible2 = true
                }
            },
            importdic () {
                var url = 'http://zhongkeruitong.top/AIshow/AIPlatform/uploadDictionarytxt'
                const fileFormData = new FormData()
                fileFormData.append('filename', this.files)
                this.$axios.post(url,fileFormData).then((res) => {
                    // this.result1 = res.data.result
                    // localStorage.setItem('rule1', res.data.result)
                    this.dialogVisible2 = false
                    this.$message.success('上传成功')


                })
            }
        }
    }
</script>

<style scoped>
    .title_text {
        font-size: 34px;
        margin: 20px auto;
        text-align: center;
    }
    .selceted >>> .el-input__inner {
        border: 1px solid black;
    }
    .button_start {
        text-align: center;
    }
    .button_starts{
        color: white;
        background-color: #3467A5;
    }
    .foot_content {
        margin-top: 40px;
        height: 500px;
        background-color: #3467A5;
        position: relative;
    }
    .contents {
        height: 100%;
        width: 100%;
    }
    .content_child {
        height: 350px;
        width: 700px;
        background-color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        padding: 20px;
        transform: translate(-50%, -50%);
        border-radius: 25px;
    }
    .tag_result {
        margin-left: 20px;margin-top: 10px;color: black;
    }
</style>
