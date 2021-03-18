<template>
  <div class="bg-gray-600 m-4 hover:bg-pink-800 flex flex-col">
    <img :src="track.album.cover_big" alt="" />
    <div class="p-2 flex flex-col">
      <span class="font-bold">{{ track.artist.name }}</span>
      <span>{{ track.title_short }}</span>
      <div class="flex">
        <span class="flex-1">{{ track.duration | timeFilter }}</span>
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
      <audio ref="audioTrack" :src="track.preview"></audio>
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
