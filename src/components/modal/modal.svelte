<script>
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";

  import classes from "$utils/classes.js";

  let _class = null;
  export { _class as class };

  export let visible = false;
  export let maskClosable = true;

  $: dispatch("change", { value: visible });

  function onClose() {
    visible = false;
  }

  function onMaskClose() {
    if (maskClosable) {
      onClose();
    }
  }

  const dispatch = createEventDispatcher();

  const prefixCls = "slim-modal";
  let className = classes(prefixCls, _class);
</script>

{#if visible}
  <div class="{className}" on:click|self="{onMaskClose}">
    <div class="{`${prefixCls}__wrap`}">
      <div class="{`${prefixCls}__content`}" transition:fly="{{ y: -100 }}">
        1
      </div>
    </div>
  </div>
{/if}

<style lang="less">
  @import "./modal.less";
</style>
