<template>
    <div id="app">
        <router-view v-if="isRouterAlive"></router-view>
    </div>
</template>
<script>
    export default {
        provide () {
            return {
                reload: this.reload
            }
        },
        data() {
            return {
                isRouterAlive: true
            }
        },
        methods: {
            reload() {
                this.isRouterAlive = false;
                this.$nextTick(function () {
                    this.isRouterAlive = true
                })
            }
        }
    }
</script>

<style>
    @import "../static/css/main.css";
    @import "../static/css/color-dark.css";     /*深色主题*/
    /*@import "../static/css/theme-green/color-green.css";   浅绿色主题*/
    /*.el-dialog {*/
        /*background-image: url("./assets/bg.jpg");*/
        /*background-size: 100% 100%;*/
        /*position: relative;*/
    /*}*/
    /*.el-scrollbar__wrap{*/
        /*overflow-x: hidden;*/
    /*}*/
    /*.el-upload--text {*/
        /*width: 80px;*/
        /*height: 32px;*/
        /*background-color: #EAEBED;*/
        /*border: 0 solid;*/
    /*}*/
    .el-textarea.is-disabled .el-textarea__inner {
        color: black;
    }
</style>
