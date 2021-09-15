<script>
  import {
    appName,
    appDescription,
    appKeywords,
    appAuthor,
  } from "$configs/app";

  import "$styles/routes/index.less";

  let href = "javascript:;";
</script>

<svelte:head>
  <meta name="description" content="{appDescription}" />
  <meta name="keywords" content="{appKeywords}" />
  <meta name="author" content="{appAuthor}" />
  <title>{appName}</title>
</svelte:head>

<div class="container">
  <header class="header">
    <div class="header__user">
      统帅大人，请<a href="{href}">登录</a>
    </div>
    <div class="header__staff">联系客服</div>
  </header>
  <main class="main"></main>
  <footer class="footer">
    <a class="footer__rule" href="{href}">活动规则</a>
    <div class="footer__copyright">本活动最终解释权归蚁族崛起所有</div>
  </footer>
</div>
