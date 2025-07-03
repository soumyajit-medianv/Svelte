<script lang="ts">
  import Child from "./Child.svelte";

  //   const student_name: string = "Harish";
  //   const student_age: string = "26";

  //   Shorthand - if the props name and the value is same
  const name: string = "Harish";
  const age: string = "26";

  const obj = {
    name: "Mohan",
    age: "20",
  };
</script>

<section>
  <Child name="John" age="25" />
  <Child name="Alice" age="23" />
  <!-- <Child name={student_name} age={student_age} /> -->

  <!-- Shorthand - if the props name and the value is same  -->
  <Child {name} {age} />
  <Child {age} />
  <!-- <Child name={obj.name} age={obj.age} /> -->
  <!-- Spread Props -->
  <Child {...obj} />
</section>
