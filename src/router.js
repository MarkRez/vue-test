import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import List from '@/views/List';
import Contacts from '@/views/Contacts';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/contacts',
      component: Contacts
    },
  ]
})
