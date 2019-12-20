<template>
    <div>
        <div class="back">
            <div class="back2"></div>
            <div class="somecircle"></div>
            <div class="somecircle2">
                <span class="word2">ansj分词器</span>
            </div>
            <div class="somecircle3 somecircle31" @click="DicAnalysisSegment">
                <span class="word1">词典优先分词</span>
            </div>
            <div class="somecircle3 somecircle35" @click="ToAnalysisSegment">
                <span class="word1">精准分词</span>
            </div>
            <div class="somecircle3 somecircle33" @click="IndexAnalysisSegment">
                <span class="word1">面向索引分词</span>
            </div>
            <div class="sometext">
                <el-scrollbar style="height: 100%" class="scrollbar">
                    <el-tag v-for="(item, index) in textarea2" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color"><span style="font-size: 16px;color: white">{{item.name}}</span></el-tag>
                    <div class="infoword" v-if="flag2 === 1">
                        <span>用户自定义词典分词结果：</span>
                        <div style="margin-top: 10px">
                            <div style="margin-left: 20px;font-size: 16px">
                                <span>词典优先分词：</span>
                            </div>
                            <div style="margin-bottom: 10px">
                                <el-tag v-for="(item, index) in textareaDicAnalysisSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color1"><span style="font-size: 16px;color: white">{{item.name}}</span></el-tag>
                            </div>


                            <div style="margin-left: 20px;font-size: 16px">
                                <span>精准分词：</span>
                            </div>
                            <div style="margin-bottom: 10px">
                                <el-tag v-for="(item, index) in textareaToAnalysisSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color3"><span style="font-size: 16px;color: white">{{item.name}}</span></el-tag>
                            </div>
                            <div style="margin-left: 20px;font-size: 16px">
                                <span>面向索引分词：</span>
                            </div>
                            <div style="margin-bottom: 10px">
                                <el-tag v-for="(item, index) in textareaIndexAnalysisSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color2"><span style="font-size: 16px;color: white">{{item.name}}</span></el-tag>
                            </div>
                        </div>
                    </div>
                </el-scrollbar>

            </div>
            <div class="sometext1">
                <span class="wordtext">用户自定义词典</span>
                <div style="width: 150px;height: 120px">
                    <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 5}" style="margin-top: 10px" v-model="textarea3"></el-input>
                </div>
                <!--<el-input type="textarea" class="sometext2"  :autosize="{ minRows: 2, maxRows: 4}"></el-input>-->
                <el-button type="primary" size="mini" plain class="somebutton" @click="importword">导入</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Ansj",
        data () {
            return {
                textarea2: [],
                textarea1: '',
                color: '',
                color1: '',
                color2: '',
                color3: '',
                textareaDicAnalysisSegment: [],
                textareaToAnalysisSegment: [],
                textareaIndexAnalysisSegment: [],
                textarea3: '',
                flag2: 0
            }
        },
        methods: {
            DicAnalysisSegment () {
                this.textarea1 = localStorage.getItem('text')
                var url = 'http://zhongkeruitong.top/AIshow/AIPlatform/DicAnalysisSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textarea2 = res.data.segment.terms
                    this.color = '#FD694E'
                })
            },
            ToAnalysisSegment () {
                this.textarea1 = localStorage.getItem('text')
                var url = 'http://zhongkeruitong.top/AIshow/AIPlatform/ToAnalysisSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textarea2 = res.data.segment.terms

                    this.color = '#EEAC39'
                })
            },
            IndexAnalysisSegment () {
                this.textarea1 = localStorage.getItem('text')
                var url = 'http://zhongkeruitong.top/AIshow/AIPlatform/IndexAnalysisSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textarea2 = res.data.segment.terms
                    this.color = '#4DC9FE'
                })
            },
            DicAnalysisSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/AIshow/AIPlatform/DicAnalysisSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareaDicAnalysisSegment = res.data.segment.terms
                    this.color1 = '#FD694E'
                })
            },
            ToAnalysisSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/AIshow/AIPlatform/ToAnalysisSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareaToAnalysisSegment = res.data.segment.terms
                    this.color3 = '#EEAC39'
                })
            },
            IndexAnalysisSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/AIshow/AIPlatform/IndexAnalysisSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareaIndexAnalysisSegment = res.data.segment.terms

                    this.color2 = '#4DC9FE'
                })
            },
            importword () {
                this.flag2 = 1
                this.DicAnalysisSegmentDictionary()
                this.ToAnalysisSegmentDictionary()
                this.IndexAnalysisSegmentDictionary()
            }
        }
    }
</script>

<style scoped>
    .back {
        background-color: #3467A5;
        height: 600px;
        position: relative;
    }
    .back2 {
        background-color: rgba(255, 255, 255, 0.6);
        height: 90%;
        width: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .somecircle {
        width: 170px;
        height: 170px;
        background-color: #3467A5;
        border-radius: 50%;
        position: absolute;
        top: 2%;
        left: 7%;
    }
    .somecircle2 {
        width: 150px;
        height: 150px;
        background-color: #FDCE91;
        border-radius: 50%;
        position: absolute;
        top: 2%;
        left: 7%;
        text-align:center;
    }
    .word2 {
        vertical-align:middle;
        line-height: 150px;
        color: white;
        font-weight: bold;
        font-size: 20px;
    }
    .somecircle3 {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: absolute;
        text-align:center;
        transition: all 0.6s;
        cursor: pointer;
    }
    .somecircle3:hover {
        transform: scale(1.2,1.2);
    }
    .somecircle31 {
        background-color: #FD694E;
        top: 35%;
        left: 14%;
    }
    .somecircle35 {
        background-color: #EEAC39;
        top: 55%;
        left: 14%;
    }
    .somecircle33 {
        background-color: #4DC9FE;
        top: 75%;
        left: 14%;
    }
    .word1 {
        vertical-align:middle;
        line-height: 100px;
        color: white;
        font-weight: bold;
    }
    .sometext {
        width: 48%;
        height: 63%;
        background-color: white;
        border: 1px solid black;
        position: absolute;
        top: 68%;
        left: 50%;
        transform: translate(-50%, -68%);

    }
    .sometext1 {
        position: absolute;
        top: 68%;
        left: 86%;
        transform: translate(-86%, -68%);
    }
    .wordtext {
        color: black;
        font-weight: bold;
    }
    .somebutton {
        margin-top: 10px;
    }
    .infoword {
        margin-top: 20px;
        margin-left: 10px;
        font-size: 18px;
    }
    .scrollbar >>> .el-scrollbar__wrap{
        overflow-x: hidden;
    }
</style>
<!--<style>-->
    <!--.el-scrollbar__wrap{-->
        <!--overflow-x: hidden;-->
    <!--}-->
<!--</style>-->
