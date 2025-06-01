<footer>
  <a class="footer-logo" href="/">Triple C Newsletter</a>
  <span class="neutral">C10-0000551-LIC</span>
  <span class="neutral">Copyright © 2025 YCNIUQ Inc.</span>
  <ul>
    <li><a href="/privacy-policy">Privacy Policy</a></li>
    <li><a href="/terms-of-use">Terms of Use</a></li>
  </ul>
  <span class="attribution">
    Made by
    <a href="https://jaredthecomputerguy.dev/" target="_blank">Jared Mercer</a>
  </span>
</footer>

<style lang="scss">
  @use "../styles/variables" as *;

  footer {
    width: 100%;
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
    padding: 0.5rem;
    border-radius: 0.25rem;
    outline: none;
    transition: all 150ms ease-in-out;

    &:focus {
      outline: 2px solid white;
      outline-offset: 2px;
    }
  }

  .footer-logo:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .neutral {
    color: $gray;
    font-size: 0.875rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
  }

  ul > li {
    list-style: none;
    margin-top: 0.5rem;
  }

  li > a {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    outline: none;
    transition: all 150ms ease-in-out;

    &:focus {
      outline: 2px solid white;
      outline-offset: 2px;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .attribution {
    padding: 0.5rem 0.25rem;
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
    outline: none;
    transition: all 150ms ease-in-out;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    &:focus {
      outline: 2px solid white;
      outline-offset: 2px;
    }
  }

  @media (min-width: $tablet) {
    .footer-logo {
      font-size: 2rem;
    }
  }
  @media (min-width: $desktop) {
    .footer-logo {
      font-size: 2.5rem;
    }
  }
</style>
