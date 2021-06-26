<template>
  <div id="app">
    <div class="row">
      <div class="card card-header UserProfile col-3">
        <div class="h1">
          @{{ user.userName }}
          </div>

          <!-- contoh penggunaan v-if -->
          <div class="AsAdmin" v-if="user.isAdmin">
            Admin
          </div>
          <div class="AsAdmin" v-else>
            Bukan Admin
          </div>
          <!-- -->

          <div class="FullName"> {{ fullName }}
          </div>
          <div class="Followers">
            <strong>Folowers:  </strong> {{ followers }}
          </div>
          <div class="btn">
            <button @click="followUser">
              Follow
            </button>
          </div>
        </div>

        <!-- loop, kalau ga ada id :key= bisa dihapus dan diganti (tweet, index) -->
        <div class="UserProfile col-6 card card-body">
          <div class="FullName" v-for="tweet in user.tweets" :key="tweet.id">
            {{ tweet.content }}
          </div>
        </div>
        <div class="col-3"></div>
        <!-- end loop -->
    </div>  
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
        isAdmin: true,
        tweets:[
          {
            id: 1, 
            content: 'Nyoba pertama'
            },
          {
            id: 2,
            content: 'Nyoba kedua'
          }
        ]
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
.UserProfile{
  margin-top: 1%;
  margin-left: 1%;
  width: 20%;
}
.row{
  margin-left: 2%;
}
.UserName {
  text-align: left;
  font-family: sans-serif;
  font-size: 25pt;
  font-weight: bold;
  margin: 2%;
  padding: 10;
}
.FullName {
  text-align: left;
  font-family: sans-serif;
  font-size: 10pt;
  font-weight: normal;
  margin: 2%;
}
.Followers {
  text-align: left;
  font-family: sans-serif;
  font-size: 15pt;
  font-weight: normal;
  margin: 2%;
}
.Tombol {
    margin: 10px;
}
.AsAdmin {
  font-size: 9pt;
  text-align: left;
  margin: 2%;
  background: rgb(27, 233, 188);
  width: fit-content;
  padding: 5px;
  border-radius: 4px;
}
</style>
