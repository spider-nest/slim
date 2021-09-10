<script>
  let count = 0;
  const increment = () => {
    count += 1;
  };
  console.log(increment);
</script>

<div class="app">
  <div class="container">
    <header class="header">
      <div class="userinfo">
        统帅大人，请<a class="userinfo__login" href="javascript:;">登录</a>
      </div>
      <div class="remain">联系客服</div>
    </header>
    <main class="main">main</main>
    <footer class="footer">
      <a class="rule" href="javascript:;">活动规则</a>
      <p class="other">本活动最终解释权归蚁族崛起所有</p>
    </footer>
  </div>
</div>

<style lang="less">
  @import "./index.less";
</style>
