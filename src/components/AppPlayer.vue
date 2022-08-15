<template>
  <div class="absolute bottom-0 fixed w-[100%] h-[70px] bg-purple-400 flex">
    <div class="flex flex-col place-content-center w-[100%] pb-[20px]">
      <div class="">
           <input type="range" name="timeStamp" ref="time" v-model.lazy="this.player.currentTime" step="0.5" class="w-[100%] hover:cursor-pointer">
        </div>

    <div class="mx-auto flex space-x-10  mt-[10px]">
      <img
        src="@/assets/photos/prev.png"
        alt="play previous song"
        class="w-[30px] h-[30px] hover:cursor-pointer"
        @click="prev"
      />
      <img
        :src="require(`@/assets/photos/${playing}.png`)"
        alt="play song"
        class="w-[27px] h-[27px] hover:cursor-pointer"
        @click.prevent="toggleIsPlaying"
      />
      <img
        src="@/assets/photos/next.png"
        alt="play next song"
        class="w-[30px] h-[30px] hover:cursor-pointer"
        @click="next"
      />
    </div>
    </div>
       <div class="absolute ml-5 mt-[25px] w-[130px]">
         <input type="range" name="volume" id="volume" min="0" max="100" class="w-[100%] hover:cursor-pointer " v-model="volume">
      </div>
       </div>
</template>

<script>




export default {
  name: "AppPlayer",
  props:["isPlaying","player"],
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
        setTimeout(() =>{
          this.$refs.time.max = this.player.duration;
        },1000);
      }
      else{
        this.playing = 'play';
      }
    },
    volume(volume){
      volume = this.volume / 100;
      this.$emit('volume',volume);
    },
    
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