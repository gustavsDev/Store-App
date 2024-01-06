<script>
  export let title = "TITLE";
  export let description = "DESC";
  export let price = 100;
  export let amount = 1;
  export let id = 0;
  import { onMount } from "svelte";
  export let src;

  let loaded = false;
  let failed = false;
  let loading = false;

  onMount(() => {
    const img = new Image();
    img.src = src;
    loading = true;

    img.onload = () => {
      loading = false;
      loaded = true;
    };
    img.onerror = () => {
      loading = false;
      failed = true;
    };
  });
</script>

<div id="item">
  <p id="item-id">{id}</p>
  <div>
    <p id="title">{title}</p>
    <p id="description">{description}</p>
  </div>
  <div>
    <p id="price">{price}</p>
    <p id="amount">{amount}</p>
  </div>
  {#if loaded}
    <img {src} alt="Product icon" />
  {:else if failed}
    <img
      src="https://icon-library.com/images/not-found-icon/not-found-icon-20.jpg"
      alt="Not Found"
    />
  {:else if loading}
    <img
      src="https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"
      alt="Loading..."
    />
  {/if}
</div>

<style>
  #item-id {
    display: none;
  }

  #item {
    padding: 1rem;
    background-color: #efefef;
  }

  #description {
    overflow-wrap: break-word;
    color: gray;
    font-size: 0.8em;
  }

  #title {
    font-weight: bolder;
  }

  #item img {
    width: 100%;
  }
</style>
