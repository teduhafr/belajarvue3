<template>
  <div id="app">
    {{ user.userName }} - {{ fullName }}   <br/>
    <strong>Folowers:  </strong> {{ followers }}
    <button @click="followUser">
      Follow
    </button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        userName: '_theted',
        firstName: 'Teduh',
        lastName: 'Afriyoko',
        email: 'tedgan@gmail.com',
        isAdmin: true
      }
    }
  },
  //watch -> melakukan apabila ada perubahan, misal ada data berubah, dll ada dua argument, setelah, sebelum
  watch: {
    followers(a, b) {
      if (b < a) {
        console.log(this.user.userName +' Get new Follower')
      }
    }
  },
  //computed, menampilkan data dari data() -> data yang sudah ada
computed: {
  fullName() {
    return this.user.firstName+' '+this.user.lastName;
    }
   },
   //methods, memanipulasi dari data yang sudah ada, tapi setelah itu perlu diaktivasi (di klik), di sini diklik dengan tombol
   methods: {
     followUser() {
       this.followers++
       // this.followers = this.followers + 1 -> sama fugsinya
     }
   },
   //mounted, fungsi dijalankan ketika pertama kali buka. bisa unmount, dll, pelajari life cycle
   mounted() {
     this.followUser();
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
</style>
