import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Login from './views/Login.vue'
import PageEditor from './views/PageEditor.vue'
import PageList from './views/PageList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: 'pages',
      name: 'Pages',
      component: PageList
    },
    {
      path: '/page/:id',
      name: 'Page',
      component: PageEditor
    }
  ]
})
