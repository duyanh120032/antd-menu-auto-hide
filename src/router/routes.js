export default [
  {
    path: '/',
    name: 'index',
    component: () => import('../layout/default.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('../views/index.vue'),
      },
      {
        path: '/create',
        name: 'dashboard.create',
        component: () => import('../views/create.vue'),
      },
    ],
  },
  {
    path: '/user',
    name: 'user',
    children: [
      {
        path: '',
        name: 'user.index',
        component: () => import('../views/user/index.vue'),
      },
    ],
  },
];
