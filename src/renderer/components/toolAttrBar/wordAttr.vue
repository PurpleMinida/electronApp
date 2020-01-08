<template>
	<div class="word">
		<span>文字内容:</span>
		<input type="text" v-model='textContent' class="textContent" placeholder="请输入内容" />
		<span>文字颜色:</span>
		<input type="color" v-model='textColor' class="text" />
		<span>文字大小:</span>
		<input type="number" v-model='fontSize' class="lineWidth" value="20" />
		<span>字体:</span>
		<input type="text" v-model='fontFamily' class="text family" />
		<div class="tip">Tip:输入内容后点击画布</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				textContent:'',
				textColor:'',
				fontSize:'',
				fontFamily:''
			}
		},
		mounted:function(){
			this.textContent = this.$store.getters.getWord.textContent
			this.textColor = this.$store.getters.getWord.textColor
			this.fontSize = this.$store.getters.getWord.fontSize
			this.fontFamily = this.$store.getters.getWord.fontFamily
		},
		watch:{
			textContent:function(newval, oldval){
				this.$store.dispatch('changeWordtextContent',newval)
			},
			textColor:function(newval, oldval){
				this.$store.dispatch('changeWordtextColor',newval)
			},
			fontSize:function(newval, oldval){
				this.$store.dispatch('changeWordfontSize',newval)
			},
			fontFamily:function(newval, oldval){
				this.$store.dispatch('changeWordfontFamily',newval)
			},
		}
	}
</script>

<style scoped>
	.family{
		padding-left: 5px;
		border: none;
		width: 70px;
		height: 20px;
	}
	.tip{
		height: 100%;
		flex: 1;
		font-family: '微软雅黑';
		font-size: 12px;
		display: flex;
		padding-left: 10px;
		align-items: center;
		justify-content: center;
	}
	.textContent{
		width: 80px;
		height: 20px;
		border: none;
		border-radius: 8px;
		outline: none;
		padding-left: 5px;
		font-family: kaiti;
	}
	.text{
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
	.word{
		width: 100%;
		min-width: 750px;
		height: 40px;
		background: #FF8247;
		position: fixed;
		top: 20px;
		display: flex;
		align-items: center;
		z-index: 100;
		font-family: KaiTi;
		color: white;
	}
	.word > span{
		margin-left: 20px;
	}
</style>