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
        <button class="px-2 rounded bg-green-400" @click="searchTrack">
          Buscar
        </button>
        <button class="px-2 rounded bg-red-400" @click="cancelDeleteSearch">
          X
        </button>
      </div>
      <p v-if="tracks.length">{{ searchMessage }}</p>
      <div v-if="tracks.length" class="grid grid-cols-5">
        <div
          v-for="track in tracks"
          :key="track.id"
          class="bg-gray-600 m-4 hover:bg-pink-800 flex flex-col"
        >
          <img :src="track.album.images[1].url" alt="" />
          <span class="px-1">{{ track.artists[0].name }}</span>
          <span class="px-1">{{ track.name }}</span>
          <span class="px-1">{{ track.duration_ms | timeFilter }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import getTracks from "../services/track.js";
export default {
  data() {
    return {
      searchQuery: "",
      tracks: [],
      type: "track"
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
    async searchTrack() {
      if (!this.searchQuery) {
        return;
      }

      this.tracks = await getTracks(this.searchQuery, this.type);
    },
    cancelDeleteSearch() {
      this.tracks = [];
      this.searchQuery = "";
    }
  }
};
</script>
