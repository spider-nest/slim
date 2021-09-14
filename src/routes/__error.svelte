<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        status,
        error,
        title: `${status}: ${error.message}`,
      },
    };
  }
</script>

<script>
  import { dev } from "$app/env";

  export let status;
  export let error;
  export let title;
</script>

<svelte:head>
  <meta name="description" content="Activity page template for svelte" />
  <meta
    name="keywords"
    content="svelte,template,kit,svelte-template,svelte-kit,activity-page"
  />
  <meta name="author" content="cnguu" />
  <title>Activity Page</title>
  <title>{title}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
