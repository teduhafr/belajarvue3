<template>
  <header>
    <nav class="navbar navbar-default bg-primary bg-gradient sticky-top ">
      <div class="container-fluid JudulAtas">
        <div class="navbar-header ">
          <a class="navbar-brand text-white" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><img src="@/assets/menu.png"></a>
          <a href="/" class="text-white fs-3 text-decoration-none">Halaman Ujicoba Ted</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Header",
};
</script>
<style scoped>
.JudulAtas{
    margin-left: 2%;
}
.WidthNavbar{
    width: 100%
}
</style>