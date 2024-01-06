<script>
  import { onMount } from "svelte";
  import Mag_Glass from "$lib/assets/magnifying-glass.svg";
  import Item from "../components/Item.svelte";

  let items = [];

  onMount(async () => {
    const data = await fetch("http://127.0.0.1:3000/items");
    const res = await data.json();
    items = res;
    console.log(items);
  });
</script>

<nav>
  <h1>Store</h1>
  <div id="search">
    <img src={Mag_Glass} alt="search" />
    <input type="text" />
  </div>
  <ul>
    <li><a href="/">Contact</a></li>
    <li><a href="/">Other</a></li>
  </ul>
</nav>

<hr />

<main>
  <h3>Products</h3>

  <div class="items">
    {#each items as item}
      <Item
        title={item.title}
        description={item.description}
        price={item.price}
        amount={item.amount}
        id={item.id}
        src={"/images/" + item.image}
      />
    {/each}
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
  }

  #search {
    margin: auto 1rem;
    display: flex;
  }

  #search img {
    position: absolute;
    margin: 0.6rem; /* TODO: fix to auto */
    height: 1rem;
    width: 1rem;
  }
  #search input {
    height: 2rem;
    padding-left: 2rem; /* TODO: Same as above one */
    border-radius: 0.5rem;
    border: 1px solid gray;
  }

  .items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 1rem;
    max-width: 85vw;
    margin: auto;
  }

  nav ul {
    display: flex;
    list-style: none;
    padding: 0px;
  }

  nav ul li {
    margin: auto 1rem;
  }

  nav {
    display: flex;
  }
</style>
