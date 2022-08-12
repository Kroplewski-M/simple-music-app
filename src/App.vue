<template>
  <AppNav></AppNav>
  <AppMain :songs="songs" @clicked="playSound"></AppMain>
  <AppPlayer :isPlaying="isPlaying" :player="player" @clicked="toggleIsPlaying"></AppPlayer>
</template>

<script>
import AppNav from "./components/AppNav.vue";
import AppMain from "./components/AppMain.vue";
import AppPlayer from "./components/AppPlayer.vue";

export default {
  name: "App",
  components: {
    AppNav,
    AppPlayer,
    AppMain,
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
      this.player.src = this.songs[this.songIndex].src;
      this.player.load();
      this.player.play();
    }
  }
};
</script>
