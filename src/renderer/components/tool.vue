<template>
  <div class="tool" @click='selection'>
    <div><img id="brush" data-tools="brush" src="../assets/toolImg/brush.png"></div>
    <div><img id="circular" data-tools="circular" src="../assets/toolImg/circular.png"></div>
    <div><img id="eraser" data-tools="eraser" src="../assets/toolImg/eraser.png"></div>
    <div><img id="line" data-tools="line" src="../assets/toolImg/line.png"></div>
    <div><img id="rectangle" data-tools="rectangle" src="../assets/toolImg/rectangle.png"></div>
    <div><img id="word" data-tools="word" src="../assets/toolImg/word.png"></div>
  </div>
</template>

<script>
import $ from 'jquery'
import brush from '../toolFunction/brush'
import circular from '../toolFunction/circular'
import eraser from '../toolFunction/eraser'
import line from '../toolFunction/line'
import rectangle from '../toolFunction/rectangle'
import word from '../toolFunction/word'
  export default{


    computed: {
        //监听画笔工具属性栏在仓库中的变化
        brushDataPenColor() {
          return this.$store.state.brush.PenColor;
        },
        brushDataPenSize() {
          return this.$store.state.brush.PenSize;
        },

        //监听画圆工具属性栏在仓库中的变化
        circularDatacheckedToggle(){
          return this.$store.state.circular.checkedToggle
        },
        circularDatafillColor(){
          return this.$store.state.circular.fillColor
        },
        circularDataborderSize(){
          return this.$store.state.circular.borderSize
        },
        circularDataborderColor(){
          return this.$store.state.circular.borderColor
        },

        //监听画直线工具属性栏在仓库中的变化
        lineDatalineColor(){
          return this.$store.state.line.lineColor
        },
        lineDatalineWidth(){
          return this.$store.state.line.lineWidth
        },

        //监听画矩形工具属性栏在仓库中的变化
        rectangleDatacheckedToggle(){
          return this.$store.state.rectangle.checkedToggles
        },
        rectangleDatafillColor(){
          return this.$store.state.rectangle.fillColors
        },
        rectangleDataborderSize(){
          return this.$store.state.rectangle.borderSizes
        },
        rectangleDataborderColor(){
          return this.$store.state.rectangle.borderColors
        },

        //监听写文字工具属性栏在仓库中的变化
        wordDatatextContent(){
          return this.$store.state.word.textContent
        },
        wordDatatextColor(){
          return this.$store.state.word.textColor
        },
        wordDatafontSize(){
          return this.$store.state.word.fontSize
        },
        wordDatafontFamily(){
          return this.$store.state.word.fontFamily
        },

        //监听橡皮檫工具属性栏在仓库中的变化
        eraserDataSize(){
          return this.$store.state.eraser.size
        }
      },
      //监听执行
      watch: {
        //仓库中的画笔工具数据变化就触发函数
        brushDataPenColor(val) {
          document.getElementById('brush').click()
        },
        brushDataPenSize(val) {
          document.getElementById('brush').click()
        },

        //仓库中的画圆工具数据变化就触发函数
        circularDatacheckedToggle(val){
          document.getElementById('circular').click()
        },
        circularDatafillColor(val){
          document.getElementById('circular').click()
        },
        circularDataborderSize(val){
          document.getElementById('circular').click()
        },
        circularDataborderColor(val){
          document.getElementById('circular').click()
        },

        //仓库中的画直线工具数据变化就触发函数
        lineDatalineColor(val){
          document.getElementById('line').click()
        },
        lineDatalineWidth(val){
          document.getElementById('line').click()
        },

        //仓库中的画矩形工具数据变化就触发函数
        rectangleDatacheckedToggle(val){
          document.getElementById('rectangle').click()
        },
        rectangleDatafillColor(val){
          document.getElementById('rectangle').click()
        },
        rectangleDataborderSize(val){
          document.getElementById('rectangle').click()
        },
        rectangleDataborderColor(val){
          document.getElementById('rectangle').click()
        },

        //仓库中的写文字工具数据变化就触发函数
        wordDatatextContent(){
          document.getElementById('word').click()
        },
        wordDatatextColor(){
          document.getElementById('word').click()
        },
        wordDatafontSize(){
          document.getElementById('word').click()
        },
        wordDatafontFamily(){
          document.getElementById('word').click()
        },

        //仓库中的橡皮檫工具数据变化就触发函数
        eraserDataSize(){
          document.getElementById('eraser').click()
        }
    },

    mounted:function(){
      // brush()//参数penColor，lineWitch
      // circular()//参数fillColor，lineWidth，lineColor
      // eraser()
      // line()//参数lineColor，lineWidth
      // rectangle()//参数fillColor，borderColor，borderWidth
      // word('你好')//参数text，textColor，size，ziTi

    },
    methods:{
      selection(e){//工具间切换改变背景色
        for(var i = 0, j = e.target.parentNode.parentNode.children.length; i < j; i++){
          e.target.parentNode.parentNode.children[i].style.background = 'pink'
        }
        e.target.parentNode.style.background = 'orange'
        document.selectTool = e.target.dataset.tools;

        //每个工具操作一个canvas画布，当点击到该工具时，把它对应的canvas放到最上面
        document.getElementById('brushCanvas').style.zIndex = 0
        document.getElementById('circularCanvas').style.zIndex = 0
        document.getElementById('eraserCanvas').style.zIndex = 0
        document.getElementById('lineCanvas').style.zIndex = 0
        document.getElementById('rectangleCanvas').style.zIndex = 0
        document.getElementById('wordCanvas').style.zIndex = 0


        if(e.target.dataset.tools == 'brush'){//画笔工具
          this.$router.push({ path: '/brush' })
          document.getElementById('brushCanvas').style.zIndex = 99
          brush(this.$store.getters.getBrush.PenColor,this.$store.getters.getBrush.PenSize)

        }else if(e.target.dataset.tools == 'circular'){//画圆工具
          this.$router.push({ path: '/circular' })
          document.getElementById('circularCanvas').style.zIndex = 99
          circular(this.$store.getters.getCircular.checkedToggle,this.$store.getters.getCircular.fillColor,this.$store.getters.getCircular.borderSize,this.$store.getters.getCircular.borderColor)

        }else if(e.target.dataset.tools == 'eraser'){//把所有画布合成在一张canvas上
          eraser(this.$store.getters.getEraser.size)
          this.$router.push({ path: '/eraser' })
          document.getElementById('eraserCanvas').style.zIndex = 99

          document.getElementById('eraserCanvas').getContext('2d').drawImage(document.getElementById('dropfile'),0,0)
          document.getElementById('dropfile').height  =document.getElementById('dropfile').height
          
          document.getElementById('eraserCanvas').getContext('2d').drawImage(document.getElementById('brushCanvas'),0,0)
          document.getElementById('brushCanvas').height  =document.getElementById('brushCanvas').height

          document.getElementById('eraserCanvas').getContext('2d').drawImage(document.getElementById('circularCanvas'),0,0)
          document.getElementById('circularCanvas').height  =document.getElementById('circularCanvas').height

          document.getElementById('eraserCanvas').getContext('2d').drawImage(document.getElementById('lineCanvas'),0,0)
          document.getElementById('lineCanvas').height  =document.getElementById('lineCanvas').height

          document.getElementById('eraserCanvas').getContext('2d').drawImage(document.getElementById('rectangleCanvas'),0,0)
          document.getElementById('rectangleCanvas').height  =document.getElementById('rectangleCanvas').height

          document.getElementById('eraserCanvas').getContext('2d').drawImage(document.getElementById('wordCanvas'),0,0)
          document.getElementById('wordCanvas').height  =document.getElementById('wordCanvas').height
          
        }else if(e.target.dataset.tools == 'line'){
          this.$router.push({ path: '/line' })
          document.getElementById('lineCanvas').style.zIndex = 99
          line(this.$store.getters.getLine.lineColor,this.$store.getters.getLine.lineWidth)

        }else if(e.target.dataset.tools == 'rectangle'){
          this.$router.push({ path: '/rectangle' })
          document.getElementById('rectangleCanvas').style.zIndex = 99
          rectangle(this.$store.getters.getRectangle.checkedToggles,this.$store.getters.getRectangle.fillColors,this.$store.getters.getRectangle.borderColors,this.$store.getters.getRectangle.borderSizes)

        }else if(e.target.dataset.tools == 'word'){
          this.$router.push({ path: '/word' })
          document.getElementById('wordCanvas').style.zIndex = 99
          word(this.$store.getters.getWord.textContent,this.$store.getters.getWord.textColor,this.$store.getters.getWord.fontSize,this.$store.getters.getWord.fontFamily)
        }

      }
    }
  }
</script>

<style scoped>
  .tool{
    width: 30px;
    background: pink;
    position: fixed;
    left: 0;
    top: 60px;
    z-index: 999;
    display: flex;
    flex-direction: column;
  }
  .tool > div{
    width: 100%;
    height:30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tool > div:hover{
    background: orange !important;
  }
  .tool > div > img{
    width: 100%;
    height:100%;
  }
</style>
