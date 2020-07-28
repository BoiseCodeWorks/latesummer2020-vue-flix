<template>
  <div class="results col-6 text-color">
    <h1>Results</h1>
    <MoviePoster v-for="(movie, i) in movies" :index="i" :movieData="movie" :key="movie.id" />
  </div>
</template>


<script>
import MoviePoster from "./MoviePoster";
export default {
  name: "results",
  data() {
    return {};
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
  methods: {},
  components: {
    MoviePoster,
  },
};
</script>


<style scoped>
.text-color {
  color: #d31cd3;
}
</style>