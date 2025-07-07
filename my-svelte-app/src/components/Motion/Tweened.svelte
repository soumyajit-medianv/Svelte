<script lang="ts">
  import { cubicIn } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import { writable } from "svelte/store";

  //   const progress = writable(0);
  const progress = tweened(0, {
    // delay: 1000,
    duration: 500,
    easing: cubicIn,
  });
</script>

<progress value={$progress} max="1"></progress>

<button on:click={() => progress.set(0)}>0%</button>
<button on:click={() => progress.set(0.25)}>25%</button>
<button on:click={() => progress.set(0.5)}>50%</button>
<button on:click={() => progress.set(0.75)}>75%</button>
<button on:click={() => progress.set(1)}>100%</button>

<style>
  progress {
    width: 100%;
    height: 15px;
    margin: 10px 0px;
    border-radius: 10px;
    overflow: hidden;
    appearance: none;
    -webkit-appearance: none;
  }

  progress::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 10px;
  }

  progress::-webkit-progress-value {
    background-color: #1140c2;
    border-radius: 10px;
  }
</style>
