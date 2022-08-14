<template>
  <div class="absolute bottom-0 fixed w-[100%] h-[70px] bg-purple-400 flex">
    <div class="mx-auto flex space-x-10 mt-[15px]">
      <img
        src="@/assets/photos/prev.png"
        alt="play previous song"
        class="w-[40px] h-[40px] hover:cursor-pointer"
        @click="prev"
      />
      <img
        :src="require(`@/assets/photos/${playing}.png`)"
        alt="play song"
        class="w-[37px] h-[37px] hover:cursor-pointer"
        @click.prevent="toggleIsPlaying"
      />
      <img
        src="@/assets/photos/next.png"
        alt="play next song"
        class="w-[40px] h-[40px] hover:cursor-pointer"
        @click="next"
      />
    </div>
       <div class="absolute ml-5 mt-[25px] w-[130px]">
         <input type="range" name="volume" id="volume" min="0" max="100" class="w-[100%] hover:cursor-pointer " v-model="volume">
      </div>
  </div>
</template>

<script>
export default {
  name: "AppPlayer",
  props:["isPlaying"],
  data(){
    return{
      playing:"play",
      volume: 100,
    }
  },
  watch:{
    isPlaying(){
      if(this.isPlaying == true){
        this.playing = 'pause';
      }
      else{
        this.playing = 'play';
      }
    },
    volume(volume){
      volume = this.volume / 100;
      this.$emit('volume',volume);
    }
  },
  methods:{
     toggleIsPlaying(flip){
      flip = !this.isPlaying
      this.$emit('clicked',flip);
    },
    next(){
      this.$emit('next');
    },
    prev(){
      this.$emit('prev');
    },
  },
}
</script>

<style>


</style>