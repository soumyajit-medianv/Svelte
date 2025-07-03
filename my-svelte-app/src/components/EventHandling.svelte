<script lang="ts">
  let count: number = 0;

  //   function handleClick(event: MouseEvent) {
  //     console.log(event);
  //     count += 1;
  //   }
  function handleClick(event: MouseEvent, countValue: number) {
    console.log(event);
    count += countValue;
  }
</script>

<section>
  <!-- Inline eventhandler -->
  <!-- <button on:click={() => (count += 1)}>Count {count}</button> -->
  <!-- <button on:click={handleClick}>Count {count}</button> -->
  <!-- If pass argument to the evemt handler function -->
  <button on:click={(event) => handleClick(event, 5)}>Count {count}</button>
  <button on:click={(event) => handleClick(event, 10)}>Count {count}</button>
</section>
