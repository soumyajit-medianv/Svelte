<script lang="ts">
  import { onMount } from "svelte";

  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  let posts: Post[] = [];

  onMount(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts = await res.json();
    console.log(posts);
  });
</script>

<section>
  {#each posts as post (post.id)}
    <h3>{post.id} - {post.title}</h3>
    <p>{post.body}</p>
    <hr />
  {:else}
    <p>Loading...</p>
  {/each}
</section>
