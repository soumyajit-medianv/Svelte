<script lang="ts">
  import ChildStyles from "./ChildStyles.svelte";
</script>

<section>
  <h3>ParentStyles component global style</h3>
  <h4>ParentStyles component text</h4>
  <ChildStyles />
</section>

<style>
  /* :global(h3) {
    color: green;
  } */
  h4 {
    color: blue;
  }
</style>
