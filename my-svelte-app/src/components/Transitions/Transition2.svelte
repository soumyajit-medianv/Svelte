<script lang="ts">
  import { fly } from "svelte/transition";

  let visible = true;
</script>

<label for="">
  <input type="checkbox" bind:checked={visible} />
  Visible
</label>

{#if visible}
  <p transition:fly={{ y: 200, duration: 2000 }}>Files in and out</p>
{/if}
