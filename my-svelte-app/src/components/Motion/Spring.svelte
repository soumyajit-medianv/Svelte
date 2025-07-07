<script lang="ts">
  import { spring } from "svelte/motion";

  const progress = spring(0, {
    stiffness: 0.4,
    damping: 0.25,
  });
</script>

<progress value={$progress} max="1"></progress>

<button on:click={() => progress.set(0)}>0%</button>
<button on:click={() => progress.set(0.25)}>25%</button>
<button on:click={() => progress.set(0.5)}>50%</button>
<button on:click={() => progress.set(0.75)}>75%</button>
<button on:click={() => progress.set(1)}>100%</button>

<!-- <script lang="ts">
  import { spring } from "svelte/motion";

  const position = spring(
    { x: 100, y: 100 },
    {
      stiffness: 0.1,
      damping: 0.25,
    }
  );

  const handleMouseMove = (event: MouseEvent) => {
    position.set({ x: event.clientX, y: event.clientY });
  };
</script>

<div
  role="application"
  aria-label="Interactive mouse tracking area"
  class="container"
  on:mousemove={handleMouseMove}
>
  <div
    class="ball"
    style="transform:translate({$position.x}px, {$position.y}px)"
  ></div>
</div>

<style>
  .container {
    width: 100vw;
    height: 100vh;
    background-color: white;
    position: relative;
    overflow: hidden;
    cursor: crosshair;
  }

  .ball {
    width: 50px;
    height: 50px;
    background-color: blue;
    border-radius: 50%;
    position: absolute;
    top: -20px;
    left: -20px;
    pointer-events: none;
    transition: background-color 0.2s;
  }
</!--> -->

<style>
  progress {
    display: block;
    width: 100%;
  }
</style>
