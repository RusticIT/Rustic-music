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
      <p>{{ tracksFound }}</p>
      <p class="text-center my-1" v-if="noSearchQuery">{{ noSearchQuery }}</p>
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
    </div>
  </section>
</template>

<script>
import getTracks from "../services/searchService";
import RmTrack from "./RmTrack";

export default {
  data() {
    return {
      isLoading: false,
      searchQuery: "",
      tracks: [],
      type: "track",
      noSearchQuery: ""
    };
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
        return (this.noSearchQuery = "Ingrese una busqueda");
      }
      this.noSearchQuery = "";
      this.isLoading = true;
      this.tracks = await getTracks(this.searchQuery, this.type);
      this.isLoading = false;
    },
    cancelDeleteSearch() {
      this.tracks = [];
      this.searchQuery = "";
    }
  }
};
</script>
