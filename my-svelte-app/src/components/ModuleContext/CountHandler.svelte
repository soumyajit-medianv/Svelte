<script lang="ts">
  import Counter, { getTotalCount } from "./Counter.svelte";
</script>

<section>
  <button on:click={() => alert(getTotalCount())}>Alert total count</button>
  <Counter />
  <Counter />
  <Counter />
</section>
