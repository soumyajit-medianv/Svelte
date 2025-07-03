<script lang="ts">
  type FormValues = {
    name: string;
    profileSummary: string;
    country: string;
    jobLocation: string[];
    remoteWork: boolean;
    skillSet: string[];
    yearsOfExperience: string;
  };

  const formValues: FormValues = {
    name: "",
    profileSummary: "",
    country: "",
    jobLocation: [],
    remoteWork: false,
    skillSet: [],
    yearsOfExperience: "",
  };

  //   function submitForm(event: SubmitEvent) {
  //     event.preventDefault();
  //     console.log(formValues);
  //   }
  function submitForm() {
    console.log(formValues);
  }
</script>

<section>
  <div>
    <pre>
        {JSON.stringify(formValues, null, 2)}
    </pre>
  </div>
  <!-- <form action="" on:submit={submitForm}> -->
  <!-- |preventDefault => event modifier -->
  <form action="" on:submit|preventDefault={submitForm}>
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" bind:value={formValues.name} />
    </div>

    <div>
      <label for="profile">Profile Summary</label>
      <textarea name="" id="profile" bind:value={formValues.profileSummary}
      ></textarea>
    </div>

    <div>
      <label for="country">Country</label>
      <select name="" id="country" bind:value={formValues.country}>
        <option value="" disabled>Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>

    <div>
      <label for="job-location">Job Location</label>
      <select
        name=""
        id="job-location"
        bind:value={formValues.jobLocation}
        multiple
      >
        <option value="" disabled>Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>

    <div>
      <input
        type="checkbox"
        id="remoteWork"
        bind:checked={formValues.remoteWork}
      />
      <label for="remoteWork">Open to remote work?</label>
    </div>

    <div>
      <label for="">Skill Set</label>
      <input
        type="checkbox"
        id="html"
        value="html"
        bind:group={formValues.skillSet}
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        id="css"
        value="css"
        bind:group={formValues.skillSet}
      />
      <label for="css">CSS</label>
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        bind:group={formValues.skillSet}
      />
      <label for="javascript">JavaScript</label>
    </div>

    <div>
      <label for="">Years of Experience</label>
      <input
        type="radio"
        id="0-2"
        value="0-2"
        bind:group={formValues.yearsOfExperience}
      />
      <label for="0-2">0-2</label>
      <input
        type="radio"
        id="3-5"
        value="3-5"
        bind:group={formValues.yearsOfExperience}
      />
      <label for="3-5">3-5</label>
      <input
        type="radio"
        id="6-10"
        value="6-10"
        bind:group={formValues.yearsOfExperience}
      />
      <label for="6-10">6-10</label>
      <input
        type="radio"
        id="10+"
        value="10+"
        bind:group={formValues.yearsOfExperience}
      />
      <label for="10+">10+</label>
    </div>

    <div>
      <button>Submit</button>
    </div>
  </form>
</section>

<style>
  /* label {
    display: flex;
    margin-top: 10px;
  } */
</style>
