import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/MainView.vue')
  },
  {    
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/cadastro/tarefa',
    name: 'cadastrotarefa',
    component: () => import(/* webpackChunkName: "about" */ '../views/cadastro/cadastrotarefa/MainView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/MainView.vue')
  },
  {
    path: '/ambiente',
    name: 'ambiente',
    component: () => import(/* webpackChunkName: "about" */ '../views/ambiente/MainView.vue')
  },
  {
    path: '/tarefa',
    name: 'tarefa',
    component: () => import(/* webpackChunkName: "about" */ '../views/tarefa/MainView.vue')
  },
  {
    path: '/forum',
    name: 'forum',
    component: () => import(/* webpackChunkName: "about" */ '../views/forum/MainView.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import(/* webpackChunkName: "about" */ '../views/perfil/MainView.vue')
  },
  {
    path: '/historico',
    name: 'historico',
    component: () => import(/* webpackChunkName: "about" */ '../views/historico/MainView.vue')
  },
  {
    path: '/deposito',
    name: 'deposito',
    component: () => import(/* webpackChunkName: "about" */ '../views/deposito/MainView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/MainView.vue')
  },
  {
    path: '/forum',
    name: 'forum',
    component: () => import(/* webpackChunkName: "about" */ '../views/forum/MainView.vue')
  },
  {
    path: '/preambiente',
    name: 'preambiente',
    component: () => import(/* webpackChunkName: "about" */ '../views/preambiente/MainView.vue')
  },
  {
    path: '/tags',
    name: 'tags',
    component: () => import(/* webpackChunkName: "about" */ '../views/tags/MainView.vue')
  },
  {
    path: '/executavel',
    name: 'executavel',
    component: () => import(/* webpackChunkName: "about" */ '../views/executavel/MainView.vue')
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: () => import(/* webpackChunkName: "about" */ '../views/usuario/MainView.vue')
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: () => import(/* webpackChunkName: "about" */ '../views/cliente/MainView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
