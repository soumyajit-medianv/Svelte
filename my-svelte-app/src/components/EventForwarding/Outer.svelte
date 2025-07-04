<script lang="ts">
  import Button from "./Button.svelte";
  import Middle from "./Middle.svelte";

  function handleGreet(event: CustomEvent<string>) {
    alert(event.detail);
  }
</script>

<div>
  <Middle on:greet={handleGreet} />
  <Button on:click={() => alert("Clicked")}></Button>
</div>
