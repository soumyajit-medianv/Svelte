<script lang="ts" context="module">
  // The variables defined in module scripts are not reactive and do not re-render the component when a new value is assigned to them.
  let totalCount: number = 0;

  export function getTotalCount() {
    return totalCount;
  }
</script>

<script lang="ts">
  let count: number = 0;

  function handleClick() {
    count += 1;
    totalCount += 1;
  }
</script>

<section>
  <h2>Count - {count}</h2>
  <button on:click={handleClick}>Increment</button>
</section>
