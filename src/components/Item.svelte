<script>
  export let title = "TITLE";
  export let description = "DESC";
  let src = "https://placehold.co/400x400";
</script>

<div class="item">
  <p>{title}</p>
  <p style="color: gray; font-size: 0.8em;">{description}</p>
  <img {src} alt="Product icon" />
</div>

<style>
  .item {
    padding: 1rem;
    background-color: #efefef;
  }

  .item img {
    width: 100%;
  }
</style>
