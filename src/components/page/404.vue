<template>
  <div>
    <div class="weekend-box">
      <div class="weekend">
        <label class="demo--label">
                    <input class="demo--radio" type="checkbox" id="chk-MS" onclick="ClassTableTime.chkChange(this);">
                    <span class="demo--checkbox demo--radioInput" for="chk-MS"></span>早自习
                </label>
      </div>
      <div class="weekend">
                <label class="demo--label">
                    <input class="demo--radio" type="checkbox" id="chk-AM" onclick="ClassTableTime.chkChange(this);" checked="checked">
                    <span class="demo--checkbox demo--radioInput" for="chk-AM"></span>上午
                </label>
            </div>
            <div class="weekend">
                <label class="demo--label">
                    <input class="demo--radio" type="checkbox" id="chk-AB" onclick="ClassTableTime.chkChange(this);" checked="checked">
                    <span class="demo--checkbox demo--radioInput" for="chk-AB"></span>上午大课间
                </label>
            </div>
            <div class="weekend">

                <label class="demo--label">
                    <input class="demo--radio" type="checkbox" id="chk-NS" onclick="ClassTableTime.chkChange(this);" checked="checked">
                    <span class="demo--checkbox demo--radioInput" for="chk-NS"></span>午休
                </label>
            </div>
            <div class="weekend">

                <label class="demo--label">
                    <input class="demo--radio" type="checkbox" id="chk-PM" onclick="ClassTableTime.chkChange(this);" checked="checked">
                    <span class="demo--checkbox demo--radioInput" for="chk-PM"></span>下午
                </label>
            </div>
            <div class="weekend">

                <label class="demo--label">
                    <input class="demo--radio" type="checkbox" id="chk-PB" onclick="ClassTableTime.chkChange(this);">
                    <span class="demo--checkbox demo--radioInput" for="chk-PB"></span>下午大课间
                </label>
            </div>
            <div class="weekend">


                <label class="demo--label">
                    <input class="demo--radio" type="checkbox" id="chk-ES" onclick="ClassTableTime.chkChange(this);">
                    <span class="demo--checkbox demo--radioInput" for="chk-ES"></span>晚自习
                </label>
            </div>
    </div>
        <div class="">
          
        </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  //import Explain from "static/js/classtabletime.js"
  export default {
    
    
    data: function () {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>
 
<style scoped>
.weekend-box {
    display: inline-block;
    vertical-align: bottom;
    margin-left: 30px;
}
.weekend {
    display: inline-block;
    font-size: 14px;
    /* padding: 8px 25px 10px; */
}
.weekend-box > .weekend > .demo--label {
    margin: 0px 20px -5px 0;
}
.weekend input {
    margin-top: 0;
    margin-right: 5px;
    vertical-align: middle;
    cursor: pointer;
}

input[type=checkbox], input[type=radio] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}
.demo--checkbox.demo--radioInput {
    content: '\2714';
    color: #4285f4;
    padding-bottom: 2px;
    font-weight: bold;
    margin-bottom: 1px;
}
.class-hour-table {
    border: 1px solid #ddd;
    text-align: center;
    cursor: pointer;
    margin: 0 auto;
}
table {
    background-color: transparent;
}
.class-hour-table tr {
    width: 100%;
    height: 40px;
    text-align: center;
}
.table-left > tbody > tr > th {
    text-align: left;
    padding: 0 8px;
}
.table-area tbody tr td:first-child {
    min-width: 150px;
}
.class-hour-table tr td {
    height: 40px;
    border: 1px solid #ddd;
}
.class-hour-table .AB > td:first-child {
    /* background: #fff; */
    cursor: pointer;
    border-right: 1px solid #ddd;
    background: #fff;
}
.class-hour-table tr td > span {
    display: inline;
    vertical-align: middle;
}
.class-hour-table tr td > span {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* width: 57px; */
    text-align: center;
    margin: 0 auto;
}
.section-icon > .fa {
    font-size: 16px;
    vertical-align: middle;
}
.add-section {
    color: #4285f4;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.timer-text {
    color: #666;
    margin: 0 4px;
}





























































/* 创建课程中的第二步------课位区域作息时间---开始 */

.quick-set-box {
    margin-bottom:6px;
}

.quick-set-box > .quick-set-tit {
    font-size:16px;
    font-weight:bold;
    display: block;
    border-bottom: 1px solid #eaeaea;
    padding-bottom:3px;
    margin-bottom:4px;
}
.quick-set-box > .quick-set-ul{
    
}

.quick-set-box > .quick-set-ul > label{
    display:block;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    margin: 10px 0;
}

.quick-set-box  > .no-quick-set{
     text-align: center;
    display: block;
    margin: 6px 0 3px;
}
/* 上下午课间禁止选课样式调整 */
.AB{
    cursor:default;
    /*background:#ddd;*/
}
.class-hour-table .AB > td:first-child{
    /* background:#fff;*/
    cursor:pointer;
    border-right:1px solid #ddd;
    background:#fff;
}
.class-hour-table .AB > td{
    border:none;
    background:#efefef;
}

.NS{
    cursor:default;
    /*background:#ddd;*/
}
.class-hour-table .NS > td:first-child{
    /* background:#fff;*/
    cursor:pointer;
    border-right:1px solid #ddd;
    background:#fff;
}
.class-hour-table .NS > td{
    border:none;
    background:#efefef;
}

.PB{
    cursor:default;
    /*background:#ddd;*/
}
.class-hour-table .PB > td:first-child{
    /* background:#fff;*/
    cursor:pointer;
    border-right:1px solid #ddd;
    background:#fff;
}
.class-hour-table .PB > td{
    border:none;
    background:#efefef;
}


.rest-hour-table{

}

.rest-hour-table > tbody > tr > td:nth-child(2) > a{
    color:#333;
}
</style>