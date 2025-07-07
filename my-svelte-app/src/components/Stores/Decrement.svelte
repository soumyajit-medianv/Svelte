<script lang="ts">
  import { count } from "./stores";

  function decrement() {
    count.update((value) => {
      return value - 1;
    });
  }
</script>

<button on:click={decrement}>Decrement</button>
