import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// App.mpType = 'app'

const app = new Vue(App)
app.$mount()

/* export default{
  config: {
    pages: ['^pages/comments/main'],
    'window': {
      'backgroundTextStyle': 'light',
      'navigationBarBackgroundColor': '#EA5149',
      'navigationBarTitleText': '天天读书',
      'navigationBarTextStyle': 'light'
    },
    'tabBar': {
      selectedColor: '#EA5149',
      list: [
        {
          'pagePath': 'pages/books/main',
          'text': '书库',
          'iconPath': 'static/img/book.png',
          'selectedIconPath': 'static/img/book-active.png'
        },
        {
          'pagePath': 'pages/comments/main',
          'text': '评论',
          'iconPath': 'static/img/todo.png',
          'selectedIconPath': 'static/img/todo-active.png'
        },
        {
          'pagePath': 'pages/me/main',
          'text': '个人中心',
          'iconPath': 'static/img/me.png',
          'selectedIconPath': 'static/img/me-active.png'
        }
      ]
    }
  }
} */
