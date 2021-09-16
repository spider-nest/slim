<script>
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";

  import classes from "$utils/classes.js";

  import cancelPng from "$assets/cancel.png";

  let _class = null;
  export { _class as class };

  export let visible = false;

  export let maskClosable = true;

  export let width = "320px";

  export let height = "auto";

  export let bodyCls = "";

  const dispatch = createEventDispatcher();
  $: dispatch("change", visible);

  function onClose() {
    visible = false;
  }

  function onMaskClose() {
    if (maskClosable) {
      onClose();
    }
  }

  const prefixCls = "slim-modal";
  let className = classes(prefixCls, _class);
</script>

{#if visible}
  <div class="{className}" on:click|self="{onMaskClose}">
    <div class="{`${prefixCls}__wrap`}">
      <div
        class="{`${prefixCls}__content`}"
        transition:fly="{{ y: -100 }}"
        style="width: {width};height: {height}"
      >
        <div class="content__close" on:click="{onClose}">
          <img src="{cancelPng}" alt="close" />
        </div>
        <div class="content__title">
          <slot name="title" />
        </div>
        <div class="content__body">
          <div class="body__wrap {bodyCls}">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="less">
  @import "./modal.less";
</style>
