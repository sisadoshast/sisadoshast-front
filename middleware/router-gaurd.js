import el from "element-ui/src/locale/lang/el";

export default function ({ app, redirect }) {

  app.router.beforeEach((to, from, next) => {
    if ((to.path !== '/login' && !isAuthenticated())) {
      next('/login')
    } else {
      next()
    }
  });

  function isAuthenticated() {
    return Boolean(app.store.state.token)
  }

}
