<script>
  import { createEventDispatcher, onMount } from "svelte";

  import classes from "$utils/classes.js";

  let _class = null;
  export { _class as class };

  export let visible = false;

  $: dispatch("change", { value: visible });

  function onClose() {
    visible = false;
  }

  const dispatch = createEventDispatcher();

  const prefixCls = "slim-modal";
  let className = classes(prefixCls, _class);

  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 1300);
  });
</script>

<div
  class="{className}"
  style="display: {visible ? 'block' : 'none'}"
  on:click|self="{onClose}"
>
  <div class:visible class="{`${prefixCls}__wrap`}">
    <div class="{`${prefixCls}__content`}">1</div>
  </div>
</div>

<style lang="less">
  @import "./modal.less";
</style>
