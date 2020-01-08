import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  plugins: [
    createPersistedState(),
    // createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production',
  state:{
    //保存画笔属性栏的数据
    brush:{
      PenColor:'',
      PenSize:1
    },
    //保存画圆属性栏的数据
    circular:{
      checkedToggle:false,
      fillColor:'',
      borderSize:1,
      borderColor:''
    },
    //保存画直线属性栏的数据
    line:{
      lineColor:'',
      lineWidth:1
    },
    //保存画矩形属性栏的数据
    rectangle:{
      checkedToggles:false,
      fillColors:'',
      borderSizes:1,
      borderColors:''
    },
    //保存写文字属性栏的数据
    word:{
      textContent:'请输入文字',
      textColor:'black',
      fontSize:'16',
      fontFamily:'微软雅黑'
    },
    //保存橡皮檫属性栏的数据
    eraser:{
      size:1
    }
  },
  getters:{
    //返回画笔工具的数据
  	getBrush:function(state){
  		return state.brush
  	},
    //返回画圆工具的数据
    getCircular:function(state){
      return state.circular
    },
    //返回画直线工具的数据
    getLine:function(state){
      return state.line
    },
    //返回画矩形工具的数据
    getRectangle:function(state){
      return state.rectangle
    },
    //返回写文字工具的数据
    getWord:function(state){
      return state.word
    },
    //返回橡皮檫工具的数据
    getEraser:function(state){
      return state.eraser
    }
  },
  mutations:{
    //改变画笔仓库中的数据
  	changeBrushPenColor:function(state, penColor){
  		state.brush.PenColor = penColor
  	},
    changeBrushPenSize:function(state, PenSize){
      state.brush.PenSize = PenSize
    },

    //改变画圆工具仓库中的数据
    changeCircularcheckedToggle:function(state, checkedToggle){
      state.circular.checkedToggle = checkedToggle
    },
    changeCircularfillColor:function(state, fillColor){
      state.circular.fillColor = fillColor
    },
    changeCircularborderSize:function(state, borderSize){
      state.circular.borderSize = borderSize
    },
    changeCircularborderColor:function(state, borderColor){
      state.circular.borderColor = borderColor
    },

    //改变画直线工具仓库中的数据
    changeLinelineColor:function(state, lineColor){
      state.line.lineColor = lineColor
    },
    changeLinelineWidth:function(state, lineWidth){
      state.line.lineWidth = lineWidth
    },

    //改变画矩形工具仓库中的数据
    changerectanglecheckedToggle:function(state, checkedToggle){
      state.rectangle.checkedToggles = checkedToggle
    },
    changerectanglefillColor:function(state, fillColor){
      state.rectangle.fillColors = fillColor
    },
    changerectangleborderSize:function(state, borderSize){
      state.rectangle.borderSizes = borderSize
    },
    changerectangleborderColor:function(state, borderColor){
      state.rectangle.borderColors = borderColor
    },

    //改变写文字工具仓库中的数据
    changewordtextContent:function(state, textContent){
      state.word.textContent = textContent
    },
    changewordtextColor:function(state, textColor){
      state.word.textColor = textColor
    },
    changewordfontSize:function(state, fontSize){
      state.word.fontSize = fontSize
    },
    changewordfontFamily:function(state, fontFamily){
      state.word.fontFamily = fontFamily
    },

    //改变橡皮檫工具仓库中的数据
    changeeraserSize:function(state, size){
      state.eraser.size = size
    }
  },
  actions:{
    //触发mutations更改画笔仓库的数据
  	changePenColor(context,newval){
  		context.commit('changeBrushPenColor',newval)
  	},
    changePenSize(context,newval){
      context.commit('changeBrushPenSize',newval)
    },

    //触发mutations更改画圆仓库的数据
    changecheckedToggle:function(context,newval){
      context.commit('changeCircularcheckedToggle',newval)
    },
    changefillColor:function(context,newval){
      context.commit('changeCircularfillColor',newval)
    },
    changeborderSize:function(context,newval){
      context.commit('changeCircularborderSize',newval)
    },
    changeborderColor:function(context,newval){
      context.commit('changeCircularborderColor',newval)
    },

    //触发mutations更改画直线仓库的数据
    changelineColor:function(context,newval){
      context.commit('changeLinelineColor',newval)
    },
    changelineWidth:function(context,newval){
      context.commit('changeLinelineWidth',newval)
    },

    //触发mutations更改画矩形仓库的数据
    changeRectanglecheckedToggle:function(context,newval){
      context.commit('changerectanglecheckedToggle',newval)
    },
    changeRectanglefillColor:function(context,newval){
      context.commit('changerectanglefillColor',newval)
    },
    changeRectangleborderSize:function(context,newval){
      context.commit('changerectangleborderSize',newval)
    },
    changeRectangleborderColor:function(context,newval){
      context.commit('changerectangleborderColor',newval)
    },

    //触发mutations更改写文字仓库的数据
    changeWordtextContent:function(context,newval){
      context.commit('changewordtextContent',newval)
    },
    changeWordtextColor:function(context,newval){
      context.commit('changewordtextColor',newval)
    },
    changeWordfontSize:function(context,newval){
      context.commit('changewordfontSize',newval)
    },
    changeWordfontFamily:function(context,newval){
      context.commit('changewordfontFamily',newval)
    },

    //触发mutations更改橡皮檫仓库的数据
    changeEraserSize:function(context, newval){
      context.commit('changeeraserSize',newval)
    }
  }
})
