<script lang="ts">
  import Seo from "$lib/seo.svelte";
</script>

<Seo
  title="Triple C Newsletter"
  description="Join the Triple C Collective newsletter and be the first to know about weekend BOGOs, new product drops, and subscriber-only perks."
  image="/opengraph-image.png"
  domain="triplecnewsletter.com"
  path="/" />
<section>
  <enhanced:img class="mailbox" src="./mailbox.svg" alt="Mailbox" />
  <h1>New Product Alerts, Deals, and Exclusives</h1>
  <p>Join the Triple C Collective newsletter and be the first to know about weekly BOGOs, new product drops, and subscriber-only perks and promotions.</p>
  <form method="POST">
    <div class="input-group">
      <label for="given-name">First Name</label>
      <input name="given-name" id="given-name" placeholder="" type="text" required autocomplete="given-name" />
    </div>
    <div class="input-group">
      <label for="family-name">Last Name</label>
      <input name="family-name" id="family-name" placeholder="" type="text" required autocomplete="family-name" />
    </div>
    <div class="input-group">
      <label for="email">Email<span>&ast;</span></label>
      <input name="email" id="email" placeholder="" type="email" required autocomplete="email" />
    </div>

    <div class="checkbox-group">
      <input id="terms" name="terms" type="checkbox" />
      <label for="terms">
        I agree to the <a href="/terms-of-use" target="_blank">Terms of Use</a> and <a href="/privacy-policy" target="_blank">Privacy Policy</a> and consent to receive marketing emails.<span
          class="terms-span">*</span>
      </label>
    </div>
    <button type="submit">Subscribe</button>
  </form>
</section>

<style lang="scss">
  @use "../styles/variables" as *;

  section {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: 0.025em;
    transition: all 300ms ease-in-out;
    text-align: center;
  }

  p {
    text-align: center;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }

  .input-group > label {
    display: flex;
    gap: 0.25rem;
  }

  label > span {
    color: rgb(220, 0, 0);
  }

  input {
    width: 100%;
    height: 2rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    transition: all 150ms ease-in-out;

    &:focus {
      outline-offset: 2px;
      outline: 2px solid $primary-purple;
    }
  }

  input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    margin-top: 0.25rem;
    margin-left: 0.5rem;
    outline: none;
    border-radius: 0.25rem;
    transition: all 150ms ease-in-out;
    &:focus {
      outline: 2px solid $primary-purple;
      outline-offset: 2px;
    }
  }

  button {
    width: 100%;
    background-color: $primary-purple;
    color: #fefefe;
    padding: 0.75rem 0;
    margin: 0 0.5rem;
    border-radius: 0.25rem;
    max-width: 492px;
    outline: none;
    transition: all 150ms ease-in-out;
    &:focus {
      outline: 2px solid $primary-purple;
      outline-offset: 2px;
    }
  }

  .input-group {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;
    width: 100%;
    max-width: 500px;
  }

  .checkbox-group {
    display: flex;
    align-items: start;
    gap: 0.5rem;
    max-width: 500px;
    text-align: center;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  .checkbox-group > label > a {
    display: inline;
    color: $link;
    text-decoration: underline;
    outline: none;
    transition: all 150ms ease-in-out;
    &:focus {
      outline: 2px solid $primary-purple;
      outline-offset: 2px;
    }
  }

  .terms-span {
    margin-left: 0.25rem;
  }

  .mailbox {
    width: 100px;
    height: 100px;
  }

  @media (min-width: $tablet) {
    h1 {
      font-size: 2.5rem;
      max-width: 750px;
      line-height: 3rem;
    }

    p {
      font-size: 1.25rem;
      max-width: 550px;
    }

    form {
      margin-bottom: 2rem;
    }

    .mailbox {
      width: 200px;
      height: 200px;
    }
  }
</style>
