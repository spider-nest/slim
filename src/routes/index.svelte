<script>
  import Logo from "$assets/logo.png";

  import Counter from "$components/counter/Counter.svelte";

  import { appName } from "$configs/app";

  import "$styles/routes/index.less";
</script>

<svelte:head>
  <meta
    name="description"
    content="Static web page generation template for svelte"
  />
  <meta
    name="keywords"
    content="svelte,template,kit,svelte-template,svelte-kit,static-page"
  />
  <meta name="author" content="cnguu" />
  <title>{appName}</title>
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
