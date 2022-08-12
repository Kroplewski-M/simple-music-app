<template>
  <section class="flex flex-wrap space-x-10 mt-10 place-content-center">
    <div v-for="(song, index) in this.songs" :key="song.name">
      <div class="w-[200px] h-[300px] bg-purple-500 rounded-md text-center">
        <img
          src="../assets/photos/music.png"
          alt=""
          class="w-[80%] mx-auto rounded-md pt-[20px]"
        />
        <p class="font-bold">{{ song.name }}</p>
        <p class="font-semibold">by: {{ song.artist }}</p>
        <img
          src="@/assets/photos/play.png"
          alt="play song"
          class="w-[17px] h-[17px] hover:cursor-pointer mx-auto mt-5"
          @click.prevent="playSound(index,restart)"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  props: ["songs"],
  methods: {
    playSound(index) {
      this.$emit('clicked',index);
    },
  },
};
</script>

<style></style>
