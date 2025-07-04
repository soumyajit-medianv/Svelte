<script lang="ts">
  import PopupChild from "./PopupChild.svelte";

  let showPopup: boolean = false;

  function closePopup(event: CustomEvent<string>) {
    showPopup = false;
    console.log(event.detail);
  }
</script>

<section>
  <button on:click={() => (showPopup = true)}>Show Popup</button>
  {#if showPopup}
    <!-- <PopupChild on:close={() => (showPopup = false)} /> -->

    <!-- Getting data -->
    <PopupChild on:close={closePopup} />
  {/if}
</section>
