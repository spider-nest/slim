<script>
  import Logo from "images/logo.png";
</script>

<svelte:head>
  <meta name="description" content="Activity page template for svelte" />
  <meta
    name="keywords"
    content="svelte,sapper,template,svelte-template,sapper-template,activity-page"
  />
  <meta name="author" content="cnguu" />
  <title>Activity Page</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
  <img alt="logo" src="{Logo}" />
  <figcaption>Have fun!</figcaption>
</figure>

<p>
  <strong>
    Try editing this file (src/routes/index.svelte) to test live reloading.
  </strong>
</p>

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 28px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 5px 0;
  }

  figure {
    margin: 0 0 10px 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 10px 0;
  }

  p {
    margin: 10px auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 40px;
    }
  }
</style>
