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
  </div>
</template>

<script>
export default {
  name: "AppPlayer",
  props:["isPlaying"],
  data(){
    return{
      playing:"play",
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
    }
  },
}
</script>
