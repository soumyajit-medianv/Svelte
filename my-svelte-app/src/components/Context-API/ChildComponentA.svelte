<!-- Props Drilling -->

<!-- <script lang="ts">
  export let name: string;
</script>

<section>
  <h3>Child Component A</h3>
  <ChildComponentB {name} />
</section> -->

<script lang="ts">
  import ChildComponentB from "./ChildComponentB.svelte";
</script>

<section>
  <h3>Child Component A</h3>
  <ChildComponentB />
</section>
