
const routes = [
  {
    path: '/',
    component: () => import('layouts/Ecran.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/type-un', component: () => import('../components/Elements.vue') },
      { path: '/shapes', component: () => import('../components/Shapes.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
