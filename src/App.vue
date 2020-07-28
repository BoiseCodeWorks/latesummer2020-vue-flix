<template>
  <div id="app" class="text-color">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="form-group">
      <label for="query">Search</label>
      <input
        type="text"
        class="form-control"
        name="query"
        placeholder="Enter movie title here...."
        v-model="query"
      />
    </div>
    <button type="button" class="btn btn-primary btn-lg btn-block" @click="getThoseMovies">Search</button>
    <!-- draw results here -->
    <div class="row">
      <results></results>
      <MovieDeetz />
    </div>
  </div>
</template>

<script>
import Results from "./components/Results";
import MovieDeetz from "./components/MovieDeetz";
export default {
  name: "App",
  data() {
    return {
      query: "",
    };
  },
  mounted() {
    // if we had a basic request we could make that, our api requires a query and so we will require user input
    // this.$store.dispatch("getMovies")
  },
  methods: {
    getThoseMovies() {
      this.$store.dispatch("getMovies", this.query);
    },
  },
  components: {
    Results,
    MovieDeetz,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.text-color {
  color: #2bd31c;
}
</style>
