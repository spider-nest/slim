<script>
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";

  import classes from "$utils/classes.js";

  import clickOutside from "$directives/clickOutside.js";

  let _class = null;
  export { _class as class };

  export let visible = false;

  export let width = "auto";

  export let height = "auto";

  export let content = "";

  export let duration = 2300;

  const dispatch = createEventDispatcher();
  $: dispatch("change", visible);

  const prefixCls = "slim-message";
  let className = classes(prefixCls, _class);

  function onClose() {
    visible = false;
  }

  let closeDurationTimer = null;
  function createDurationTimer(visible) {
    if (visible && duration > 0) {
      closeDurationTimer = setTimeout(() => {
        onClose();
        closeDurationTimer = null;
      }, duration);
    }
  }
  $: createDurationTimer(visible);

  function onClickOutside() {
    dispatch("clickOutside");
  }
</script>

{#if visible}
  <div class="{className}">
    <div class="{`${prefixCls}__wrap`}">
      <div
        class="{`${prefixCls}__content`}"
        transition:fly="{{ y: -50 }}"
        style="width: {width};height: {height}"
        use:clickOutside="{onClickOutside}"
      >
        <div class="content__body">
          {content}
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="less">
  @import "./message.less";
</style>
