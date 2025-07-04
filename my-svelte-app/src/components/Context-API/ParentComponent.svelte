<!-- Props Drilling -->

<!-- <script lang="ts">
  const userName = "John";
</script>

<section>
  <h3>Parent component username - {userName}</h3>
  <ChildComponentA name={userName}/>
</section> -->

<script lang="ts">
  import { setContext } from "svelte";
  import ChildComponentA from "./ChildComponentA.svelte";

  const userName = "John";

  setContext("username-context", userName);
</script>

<section>
  <h3>Parent component username - {userName}</h3>
  <ChildComponentA />
</section>
