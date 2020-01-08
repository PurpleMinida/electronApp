<template>
	<div class="rectangle">
		<span>是否填充:</span>
		<input type="checkbox" v-model='checkedToggle' />
		<input type="color" v-model='fillColor' class="fang" />
		<span>边框大小:</span>
		<input type="number" v-model='borderSize' class="lineWidth" value="2" />
		<span>边框颜色:</span>
		<input type="color" v-model='borderColor' class="fang" />
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				checkedToggle:false,
			    fillColor:'',
			    borderSize:1,
			    borderColor:''
			}
		},
		mounted:function(){
			this.checkedToggle = this.$store.getters.getRectangle.checkedToggles
			this.fillColor = this.$store.getters.getRectangle.fillColors
			this.borderSize = this.$store.getters.getRectangle.borderSizes
			this.borderColor = this.$store.getters.getRectangle.borderColors
		},
		watch:{
			checkedToggle:function(newval, oldval){
				this.$store.dispatch('changeRectanglecheckedToggle',newval)
			},
			fillColor:function(newval, oldval){
				this.$store.dispatch('changeRectanglefillColor',newval)
			},
			borderSize:function(newval, oldval){
				this.$store.dispatch('changeRectangleborderSize',newval)
			},
			borderColor:function(newval, oldval){
				this.$store.dispatch('changeRectangleborderColor',newval)
			},
		}
	}
</script>

<style scoped>
	.fang{
		border-radius: 8px;
		outline: none;
	}
	.lineWidth{
		width: 50px;
		border: none;
		outline: none;
		border-radius: 8px;
		padding-left: 5px;
	}
	.rectangle{
		width: 100%;
		height: 40px;
		background: #FF8247;
		position: fixed;
		top: 20px;
		display: flex;
		min-width: 750px;
		align-items: center;
		z-index: 100;
		font-family: KaiTi;
		color: white;
	}
	.rectangle > span{
		margin-left: 20px;
	}
</style>