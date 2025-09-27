<script lang="ts">
  import { enhance } from "$app/forms";
  const isDev = import.meta.env.MODE === "development";

  let atBottom = $state(true);

  function toggleDebugBarPosition() {
    atBottom = !atBottom;
  }

  function toggleSubscribed() {
    if (document.cookie.includes("hs=true")) {
      document.cookie = "hs=; path=/; max-age=0";
    } else {
      document.cookie = "hs=true; path=/; max-age=31536000";
    }
  }

  function makePageError() {
    const error = new Error("This is a test error");
    error.stack = "This is a test stack";
    throw error;
  }
</script>

{#if isDev}
  <div class:top={!atBottom}>
    <span>Dev Mode</span>
    <form method="POST" action="?/cookie" use:enhance>
      <button onclick={toggleSubscribed}>Toggle Subscribed</button>
    </form>
    <button onclick={toggleDebugBarPosition}>Move Debug Bar</button>
    <button onclick={makePageError}>Show Error</button>
  </div>
{/if}

<style lang="scss">
  @use "../styles/variables" as *;

  div {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 100;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.25rem;

    &.top {
      top: 0;
      bottom: auto;
    }
  }

  span {
    padding: 0.5rem;
    color: white;
  }

  button {
    background-color: #ee3e00;
    color: white;
    font-size: 0.875rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    outline: none;
    transition: all 150ms ease-in-out;
    &:focus {
      outline: 2px solid $primary-purple;
      outline-offset: 2px;
    }
  }
</style>
