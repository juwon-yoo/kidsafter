import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/views/Home';
import Board from './components/views/Board';
import Info from './components/views/Info';
import EditInfo from './components/views/EditInfo';
import Exit from './components/views/Exit';
import Community from './components/views/Community';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
 },
 {
    path: '/board',
    component: Board
 },
 {
   path: '/info',
   component: Info
 },
 {
  path: '/com',
  component: Community
  },
 {
  path: '/info/edit',
  component: EditInfo
  },
  {
    path: '/info/exit',
    component: Exit
    } 
];

const router = new VueRouter({
    mode: 'history',
    routes
  });

export default router;