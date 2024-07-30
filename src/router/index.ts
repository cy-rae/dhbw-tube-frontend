import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory, NavigationGuardNext, RouteLocationNormalized, RouteLocationNormalizedLoaded
} from 'vue-router';

import routes from './routes';
import { RoutePaths } from 'src/enums/RoutePaths';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function(/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  });

  router.beforeEach(async (to: RouteLocationNormalized, _: RouteLocationNormalizedLoaded, next: NavigationGuardNext) => {
    if (to.fullPath === RoutePaths.MAIN) {
      await router.push(RoutePaths.STREAMING_PAGE);
    }
    next();
  });

  return router;
});
