import { RouteRecordRaw } from 'vue-router';
import { RoutePaths } from 'src/enums/RoutePaths';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: RoutePaths.STREAMING_PAGE,
        component: () => import('pages/StreamingPage.vue')
      },
      {
        path: RoutePaths.UPLOAD_PAGE,
        component: () => import('pages/UploadPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
