// import $ from 'jquery'
// function brush(penColor='purple', lineWitch=1){
// 	console.log("上"+lineWitch+typeof lineWitch)
// 	lineWitch = parseInt(lineWitch)
// 	console.log("下"+lineWitch+typeof lineWitch)
//     let myContext = document.getElementById('brushCanvas').getContext('2d');
//     let myClickX = new Array();
//     let myClickY = new Array();
//     let myClickDrag = new Array();
//     let myPaint;


// 	function addClick(x,y,dragging){
// 	    myClickX.push(x);
// 	    myClickY.push(y);
// 	    myClickDrag.push(dragging);
// 	}

// 	function redraw(){
// 	    myContext.strokeStyle = penColor;
// 	    myContext.lineJoin = 'round';
// 	    myContext.lineWidth = lineWitch;
// 	    for(let i = 0;i < myClickX.length; i++){
// 	        myContext.beginPath();
// 	        if(myClickDrag[i] && i){
// 	            myContext.moveTo(myClickX[i-1], myClickY[i-1])
// 	        }else{
// 	            myContext.moveTo(myClickX[i]-1,myClickY[i])
// 	        }
// 	        myContext.lineTo(myClickX[i],myClickY[i]);
// 	        myContext.closePath();
// 	        myContext.stroke();
// 	    }
// 	}

// 	$('#brushCanvas').mousedown(function(e){
// 	    myPaint = true;
// 	    addClick(e.pageX-this.offsetLeft,e.pageY - this.offsetTop);
// 	    redraw();
// 	})

// 	$('#brushCanvas').mousemove(function(e){
// 	    if(myPaint){
// 	        addClick(e.pageX-this.offsetLeft,e.pageY - this.offsetTop,true);
// 	    }
// 	    redraw();
// 	})
// 	$("#brushCanvas").mouseup(function(){
// 	    myPaint = false;
// 	})

// }

// export default brush

function brush(penColor,lineWidth){
    var oCanvas = document.getElementById("brushCanvas");
    var width = oCanvas.width;
    var height = oCanvas.height;
    var context = oCanvas.getContext("2d");
    
    //清空画布
    //橡皮
    oCanvas.onmousedown = function(e) {
        oCanvas.onmousemove = function(e) {
            var wid = e.offsetX;
            var hei = e.offsetY;
            context.beginPath();
            context.arc(wid, hei, lineWidth, 0, 2 * Math.PI);
            context.closePath();
            context.fillStyle = penColor;
            context.fill();
        }
    }
    oCanvas.onmouseup = function() {
        oCanvas.onmousemove = "null";
    }
}

export default brush;
