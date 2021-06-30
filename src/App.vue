<template>
  <Header />
  <router-view /> <!-- router view adalah tempat halaman yang dituju, router -->
<Sidebar />

</template>

<script>

import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue"

export default {
  name: "App",
  components: {  Header, Sidebar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
</style>