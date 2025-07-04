<script lang="ts">
  import { onMount } from "svelte";

  let inputRef: HTMLInputElement;

  onMount(() => {
    inputRef.focus();
  });
</script>

<div>
  <input type="text" bind:this={inputRef} />
</div>
