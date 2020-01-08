<template>
	<div class="line">
		<span>线条颜色:</span>
		<input type="color" v-model='lineColor' class="penColor" />
		<span>线条大小:</span>
		<input type="number" v-model='lineWidth' class="lineWidth" value="1" />
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				lineColor:'',
				lineWidth:1
			}
		},
		mounted:function(){
			this.lineColor = this.$store.getters.getLine.lineColor
			this.lineWidth = this.$store.getters.getLine.lineWidth
		},
		watch:{
			lineColor:function(newval, oldval){
				this.$store.dispatch('changelineColor',newval)
			},
			lineWidth:function(newval, oldval){
				this.$store.dispatch('changelineWidth',newval)
			}
		}
	}
</script>

<style scoped>
	.line{
		width: 100%;
		height: 40px;
		background: #FF8247;
		position: fixed;
		top: 20px;
		z-index: 100;
		min-width: 750px;
		display: flex;
		align-items: center;
		font-family: KaiTi;
		color: white;
	}
	.line > span{
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