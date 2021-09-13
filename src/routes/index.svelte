<script context="module">
  export const prerender = true;
</script>

<script>
  import Logo from "$assets/logo.png";
  import Counter from "$components/counter/Counter.svelte";
</script>

<svelte:head>
  <meta name="description" content="Activity page template for svelte" />
  <meta
    name="keywords"
    content="svelte,template,kit,svelte-template,svelte-kit,activity-page"
  />
  <meta name="author" content="cnguu" />
  <title>Activity Page</title>
</svelte:head>

<section>
  <h1>
    <div class="welcome">
      <picture>
        <img src="{Logo}" alt="Welcome" />
      </picture>
    </div>

    to your new<br />SvelteKit app
  </h1>

  <h2>
    try editing <strong>src/routes/index.svelte</strong>
  </h2>

  <Counter />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  h1 {
    width: 100%;
  }

  .welcome {
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
