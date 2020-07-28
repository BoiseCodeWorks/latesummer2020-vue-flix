<template>
  <div
    class="movie-poster border rounded mb-2 p-3 text-color"
    :class="index%2 ? 'bg-primary': 'bg-warning'"
    @click="selectMovie"
  >
    <h5>{{movieData.title}}</h5>
    <img class="img-fluid" :src="'https://image.tmdb.org/t/p/w500' + movieData.poster_path" alt />
  </div>
</template>


<script>
export default {
  name: "movie-poster",
  props: ["movieData", "index"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    selectMovie() {
      this.$store.dispatch("selectMovie", this.movieData);
    },
  },
  components: {},
};
</script>


<style scoped>
.text-color {
  color: blue;
}
</style>