<script lang="ts">
  let firstName: string = "John";
  let lastName: string = "Doe";
  $: fullName = `${firstName} ${lastName}`;
  //   $: console.log(`Full name is ${firstName} ${lastName}`);
  $: {
    const greet = `Full name is ${firstName} ${lastName}`;
    console.log(greet);
  }
  // Above two statement has same behaviour
  let volume = 0;

  $: if (volume < 0) {
    alert(`Can't go lower`);
    volume = 0;
  } else if (volume > 20) {
    alert(`Can't go higher`);
    volume = 20;
  }
</script>

<section>
  <h3>{fullName}</h3>
  <button
    on:click={() => {
      (firstName = "Clark"), (lastName = "Kent");
    }}>Change Name</button
  >

  <h3>Current volume {volume}</h3>
  <button on:click={() => (volume += 2)}>Increase volume</button>
  <button on:click={() => (volume -= 2)}>Decrease volume</button>
</section>
