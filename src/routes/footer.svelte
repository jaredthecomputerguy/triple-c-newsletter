<footer>
  <a class="footer-logo" href="/">Triple C Newsletter</a>
  <span class="neutral">C10-0000551-LIC</span>
  <span class="neutral">Copyright © 2025 YCNIUQ Inc.</span>
  <span class="attribution">
    Made by
    <a href="https://jaredthecomputerguy.dev/" target="_blank">Jared Mercer</a>
  </span>
</footer>

<style lang="scss">
  @use "../styles/variables" as *;

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fefefe;
    padding: 1rem;
    background: radial-gradient(circle, rgba(64, 16, 110, 1) 0%, rgba(43, 7, 77, 1) 84%, rgba(47, 7, 77, 1) 100%);
  }

  .footer-logo {
    font-family: "Montserrat", sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #fefefe;
    transition: all 300ms ease-in-out;
    padding: 0.5rem;
    border-radius: 0.25rem;
  }

  .footer-logo:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .neutral {
    color: $gray;
    font-size: 0.875rem;
  }

  .attribution {
    padding: 0.5rem;
    font-size: 0.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .attribution a {
    color: $cyan;
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }

  .attribution a:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: $tablet) {
  }
</style>
