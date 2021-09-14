<script>
  import { spring } from "svelte/motion";

  import "./counter.less";

  let count = 0;

  const displayed_count = spring();
  $: displayed_count.set(count);

  const modulo = (n, m) => {
    return ((n % m) + m) % m;
  };
  $: offset = modulo($displayed_count, 1);

  $: transform = `transform: translate(0, ${100 * offset}%)`;
</script>

<div class="counter">
  <button
    on:click="{() => (count -= 1)}"
    aria-label="Decrease the counter by one"
  >
    <svg aria-hidden="true" viewBox="0 0 1 1">
      <path d="M0,0.5 L1,0.5"></path>
    </svg>
  </button>

  <div class="counter-viewport">
    <div class="counter-digits" style="{transform}">
      <strong style="top: -100%" aria-hidden="true"
        >{Math.floor($displayed_count + 1)}</strong
      >
      <strong>{Math.floor($displayed_count)}</strong>
    </div>
  </div>

  <button
    on:click="{() => (count += 1)}"
    aria-label="Increase the counter by one"
  >
    <svg aria-hidden="true" viewBox="0 0 1 1">
      <path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1"></path>
    </svg>
  </button>
</div>
