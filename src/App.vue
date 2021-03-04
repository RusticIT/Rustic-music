<template>
  <div id="app">
    <h1>Rustic Music</h1>
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
          <p v-if="coincidenceTrack">{{ searchMessage }}</p>
        </div>
      </nav>
      <div>
        <table v-if="tracksFiltered.length > 0">
          <tr>
            <th>Artista</th>
            <th>Canción</th>
          </tr>
          <tr v-for="track in tracksFiltered" :key="track.name">
            <td>{{ track.artist }}</td>
            <td>{{ track.name }}</td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
const tracks = [
  { name: "muchacha", artist: "spinetta" },
  { name: "aca en el baile", artist: "el pepo" },
  { name: "i was made for loving you", artist: "kiss" }
];
export default {
  name: "App",
  data() {
    return {
      searchQuery: "",
      tracks: []
    };
  },
  computed: {
    searchMessage() {
      return `${this.tracksFiltered.length} ${
        this.tracksFiltered.length === 1
          ? "resultado encontrado"
          : "resultados encontrados"
      }`;
    },
    tracksFiltered() {
      if (this.searchQuery === "") {
        return false;
      }
      return this.tracks.filter(
        track =>
          track.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          track.artist.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    coincidenceTrack() {
      return this.searchQuery != "" && this.tracks.length > 0 ? true : false;
    }
  },
  methods: {
    searchTrack() {
      this.tracks = tracks;
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
