<script>
  export let segment;
</script>

<nav>
  <ul>
    <li>
      <a aria-current="{segment === void 0 ? 'page' : void 0}" href=".">home</a>
      <a aria-current="{segment === 'about' ? 'page' : void 0}" href="about">
        about
      </a>
      <a aria-current="{segment === 'blog' ? 'page' : void 0}" href="blog">
        blog
      </a>
    </li>
  </ul>
</nav>
