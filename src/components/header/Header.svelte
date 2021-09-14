<script>
  import { page } from "$app/stores";

  import Logo from "$assets/logo.png";

  import { basePath } from "$configs/app";

  import "./header.less";
</script>

<header>
  <div class="corner">
    <a href="https://kit.svelte.dev">
      <img src="{Logo}" alt="SvelteKit" />
    </a>
  </div>

  <nav>
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"></path>
    </svg>
    <ul>
      <li class:active="{$page.path === '/'}">
        <a sveltekit:prefetch href="{basePath}">Home</a>
      </li>
      <li class:active="{$page.path === '/about'}">
        <a sveltekit:prefetch href="{basePath}about">About</a>
      </li>
    </ul>
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"></path>
    </svg>
  </nav>
</header>
