<script>
  import FaRegClock from 'svelte-icons/fa/FaRegClock.svelte';

  export let title;
  export let description;
  export let url;
  export let date;
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

<h1>{title}</h1>
<h2 class="published-at">
  <FaRegClock /> {date}
</h2>

<slot />