<script>
  import { onMount } from "svelte";

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
  import connectCustomerTitleTipPng from "$assets/connect_customer/title-tip.png";
  import connectCustomerQRCodePng from "$assets/connect_customer/QRCode.png";

  import { SlimModal, SlimMessage } from "$components/index.js";

  import clipboard from "$directives/clipboard";

  import { getActivityInfo } from "$services/drawCard";

  let href = "javascript:;";

  let modalVisible = {
    staff: false,
  };

  let message = {
    visible: false,
    content: "",
    width: "",
    height: "",
    duration: 0,
  };

  let activityInfo = {
    rules: "",
    start_time: 0,
    end_time: 0,
    win_rate_list: [],
  };
  const requestActivityInfo = async () => {
    const res = await getActivityInfo();
    if (!res || res.code !== 0) {
      message.content = res.msg || "网络繁忙，请稍后再试~";
      message.width = "11.0625rem";
      message.height = "4.25rem";
      message.duration = 0;
      message.visible = true;
      return;
    }
    activityInfo.rules = res.data.rules;
    activityInfo.start_time = res.data.start_time * 1000;
    activityInfo.end_time = res.data.end_time * 1000;
    activityInfo.win_rate_list = res.data.win_rate_list;
  };

  onMount(() => {
    requestActivityInfo();
  });
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
      <a
        href="{href}"
        on:click|stopPropagation|preventDefault="{() => {
          modalVisible.staff = true;
        }}"
      >
        联系客服
      </a>
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

<SlimModal
  bind:visible="{modalVisible.staff}"
  maskClosable="{false}"
  width="18.9375rem"
  height="19.25rem"
>
  <svelte:fragment slot="title">
    <img src="{connectCustomerTitleTipPng}" alt="title" />
  </svelte:fragment>
  <div class="staff-modal__qrcode">
    <img src="{connectCustomerQRCodePng}" alt="二维码添加" />
  </div>
  <div
    class="staff-modal__copy"
    use:clipboard="{{ text: 'yzjq6666' }}"
    on:click|self="{() => {
      message.content = '已复制微信号到剪贴板';
      message.width = '11.0625rem';
      message.height = '4.25rem';
      message.duration = 2300;
      message.visible = true;
    }}"
  ></div>
</SlimModal>

<SlimMessage
  bind:visible="{message.visible}"
  content="{message.content}"
  width="{message.width}"
  height="{message.height}"
  duration="{message.duration}"
/>

<style lang="less" global>
  @import "../styles/routes/index.less";
</style>
