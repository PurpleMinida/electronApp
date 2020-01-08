function line(lineColor='purple', lineWidth=1){
    var canvas = document.getElementById('lineCanvas'),
        context = canvas.getContext('2d'),
        drawingSurfaceImageData,
        mousedown = {},
        dragging = false,
        rectangle = false;
    function windowToCanvas(x, y) {
        //返回元素的大小以及位置
        var bbox = canvas.getBoundingClientRect();
        return {x: x - bbox.left * (canvas.width / bbox.width), y: y - bbox.top * (canvas.height / bbox.height)};
    }
    //保存和恢复绘图面板
    function saveDrawingSurface() {
        drawingSurfaceImageData = context.getImageData(0, 0, canvas.width, canvas.height);
    }
    function restoreDrawingSurface() {
        context.putImageData(drawingSurfaceImageData, 0, 0);
    }
    function drawRubberbandShape(loc) {
        context.beginPath();
        context.moveTo(mousedown.x, mousedown.y);
        context.lineTo(loc.x, loc.y);
        context.lineWidth = lineWidth
        context.stroke();
    }
    canvas.onmousedown = function (e) {
        var loc = windowToCanvas(e.clientX, e.clientY);
        e.preventDefault();
        saveDrawingSurface();
        mousedown.x = loc.x;
        mousedown.y = loc.y;
        dragging = true;
    }
    canvas.onmousemove = function (e) {
        var loc;
        if (dragging) {
            e.preventDefault();
            loc = windowToCanvas(e.clientX, e.clientY);
            restoreDrawingSurface();
            drawRubberbandShape(loc);
        }
    }
    canvas.onmouseup = function (e) {
        var loc = windowToCanvas(e.clientX, e.clientY);
        restoreDrawingSurface();
        drawRubberbandShape(loc);
        dragging = false;
    };
    context.strokeStyle = lineColor;
}

export default line;