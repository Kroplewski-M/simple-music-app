<template>
  <div class="absolute bottom-0 fixed w-[100%] h-[70px] bg-purple-400 flex">
    <div class="mx-auto flex space-x-10 mt-[15px]">
      <img
        src="@/assets/photos/prev.png"
        alt="play previous song"
        class="w-[40px] h-[40px] hover:cursor-pointer"
      />
      <img
        src="@/assets/photos/play.png"
        alt="play song"
        class="w-[37px] h-[37px] hover:cursor-pointer"
      />
      <img
        src="@/assets/photos/next.png"
        alt="play next song"
        class="w-[40px] h-[40px] hover:cursor-pointer"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppPlayer",
};
</script>
