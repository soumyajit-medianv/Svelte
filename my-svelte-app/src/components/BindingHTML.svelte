<script lang="ts">
  const channel: string = `<b>Binding HTML</>`;
  const hack: string = `<a href="#" onclick="alert('You have been hacked!')">Win a prize!</a>`;
</script>

<h2>{@html channel}</h2>
<h2>{@html hack}</h2>
