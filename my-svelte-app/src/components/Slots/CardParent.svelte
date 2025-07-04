<script lang="ts">
  import Card from "./Card.svelte";
  import NameList from "./NameList.svelte";
</script>

<section>
  <!-- <Card content="Card content 1" />
  <Card content="Card content 2" /> -->

  <!-- <Card>Card content</Card> -->
  <!-- <Card><h3>Card content</h3></Card> -->
  <!-- <Card><img src="https://picsum.photos/200" alt="" /></Card> -->
  <!-- <Card></Card> -->

  <!-- Named Slots -->
  <!-- <Card>
    <div slot="header">
      <h3>Header</h3>
    </div>

    <div slot="content">
      <img src="https://picsum.photos/200" alt="" />
    </div>

    <div slot="footer">
      <button>View Details</button>
    </div>
  </Card> -->

  <!-- Slot Props -->
  <NameList>
    <h3 slot="book" let:firstName let:lastName>
      {firstName}
      {lastName}
    </h3>
  </NameList>

  <NameList>
    <h3 slot="book" let:firstName let:lastName>
      {lastName}
      {firstName}
    </h3>
  </NameList>

  <NameList>
    <h3 slot="book" let:firstName>
      {firstName}
    </h3>
  </NameList>
</section>
