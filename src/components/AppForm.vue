<template>
<div class="w-[100%] absolute h-[100%] backdrop-blur-sm">
  <div class="w-[300px] h-[500px] bg-purple-600 rounded-lg mt-5 mx-auto shadow-xl text-center">
    <img src="@/assets/photos/close.png" alt="" class="float-right w-[20px] h-[20px] mr-[10px] mt-[10px] hover:cursor-pointer" @click.prevent="toggleForm">
    <p class="font-bold text-[25px] pl-[25px] pt-[10px]">Custom Song</p>
  </div>
</div>
</template>

<script>
export default {
    name: "AppForm",
    methods:{
        toggleForm(){
            this.$emit('toggleForm')
        },
    }
}
</script>
