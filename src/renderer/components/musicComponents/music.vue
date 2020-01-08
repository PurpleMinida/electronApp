<template>
	<div class="music" id="music">
		<div @click='close' class="close"></div>
		<div class="zan"></div>
		<div class="search">
			<input type="text" v-model='searchText' />
			<button @click='search'>搜索</button>
		</div>
		<div class="nowPlay">
			<div class="songImg">
				<img :src="nowPlay.imgurl">
			</div>
			<div class="songName">
				<div>{{nowPlay.song}}</div>
				<div>{{nowPlay.names}}</div>
			</div>
			<div class="play">
				<img @click='bofang' :src="selection">
			</div>
			<div class="randomAndChange">
				<img @click='changes' src="../../assets/musicImg/menu.png">
			</div>
		</div>
		<div class="listContainer">
			<musicList @tofather='play' v-for="(item, index) in musicLists" :key="index" :songinfo=musicLists[index]></musicList>
		</div>
		<div id='list' class="showList">
			<div id="danqv" @click='loopPlay'>单曲循环</div>
			<div @click='randomMusic'>换一批</div>
		</div>
		<audio id="audio" style="display:none"></audio>
	</div>
</template>
<script>
	import musicList from './musicList.vue'
	import $ from 'jquery'
	import axios from 'axios'
	export default{
		methods:{
			//关闭音乐窗口
			close(){
				$('#music').slideUp()
				$('#list').fadeOut()
			},
			//单曲循环
			loopPlay(){
				var audio = document.getElementById('audio')
				if(audio.loop){
					audio.loop = false
					$('#danqv').get(0).style.background = ''
				}else{
					audio.loop = true
					$('#danqv').get(0).style.background = 'black'
				}
				$('#list').fadeOut()
			},
			//播放暂停
			bofang(){
				var audio = document.getElementById('audio')
				if(audio.paused){
					audio.play()
					this.selection = require('../../assets/musicImg/suspend.png')
				}else{
					audio.pause()
					this.selection = require('../../assets/musicImg/play.png')
				}
				
			},
			//子组件传递过来的数据
			play(msg){
				console.log(msg)
				this.nowPlay = msg
				var audio = document.getElementById('audio')
				audio.src = `http://music.163.com/song/media/outer/url?id=${msg.id}.mp3`
				audio.play()
				this.selection = require('../../assets/musicImg/suspend.png')

				//更改背景色
				for(var k = 0; k < this.musicLists.length; k++){
					document.getElementById(this.musicLists[k].id).style.background = 'white'
				}
				document.getElementById(msg.id).style.background = 'orange'
				//设置自动下一曲标识
				for(var i = 0; i < this.musicLists.length; i++){
					if(msg.id == this.musicLists[i].id){
						this.q = i
					}
				}
			},
			//菜单显示隐藏
			changes(){
				$('#list').fadeToggle()
			},
			search(){

				if(this.searchText == ''){return}
				this.musicLists = []
				var that = this
				axios.get(this.searchUrl,{
					params:{
						type:'search',
						s:this.searchText
					}
				}).then(function(respone){
					var res = respone.data.result.songs
					
					for (var j = 0; j < res.length;j++){
			          that.musicLists.push({ 'imgurl': res[j].al.picUrl, 'song': res[j].name, 'names': res[j].ar[0].name, 'id': res[j].id})
			        }
				})
			},

			randomMusic(){
				this.q = 0
				$('#list').fadeOut()
				var that = this
				this.musicLists = []
				var musicArr  =[0,1,2,3,4,5,6,7,8,9]
				var id = ''
				for(var i = 0;i < 7;i++){
			      id += musicArr[Math.floor(Math.random() * musicArr.length)]
			    }
			    axios.get(this.url,{
			    	params:{
			    		type:'playlist',
			    		id:id
			    	}
			    }).then(function(respone){
			    	var res = respone.data.playlist.tracks
			    	if(res.length == 0){
			    		that.randomMusic()
			    		return
			    	}
			    	for (var j = 0; j < res.length;j++){
			          that.musicLists.push({ 'imgurl': res[j].al.picUrl, 'song': res[j].name, 'names': res[j].ar[0].name, 'id': res[j].id})
			        }
			    }).catch(function(){
			    	that.randomMusic()
			    })
			    document.getElementById('audio').addEventListener('ended',function(){
			    	if(document.getElementById('audio').loop){
			    		return
			    	}
			    	that.selection = require('../../assets/musicImg/play.png')
			    	if(that.q == that.musicLists.length){that.q = 0}
			    	console.log('播放完毕')
			    	console.log(that)
			    	document.getElementById(that.musicLists[that.q].id).click()
			    	that.q++
			    })
			}
		},
		components:{
			'musicList':musicList
		},
		data(){
			return {
				url:'https://api.imjad.cn/cloudmusic/',
				musicLists:[],
				searchText:'',
				searchUrl:'https://api.imjad.cn/cloudmusic/',
				nowPlay:{
					id:'',
					imgurl:require('../../assets/musicImg/music.png'),
					names:'歌手',
					song:'播放音乐'
				},
				selection:require('../../assets/musicImg/play.png'),
				//保存自动下一曲的标识
				q:0
			}
		},
		mounted:function(){
			this.randomMusic()
		}
	}

</script>
<style scoped>
	.listContainer{
		width:200px;
		height:110px;
		overflow:auto;
	}
	.listContainer::-webkit-scrollbar {
        width: 5px;
        height: 1px;
	    }
	.listContainer::-webkit-scrollbar-thumb {
	        border-radius: 10px;
	         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
	        background: purple;
	    }
	.listContainer::-webkit-scrollbar-track {
	        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
	        border-radius: 10px;
	        background: #EDEDED;
	    }

	.showList{
		width: 60px;
		height: 50px;
		position: absolute;
		right: 0;
		bottom: 40px;
		background: #2B2B2B;
		font-size: 15px;
		color: white;
		text-align: center;
		display:none;
	}
	.showList > div{
		width: 100%;
		height: 25px;
		line-height: 25px;
	}
	.showList > div:hover{
		cursor: pointer;
		background: black;
	}


	.music{
		width: 200px;
		height: 200px;
		position: fixed;
		bottom: 0;
		left: 0;
		box-shadow: 0 0 10px gray;
		background: white;
		overflow: hidden;
		display:none;
		z-index:99999;
	}
	.zan{
		width: 100%;
		height: 20px;
	}
	.search{
		width: 100%;
		height: 30px;
		background: pink;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.search > input{
		border: none;
		outline: none;
		border-bottom-left-radius: 10px;
		border-top-left-radius: 10px;
		padding-left: 5px;
		width: 100px;
		height: 20px;
	}
	.search > button{
		height: 22px;
		border-bottom-right-radius: 10px;
		border-top-right-radius: 10px;
		border: none;
		outline: none;
		color:#303030;
	}
	.close{
		width: 20px;
		height: 20px;
		position: absolute;
		top: 0;
		right: 0;
		background: url('../../assets/musicImg/guan.png');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 100% 100%;
	}
	.close:hover{
		background: url('../../assets/musicImg/guanActive.png');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 100% 100%;
	}
	.nowPlay{
		width: 100%;
		height: 40px;
		position: absolute;
		bottom: 0;
		background: pink;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0 10px gray;
	}

	.songImg{
		width: 35px;
		height: 35px;
		border-radius: 5px;
		overflow:hidden;
	}
	.songImg > img{
		width:100%;
		height:100%;
	}
	.play{
		width: 30px;
		height: 30px;
	}
	.songName{
		width: 90px;
		height: 35px;
		overflow: hidden;
	}
	.songName > div{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		-webkit-line-clamp: 1;
	}
	.songName > div:nth-of-type(1){
		font-size: 15px;
		color: #303030;
		padding-left: 4px;
	}
	.songName > div:nth-of-type(2){
		font-size: 13px;
		color: gray;
		padding-left: 4px;
	}
	.randomAndChange{
		width: 30px;
		height: 30px;
	}
	.play > img{
		width: 100%;
		height: 100%;
	}
	.randomAndChange > img{
		width: 100%;
		height: 100%;
	}
	.randomAndChange:hover{
		background:orange;
	}
	.play:hover{
		background:orange;
	}
</style>