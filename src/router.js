import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import PageEditor from './views/PageEditor.vue'
import PageList from './views/PageList.vue'
//import firebase from 'firebase';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/pages',
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

/* router.beforeEach((to, from, next) => {
  const user = firebase.auth().currentUser;
  // eslint-disable-next-line no-console
  console.log(to,from);
  if (to.path === '/login') {
    next();
    return;
  }

  if (!user) {
    next('/login');
  } else {
    next();
  }
}) */

export default router;
