<script lang="ts">
  interface Names {
    firstName: string;
    lastName: string;
  }

  const names: string[] = ["John", "Alice", "Clerk"];

  const fullNames: Names[] = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Alice", lastName: "Wayne" },
    { firstName: "Clark", lastName: "Kent" },
  ];
</script>

<section>
  {#each names as name, index (name)}
    <!-- (name) is the unique key for all element -->
    <h3>{index} - {name}</h3>
  {/each}

  {#each fullNames as name, index (name.firstName)}
    <h3>{index} - {name.firstName} {name.lastName}</h3>
  {/each}
</section>
