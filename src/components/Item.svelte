<script>
  export let title = "TITLE";
  export let description = "DESC";
  export let price = 100;
  export let amount = 1;
  export let id = 0;
  export let image;

  const img_src = new URL(`../lib/assets/images/${image}`, import.meta.url)
    .href;
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
  <img src={img_src} alt="Product icon" />
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
