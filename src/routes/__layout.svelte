<script>
  import Header from "$components/header/Header.svelte";

  import "$styles/index.less";
  import "$styles/routes/layout.less";
</script>

<Header />

<main>
  <slot />
</main>

<footer>
  <p>
    visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
  </p>
</footer>
