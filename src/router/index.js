import Vue from 'vue'
import Router from 'vue-router'

import ViewHello from '@/views/Hello.view.vue'
import ViewGoodbye from '@/views/Goodbye.view.vue'
import ViewWelcome from '@/views/Welcome.view.vue'
import ViewParent from '@/views/Parent.view.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: ViewWelcome,
    meta: {
      breadcrumb: ''
    }
  },
  {
    path: '/parent-instructions',
    name: 'ParentInstructions',
    component: ViewParent,
    meta: {
      breadcrumb: 'Parent Instructions'
    }
  },
  {
    path: '/hello',
    name: 'Hello',
    component: ViewHello,
    meta: {
      breadcrumb: 'Hello'
    }
  },
  {
    name: 'PreActivity',
    path: '/modules/:moduleId/pre-activity',
    props: true,
    meta: {
      breadcrumb: 'Pre-test'
    },
    component: () =>
      import(/* webpackChunkName: "module/pre-activity" */ '../views/PreActivity.view.vue')
  },
  {
    name: 'Activity',
    path: '/modules/:moduleId/activity/:activityNum',
    props: (route) => {
      let activityNum = Number.parseInt(route.params.activityNum, 10)
      return {
        moduleId: route.params.moduleId,
        activityNum
      }
    },
    meta: {
      breadcrumb: 'Activity'
    },
    component: () =>
      import(/* webpackChunkName: "module/activity" */ '../views/Activity.view.vue')
  },
  {
    name: 'PostActivity',
    path: '/modules/:moduleId/post-activity',
    props: true,
    meta: {
      breadcrumb: 'Post-test'
    },
    component: () =>
      import(/* webpackChunkName: "module/post-activity" */ '../views/PostActivity.view.vue')
  },
  {
    path: '/thanks',
    name: 'Goodbye',
    component: ViewGoodbye,
    meta: {
      breadcrumb: 'Thanks'
    }
  }
]
export default new Router({
  routes,
  mode: 'history'
})
