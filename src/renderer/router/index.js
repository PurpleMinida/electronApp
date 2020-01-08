import Vue from 'vue'
import Router from 'vue-router'
import brush from '../components/toolAttrBar/brushAttr.vue'
import circular from '../components/toolAttrBar/circularAttr.vue'
import eraser from '../components/toolAttrBar/eraserAttr.vue'
import rectangle from '../components/toolAttrBar/rectangleAttr.vue'
import line from '../components/toolAttrBar/lineAttr.vue'
import word from '../components/toolAttrBar/wordAttr.vue'
import redirectFile from '../components/toolAttrBar/redirectAttr.vue'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component: redirectFile
    },
    {
      path: '/brush',
      component:brush
    },
    {
      path:'/circular',
      component:circular
    },
    {
      path:'/eraser',
      component:eraser
    },
    {
      path:'/rectangle',
      component:rectangle
    },
    {
      path:'/line',
      component:line
    },
    {
      path:'/word',
      component:word
    },
  ]
})
