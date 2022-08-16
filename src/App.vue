<template>
  <AppNav></AppNav>
  <AppForm @toggleForm="toggleForm" class="fade-in" v-if="showForm"></AppForm>
  <AppMain :songs="songs" @clicked="playSound" @toggleForm="toggleForm"></AppMain>
  <AppPlayer :isPlaying="isPlaying" :player="player"  :songIndex="songIndex" :songs="songs" @clicked="toggleIsPlaying" @next="next" @prev="prev" @volume="volume"></AppPlayer>
</template>


<script>
import AppNav from "./components/AppNav.vue";
import AppMain from "./components/AppMain.vue";
import AppPlayer from "./components/AppPlayer.vue";
import AppForm from "./components/AppForm.vue";

export default {
  name: "App",
  components: {
    AppNav,
    AppPlayer,
    AppMain,
    AppForm
},
  data() {
    return {
      songs: [
        {
          name: "GrateFul",
          artist: "Neffex",
          image: "greatful.jpg",
          src: require("../src/assets/music/Grateful.mp3"),
        },
        {
          name: "Popstars",
          artist: "KDA",
          image: "PopStars.jpg",
          src: require("../src/assets/music/PopStars.mp3"),
        },
        {
          name: "Safe To Say",
          artist: "Aitch",
          image: "safe_to_say.png",
          src: require("../src/assets/music/Safe_To_Say.mp3"),
        },
      ],
      player: new Audio(),
      isPlaying: false,
      timeStamp: 0,
      songIndex: 0,
      showForm: false,
      fade:'fade-out',
    };
  },
  methods:{
    playSound(index){
      this.songIndex = index;
      this.timeStamp = 0;
      this.isPlaying = true;
      
    },
    toggleIsPlaying(isPlaying){
      this.isPlaying = isPlaying;
    },
    next(){
      this.songIndex++;
    },
    prev(){
      this.songIndex--;
    },
    volume(volume){
      this.player.volume = volume;
    },
    toggleForm(){
      this.showForm = !this.showForm;
      if(this.showForm){
        this.fade='fade-in';
      }else{
        this.fade='fade-out';
      }
    }
  },
  watch:{
    isPlaying(){
      if(this.isPlaying == true)
      {
        this.player.src = this.songs[this.songIndex].src;
        this.player.currentTime = this.timeStamp;
        this.player.play();
      }
      else{
        this.timeStamp = this.player.currentTime;
        this.player.pause();
      }
    },
     songIndex(){
       if(this.songIndex >= (this.songs.length)){
        this.songIndex = 0;
      }
      if(this.songIndex < 0){
        this.songIndex = (this.songs.length -1);
      }
      this.player.src = this.songs[this.songIndex].src;
      this.player.load();
      this.player.play();
    },
  }
};
</script>

<style>
.fade-in {
	animation: fadeIn 0.5s;
  	opacity: 1;
}

@keyframes fadeIn {
  from {
  	opacity: 0;
  }
  to {
 	opacity: 1;
  }
}

</style>

