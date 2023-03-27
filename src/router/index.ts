import { createRouter, createWebHistory } from 'vue-router'

import ChallengeRoutes from './ChallengeRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...ChallengeRoutes,
  ]
})

export default router
