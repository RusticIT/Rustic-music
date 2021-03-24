<template>
  <div class="bg-gray-600 m-4 hover:bg-pink-800 flex flex-col">
    <img :src="track.album.images[0].url" alt="" />
    <div class="p-2 flex flex-col">
      <span class="font-bold">{{ track.artists[0].name }}</span>
      <span>{{ track.name }}</span>
      <div class="flex">
        <span class="flex-1">{{ track.duration_ms | timeFilter }}</span>
        <img
          v-if="play"
          @click="playPause"
          class="h-5 flex-1"
          src="../assets/pause.svg"
        />
        <img
          v-else
          @click="playPause"
          class="h-5 flex-1"
          src="../assets/play.svg"
        />
      </div>
      <audio ref="audioTrack" :src="track.preview_url"></audio>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    track: { type: Object, required: true }
  },
  data() {
    return {
      play: false
    };
  },
  methods: {
    playPause() {
      this.play = !this.play;
      if (this.play) {
        this.$refs.audioTrack.play();
      } else {
        this.$refs.audioTrack.pause();
      }
    }
  }
};
</script>
