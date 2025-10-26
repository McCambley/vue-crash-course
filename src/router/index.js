import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/Jobs.vue'
import Jobs from '@/views/Jobs.vue'
import NotFound from '@/views/NotFound.vue'
import Job from '@/views/JobView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs,
    },
    {
      path: '/jobs/:id',
      name: 'job',
      component: Job,
    },
    { path: '/:catchAll(.*)', name: 'not-found', component: NotFound },
  ],
})

export default router
