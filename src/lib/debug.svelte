<script lang="ts">
  const isDev = import.meta.env.MODE === "development";

  function clearDebugData() {
    localStorage.clear();
    location.reload();
  }
</script>

{#if isDev}
  <div>
    <span>Dev Mode</span>
    <button onclick={clearDebugData}>Clear Local Storage</button>
  </div>
{/if}

<style lang="scss">
  @use "../styles/variables" as *;

  div {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
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
