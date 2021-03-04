<template>
  <div id="app">
    <rm-header></rm-header>
    <section>
      <nav>
        <div>
          <input
            type="text"
            placeholder="Buscar canción o artista"
            v-model="searchQuery"
          />
        </div>
        <div>
          <button @click="searchTrack">Buscar</button>
          <button @click="cancelDeleteSearch">x</button>
          <p v-if="tracks.length">{{ searchMessage }}</p>
        </div>
      </nav>
      <div>
        <table v-if="tracks.length">
          <tr>
            <th>Artista</th>
            <th>Canción</th>
          </tr>
          <tr v-for="track in tracks" :key="track.name">
            <td>{{ track.artists[0].name }}</td>
            <td>{{ track.name }}</td>
          </tr>
        </table>
      </div>
    </section>
    <rm-footer></rm-footer>
  </div>
</template>

<script>
import trackService from "./services/track.js";
import RmFooter from "./components/layout/RmFooter.vue";
import RmHeader from "./components/layout/RmHeader.vue";

export default {
  name: "App",
  components: {
    RmFooter,
    RmHeader
  },
  data() {
    return {
      searchQuery: "",
      tracks: []
    };
  },
  computed: {
    searchMessage() {
      return `${this.tracks.length} ${
        this.tracks.length === 1
          ? "resultado encontrado"
          : "resultados encontrados"
      }`;
    }
  },
  methods: {
    searchTrack() {
      if (!this.searchQuery) {
        return;
      }
      trackService.search(this.searchQuery).then(res => {
        this.tracks = res.tracks.items;
      });
    },
    cancelDeleteSearch() {
      this.tracks = [];
      this.searchQuery = "";
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #332f29;
  margin-top: 60px;
}
table {
  margin: auto;
}
</style>
