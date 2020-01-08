import $ from 'jquery'

function rectangle(checkedToggle, fillColor='pink', borderColor='pink', borderWidth=2){
    var canvas = document.getElementById('rectangleCanvas'),
        context = canvas.getContext('2d'),
        drawingSurfaceImageData,
        mousedown = {},
        rubberbandRect = {},
        dragging = false,
        rectangle = true;

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
    //更新橡皮筋矩形
    function updateRubberbandRectangle(loc) {
        rubberbandRect.width = Math.abs(loc.x - mousedown.x);
        rubberbandRect.height = Math.abs(loc.y - mousedown.y);
        //从左往右拉，和从右往左拉的两种情况。主要是判断左边的位置
        //因为从左往右拉的时候，左边x坐标不变
        //从右往左拉的时候，左边线的x坐标需要跟着鼠标移动
        if (loc.x > mousedown.x) rubberbandRect.left = mousedown.x;
        else rubberbandRect.left = loc.x;
        if (loc.y > mousedown.y) rubberbandRect.top = mousedown.y;
        else rubberbandRect.top = loc.y;
        context.save();
        context.beginPath();
        context.rect(rubberbandRect.left, rubberbandRect.top, rubberbandRect.width, rubberbandRect.height);
        context.lineWidth = borderWidth
        context.fillStyle = fillColor
        if(checkedToggle){
            context.fill()//是否填充
        }
        context.stroke();
        context.restore();
    }
    //事件
    //鼠标按下的时候，记录坐标，并设置为拖拽状态
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
            updateRubberbandRectangle(loc);
        }
    }
    //(拖拽完成后)当鼠标松开时，重新获取本点坐标，清除之前的"跟随鼠标移动的线"，更新连线，取消拖拽状态
    canvas.onmouseup = function (e) {
        var loc = windowToCanvas(e.clientX, e.clientY);
        restoreDrawingSurface();
        updateRubberbandRectangle(loc);
        dragging = false;
    };
    context.strokeStyle = borderColor;
}

export default rectangle;