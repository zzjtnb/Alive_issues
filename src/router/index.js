import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    redirect: '/index',
    component: Layout,
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '/index',
        component: () => import('../views/Index.vue'),
      },
    ]
  },

  {
    path: '/blog',
    redirect: '/blog/main',
    component: Layout,
    meta: {
      submenu: true,
      title: '个人博客'
    },
    children: [
      {
        path: '/blog/main',
        component: () => import('../views/blog/Main.vue'),
        meta: {
          title: '博客列表',
        }
      },
      {
        path: '/blog/add',
        component: () => import('../views/blog/Add.vue'),
        meta: {
          title: '发表博客',
        }
      },
      {
        path: '/blog/edit/:id',
        component: () => import('../views/blog/Edit.vue'),
        meta: {
          title: '编辑博客',
        }
      },
      {
        path: '/blog/details/:id',
        component: () => import('../views/blog/Details.vue'),
        meta: {
          title: '博客详情'
        }
      }]
  },

  {
    path: '/worshipheroes',
    component: Layout,
    meta: {
      title: '祭拜英烈',
    },
    children: [
      {
        path: '/worshipheroes',
        component: () => import('../views/WorshipHeroes.vue'),
      }
    ]
  },


  {
    path: '/login',
    redirect: '/user',
    component: Layout,
    children: [
      {
        path: '/user',
        component: () => import(/* webpackChunkName: "about" */ '../views/user/Index.vue'),
      },
    ]
  },
  {
    path: '/notnetwork',
    name: 'NotNetwork',
    component: () => import('../components/NotNetwork.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../components/404.vue')
  },

  {
    path: '*',
    redirect: '/404'
  },

]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  Vue.prototype.$setTitle(to.meta.title)
  next()
})

export default router
