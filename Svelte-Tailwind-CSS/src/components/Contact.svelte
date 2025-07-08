<section class="max-w-4xl mx-auto px-4 py-12">
  <div class="text-center mb-10">
    <h2 class="text-3xl font-bold mb-2">Get in Touch</h2>
    <p class="text-gray-600">
      Please submit your contact information and one of our sales associates
      will be in touch with you shortly
    </p>
  </div>

  <form action="" class="bg-white shadow-md rounded-lg p-6 space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label for="first-name" class="block mb-1 font-medium">First name</label
        >
        <input
          type="text"
          id="first-name"
          class="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div>
        <label for="last-name" class="block mb-1 font-medium">Last name</label>
        <input
          type="text"
          id="last-name"
          class="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label for="email" class="block mb-1 font-medium">Email</label>
        <input
          type="email"
          id="email"
          class="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div>
        <label for="phone" class="block mb-1 font-medium">Phone</label>
        <input
          type="tel"
          id="phone"
          class="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label for="residence" class="block mb-1 font-medium"
          >Residence Type</label
        >
        <select
          id="residence"
          class="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="gardenia">Gardenia</option>
          <option value="ocean">Ocean</option>
          <option value="sky">Sky</option>
        </select>
      </div>
      <div>
        <label for="price" class="block mb-1 font-medium">Price Range</label>
        <select
          id="price"
          class="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="1M$-2M$">1M$-2M$</option>
          <option value="2M$-4M$">2M$-4M$</option>
          <option value="4M$-8M$">4M$-8M$</option>
        </select>
      </div>
    </div>

    <div class="text-center">
      <button
        type="submit"
        class="bg-yellow-800 text-white px-6 py-2 rounded cursor-pointer hover:bg-yellow-700 transition"
      >
        Submit
      </button>
    </div>
  </form>
</section>

<!-- Footer -->
<footer class="bg-gray-800 text-white py-6">
  <div class="max-w-4xl mx-auto text-center text-sm">
    &copy; 2025 La Perla All rights reserved.
  </div>
</footer>
