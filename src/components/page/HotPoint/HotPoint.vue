<template>
    <div>
        <div style="width: 80%;margin: 0 auto">
            <div class="titletext">
                <span>热词发现</span>
            </div>
            <div style="width: 70%;margin: 40px auto">
                <el-input style="margin-right: 20px;width: 80%" v-model="word" placeholder="请输入实体词"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="getData">查询</el-button>
            </div>
        </div>
        <div style="width: 800px;margin: 10px auto">
            <div  style="width: 200px;margin: 10px auto">
                <el-radio-group v-model="reverse">
                    <el-radio :label="true">倒序</el-radio>
                    <el-radio :label="false">正序</el-radio>
                </el-radio-group>
            </div>
            <el-timeline :reverse="reverse" style="margin-top: 20px">
                <el-timeline-item  placement="top" v-for="(item, index) in dataList" :key="index" :timestamp="item.startTime+'年'" color="#0bbd87" size="large">
                    <el-card  class="cardbg">
                        <h4 style="margin-left: 5%">热词</h4>
                        <div style="margin-top: 20px;margin-left: 5%">
                            <el-tag v-for="(itemword, indexword) in item.hotWord" :key="indexword" style="margin-left: 20px">
                                {{itemword}}
                            </el-tag>
                        </div>
                        <h4 style="margin-left: 5%;margin-top: 20px">文献</h4>
                        <div v-for="(itemtitle, indextitle) in item.title" :key="indextitle" style="margin-top: 20px;margin-left: 10%">
                            <h4 style="color: #8c939d">{{indextitle+1}}、文献标题</h4>
                            <p style="margin-top: 10px;color: #666666;font-size: 16px;font-weight: bold">{{itemtitle.title}}</p>
                            <p style="margin-top: 10px">
                                <span>作者：</span>
                                <span style="color: #009999;font-weight: bold">{{itemtitle.author}}</span>
                            </p>
                        </div>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HotPoint",
        data () {
            return {
                word: '金矿',
                dataList: [],
                reverse: true,
            }
        },
        mounted () {
          this.getData()
        },
        methods: {
            getData () {
                const loading = this.$loading({
                    lock: true,
                    text: '正在加载中，请稍后',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                var url = 'http://zhongkeruitong.top/AIshow/AIPlatform/findHot?entity=' + this.word
                this.$axios.post(url).then((res) => {
                    this.dataList = res.data.info
                    loading.close()
                })
            }
        }
    }
</script>

<style scoped>
    .titletext {
        width: 200px;
        font-size: 28px;
        /*text-align: center;*/
        margin: 20px auto;
        color: #0099CC;
    }
    .cardbg {
        background-color: #d3d9de;
        background-image: linear-gradient(62deg, #d3d9de 0%, #d8d3d3 50%, #d8d4d4 100%);









    }
</style>
