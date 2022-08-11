<template>
  <AppNav></AppNav>
  <AppMain :songs="songs"></AppMain>
  <AppPlayer></AppPlayer>
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
    };
  },
};
</script>
