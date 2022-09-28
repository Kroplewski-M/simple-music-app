<template>
  <section class="flex flex-wrap pt-10 place-content-center">
    <div v-for="(song, index) in this.songs" :key="song.name">
      <div class="w-[200px] h-[300px] bg-purple-500 rounded-md text-center mt-10 ml-[30px]">
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
    <div class="w-[200px] h-[300px] bg-purple-500 rounded-md text-center mt-10 ml-[30px] hover:bg-purple-600 hover:cursor-pointer hidden" @click.prevent="toggleForm">
       <img src="@/assets/photos/add.png" alt="" class="w-[90px] h-[90px] ml-[55px] mt-[80px]">
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
    toggleForm(){
      this.$emit('toggleForm')
    },
  },
};
</script>

<style></style>
