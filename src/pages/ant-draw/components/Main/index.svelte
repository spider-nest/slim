<script>
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button class="hello-world" on:click="{increment}">
  Clicks: {count}
</button>

<style lang="less">
  @import "./index.less";
</style>
