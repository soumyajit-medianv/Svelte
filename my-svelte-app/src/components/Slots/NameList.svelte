<script lang="ts">
  const names = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Bruce", lastName: "Wayne" },
    { firstName: "Clark", lastName: "Kent" },
  ];
</script>

<section>
  {#each names as name (name.firstName)}
    <!-- <h3>{name.firstName} {name.lastName}</h3> -->
    <slot name="book" firstName={name.firstName} lastName={name.lastName} />
  {/each}
</section>
