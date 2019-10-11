<template>
    <div>
        <el-alert
            title="规则二： 清洗乱码"
            type="warning">
        </el-alert>
        <div class="rule1">
            <div class="back">
                <el-scrollbar style="height: 100%" class="scrollbar">
                    <div style="margin-top: 20px;margin-left: 20px;margin-right: 20px">{{result}}</div>
                </el-scrollbar>
            </div>
            <el-button class="button" @click="Deal" type="primary"  plain>点击处理</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "startdeal2",
        data () {
            return {
                result: ''
            }
        },
        methods: {
            Deal () {
                this.result = localStorage.getItem('rule2')
            }
        }
    }
</script>

<style scoped>
    .rule1 {
        height: 500px;
        background-color: #3467A5;
        text-align: center;
        padding-top: 60px;

    }
    .back {
        width: 900px;
        height: 400px;
        background-color: white;
        margin: 0 auto;
    }
    .button {
        margin-top: 20px;
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
