<template>
  <div class="absolute bottom-0 fixed w-[100%] h-[70px] bg-purple-400 flex">
    <div class="flex flex-col place-content-center w-[100%] pb-[20px]">
      <div class="">
           <input type="range" name="timeStamp" ref="time" v-model="this.currentTime" @input="updateTime" step="0.5" class="w-[100%] hover:cursor-pointer">
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
      <div class="absolute right-20 mt-[20px]">
          <p>Now playing: <span class="font-bold"> {{this.songs[this.songIndex].name}} </span></p>
      </div>
       </div>
</template>

<script>




export default {
  name: "AppPlayer",
  props:["isPlaying","player","songs","songIndex"],
  data(){
    return{
      playing:"play",
      volume: 100,
      currentTime: 0,
      duration: 0,
    }
  },
  watch:{
    isPlaying(){
      if(this.isPlaying == true){
        this.playing = 'pause';
        setTimeout(() =>{
          this.$refs.time.max = this.player.duration;
        },500);
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
    updateTime(){
      this.player.currentTime = this.currentTime;
    },
    timeupdate(){
      this.currentTime = this.player.currentTime;
      if(this.currentTime >= this.player.duration){
        this.next();
      }
    },  
  },
  mounted(){
    this.player.addEventListener('timeupdate',this.timeupdate,false);
  },
 
}

</script>

<style>

</style>