<template>
	<div class="brush">
		<span>画笔颜色:</span>
		<input type="color" class="penColor" v-model='penColor' />
		<span>画笔大小:</span>
		<input type="number" class="lineWidth" value="1"  v-model='penSize'/>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				penColor:'',
				penSize:1
			}
		},

		watch:{
			penColor:function(newval,oldval){
				this.$store.dispatch('changePenColor',newval)
			},
			penSize:function(newval,oldval){
				this.$store.dispatch('changePenSize',newval)
			}
		},
		mounted:function(){
			this.penColor = this.$store.getters.getBrush.PenColor
			this.penSize = this.$store.getters.getBrush.PenSize
		}
	}
</script>

<style scoped>
	.brush{
		width: 100%;
		height: 40px;
		background: #FF8247;
		position: fixed;
		top: 20px;
		min-width: 750px;
		z-index: 100;
		display: flex;
		align-items: center;
		font-family: KaiTi;
		color: white;
	}
	.brush > span{
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