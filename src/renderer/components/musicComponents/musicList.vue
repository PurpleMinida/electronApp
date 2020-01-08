<template>
	<div class="list" @click='down' :id="songShow.id">
		<div class="songImg">
			<img :src="songShow.imgurl">
		</div>
		<div class="songer">
			<div class="up">{{songShow.song}}</div>
			<div class="down">{{songShow.names}}</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			songinfo:{
				type: Object
			}
		},
		computed: {
	    	normalizedSize: function () {
	        	return this.songinfo.trim().toLowerCase()
	    	}
	    },
		data(){
			return {
				songShow:this.songinfo
			}
		},
		methods:{
			down(){
				this.$emit('tofather',this.songShow)
			}
		}
	}
</script>
<style scoped>
	.list{
		width: 100%;
		height: 40px;
		border-bottom: 1px solid #8B8B83;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.songImg{
		width: 35px;
		height: 35px;
		border-radius: 5px;
		background: pink;
		overflow:hidden;
	}
	.songImg > img{
		width:100%;
		height:100%;
	}
	.songer{
		width: 140px;
		height: 35px;
	}
	.songer > div{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		-webkit-line-clamp: 1;
	}
	.songer > div:nth-of-type(1){
		font-size: 15px;
		color: #303030;
		padding-left: 4px;
	}
	.songer > div:nth-of-type(2){
		font-size: 13px;
		color: gray;
		padding-left: 4px;
	}
</style>