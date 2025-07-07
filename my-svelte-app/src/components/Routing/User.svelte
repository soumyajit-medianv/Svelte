<script lang="ts">
  // export let params: { id: string }; //not work
  export let params: { [key: string]: string };
  // export let params: Record<string, string>;
  // console.log("Params", params);
</script>

<div>
  <h1>This is user page</h1>
  <h2>User ID: {params.id}</h2>
</div>
