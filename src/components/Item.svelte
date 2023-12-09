<script>
  export let title = "TITLE";
  export let description = "DESC";
  export let id;
  let src = "https://placehold.co/400x400";
</script>

<div class="item" id={`Item-${id}`}>
  <p class="title">{title}</p>
  <p class="description">{description}</p>
  <img {src} alt="Product icon" />
</div>

<style>
  .item {
    padding: 1rem;
    background-color: #efefef;
  }

  .description {
    overflow-wrap: break-word;
    color: gray;
    font-size: 0.8em;
  }

  .title {
    font-weight: bolder;
  }

  .item img {
    width: 100%;
  }
</style>
