<script>
  import { onMount } from "svelte";
  import Item from "../../components/Item.svelte";

  let item;

  const id = 0;

  onMount(async () => {
    const data = await fetch(`http://127.0.0.1:3000/items/${id}`);
    const res = await data.json();
    item = res;
  });
</script>

<div>
  <Item {item} />
</div>

<style>
  div {
    width: 30rem;
  }
</style>
