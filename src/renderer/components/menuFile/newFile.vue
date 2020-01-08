<template>
	<div class="newfile" id="newfile" @click.self='no'>
		<div class="container">
			<div class="up">
				<span>宽:</span>
				<input class="create" v-model='Width' type="number" />
			</div>
			<div class="down">
				<span>高:</span>
				<input class="create" v-model='Height' type="number" />
			</div>
			<div class="sub">
				<input class="selects" @click.self='no' type="button" value="取消">
				<input class="selects" @click.self='yes' type="button" value="保存">
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				Width:'',
				Height:''
			}
		},
		methods:{
			no(){
				document.getElementById('newfile').style.display = 'none'
			},
			yes(){
				if(this.Width && this.Height){
					document.getElementById('brushCanvas').width = this.Width
					document.getElementById('brushCanvas').height = this.Height

					document.getElementById('circularCanvas').width = this.Width
					document.getElementById('circularCanvas').height = this.Height

					document.getElementById('eraserCanvas').width = this.Width
					document.getElementById('eraserCanvas').height = this.Height

					document.getElementById('lineCanvas').width = this.Width
					document.getElementById('lineCanvas').height = this.Height

					document.getElementById('rectangleCanvas').width = this.Width
					document.getElementById('rectangleCanvas').height = this.Height

					document.getElementById('wordCanvas').width = this.Width
					document.getElementById('wordCanvas').height = this.Height

					document.getElementById('dropfile').width = this.Width
					document.getElementById('dropfile').height = this.Height

					document.getElementById('newfile').style.display = 'none'
				}
				
			}
		}
	}
</script>
<style scoped>
	.selects{
		width: 100px;
		height: 30px;
		border: none;
		border: 3px solid white;
		border-radius: 15px;
		font-family: KaiTi;
		font-size: 20px;
		color: white;
		background: #BA55D3;
		outline: none;
	}
	.create{
		width: 150px;
		height: 40px;
		border: none;
		border: 3px solid white;
		border-radius: 25px;
		background: #BA55D3;
		outline: none;
		padding-left: 10px;
		font-size: 20px;
	}
	.up{
		width: 100%;
		height: 110px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.down{
		width: 100%;
		height: 110px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.sub{
		width: 100%;
		height: 80px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.newfile{
		width: 100%;
		height: 100%;
		background: rgba(210,203,204,0.5); 
		z-index: 99999999999999;
		position: fixed;
		top: 0;
		display: none;
		justify-content: center;
		align-items: center;
	}
	.container{
		width: 400px;
		height: 300px;
		color: white;
		background: gray;
		font-family: KaiTi;
		font-size: 20px;
	}
</style>