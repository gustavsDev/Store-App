<script>
  import { onMount } from "svelte";
  import Item from "../components/Item.svelte";

  let items = [];

  onMount(async () => {
    const data = await fetch("http://127.0.0.1:3000/data");
    const res = await data.json();
    items = res;
  });
</script>

<h1>WEBSTORE!!!</h1>

<hr />

<h3>Categories</h3>
<ul>
  <li>Dishes</li>
  <li>Plants</li>
  <li>Rocket parts & fuels</li>
</ul>

<hr />

<h3>Products</h3>

<div class="items">
  {#each items as item}
    <Item id={item.id} title={item.title} description={item.description} />
  {/each}
</div>

<style>
  .items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 1rem;
  }
</style>
