<template>
  <div class="bg-gray-600 m-4 hover:bg-pink-800 flex flex-col">
    <img :src="track.album.cover_big" alt="" />
    <div class="p-2 flex flex-col">
      <span class="font-bold">{{ track.artist.name }}</span>
      <span>{{ track.title_short }}</span>
      <div class="flex">
        <span class="flex-1">{{ track.duration | timeFilter }}</span>
        <img class="h-5 flex-1" src="../assets/play-button.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    track: { type: Object, required: true }
  }
};
</script>
