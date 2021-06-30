<template >
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Halaman</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
    <div class="offcanvas-body">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
};
</script>
<style scoped>
  .offcanvas-start{
    max-width: max-content;
  }
</style>
