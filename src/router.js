import VueRouter from 'vue-router'
import HomeView  from './views/Home.vue'
import ListView  from './views/List.vue'
import AddView   from './views/Add.vue'

const routes = [
  {path: '/', component: HomeView },
  {path: '/list-users', component: ListView},
  {path: '/add-users', component: AddView}
];

const router = new VueRouter({
   routes
});

export default router
