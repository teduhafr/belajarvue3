<template>
  <div class="d-flex">
    <div
      class="p-2 bd-highlight text-sm-start btn-outline-secondary"
      @click="favouriteTweet(tweet.id)"
    >
      <strong>{{ username }} </strong><br />
      {{ tweet.content }}
    </div>
  </div>
</template>
<script>
export default {
  name: "TweetItem",
  //props ngambil data dari <twetitem (di app.vue), ada user, key, tweet
  props: {
    username: {
      type: String,
      required: true,
    },
    tweet: {
      type: Object, //-> ini bisa diganti Array, sama hasilnya
      required: true,
    },
  },
  //props, berarti mengambil data dari props diatas seteah props,, bisa ditambah conteent, dll
  setup(props) {
    function favouriteTweet(id) {
      props.emit("favourite", id); //emit untuk mengirim item ke atas, favourite nanti  untuk kode diatas, id ya id yang dikirimkan
    }
    return {
      favouriteTweet,
    };
  },
};
</script>
<style>
</style>
