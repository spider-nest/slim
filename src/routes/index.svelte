<script context="module">
  export const prerender = true;
</script>

<script>
  import Logo from "$assets/logo.png";
  import Counter from "$components/counter/Counter.svelte";

  import "$styles/routes/index.less";
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
