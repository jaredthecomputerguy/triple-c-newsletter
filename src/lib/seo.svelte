<script lang="ts">
  interface SEOProps {
    title: string;
    description: string;
    image: string;
    domain: string;
    path: string;
  }

  const { title, description, image, domain, path }: SEOProps = $props();
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta
    name="keywords"
    content="cannabis,dispensary newsletter,weed deals,marijuana promotions,Lake County cannabis,California dispensary,Triple C Collective,exclusive offers,cannabis email list,product drops,BOGO deals,cannabis news,weed" />
  updates,Clearlake dispensary,edibles,flower,vapes,THC deals,newsletter sign-up
  <meta property="og:site_name" content="https://{domain}" />
  <meta property="og:url" content="https://www.{domain}{path}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={domain} />
  <meta property="twitter:url" content="https://www.{domain}{path}" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  <link rel="manifest" href="/site.webmanifest" />
  <link rel="icon" href="/icon.ico" type="image/x-icon" />
  <link rel="apple-touch-icon" href="/apple-icon.png" />
  <link rel="canonical" href="https://www.{domain}{path}" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="index, follow" />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Triple C Collective Newsletter",
      "url": "https://triplecnewsletter.com",
      "description": "Join the Triple C newsletter to get early access to deals and exclusive drops."
    }
  </script>
</svelte:head>
