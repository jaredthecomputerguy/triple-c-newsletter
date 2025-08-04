<script lang="ts">
  import { page } from "$app/state";
  import Seo from "$lib/seo.svelte";
  // eslint-disable-next-line no-console
  console.error("Error: ", page.error?.message);
</script>

<Seo
  title="Triple C Newsletter"
  description="Join the Triple C Collective newsletter and be the first to know about weekend BOGOs, new product drops, and subscriber-only perks."
  image="/opengraph-image.png"
  domain="triplecnewsletter.com"
  path="/" />

<section>
  <h1>404</h1>
  <p>Not Found</p>
</section>
