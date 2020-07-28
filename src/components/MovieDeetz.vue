<template>
  <div class="movie-deetz col-6">
    <h1>{{movie.title}}</h1>
    <img class="img-fluid" :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt />
    <p>{{movie.overview}}</p>
  </div>
</template>


<script>
export default {
  name: "movie-deetz",
  data() {
    return {};
  },
  computed: {
    movie() {
      return this.$store.state.activeMovie;
    },
  },
  methods: {},
  components: {},
};
</script>


<style lang="scss" scoped>
</style>