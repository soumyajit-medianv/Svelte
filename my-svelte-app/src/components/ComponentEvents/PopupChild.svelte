<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher<{ close: string }>();
</script>

<section>
  <h2>This is a popup</h2>
  <!-- <button on:click={() => dispatch("close")}>Close Popup</button> -->

  <!-- Passing Data -->
  <button on:click={() => dispatch("close", "John")}>Close Popup</button>
</section>
