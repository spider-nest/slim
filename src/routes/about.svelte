<script context="module">
  import { browser, dev } from "$app/env";

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;
</script>

<svelte:head>
  <meta name="description" content="Activity page template for svelte" />
  <meta
    name="keywords"
    content="svelte,template,kit,svelte-template,svelte-kit,activity-page"
  />
  <meta name="author" content="cnguu" />
  <title>About</title>
</svelte:head>

<div class="content">
  <h1>About this app</h1>

  <p>
    This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your
    own by typing the following into your command line and following the prompts:
  </p>

  <pre>npm init svelte@next</pre>

  <p>
    The page you're looking at is purely static HTML, with no client-side
    interactivity needed. Because of that, we don't need to load any JavaScript.
    Try viewing the page's source, or opening the devtools network panel and
    reloading.
  </p>

  <p>
    The <a href="/todos">TODOs</a> page illustrates SvelteKit's data loading and
    form handling. Try using it with JavaScript disabled!
  </p>
</div>

<style>
  .content {
    width: 100%;
    max-width: 420px;
    margin: 40px auto 0 auto;
  }
</style>
