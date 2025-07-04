<!-- Props Drilling -->

<!-- <script lang="ts">
  export let name: string;
</script>

<h3>Child Component C</h3>
<h3>Child Component C Username - {name}</h3> -->

<script lang="ts">
  import { getContext } from "svelte";

  const userName = getContext("username-context");
</script>

<h3>Child Component C</h3>
<h3>Child Component C Username - {userName}</h3>
