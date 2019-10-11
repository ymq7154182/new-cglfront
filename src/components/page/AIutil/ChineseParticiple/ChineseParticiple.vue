<template>
    <div>
        <!--<Sidebar/>-->
        <!--<HomeHeader></HomeHeader>-->
        <!--<div class="imghome">-->
        <!--<img src="../../assets/134324.png" height="141px">-->
        <!--</div>-->
        <div class="home">

            <!--<div style="width: 20px;text-align: center;background-color: blue;line-height: 40px">普通</div>-->
            <div class="home_textarea">
                <el-input
                    type="textarea"
                    :autosize="{ minRows:15, maxRows: 15}"
                    v-model="textarea1"
                    class="textarea" @input="inputchange">
                </el-input>
            </div>
            <div class="home_button">
                <el-button class="button" @click="Startdeal" :disabled="disableds">开始处理</el-button>
            </div>
            <!--<div class="home_some">-->
                <!--<div class="somebac"></div>-->
                <!--<div class="somecircle"></div>-->
                <!--<div v-show="flag === 0">-->
                    <!--<div class="somecircle2">-->
                        <!--<span class="word2">Hanlp分词</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle31" @click="Standard1">-->
                        <!--<span class="word1">标准分词</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle35" @click="NLP1">-->
                        <!--<span class="word1">NLP分词</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle33" @click="Index1">-->
                        <!--<span class="word1">索引分词</span>-->
                    <!--</div>-->
                    <!--&lt;!&ndash;<div class="somecircle3 somecircle34" @click="nShortSegment1">&ndash;&gt;-->
                    <!--&lt;!&ndash;<span class="word1">极速词典分词</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="somecircle3 somecircle35" @click="shortSegment1">&ndash;&gt;-->
                    <!--&lt;!&ndash;<span class="word1">最短路分词</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="somecircle3 somecircle36" @click="SpeedTokenizerSegment1">&ndash;&gt;-->
                    <!--&lt;!&ndash;<span class="word1">n最短路分词</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--</div>-->
                <!--<div v-show="flag === 1">-->
                    <!--<div class="somecircleansj">-->
                        <!--<span class="word2">ansj分词</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle31" @click="DicAnalysisSegment1">-->
                        <!--<span class="word1">词典优先分词</span>-->
                    <!--</div>-->
                    <!--&lt;!&ndash;<div class="somecircle3 somecircle32" @click="NlpAnalysisSegment1">&ndash;&gt;-->
                    <!--&lt;!&ndash;<span class="word1">NLP分词</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--<div class="somecircle3 somecircle33" @click="ToAnalysisSegment1">-->
                        <!--<span class="word1">精准分词</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle35" @click="IndexAnalysisSegment1">-->
                        <!--<span class="word1">面向索引分词</span>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div v-show="flag === 2">-->
                    <!--<div class="somecirclejieba">-->
                        <!--<span class="word2">jieba分词</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle31" @click="sentenceProcess1">-->
                        <!--<span class="word1">jieba分词</span>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div v-show="flag === 3">-->
                    <!--<div class="somecircleThulac">-->
                        <!--<span class="word2">Thulac分词</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle31" @click="ThulacSegment1">-->
                        <!--<span class="word1">Thulac分词</span>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div v-show="flag === 4">-->
                    <!--<div class="somecircleWord">-->
                        <!--<span class="word2">Word分词</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle31" @click="MaximumMatchingSegment1">-->
                        <!--<span class="word1" style="font-size: 12px">正向最大匹配分词</span>-->
                    <!--</div>-->
                    <!--&lt;!&ndash;<div class="somecircle3 somecircle32" @click="ReverseMaximumMatchingSegment1">&ndash;&gt;-->
                    <!--&lt;!&ndash;<span class="word1" style="font-size: 12px">逆向最大匹配分词</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--<div class="somecircle3 somecircle33" @click="MinimumMatchingSegment1">-->
                        <!--<span class="word1" style="font-size: 12px">正向最小匹配分词</span>-->
                    <!--</div>-->
                    <!--&lt;!&ndash;<div class="somecircle3 somecircle34" @click="ReverseMinimumMatchingSegment1">&ndash;&gt;-->
                    <!--&lt;!&ndash;<span class="word1" style="font-size: 12px">逆向最小匹配分词</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--<div class="somecircle3 somecircle35" @click="BidirectionalMaximumMatchingSegment1">-->
                        <!--<span class="word1" style="font-size: 12px">双向最大匹配分词</span>-->
                    <!--</div>-->
                    <!--&lt;!&ndash;<div class="somecircle3 somecircle36" @click="BidirectionalMinimumMatchingSegment1">&ndash;&gt;-->
                    <!--&lt;!&ndash;<span class="word1" style="font-size: 12px">双向最小匹配分词</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--</div>-->
                <!--<div v-show="flag === 5">-->
                    <!--<div class="somecircleshengwu">-->
                        <!--<span class="word2">生物领域分词</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle31" @click="page1">-->
                        <!--<span class="word1">召回率最高</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle33" @click="page2">-->
                        <!--<span class="word1">精准率最高</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle35"  @click="page1">-->
                        <!--<span class="word1">F1值最高</span>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div v-show="flag === 6">-->
                    <!--<div class="somecirclejinkuang">-->
                        <!--<span class="word2">金矿领域分词</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle31" @click="page22">-->
                        <!--<span class="word1">召回率最高</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle33" @click="page23">-->
                        <!--<span class="word1">精准率最高</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle35" @click="page24">-->
                        <!--<span class="word1">F1值最高</span>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div v-show="flag === 7">-->
                    <!--<div class="somecirclebuxian">-->
                        <!--<span class="word2">金矿领域分词</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle31" @click="page31">-->
                        <!--<span class="word1">召回率最高</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle33" @click="page32">-->
                        <!--<span class="word1">精准率最高</span>-->
                    <!--</div>-->
                    <!--<div class="somecircle3 somecircle35" @click="page33">-->
                        <!--<span class="word1">F1值最高</span>-->
                    <!--</div>-->
                <!--</div>-->

                <!--<div class="sometext">-->
                    <!--<el-scrollbar style="height: 100%">-->
                        <!--<div>-->
                            <!--<div v-if="flag===0">-->
                                <!--<el-tag v-for="(item, index) in textarea2" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                <!--<div class="infoword" v-if="flag2 === 1">-->
                                    <!--<span>用户自定义词典分词结果：</span>-->
                                    <!--<div style="margin-top: 10px">-->
                                        <!--<div style="margin-left: 20px;font-size: 16px">-->
                                            <!--<span>标准分词结果：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareastand" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color1"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                        <!--</div>-->


                                        <!--<div style="margin-left: 20px;font-size: 16px">-->
                                            <!--<span>索引分词结果：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareaIndex" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color3"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                        <!--</div>-->
                                        <!--&lt;!&ndash;<div style="margin-left: 20px;font-size: 16px">&ndash;&gt;-->
                                        <!--&lt;!&ndash;<span>极速词典分词结果：</span>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<div style="margin-bottom: 10px">&ndash;&gt;-->
                                        <!--&lt;!&ndash;<el-tag v-for="(item, index) in textareanShort" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color4"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<div style="margin-left: 20px;font-size: 16px">&ndash;&gt;-->
                                        <!--&lt;!&ndash;<span>最短路分词结果：</span>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<div style="margin-bottom: 10px">&ndash;&gt;-->
                                        <!--&lt;!&ndash;<el-tag v-for="(item, index) in textareashort" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color5"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<div style="margin-left: 20px;font-size: 16px">&ndash;&gt;-->
                                        <!--&lt;!&ndash;<span>n最短路分词结果：</span>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<div style="margin-bottom: 10px">&ndash;&gt;-->
                                        <!--&lt;!&ndash;<el-tag v-for="(item, index) in textareaSpeed" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color6"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                        <!--<div style="margin-left: 20px;font-size: 16px">-->
                                            <!--<span>NLP分词结果：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareaNLP" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color2"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</div>-->
                            <!--<div v-if="flag===1">-->
                                <!--<el-tag v-for="(item, index) in textarea4" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color"><span style="font-size: 16px;color: white">{{item.name}}</span></el-tag>-->
                                <!--<div class="infoword" v-if="flag3 === 1">-->
                                    <!--<span>用户自定义词典分词结果：</span>-->
                                    <!--<div style="margin-top: 10px">-->
                                        <!--<div style="margin-left: 20px;font-size: 16px">-->
                                            <!--<span>词典优先分词结果：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareaDicAnalysisSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color7"><span style="font-size: 16px;color: white">{{item.name}}</span></el-tag>-->
                                        <!--</div>-->

                                        <!--<div style="margin-left: 20px;font-size: 16px">-->
                                            <!--<span>精准分词结果：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareaToAnalysisSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color8"><span style="font-size: 16px;color: white">{{item.name}}</span></el-tag>-->
                                        <!--</div>-->

                                        <!--<div style="margin-left: 20px;font-size: 16px">-->
                                            <!--<span>面向索引分词结果：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareaIndexAnalysisSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color9"><span style="font-size: 16px;color: white">{{item.name}}</span></el-tag>-->
                                        <!--</div>-->
                                        <!--&lt;!&ndash;<div style="margin-left: 20px;font-size: 16px">&ndash;&gt;-->
                                        <!--&lt;!&ndash;<span>NLP分词结果：</span>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<div style="margin-bottom: 10px">&ndash;&gt;-->
                                        <!--&lt;!&ndash;<el-tag v-for="(item, index) in textareaNlpAnalysisSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color10"><span style="font-size: 16px;color: white">{{item.name}}</span></el-tag>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</div>-->
                            <!--<div v-if="flag===2">-->
                                <!--<el-tag v-for="(item, index) in textarea5" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                <!--<div class="infoword" v-if="flag4 === 1">-->
                                    <!--<span>用户自定义词典分词结果：</span>-->
                                    <!--<div style="margin-top: 10px">-->
                                        <!--<div style="margin-left: 20px;font-size: 16px">-->
                                            <!--<span>jieba分词结果：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareasentenceProcess" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color11"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</div>-->
                            <!--<div v-if="flag===3">-->
                                <!--<el-tag v-for="(item, index) in textarea6" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                <!--<div class="infoword" v-if="flag5 === 1">-->
                                    <!--<span>用户自定义词典分词结果：</span>-->
                                    <!--<div style="margin-top: 10px">-->
                                        <!--<div style="margin-left: 20px;font-size: 16px">-->
                                            <!--<span>Thulac分词结果：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareaThulacSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color12"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</div>-->
                            <!--<div v-if="flag===4">-->
                                <!--<el-tag v-for="(item, index) in textarea7" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                <!--<div class="infoword" v-if="flag6 === 1">-->
                                    <!--<span>用户自定义词典分词结果：</span>-->
                                    <!--<div style="margin-top: 10px">-->
                                        <!--<div style="margin-left: 20px;font-size: 16px">-->
                                            <!--<span>最大正向匹配分词结果：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareaMaximumMatchingSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color13"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                        <!--</div>-->

                                        <!--&lt;!&ndash;<div style="margin-left: 20px;font-size: 16px">&ndash;&gt;-->
                                        <!--&lt;!&ndash;<span>逆向最大匹配分词结果：</span>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<div style="margin-bottom: 10px">&ndash;&gt;-->
                                        <!--&lt;!&ndash;<el-tag v-for="(item, index) in textareaReverseMaximumMatchingSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color14"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->

                                        <!--<div style="margin-left: 20px;font-size: 16px">-->
                                            <!--<span>正向最小匹配分词结果：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareaMinimumMatchingSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color15"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                        <!--</div>-->
                                        <!--&lt;!&ndash;<div style="margin-left: 20px;font-size: 16px">&ndash;&gt;-->
                                        <!--&lt;!&ndash;<span>逆向最小匹配分词结果：</span>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<div style="margin-bottom: 10px">&ndash;&gt;-->
                                        <!--&lt;!&ndash;<el-tag v-for="(item, index) in textareanReverseMinimumMatchingSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color16"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                        <!--<div style="margin-left: 20px;font-size: 16px">-->
                                            <!--<span>双向最大匹配分词结果：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareaBidirectionalMaximumMatchingSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color17"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                        <!--</div>-->
                                        <!--&lt;!&ndash;<div style="margin-left: 20px;font-size: 16px">&ndash;&gt;-->
                                        <!--&lt;!&ndash;<span>双向最小匹配分词结果：</span>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<div style="margin-bottom: 10px">&ndash;&gt;-->
                                        <!--&lt;!&ndash;<el-tag v-for="(item, index) in textareaBidirectionalMinimumMatchingSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color18"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</div>-->
                            <!--<div v-if="flag===5">-->
                                <!--<div v-if="shengwuflag===1">-->
                                    <!--<div>-->
                                        <!--<span>ansj分词器：</span>-->
                                    <!--</div>-->
                                    <!--<div>-->
                                        <!--<el-tag v-for="(item, index) in textarea8" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color"><span style="font-size: 16px;color: white">{{item.name}}</span></el-tag>-->
                                    <!--</div>-->
                                <!--</div>-->
                                <!--<div v-if="Thuflag === 1">-->
                                    <!--<div>-->
                                        <!--<span>Thulac分词器：</span>-->
                                    <!--</div>-->
                                    <!--<div>-->
                                        <!--<el-tag v-for="(item, index) in textarea8" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                    <!--</div>-->
                                <!--</div>-->

                                <!--<div class="infoword" v-if="flag7 === 1">-->
                                    <!--<span>用户自定义词典分词结果：</span>-->
                                    <!--<div style="margin-top: 10px">-->
                                        <!--<div style="margin-left: 20px;">-->
                                            <!--<span>ansj分词器召回率最高：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareaNlpAnalysisSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" color="#FD694E"><span style="font-size: 16px;color: white">{{item.name}}</span></el-tag>-->
                                        <!--</div>-->

                                        <!--<div style="margin-left: 20px;">-->
                                            <!--<span>Thulac分词器准确率最高：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareaThulacSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" color="#4DC9FE"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                        <!--</div>-->

                                        <!--<div style="margin-left: 20px;">-->
                                            <!--<span>ansj分词器F1值最高：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareaNlpAnalysisSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" color="#EEAC39"><span style="font-size: 16px;color: white">{{item.name}}</span></el-tag>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</div>-->
                            <!--<div v-if="flag===6">-->
                                <!--<div v-if="jinkuangflag===1">-->
                                    <!--<div>-->
                                        <!--<span>Thulac分词器：</span>-->
                                    <!--</div>-->
                                    <!--<div>-->
                                        <!--<el-tag v-for="(item, index) in textarea9" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                    <!--</div>-->
                                <!--</div>-->
                                <!--<div v-if="jinkuangThuflag === 1">-->
                                    <!--<div>-->
                                        <!--<span>Thulac分词器：</span>-->
                                    <!--</div>-->
                                    <!--<div>-->
                                        <!--<el-tag v-for="(item, index) in textarea9" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                    <!--</div>-->
                                <!--</div>-->

                                <!--<div class="infoword" v-if="flag8 === 1">-->
                                    <!--<span>用户自定义词典分词结果：</span>-->
                                    <!--<div style="margin-top: 10px">-->
                                        <!--<div style="margin-left: 20px;">-->
                                            <!--<span>Thulac分词器召回率最高：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareaThulacSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" color="#FD694E"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                        <!--</div>-->

                                        <!--<div style="margin-left: 20px;">-->
                                            <!--<span>Thulac分词器准确率最高：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareaThulacSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" color="#4DC9FE"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                        <!--</div>-->

                                        <!--<div style="margin-left: 20px;">-->
                                            <!--<span>Thulac分词器F1值最高：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareaThulacSegment" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" color="#EEAC39"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</div>-->
                            <!--<div v-if="flag===7">-->
                                <!--<div>-->
                                    <!--<div>-->
                                        <!--<span>hanlp分词器：</span>-->
                                    <!--</div>-->
                                    <!--<div>-->
                                        <!--<el-tag v-for="(item, index) in textarea10" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" :color="color"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                    <!--</div>-->
                                <!--</div>-->

                                <!--<div class="infoword" v-if="flag9 === 1">-->
                                    <!--<span>用户自定义词典分词结果：</span>-->
                                    <!--<div style="margin-top: 10px">-->
                                        <!--<div style="margin-left: 20px;">-->
                                            <!--<span>Thulac分词器召回率最高：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareastand" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" color="#FD694E"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                        <!--</div>-->

                                        <!--<div style="margin-left: 20px;">-->
                                            <!--<span>Thulac分词器准确率最高：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareastand" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" color="#4DC9FE"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                        <!--</div>-->

                                        <!--<div style="margin-left: 20px;">-->
                                            <!--<span>Thulac分词器F1值最高：</span>-->
                                        <!--</div>-->
                                        <!--<div style="margin-bottom: 10px">-->
                                            <!--<el-tag v-for="(item, index) in textareastand" :key="index"  :disable-transitions="false" size="mini" style="margin-left: 5px;margin-top: 10px" color="#EEAC39"><span style="font-size: 16px;color: white">{{item}}</span></el-tag>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->


                    <!--</el-scrollbar>-->


                <!--</div>-->
                <!--<div class="sometext1">-->
                    <!--<span class="wordtext">用户自定义词典</span>-->
                    <!--<div style="width: 150px;height: 120px">-->
                        <!--<el-input type="textarea" :autosize="{ minRows: 5, maxRows: 5}" style="margin-top: 10px" v-model="textarea3"></el-input>-->
                    <!--</div>-->
                    <!--&lt;!&ndash;<el-input type="textarea" class="sometext2"  :autosize="{ minRows: 2, maxRows: 4}"></el-input>&ndash;&gt;-->
                    <!--<el-button type="primary" size="mini" plain class="somebutton" @click="importword">导入</el-button>-->
                <!--</div>-->

            <!--</div>-->
            <!--<div class="circlehome">-->
                <!--<div class="circle circle1" @click="changepage1">-->
                    <!--<span class="word1">Hanlp分词</span>-->
                <!--</div>-->
                <!--<div class="circle circle2" @click="changepage2">-->
                    <!--<span class="word1">ansj分词器</span>-->
                <!--</div>-->
                <!--<div class="circle circle3" @click="changepage3">-->
                    <!--<span class="word1">jieba分词器</span>-->
                <!--</div>-->
                <!--<div class="circle circle4" @click="changepage4">-->
                    <!--<span class="word1">Thulac分词器</span>-->
                <!--</div>-->
                <!--<div class="circle circle5" @click="changepage5">-->
                    <!--<span class="word1">Word分词器</span>-->
                <!--</div>-->
                <!--<div class="circle circle6" @click="changepage6">-->
                    <!--<span class="word1">生物领域分词</span>-->
                <!--</div>-->
                <!--<div class="circle circle7" @click="changepage7">-->
                    <!--<span class="word1">金矿领域分词</span>-->
                <!--</div>-->
                <!--<div class="circle circle8" @click="changepage8">-->
                    <!--<span class="word1">不限领域分词</span>-->
                <!--</div>-->
            <!--</div>-->

        </div>
        <!--<div style="background-color: #333333">-->
            <!--<div style="margin: 0 auto;width: 80%">-->
                <!--<Footer/>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    import HomeHeader from "@/components/common/HomeHeader";
    import Footer from "@/components/common/Footer";
    export default {
        name: "ChineseParticiple",
        components: {
            Footer,
            HomeHeader
        },
        data() {
            return {
                textarea1: '\n' +
                    '母亲，对于任何人来说，都是那么神圣，那么亲切。我知道祖国是我们的伟大母亲，因为我们每个人的生命、欢乐和幸福都与祖国母亲的安危息息相关，紧密相连，我感到身在祖国温暖的怀抱中是多么的骄傲',
                flag: 0,
                textarea2: [],
                color: '',
                flag2: 0,
                flag3: 0,
                flag4: 0,
                flag5: 0,
                flag6: 0,
                flag7: 0,
                flag8: 0,
                flag9: 0,
                disableds: false,
                textarea3: '',
                textarea4: [],
                textarea5: [],
                textarea6: [],
                textarea7: [],
                textarea8: [],
                textarea9: [],
                textarea10: [],
                textareastand: [],
                textareaNLP: [],
                textareaIndex: [],
                textareanShort: [],
                textareashort: [],
                textareaSpeed: [],
                textareaDicAnalysisSegment: [],
                textareaToAnalysisSegment: [],
                textareaIndexAnalysisSegment: [],
                textareaNlpAnalysisSegment: [],
                textareasentenceProcess: [],
                textareaThulacSegment: [],
                textareaMaximumMatchingSegment: [],
                textareaReverseMaximumMatchingSegment: [],
                textareaMinimumMatchingSegment: [],
                textareanReverseMinimumMatchingSegment: [],
                textareaBidirectionalMaximumMatchingSegment: [],
                textareaBidirectionalMinimumMatchingSegment: [],
                textareapage1: [],
                textareapage2: [],
                textareapage3: [],
                textareapage4: [],
                textareapage5: [],
                textareapage6: [],
                textareapage7: [],
                textareapage8: [],
                textareapage9: [],
                textareapage10: [],
                textareapage11: [],
                textareapage12: [],
                textareapage13: [],
                textareapage14: [],
                textareapage15: [],
                textareapage16: [],
                textareapage17: [],
                textareapage18: [],
                shengwuflag: 0,
                Thuflag: 0,
                F1flag: 0,
                jinkuangflag: 0,
                jinkuangThuflag: 0,
                buxianflag: 0,
                buxianjinflag: 0,
                color1: '',
                color2: '',
                color3: '',
                color4: '',
                color5: '',
                color6: '',
                color7: '',
                color8: '',
                color9: '',
                color10: '',
                color11: '',
                color12: '',
                color13: '',
                color14: '',
                color15: '',
                color16: '',
                color17: '',
                color18: '',
            }
        },
        methods: {
            changepage1() {
                this.flag = 0
                console.log(this.flag)
            },
            changepage2() {
                this.flag = 1
            },
            changepage3 () {
                this.flag = 2
            },
            changepage4 () {
                this.flag = 3
            },
            changepage5 () {
                this.flag = 4
            },
            changepage6 () {
                this.flag = 5
            },
            changepage7 () {
                this.flag = 6
            },
            changepage8 () {
                this.flag = 7
            },
            inputchange () {
                this.disableds = false
            },
            Startdeal () {
                this.Standard()
                this.NLP()
                this.Index()
                this.nShortSegment()
                this.shortSegment()
                this.SpeedTokenizerSegment()
                this.DicAnalysisSegment()
                this.ToAnalysisSegment()
                this.IndexAnalysisSegment()
                this.NlpAnalysisSegment()
                this.sentenceProcess()
                this.ThulacSegment()
                this.MaximumMatchingSegment()
                this.ReverseMaximumMatchingSegment()
                this.MinimumMatchingSegment()
                this.ReverseMinimumMatchingSegment()
                this.BidirectionalMaximumMatchingSegment()
                this.BidirectionalMinimumMatchingSegment()
                this.disableds = true
                localStorage.setItem('text', this.textarea1)
            },
            Standard1 () {
                this.textarea2 = this.textareapage1
                this.color = '#FD694E'
            },
            NLP1 () {
                this.textarea2 = this.textareapage2
                this.color = '#EEAC39'
            },
            Index1 () {
                this.textarea2 = this.textareapage3
                this.color = '#4DC9FE'
            },
            nShortSegment1 () {
                this.textarea2 = this.textareapage4
                this.color = '#E9D602'
            },
            shortSegment1 () {
                this.textarea2 = this.textareapage5
                this.color = '#EEAC39'
            },
            SpeedTokenizerSegment1 () {
                this.textarea2 = this.textareapage6
                this.color = '#91A5FE'
            },
            Standard () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/StandardTokenizerSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textareapage1 = res.data.segment
                })
            },
            NLP () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/NLPTokenizerSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textareapage2 = res.data.segment
                })
            },
            Index () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/IndexTokenizerSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textareapage3 = res.data.segment
                })
            },
            nShortSegment () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/nShortSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textareapage4 = res.data.segment
                })
            },
            shortSegment () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/shortSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textareapage5 = res.data.segment
                })
            },
            SpeedTokenizerSegment () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/SpeedTokenizerSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textareapage6 = res.data.segment
                })
            },
            StandardTokenizerSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/StandardTokenizerSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareastand = res.data.segment
                    this.color1 = '#FD694E'
                })
            },
            NLPTokenizerSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/NLPTokenizerSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareaNLP = res.data.segment
                    this.color2 = '#EEAC39'
                })
            },
            IndexTokenizerSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/IndexTokenizerSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareaIndex = res.data.segment
                    this.color3 = '#4DC9FE'
                })
            },
            nShortSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/nShortSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareanShort = res.data.segment
                    this.color4 = '#E9D602'
                })
            },
            shortSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/shortSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareashort = res.data.segment
                    this.color5 = '#EEAC39'
                })
            },
            SpeedTokenizerSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/SpeedTokenizerSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareaSpeed = res.data.segment
                    this.color6 = '#91A5FE'
                })
            },
            DicAnalysisSegment () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/DicAnalysisSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textareapage7 = res.data.segment.terms
                })
            },
            ToAnalysisSegment () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/ToAnalysisSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textareapage8 = res.data.segment.terms
                })
            },
            IndexAnalysisSegment () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/IndexAnalysisSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textareapage9 = res.data.segment.terms
                })
            },
            NlpAnalysisSegment () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/NlpAnalysisSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textareapage10 = res.data.segment.terms
                })
            },
            DicAnalysisSegment1 () {
                this.textarea4 = this.textareapage7
                this.color = '#FD694E'
            },
            ToAnalysisSegment1 () {
                this.textarea4 = this.textareapage8
                this.color = '#4DC9FE'
            },
            IndexAnalysisSegment1 () {
                this.textarea4 = this.textareapage9
                this.color = '#EEAC39'
            },
            NlpAnalysisSegment1 () {
                this.textarea4 = this.textareapage10
                this.color = '#5A58D6'
            },
            DicAnalysisSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/DicAnalysisSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareaDicAnalysisSegment = res.data.segment.terms
                    this.color7 = '#FD694E'
                })
            },
            ToAnalysisSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/ToAnalysisSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareaToAnalysisSegment = res.data.segment.terms
                    this.color8 = '#4DC9FE'
                })
            },
            IndexAnalysisSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/IndexAnalysisSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareaIndexAnalysisSegment = res.data.segment.terms
                    this.color9 = '#EEAC39'
                })
            },
            NlpAnalysisSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/NlpAnalysisSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareaNlpAnalysisSegment = res.data.segment.terms
                    this.color10 = '#5A58D6'
                })
            },
            sentenceProcess () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/sentenceProcess?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textareapage11 = res.data.segment
                })
            },
            sentenceProcess1() {
                this.textarea5 = this.textareapage11
                this.color = '#FD694E'
            },
            sentenceProcessDictionary () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/sentenceProcessDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareasentenceProcess = res.data.segment
                    this.color11 = '#FD694E'
                })
            },
            ThulacSegment () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/ThulacSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textareapage12 = res.data.segment
                })
            },
            ThulacSegment1 () {
                this.textarea6 = this.textareapage12
                this.color = '#FD694E'
            },
            ThulacSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/ThulacSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareaThulacSegment = res.data.segment
                    this.color12 = '#FD694E'
                })
            },
            MaximumMatchingSegment () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/MaximumMatchingSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textareapage13 = res.data.segment
                })
            },
            ReverseMaximumMatchingSegment () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/ReverseMaximumMatchingSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textareapage14 = res.data.segment
                })
            },
            MinimumMatchingSegment () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/MinimumMatchingSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textareapage15 = res.data.segment
                })
            },
            ReverseMinimumMatchingSegment () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/ReverseMinimumMatchingSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textareapage16 = res.data.segment
                })
            },
            BidirectionalMaximumMatchingSegment () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/BidirectionalMaximumMatchingSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textareapage17 = res.data.segment
                })
            },
            BidirectionalMinimumMatchingSegment () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/BidirectionalMinimumMatchingSegment?sentence=' + this.textarea1
                this.$axios.get(url).then((res) => {
                    this.textareapage18 = res.data.segment
                })
            },
            MaximumMatchingSegment1 () {
                this.textarea7 = this.textareapage13
                this.color = '#FD694E'
            },
            ReverseMaximumMatchingSegment1 () {
                this.textarea7 = this.textareapage14
                this.color = '#5A58D6'
            },
            MinimumMatchingSegment1 () {
                this.textarea7 = this.textareapage15
                this.color = '#4DC9FE'
            },
            ReverseMinimumMatchingSegment1 () {
                this.textarea7 = this.textareapage16
                this.color = '#E9D602'
            },
            BidirectionalMaximumMatchingSegment1 () {
                this.textarea7 = this.textareapage17
                this.color = '#EEAC39'
            },
            BidirectionalMinimumMatchingSegment1 () {
                this.textarea7 = this.textareapage15
                this.color = '#90A5FD'
            },
            MaximumMatchingSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/MaximumMatchingSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareaMaximumMatchingSegment = res.data.segment
                    this.color13 = '#FD694E'
                })
            },
            ReverseMaximumMatchingSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/ReverseMaximumMatchingSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareaReverseMaximumMatchingSegment = res.data.segment
                    this.color14 = '#5A58D6'
                })
            },
            MinimumMatchingSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/MinimumMatchingSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareaMinimumMatchingSegment = res.data.segment
                    this.color15 = '#4DC9FE'
                })
            },
            ReverseMinimumMatchingSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/ReverseMinimumMatchingSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareanReverseMinimumMatchingSegment = res.data.segment
                    this.color16 = '#E9D602'
                })
            },
            BidirectionalMaximumMatchingSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/BidirectionalMaximumMatchingSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareaBidirectionalMaximumMatchingSegment = res.data.segment
                    this.color17 = '#90A5FD'
                })
            },
            BidirectionalMinimumMatchingSegmentDictionary () {
                var url = 'http://zhongkeruitong.top/show/AIPlatform/BidirectionalMinimumMatchingSegmentDictionary?sentence=' + this.textarea1 + '&userDefine=' + this.textarea3
                this.$axios.get(url).then((res) => {
                    this.textareaBidirectionalMinimumMatchingSegment = res.data.segment
                    this.color18 = '#EEAC39'
                })
            },
            page1 () {
                this.textarea8 = this.textareapage10
                this.color = '#FD694E'
                this.shengwuflag = 1
                this.Thuflag = 0
            },
            page2 () {
                this.textarea8 = this.textareapage12
                this.color = '#4DC9FE'
                this.shengwuflag = 0
                this.Thuflag = 1
                // this.shengwuflag = 1
                // this.Thuflag = 0
            },
            page22 () {
                this.textarea9 = this.textareapage12
                this.color = '#FD694E'
                this.jinkuangflag = 1
                this.jinkuangThuflag = 0
            },
            page23 () {
                this.textarea9 = this.textareapage12
                this.color = '#4DC9FE'
                this.jinkuangflag = 0
                this.jinkuangThuflag = 1
            },
            page24 () {
                this.color = '#EEAC39'
            },
            page31 () {
                this.textarea10 = this.textareapage1
                this.color = '#FD694E'
            },
            page32 () {
                this.color = '#4DC9FE'
            },
            page33 () {
                this.color = '#EEAC39'
            },
            importword () {
                if (this.flag === 0) {
                    this.flag2 = 1
                    this.StandardTokenizerSegmentDictionary()
                    this.NLPTokenizerSegmentDictionary()
                    this.IndexTokenizerSegmentDictionary()
                    this.nShortSegmentDictionary()
                    this.shortSegmentDictionary()
                    this.SpeedTokenizerSegmentDictionary()
                }
                if (this.flag === 1) {
                    this.flag3 = 1
                    this.DicAnalysisSegmentDictionary()
                    this.ToAnalysisSegmentDictionary()
                    this.IndexAnalysisSegmentDictionary()
                    this.NlpAnalysisSegmentDictionary()
                }
                if (this.flag === 2) {
                    this.flag4 =1
                    this.sentenceProcessDictionary()
                }
                if (this.flag === 3) {
                    this.flag5 =1
                    this.ThulacSegmentDictionary()
                }
                if (this.flag === 4) {
                    this.flag6 =1
                    this.MaximumMatchingSegmentDictionary()
                    this.ReverseMaximumMatchingSegmentDictionary()
                    this.MinimumMatchingSegmentDictionary()
                    this.ReverseMinimumMatchingSegmentDictionary()
                    this.BidirectionalMaximumMatchingSegmentDictionary()
                    this.BidirectionalMinimumMatchingSegmentDictionary()
                }
                if (this.flag === 5) {
                    this.flag7 = 1
                    this.NlpAnalysisSegmentDictionary()
                    this.ThulacSegmentDictionary()
                }
                if (this.flag === 6) {
                    this.flag8 = 1
                    this.ThulacSegmentDictionary()
                }
                if (this.flag === 7) {
                    this.flag9 = 1
                    this.StandardTokenizerSegmentDictionary()
                }
            }
        }
    }
</script>

<style scoped>
    .contents {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        box-sizing: border-box;

    }
    .home {
        background-color: #EAEBED;
        /*margin-top: 141px;*/
        width: 100%;
        position: relative;
    }
    .home_textarea {
        width: 1200px;
        margin: 0 auto;
    }
    .textarea {
        margin-top: 60px;
        margin-bottom: 40px;
    }
    .home_button {
        width: 140px;
        margin: 0 auto;
    }
    .button {
        width: 140px;
        background-color: #3467A5;
        color: white;
        margin-bottom: 40px;
    }
    .button:hover {
        color: #dea726;
    }
    .home_some {
        margin-top: 60px;
        height: 800px;
        background-color: #3467A5;
        position: relative;
    }
    .somebac {
        background-color: rgba(255, 255, 255, 0.6);
        height: 521px;
        width: 70%;
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
        top: 110px;
        left: 190px;
    }
    .somecircle2 {
        width: 150px;
        height: 150px;
        background-color: #FDB790;
        border-radius: 50%;
        position: absolute;
        top: 120px;
        left: 200px;
        text-align:center;
    }
    .somecircleansj {
        width: 150px;
        height: 150px;
        background-color: #FDCE91;
        border-radius: 50%;
        position: absolute;
        top: 120px;
        left: 200px;
        text-align:center;
    }
    .somecirclejieba {
        width: 150px;
        height: 150px;
        background-color: #E8D601;
        border-radius: 50%;
        position: absolute;
        top: 120px;
        left: 200px;
        text-align:center;
    }
    .somecircleThulac {
        width: 150px;
        height: 150px;
        background-color: #FC694D;
        border-radius: 50%;
        position: absolute;
        top: 120px;
        left: 200px;
        text-align:center;
    }
    .somecircleWord {
        width: 150px;
        height: 150px;
        background-color: #3EC6FD;
        border-radius: 50%;
        position: absolute;
        top: 120px;
        left: 200px;
        text-align:center;
    }
    .somecircleshengwu {
        width: 150px;
        height: 150px;
        background-color: #90A5FD;
        border-radius: 50%;
        position: absolute;
        top: 120px;
        left: 200px;
        text-align:center;
    }
    .somecirclejinkuang {
        width: 150px;
        height: 150px;
        background-color: #5958D5;
        border-radius: 50%;
        position: absolute;
        top: 120px;
        left: 200px;
        text-align:center;
    }
    .somecirclebuxian {
        width: 150px;
        height: 150px;
        background-color: #4645AA;
        border-radius: 50%;
        position: absolute;
        top: 120px;
        left: 200px;
        text-align:center;
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
        top: 300px;
        left: 16%;
    }
    .somecircle32 {
        background-color: #5A58D6;
        top: 300px;
        left: 24%;
    }
    .somecircle33 {
        background-color: #4DC9FE;
        top: 420px;
        left: 16%;
    }
    .somecircle34 {
        background-color: #E9D602;
        top: 420px;
        left: 24%;
    }
    .somecircle35 {
        background-color: #EEAC39;
        top: 540px;
        left: 16%;
    }
    .somecircle36 {
        background-color: #91A5FE;
        top: 540px;
        left: 24%;
    }
    .sometext {
        width: 600px;
        height: 400px;
        background-color: white;
        border: 1px solid black;
        position: absolute;
        top: 55%;
        left: 55%;
        transform: translate(-55%, -55%);

    }
    .sometext1 {
        position: absolute;
        top: 65%;
        left: 82%;
        transform: translate(-82%, -65%);
    }
    .sometext2 {
        width: 150px;
        /*height: 120px;*/
        background-color: white;
        border: 1px solid black;
        margin-top: 10px;
    }
    .wordtext {
        color: black;
        font-weight: bold;
    }
    .somebutton {
        margin-top: 10px;
    }
    .circlehome {
        height: 100px;
        position: absolute;
        left: 50%;
        top: 515px;
        transform: translate(-50%, 0);
        /*width: 80%;*/
        margin: 0 auto;
        display: flex;
    }
    .circlehome div{
        /*height: 100%;*/
        flex: 1;
        margin-left: 45px;
    }
    .circle {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        text-align:center;
        transition: all 0.6s;
        cursor: pointer;
    }
    .circle:hover {
        transform: translateY(-10px);
        box-shadow: -2px 5px 1px #000;
    }
    .circle1 {
        background-color: #FDB790;
        /*left: 220px;*/
    }
    .circle2 {
        background-color: #FDCE91;
        /*left: 380px;*/
    }
    .circle3 {
        background-color: #E8D601;
        /*left: 540px;*/
    }
    .circle4 {
        background-color: #FC694D;
        /*left: 700px;*/
    }
    .circle5 {
        background-color: #3EC6FD;
        /*left: 860px;*/
    }
    .circle6 {
        background-color: #90A5FD;
        /*left: 1020px;*/
    }
    .circle7 {
        background-color: #5958D5;
        /*left: 1180px;*/
    }
    .circle8 {
        background-color: #4645AA;
        /*left: 1340px;*/
    }
    .word1 {
        vertical-align:middle;
        line-height: 100px;
        color: white;
        font-weight: bold;
    }
    .word2 {
        vertical-align:middle;
        line-height: 150px;
        color: white;
        font-weight: bold;
        font-size: 20px;
    }
    .infoword {
        margin-top: 20px;
        margin-left: 10px;
        font-size: 18px;
    }
    .imghome {
        background-color: #DDDEE0;
    }
    .imghome img {
        margin-left: 15%;
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
