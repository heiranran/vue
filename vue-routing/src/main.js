import Vue from 'vue'
import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute:window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
  // render:function (createElement) {
  //   // {String | Object | Function} 标签 组件 函数
  //     return createElement(this.ViewComponent);
  // }
  // render:function (createElement) {
  //   // {String | Object | Function} 标签 组件 函数
  //  return createElement("div",
  //     Array.apply(null,{length:20}).map(function(){
  //       return createElement("h1",{"class":{"title":true},"domProps":{"innerHTML":"hello world"}})
  //     })
  //  )
  //}
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
