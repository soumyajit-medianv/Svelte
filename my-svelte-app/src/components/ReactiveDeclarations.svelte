<script lang="ts">
  type Item = {
    id: number;
    title: string;
    price: number;
  };

  let firstName: string = "John";
  let lastName: string = "Doe";

  $: fullName = `${firstName} ${lastName}`;

  let items: Item[] = [
    { id: 1, title: "Laptop", price: 10000 },
    { id: 2, title: "Headphones", price: 500 },
    { id: 3, title: "Keyboard", price: 1000 },
  ];

  $: total = items.reduce((acc, curr) => acc + curr.price, 0);
</script>

<section>
  <h3>{firstName} {lastName}</h3>
  <h3>{fullName}</h3>
  <button
    on:click={() => {
      firstName = "Clark";
      lastName = "Kent";
    }}>Change Name</button
  >
  <!-- <h3>Total - {items.reduce((acc, curr) => acc + curr.price, 0)}</h3> -->
  <h3>Total - {total}</h3>

  <!-- It is not update the total because there is no assignment -->
  <!-- <button on:click={() => items.push({ id: 4, title: "Monitor", price: 2499 })}
    >Add Item</button
  > -->

  <button
    on:click={() =>
      (items = [...items, { id: 4, title: "Monitor", price: 5000 }])}
    >Add Item</button
  >
</section>
