<template>
	<div id="drop" class="container">
		<canvas id="brushCanvas" width="0" height="0"></canvas>
		<canvas id="circularCanvas" width="0" height="0"></canvas>
		<canvas id="eraserCanvas" width="0" height="0"></canvas>
		<canvas id="lineCanvas" width="0" height="0"></canvas>
		<canvas id="rectangleCanvas" width="0" height="0"></canvas>
		<canvas id="wordCanvas" width="0" height="0"></canvas>
		<canvas id="dropfile" width="0" height="0" style="z-index: -1;"></canvas>
	</div>
</template>
<script>

</script>
<style scoped>
	.hide{
		display:none;
	}
	.container{
		margin-left: 30px;
		background:yellow;
		z-index: -100;
	}
	canvas{
		position: absolute;
		box-shadow: 0 0 10px pink;
	}
</style>