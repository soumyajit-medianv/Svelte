<!-- Props Drilling -->

<!-- <script lang="ts">
  export let name: string;
</script>

<section>
  <h3>Child Component B</h3>
  <ChildComponentC {name} />
</section> -->

<script lang="ts">
  import ChildComponentC from "./ChildComponentC.svelte";
</script>

<section>
  <h3>Child Component B</h3>
  <ChildComponentC />
</section>
