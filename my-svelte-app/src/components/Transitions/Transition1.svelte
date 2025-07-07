<script lang="ts">
  import { fade } from "svelte/transition";

  let visible = true;
</script>

<label for="">
  <input type="checkbox" bind:checked={visible} />
  Visible
</label>

{#if visible}
  <p transition:fade>Fades in and out</p>
{/if}
