<script>
  import { navigate } from "svelte-navigator";
</script>

<div>
  <h1>This is home page</h1>
  <button on:click={() => navigate("/user/123132")}>User</button>
</div>
