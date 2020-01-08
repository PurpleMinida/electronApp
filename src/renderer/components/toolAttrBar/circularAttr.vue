<template>
	<div class="circular">
		<span>是否填充:</span>
		<input type="checkbox" v-model='checkedToggle' />
		<input type="color" v-model='fillColor' class="yuan" />
		<span>圆边大小:</span>
		<input type="number" v-model='borderSize' class="lineWidth" value="2" />
		<span>圆边颜色:</span>
		<input type="color" v-model='borderColor' class="yuan" />
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				checkedToggle:false,
				fillColor:'black',
				borderSize:'1',
				borderColor:'purple'
			}
		},
		mounted:function(){
			this.checkedToggle = this.$store.getters.getCircular.checkedToggle
			this.fillColor = this.$store.getters.getCircular.fillColor
			this.borderSize = this.$store.getters.getCircular.borderSize
			this.borderColor = this.$store.getters.getCircular.borderColor
		},
		watch:{
			checkedToggle:function(newval, oldval){
				this.$store.dispatch('changecheckedToggle',newval)
			},
			fillColor:function(newval, oldval){
				this.$store.dispatch('changefillColor',newval)
			},
			borderSize:function(newval, oldval){
				this.$store.dispatch('changeborderSize',newval)
			},
			borderColor:function(newval, oldval){
				this.$store.dispatch('changeborderColor',newval)
			}
		}
	}
</script>

<style scoped>
	.yuan{
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
	.circular{
		width: 100%;
		height: 40px;
		background: #FF8247;
		position: fixed;
		top: 20px;
		min-width: 750px;
		display: flex;
		align-items: center;
		z-index: 100;
		font-family: KaiTi;
		color: white;
	}
	.circular > span{
		margin-left: 20px;
	}
</style>