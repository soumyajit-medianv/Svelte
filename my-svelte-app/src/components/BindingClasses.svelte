<script lang="ts">
  //   const status: string = "danger";
  const status: string = "success";
  const isPromoted = true;
  const promoted = true;
</script>

<h3 class="underline">Underlined Text</h3>
<h3 class={status}>Status</h3>
<!-- Conditional rendering -->
<!-- <h3 class={isPromoted ? "promoted" : ""}>Movie Title</h3> -->

<!-- class directive -->
<!-- <h3 class:promoted={isPromoted}>Movie Title</h3> -->

<!-- Shorthand (If the directive class name and its value match[js variable])-->
<h3 class:promoted>Movie Title</h3>

<style>
  .underline {
    text-decoration: underline;
  }

  .danger {
    color: red;
  }

  .success {
    color: green;
  }

  .promoted {
    font-style: italic;
  }
</style>
