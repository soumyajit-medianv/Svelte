<script lang="ts">
  import { Link, Route, Router } from "svelte-navigator";
  import Home from "./Home.svelte";
  import About from "./About.svelte";
  import ContactUs from "./ContactUs.svelte";
  import User from "./User.svelte";

  let userId = "101";
</script>

<Router {...{} as any}>
  <nav>
    <Link to="/" {...{} as any}>Home</Link>
    <Link to="/about" {...{} as any}>About</Link>
    <Link to="/contact" {...{} as any}>Contact Us</Link>
    <Link to={`/user/${userId}`} {...{} as any}>User</Link>
  </nav>

  <div>
    <Route path="*">
      <h2>404: Page Not Found</h2>
    </Route>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={ContactUs} />
    <Route path="/user/:id" let:params>
      <User {params} />
    </Route>
  </div>
</Router>
