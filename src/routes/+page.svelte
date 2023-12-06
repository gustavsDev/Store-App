<script>
  import Item from "../components/Item.svelte";

  let temp = [
    {
      title: "Mega diccker",
      description: "Just a regular diccker",
    },
    {
      title: "Cocker the brit'",
      description: "yeyeye yeye",
    },
    {
      title: "Free coke",
      description: "A coccke zero",
    },
  ];

  let items = [];

  for (let i = 0; i < 11; i++) items = [...items, ...temp];
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
    <Item title={item.title} description={item.description} />
  {/each}
</div>

<style>
  .items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1rem;
  }
</style>
