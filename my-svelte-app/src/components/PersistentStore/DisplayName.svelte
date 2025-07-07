<script lang="ts">
  import { name, tempData, title } from "./stores";
</script>

<input type="text" placeholder="Enter your name" bind:value={$name} />
<p>Your name is : {$name}</p>

<input type="text" placeholder="Enter temporary data" bind:value={$tempData} />
<p>Temporary value: {$tempData}</p>

<input type="text" placeholder="Enter temporary data" bind:value={$title} />
<p>Temporary value: {$title}</p>
