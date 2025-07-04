<script lang="ts">
  import TabA from "./TabA.svelte";
  import TabB from "./TabB.svelte";
  import TabC from "./TabC.svelte";

  //   let activeTab = "TabA";
  let activeTab = TabA;
</script>

<!-- Not the best approach -->
<!-- <section>
  <button on:click={() => (activeTab = "TabA")}>Tab A</button>
  <button on:click={() => (activeTab = "TabB")}>Tab B</button>
  <button on:click={() => (activeTab = "TabC")}>Tab C</button>

  {#if activeTab === "TabA"}
    <TabA />
  {/if}

  {#if activeTab === "TabB"}
    <TabB />
  {/if}

  {#if activeTab === "TabC"}
    <TabC />
  {/if}
</section> -->

<section>
  <button on:click={() => (activeTab = TabA)}>Tab A</button>
  <button on:click={() => (activeTab = TabB)}>Tab B</button>
  <button on:click={() => (activeTab = TabC)}>Tab C</button>

  <!-- Special element -->
  <svelte:component this={activeTab} />
</section>
