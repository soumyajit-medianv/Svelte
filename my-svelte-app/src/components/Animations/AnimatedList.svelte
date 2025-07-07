<script lang="ts">
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";

  let items = ["🍎 Apple", "🍌 Banana", "🫐 Grape", "🍊 Orange"];

  function shuffle() {
    items = [...items].sort(() => Math.random() - 0.5);
  }
</script>

<div>
  <button on:click={shuffle}>Shuffle</button>
</div>

<ul>
  {#each items as item (item)}
    <li animate:flip transition:fade>{item}</li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  li {
    padding: 10px;
    margin: 0px 10px;
    background-color: aquamarine;
    border-radius: 10px;
    cursor: pointer;
  }

  div {
    display: flex;
    justify-content: center;
    margin: 30px 0px;
  }

  button {
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    background-color: blue;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }
</style>
