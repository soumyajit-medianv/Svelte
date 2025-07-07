<script lang="ts">
  import { slide } from "svelte/transition";

  let showItems = true;
  let i = 5;
  let items = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
</script>

<label for="">
  <input type="checkbox" bind:checked={showItems} />
  Show list
</label>

<label for="">
  <input type="range" bind:value={i} max="10" />
</label>

{#if showItems}
  {#each items.slice(0, i) as item}
    <div transition:slide|global>
      {item}
    </div>
  {/each}
{/if}

<style>
  div {
    padding: 10px 0;
    border-top: 1px solid #cacaca;
  }
</style>
