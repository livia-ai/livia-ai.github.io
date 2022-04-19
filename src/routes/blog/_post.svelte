<script>
  export let title;
  export let description;
  export let url;
</script>

<svelte:head>
  <title>LiviaAI | {title}</title>
  <meta name="description" content={description} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={url} /> 
</svelte:head>

<slot />