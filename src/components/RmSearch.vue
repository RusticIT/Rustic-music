<template>
  <section class="flex justify-center px-6 py-40">
    <div>
      <div class="flex justify-center">
        <input
          class="border border-gray-600 rounded px-1 text-gray-900"
          type="text"
          placeholder="Buscar canción o artista"
          v-model="searchQuery"
        />
        <button class="px-2 mx-1 rounded bg-green-400" @click="searchTrack">
          Buscar
        </button>
        <button class="px-2 rounded bg-red-400" @click="cancelDeleteSearch">
          X
        </button>
      </div>
      <div class="flex justify-center">
        <p v-if="searchFound">{{ tracksFound }}</p>
        <p class="text-center my-1" v-if="noSearchQuery">
          Ingrese una búsqueda
        </p>
      </div>
      <bounce-loader
        v-if="isLoading"
        class="m-auto my-14"
        color="#9D174D"
      ></bounce-loader>
      <div v-if="tracks.length" class="grid grid-cols-5">
        <div v-for="track in tracks" :key="track.id">
          <rm-track :track="track"></rm-track>
        </div>
      </div>
      <div v-if="!noSearchQuery && !searchFound">
        <p
          class="text-center text-3xl text-white bg-green-500 w-1/5 p-2 rounded-full m-auto my-2"
        >
          Los más populares!
        </p>
        <div class="grid grid-cols-5">
          <div v-for="chartTrack in chartTracks" :key="chartTrack.track.id">
            <rm-track :track="chartTrack.track"></rm-track>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getTracks, getChartsTracks } from "../services/searchService";
import RmTrack from "./RmTrack";

export default {
  data() {
    return {
      isLoading: false,
      searchQuery: "",
      chartTracks: [],
      tracks: [],
      type: "track",
      noSearchQuery: false,
      searchFound: false
    };
  },
  async created() {
    this.chartTracks = await getChartsTracks();
  },
  components: {
    RmTrack
  },
  computed: {
    tracksFound() {
      return `${this.tracks.length} ${
        this.tracks.length === 1
          ? "resultado encontrado"
          : "resultados encontrados"
      }`;
    }
  },
  methods: {
    async searchTrack() {
      if (!this.searchQuery) {
        return (this.noSearchQuery = true);
      }
      this.isLoading = true;
      this.tracks = await getTracks(this.searchQuery, this.type);
      this.searchFound = false;
      this.noSearchQuery = false;
      this.isLoading = false;
      this.searchFound = true;
    },
    cancelDeleteSearch() {
      this.tracks = [];
      this.searchQuery = "";
      this.noSearchQuery = false;
      this.searchFound = false;
    }
  }
};
</script>
