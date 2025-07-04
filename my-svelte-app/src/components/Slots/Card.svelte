<!-- <script lang="ts">
  export let content: string;
</script>

<div class="card">Card {content}</div> -->

<!-- <div class="card"><slot /></div> -->

<!-- For default content -->
<!-- <div class="card"><slot>Default Content</slot></div> -->

<!-- <style>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 16px;
    margin-bottom: 20px;
    width: 200px;
    border-radius: 10px;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
</style> -->

<!-- Named Slots -->
<div class="card">
  <div class="card-header">
    <slot name="header"></slot>
  </div>

  <div class="card-content">
    <slot name="content">Default content</slot>
  </div>

  {#if $$slots.footer}
    <hr />
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  {/if}
</div>

<style>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 16px;
    margin-bottom: 20px;
    width: 200px;
    border-radius: 10px;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
</style>
