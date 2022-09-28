<template>
<div class="w-[100%] absolute h-[100%] backdrop-blur-sm">
  <div class="w-[300px] h-[330px] bg-purple-600 rounded-lg mt-[200px] mx-auto shadow-xl text-center">
    <img src="@/assets/photos/close.png" alt="" class="float-right w-[20px] h-[20px] mr-[10px] mt-[10px] hover:cursor-pointer" @click.prevent="toggleForm">
    <p class="font-bold text-[25px] pl-[25px] pt-[10px]">Custom Song</p>

    <form @submit.prevent="addSong" class="pt-5 text-white space-y-2">
        <label for="songName" class="font-bold">Song Name:</label>
        <input type="text" name="songName" class="block mx-auto bg-purple-500 rounded-md pl-[5px]" v-model="songName" required>

        <label for="artistName" class="font-bold">Artist Name:</label>
        <input type="text" name="artistName" class="block mx-auto bg-purple-500 rounded-md pl-[5px]" v-model="songArtist" required>

        <input type="file" ref="file" name="songFile" accept="audio/mpeg/*" class="ml-[50px] pt-[30px] pb-5" @change="selectFile" required>
        <button class="w-[100px] h-[30px] bg-white font-bold text-black rounded-md mx-auto mt-10" >Add Song</button>
    </form>
  </div>
</div>
</template>

<script>
export default {
    name: "AppForm",
    data(){
        return{
            songName: '',
            songArtist: '',
            songFile: '',
            reader: new FileReader(),
        }
    },
    methods:{
        toggleForm(){
            this.$emit('toggleForm')
        },
        addSong(){
            console.log(this.songName);
            console.log(this.songArtist);
            console.log(this.songFile);
            console.log(this.reader);
        },
        selectFile(){
            this.songFile = this.$refs.file.files[0];
            this.reader.readAsBinaryString(this.songFile);
        }
    },
}
</script>
