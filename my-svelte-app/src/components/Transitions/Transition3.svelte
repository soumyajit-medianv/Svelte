<script lang="ts">
  import { fade, fly } from "svelte/transition";

  let visible = true;
</script>

<label for="">
  <input type="checkbox" bind:checked={visible} />
  Visible
</label>

{#if visible}
  <p in:fly={{ y: 200, duration: 2000 }} out:fade>Files in, fades out</p>
{/if}
