<script>
  import { onMount } from "svelte";

  import handleRem from "$plugins/rem.js";

  import "$styles/index.less";
  import "$styles/routes/layout.less";

  onMount(() => {
    handleRem();
  });
</script>

<slot />
