function word(text,textColor='black', size='20',ziTi='微软雅黑'){
	var c=document.getElementById("wordCanvas");
	var ctx=c.getContext("2d");
	

	c.onclick = function(e){
		
		ctx.fillStyle = textColor
		ctx.fill()
		ctx.font = size + 'px ' + ziTi;
		ctx.fillText(text,e.offsetX,e.offsetY);
	}
}

export default word;