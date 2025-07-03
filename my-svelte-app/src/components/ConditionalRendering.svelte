<script lang="ts">
  const num: number = 5;
</script>

<section>
  {#if num === 0}
    <h3>The number is zero</h3>
  {:else if num > 0}
    <h3>The number is positive</h3>
  {:else if num < 0}
    <h3>The number is negative</h3>
  {:else}
    <h3>Not a number</h3>
  {/if}
</section>
