import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import List from '@/views/List';
import Contacts from '@/views/Contacts';
import Layout from '@/views/Layout';
import AuthLayout from '@/views/AuthLayout';
import Login from '@/views/Login';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: 'list',
          component: List
        },
        {
          path: 'contacts',
          component: Contacts
        }
      ]
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          component: Login
        }
      ]
    }
  ]
})
