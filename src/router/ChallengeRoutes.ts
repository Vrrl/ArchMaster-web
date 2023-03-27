const routes = [
  {
    path: '/explore',
    name: 'explore',
    component: () => import('../views/challenge/ExploreView.vue')
  },
  {
    path: '/new-challenge',
    name: 'new-challenge',
    component: () => import('../views/challenge/NewChallengeView.vue')
  }
]

export default routes