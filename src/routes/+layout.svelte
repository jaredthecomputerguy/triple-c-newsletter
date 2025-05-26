<script lang="ts">
  import "../global.scss";
  import Footer from "./footer.svelte";
  let { children } = $props();
</script>

<header>
  <a href="/">Triple C Newsletter</a>
</header>
<main>
  {@render children()}
</main>
<Footer />

<style lang="scss">
  @use "../styles/variables" as *;

  header {
    position: sticky;
    top: 0;
    z-index: 40;
    background-color: #fefefe;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transition: opacity 300ms ease-in-out;
    padding: 1rem;
  }

  a {
    /* "font-logo text-primary-purple focus:outline-primary-purple rounded-sm p-2 text-xl font-bold uppercase outline-hidden transition-all sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl" */
    font-family: "Montserrat", sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: $primary-purple;
    outline: none;
    transition: all 300ms ease-in-out;
    padding: 0.5rem;
  }

  @media (max-width: $tablet) {
  }
</style>
