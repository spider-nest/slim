<script>
  import {
    appName,
    appDescription,
    appKeywords,
    appAuthor,
  } from "$configs/app";

  import logoPng from "$assets/logo.png";
  import logoIconPng from "$assets/logo-icon.png";
  import heroIconPng from "$assets/hero-icon.png";
  import probabilityFormulaPng from "$assets/probability-formula.png";

  import { SlimModal } from "$components";

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
    <div class="header__staff">
      <a href="{href}">联系客服</a>
    </div>
  </header>
  <main class="main">
    <div>
      <img class="main__logo" src="{logoPng}" alt="{appName}" />
    </div>
    <div>
      <img class="main__title" src="{logoIconPng}" alt="首发预约抽奖活动" />
    </div>
    <div class="main__hero">
      <div class="hero__logo">
        <img src="{heroIconPng}" alt="英雄图鉴" />
      </div>
      <div class="hero__info">
        <div class="info__link">
          <a href="{href}">英雄图鉴</a>
        </div>
        <div class="info__note">中奖记录在这里查看~</div>
      </div>
      <div class="hero__percent">
        <img src="{probabilityFormulaPng}" alt="概率公式" />
      </div>
    </div>
    <div class="main__twister">
      <aside class="twister__left">
        <div class="left-container">
          <div>
            邀请好友成功参与扭蛋活动可
            <span>额外获得</span>
            "扭一扭"次数
          </div>
        </div>
      </aside>
      <aside class="twister__right">
        <div class="right-container">
          <div>
            每日登录活动可
            <span>获得1次</span>
            "扭一扭"次数
          </div>
        </div>
      </aside>
      <div class="twister__action-go"></div>
      <div class="twister__action-more"></div>
      <div class="twister__tip">
        扭蛋次数还剩<span class="tip-total">0</span>次
      </div>
    </div>
  </main>
  <footer class="footer">
    <a class="footer__rule" href="{href}">活动规则</a>
    <div class="footer__copyright">本活动最终解释权归蚁族崛起所有</div>
  </footer>
</div>

<SlimModal />

<style lang="less" global>
  @import "../styles/routes/index.less";
</style>
