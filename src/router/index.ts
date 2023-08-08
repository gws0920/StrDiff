import { createRouter, createWebHashHistory } from 'vue-router'
import Array from '../pages/Array/index.vue'
import Array2D from '../pages/Array2D/index.vue'

const routes = [
  {
    path: '',
    redirect: '/Array'
  },
  {
    name: 'Array',
    path: '/Array',
    component: Array
  },
  {
    name: 'Array2D',
    path: '/Array2D',
    component: Array2D
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

export default router