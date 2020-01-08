<template>
  <div id="app">
  	<navs></navs>
  	<div class="fill"></div>
    <router-view></router-view>
  	<tool></tool>
    <div class="occupy"></div>
    <draw></draw>
    <newfile></newfile>
    <div class="musicSelect">
    	<img @click='musicShow' src="./assets/musicImg/music.png">
    </div>
    <music></music>
  </div>
</template>

<script>
  import $ from 'jquery'
  import navs from './components/nav.vue'
  import tool from './components/tool.vue'
  import draw from './components/draw.vue'
  import newfile from './components/menuFile/newFile.vue'
  import music from './components/musicComponents/music.vue'
  export default {
    name: 'my-canvas-music',
    methods:{
      musicShow(){
        $('#music').slideDown()
      }
    },
    components:{
    	'navs':navs,
    	'tool':tool,
    	'draw':draw,
    	'newfile':newfile,
    	'music':music
    },
  }
</script>

<style scoped>
  .fill{
  	height:20px;
  }
  .occupy{
    height: 40px;
  }
  .musicSelect{
  	width:25px;
  	height:25px;
  	position:fixed;
  	bottom: 0;
  	left: 0;
  }
  .musicSelect > img{
  	width:100%;
  	height:100%;
  }
  .musicSelect:hover{
  	background: orange !important;
  }
</style>
