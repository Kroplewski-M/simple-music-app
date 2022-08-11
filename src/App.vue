<template>
  <AppNav></AppNav>
  <AppPlayer></AppPlayer>
</template>

<script>
import AppNav from "./components/AppNav.vue";
import AppPlayer from "./components/AppPlayer.vue";

export default {
  name: "App",
  components: {
    AppNav,
    AppPlayer,
  },
};
</script>
