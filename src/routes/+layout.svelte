<script lang="ts">
  import "../global.scss";
  import Footer from "./footer.svelte";
  let { children } = $props();
</script>

<div>
  <header>
    <a href="/">Triple C Newsletter</a>
  </header>
  <main>
    {@render children()}
  </main>
  <Footer />
</div>

<style lang="scss">
  @use "../styles/variables" as *;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  header {
    position: sticky;
    top: 0;
    z-index: 40;
    background-color: #fefefe;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transition: opacity 300ms ease-in-out;
    padding: 1rem;
    width: 100%;
  }

  a {
    font-family: "Montserrat", sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: $primary-purple;
    padding: 0.5rem;
    align-self: flex-start;
    outline: none;
    transition: all 150ms ease-in-out;
    border-radius: 0.25rem;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    &:focus-visible {
      outline: 2px solid $primary-purple;
      outline-offset: 2px;
    }
  }

  main {
    padding: 1.5rem;
  }

  @media (min-width: $tablet) {
    header {
      padding: 2rem;
    }

    a {
      font-size: 2rem;
    }
  }

  @media (min-width: $desktop) {
    a {
      font-size: 2.5rem;
    }
  }
</style>
