<template>
	<div class="eraser">
		<span>橡皮大小:</span>
		<input type="number" v-model='size' class="lineWidth" value="1" />
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				size:1
			}
		},
		mounted:function(){
			this.size = this.$store.getters.getEraser.size
		},
		watch:{
			size:function(newval,oldval){
				this.$store.dispatch('changeEraserSize',newval)
			}
		}
	}
</script>

<style scoped>
	.eraser{
		width: 100%;
		height: 40px;
		background: #FF8247;
		position: fixed;
		min-width: 750px;
		top: 20px;
		z-index: 100;
		display: flex;
		align-items: center;
		font-family: KaiTi;
		color: white;
	}
	.eraser > span{
		margin-left: 20px;
	}
	.penColor{
		border: none;
		border-radius: 8px;
		outline: none;
	}
	.lineWidth{
		border-radius: 8px;
		border: none;
		padding-left: 5px;
		width: 50px;
		outline: none;
	}
</style>