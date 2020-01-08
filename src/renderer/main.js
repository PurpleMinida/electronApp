import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import $ from 'jquery'


if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')


//保存图片类型的数组，以防用户上传不是图片的类型的文件
var ImgArr = ['image/png','image/jpeg','image/bmp','image/x-icon']
//阻止默认拖拽事件与自定义拖拽事件
document.ondragover = function (e) {
    e.preventDefault();
};
document.ondrop = function (e) {
  e.preventDefault();
    //判读用户拖拽的文件是否为图片
    if(ImgArr.indexOf(e.dataTransfer.files[0].type) == -1){
      alert('请使用 jpg、png、ico、bmp类型的文件')
      return false;
    }
    //读取文件
    var reader = new FileReader()
    reader.readAsDataURL(e.dataTransfer.files[0])
    reader.onload = function(){
        //把图片显示在canvas上
        //由于drawImage方法需要图片加载完成时才能把图片写进canvas中，
        //所以需要创建一个img对象等待图片加载完成时触发drawImage方法
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
};

