<template>
  <div class="homefooter">
    <div class="word">
      <div style="margin-top: 20px">
        <span>产品</span>
        <ul>
          <li><a href="#">数据融合平台</a></li>
          <li><a href="#">智能化工具平台</a></li>
          <li><a href="#">智能校园</a></li>
          <li><a href="#">腾讯课堂</a></li>
        </ul>
      </div>
    </div>
    <div class="word">
      <div style="margin-top: 20px">
        <span>关于我们</span>
        <ul>
          <li><a href="#">发展历程</a></li>
          <li><a @click="gotoaboutus">了解我们</a></li>
          <li><a href="#">联系我们</a></li>
        </ul>
      </div>
    </div>
    <div class="word">
      <div style="margin-top: 20px">
        <span>资讯</span>
        <ul>
          <li><a href="#">相关新闻</a></li>
          <li><a href="#">行业动态</a></li>
          <li><a href="#">技术分享</a></li>
        </ul>
      </div>
    </div>
    <div class="word">
      <div style="margin-top: 20px">
        <span>联系我们</span>
        <ul>
          <li><i class="el-icon-phone icon"></i><a href="#">13381173397</a></li>
          <li><i class="el-icon-message icon"></i><a href="#">zkzh_edu@126.com</a></li>
        </ul>
      </div>
    </div>
    <div>
      <div class="weima">
        <img src="../../assets/erweima.jpg" width="100px">
        <div>
          <span>扫一扫关注我们</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
    methods: {
        gotoaboutus () {
            this.$router.push('/AboutUs')
        }
    }
}
</script>

<style scoped>
  .homefooter {
    height: 300px;
    position: relative;
    display: flex;
    /*margin-top: 120px;*/
  }
  /*.homefooter .footer5 {*/
    /*flex: 2;*/
  /*}*/
  .homefooter div {
    flex: 1;
  }
  .word {
    text-align: left;
    font-size: 18px;
  }
  .word span {
      color: white;
  }
  a {
    text-decoration: none;
    font-size: 16px;
    color: #C0C0C0;
  }
  li {
    margin-top: 20px;
  }
  ul {
    list-style: none;
  }
  .icon {
    margin-right: 10px;
    color: #C0C0C0
  }
  .weima {
    margin: 20px auto;
    width: 120px;
    float: right;
      text-align: center;
  }
    .weima span {
        color: white;
    }
</style>
