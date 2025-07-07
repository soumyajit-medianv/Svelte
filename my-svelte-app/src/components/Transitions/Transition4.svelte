<script lang="ts">
  import { fly } from "svelte/transition";

  let visible = true;
  let status = "waiting...";
</script>

<p>status: {status}</p>

<label for="">
  <input type="checkbox" bind:checked={visible} />
  Visible
</label>

{#if visible}
  <p
    transition:fly={{ y: 200, duration: 2000 }}
    on:introstart={() => (status = "intro started")}
    on:outrostart={() => (status = "outro started")}
    on:introend={() => (status = "intro ended")}
    on:outroend={() => (status = "outro ended")}
  >
    Files in and out
  </p>
{/if}
