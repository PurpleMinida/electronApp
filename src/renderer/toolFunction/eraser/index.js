function eraser(size){
    var oCanvas = document.getElementById("eraserCanvas");
    var width = oCanvas.width;
    var height = oCanvas.height;
    var context = oCanvas.getContext("2d");
    
    //清空画布
    //橡皮
    oCanvas.onmousedown = function(e) {
        oCanvas.onmousemove = function(e) {
            var wid = e.offsetX;
            var hei = e.offsetY;
            context.clearRect(wid,hei,size,size);
        }
    }
    oCanvas.onmouseup = function() {
        oCanvas.onmousemove = "null";
    }
}

export default eraser;