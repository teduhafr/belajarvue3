<template>
  <div id="app">
    <div class="row mt-3 ms-2 me-5">
      <div class="card card-header col-3 UserProfile">
        <div class="h1">@{{ state.user.userName }}</div>

        <!-- contoh penggunaan v-if -->
        <div class="AsAdmin" v-if="state.user.isAdmin">Admin</div>
        <div class="AsAdmin" v-else>Bukan Admin</div>
        <!-- -->

        <div class="FullName">{{ fullName }}</div>
        <div class="Followers">
          <strong>Folowers: </strong> {{ state.followers }}
        </div>
        <div class="btn">
          <button @click="followUser">Follow</button>
        </div>
        <!-- belajar form -->
        <form class="form" @submit.prevent="createNewTweet">
          <label for="newTweet" class="form-label"
            ><strong>Tweet({{ newTweetCharacterCount }} /180) </strong></label
          >
          <!-- <element (v-bind bisa dihilangkan) v-bind:class = "(condition)?'class_if_is_true':'else_class'"> -->
          <textarea
            id="newTweet"
            rows="4"
            class="form-control"
            v-model="state.newTweetContent"
            :class="newTweetCharacterCount > 180 ? 'btn btn-danger' : ''"
          />
          <label for="newTweetType" class="form-label"
            ><strong>Type: </strong></label
          >
          <select
            name="ChooseId"
            id="newTweetType"
            v-model="state.selectedTweetType"
            class="form-label"
          >
            <!-- :value adalah akan mengisi value dari option (option yang dipilih, 
            kebetulan namanya jadi value) (v-for) dan valuenya dari nilai optionnya-->
            <option
              :value="option.value"
              v-for="(option, index) in state.tweetTypes"
              :key="index"
            >
              {{ option.name }}
            </option>
          </select>
          <br />
          <button class="btn btn-info">Tweet</button>
        </form>
      </div>

      <!-- loop, kalau ga ada id :key= bisa dihapus dan diganti (tweet, index)
      favourite ini mengambild dari anaknya yang dikirim dari emit -->
      <div class="UserProfile col-6">
        <TweetItem
          class="row card card-body m-1"
          v-for="tweet in state.user.tweets"
          :key="tweet.id"
          :username="state.user.userName"
          :tweet="tweet"
          @favourite="toggleFavourite"
        />
      </div>
      <div class="col-3"></div>
      <!-- end loop -->
    </div>
  </div>
</template>

<script>
import TweetItem from "./TweetItem.vue";
import { reactive, computed, watch, onMounted } from "vue";
export default {
  name: "App",
  components: { TweetItem },
  setup() {
    const state = reactive({
      followers: 0,
      newTweetContent: "",
      selectedTweetType: "instant",
      tweetTypes: [
        { value: "draft", name: "Draft" },
        { value: "instant", name: "Instant Tweet" },
      ],
      user: {
        id: 1,
        userName: "_theted",
        firstName: "Teduh",
        lastName: "Afriyoko",
        email: "tedgan@gmail.com",
        isAdmin: true,
        tweets: [
          {
            id: 1,
            content: "Nyoba pertama",
          },
          {
            id: 2,
            content: "Nyoba kedua",
          },
        ],
      },
    });
    const fullName = computed(
      () => state.user.firstName + " " + state.user.lastName
    );
    const newTweetCharacterCount = computed(() => state.newTweetContent.length);

    function followUser() {
      state.followers++;
      // this.followers = this.followers + 1 -> sama fugsinya
    }
    function toggleFavourite(id) {
      console.log(" Anda telah memfavouritkan " + id);
    }
    function createNewTweet() {
      // eslint-disable-next-line no-empty
      if (state.selectedTweetType !== "draft") {
        state.user.tweets.unshift({
          id: state.user.tweets.length + 1,
          content: state.newTweetContent,
        });
      }
    }
    watch(state.followers, (a, b) => {
      if (b < a) {
        console.log(state.user.userName + " Get new Follower");
      }
    });
    onMounted(() => {
      followUser();
    });

    return {
      state,
      fullName,
      newTweetCharacterCount,
      followUser,
      toggleFavourite,
      createNewTweet,
    };
  },

  // semua dibawah ga dipakai -->

  //watch -> melakukan apabila ada perubahan, misal ada data berubah, dll ada dua argument, setelah, sebelum

  //computed, menampilkan data dari data() -> data yang sudah ada
  //methods, memanipulasi dari data yang sudah ada, tapi setelah itu perlu diaktivasi (di klik), di sini diklik dengan tombol
  //ethods jadi function di composition api
  //mounted, fungsi dijalankan ketika pertama kali buka. bisa unmount, dll, pelajari life cycle
};
</script>
 <!-- syle scoped berarti semua style di bawah ini hanya untuk 1 file ini -->
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
.UserProfile {
  margin-top: 1%;
  margin-left: 1%;
  width: 20%;
}
.row {
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

.row-header {
  margin-top: 100;
}
</style>
