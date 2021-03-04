import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/portal"
  },
  {
    path: "/portal",
    name: "Portal",
    component: () => import("./../views/Portal")
  },
  {
    path: "/forum",
    name: "ForumBase",
    // redirect: "/forum/sub",
    component: () => import("../views/ForumBase"),
    children: [
      {
        path: "",
        name: "Forum",
        component: () => import("../views/Forum")
      },
      {
        path: ":subForum",
        name: "SubForum",
        component: () => import("../views/SubForum")
      },
      {
        path: "section/:subForumName/:sectionName",
        name: "Section",
        component: () => import("./../views/Section")
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
