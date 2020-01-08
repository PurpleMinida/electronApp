<template>
	<div class="nav">
		<div class="leftMenu">

			<div class="new" @mouseover='show' @mouseout='hide'>
				<div class="item">File</div>
				<div class="newRef" ref='new'>
					<div @click.self='create'>new_File</div>
					<div><label for="importFile">import_File</label></div>
					<input @change='changeFile' type="file" id="importFile" style="display:none">
				</div>
			</div>

			<div class="new" @mouseover='show2' @mouseout='hide2'>
				<div class="item">编辑</div>
				<div class="newRef" ref='new2'>
					<div @click.self='save'>保存</div>
				</div>
			</div>

		</div>

		<div class="drop"></div>

		<div class="rigthImg">
			<div @click='min'></div>
			<div @click='max'></div>
			<div @click='close'></div>
		</div>
	</div>
</template>

<script>
	import {ipcRenderer} from 'electron';
	// import $ from 'jquery'
	export default{
		methods:{
			changeFile(e){
				var imgArr = ['image/png','image/jpeg','image/bmp','image/x-icon']
				if(imgArr.indexOf(e.target.files[0].type) == -1){
			      alert('请使用 jpg、png、ico、bmp类型的文件')
			      return false;
			    }
				//e.target.files[0].name
				// console.log(e.target.files[0].name)
				// console.log(e)
				// console.log(document.getElementById('dropfile'))
				var reader = new FileReader()
				reader.readAsDataURL(e.target.files[0])
				reader.onload = function(){

					var img = new Image()
					img.src = reader.result
					img.onload = function(){
						document.getElementById('brushCanvas').width = img.width
				        document.getElementById('brushCanvas').height = img.height

				        document.getElementById('circularCanvas').width = img.width
				        document.getElementById('circularCanvas').height = img.height

				        document.getElementById('eraserCanvas').width = img.width
				        document.getElementById('eraserCanvas').height = img.height

				        document.getElementById('lineCanvas').width = img.width
				        document.getElementById('lineCanvas').height = img.height

				        document.getElementById('rectangleCanvas').width = img.width
				        document.getElementById('rectangleCanvas').height = img.height

				        document.getElementById('wordCanvas').width = img.width
				        document.getElementById('wordCanvas').height = img.height

				        document.getElementById('dropfile').width = img.width
				        document.getElementById('dropfile').height = img.height

				        document.getElementById('dropfile').getContext("2d").drawImage(img,0,0)
					}

				}
			},
			//向主进程发送窗口最大最小关闭消息
			min(){
				ipcRenderer.send('min')
			},
			max(){
				ipcRenderer.send('max')
			},
			close(){
				ipcRenderer.send('close')
			},
			//导航栏下拉菜单显示隐藏
			show(){
				this.$refs.new.style.display = 'block'
			},
			hide(){
				this.$refs.new.style.display = 'none'
			},
			show2(){
				this.$refs.new2.style.display = 'block'
			},
			hide2(){
				this.$refs.new2.style.display = 'none'
			},
			//显示隐藏创建新文件的面板
			create(){
				document.getElementById('newfile').style.display = 'flex'
			},
			//下载图片
			save(){

				if(document.getElementById('eraserCanvas').width == 0 || document.getElementById('eraserCanvas').height == 0){
					return
				}else{
				document.getElementById('eraser').click()
				var url = document.getElementById('eraserCanvas').toDataURL("image/png");
				var a = document.createElement("a");
				a.href = url;
				a.download = "pic";
				a.target = "_blank";
				a.click();
				}
				
			}
		}
	}
</script>

<style scoped>
	.drop{
		height:100%;
		flex:1;
		-webkit-app-region: drag;
	}
	.nav{
		width: 100%;
		height: 20px;
		position: fixed;
		top: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		user-select:none;
		z-index: 999999;
		background: white;
	}


	.leftMenu{
		font-size:15px;
		color:#242424;
		font-family:KaiTi;
		display:flex;
	}
	.new{
		display:flex;
		position:relative;
		margin-left:10px;
		cursor:pointer;
	}
	.newRef{
		display:none;
		position:absolute;
		top:18px;
		background:white;
		z-index:99999;
	}
	.item:hover{
		background:pink;
	}
	.newRef > div:hover{
		background:orange;
	}



	.rigthImg{
		height: 100%;
		display: flex;
	}
	.rigthImg > div{
		width: 30px;
		height: 100%;
	}
	.rigthImg > div:nth-of-type(1){
		background: url('../assets/navImg/min.png');
		background-size: 50%;
		background-repeat: no-repeat;
		background-position: center center;
	}
	.rigthImg > div:nth-of-type(2){
		background: url('../assets/navImg/max.png');
		background-size: 50%;
		background-repeat: no-repeat;
		background-position: center center;
	}
	.rigthImg > div:nth-of-type(3){
		background: url('../assets/navImg/close.png');
		background-size: 50%;
		background-repeat: no-repeat;
		background-position: center center;
	}

	.rigthImg > div:nth-of-type(1):hover{
		background: url('../assets/navImg/minActive.png');
		background-size: 50%;
		background-repeat: no-repeat;
		background-position: center center;
	}
	.rigthImg > div:nth-of-type(2):hover{
		background: url('../assets/navImg/maxActive.png');
		background-size: 50%;
		background-repeat: no-repeat;
		background-position: center center;
	}
	.rigthImg > div:nth-of-type(3):hover{
		background: url('../assets/navImg/closeActive.png');
		background-size: 50%;
		background-repeat: no-repeat;
		background-position: center center;
	}
</style>