import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'



const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue'), // 注意这里要带上 文件后缀.vue
    // title: string; 页面标题，通常必选。
    // icon ?: string; 图标，一般配合菜单使用。
    // auth ?: boolean; 是否需要登录权限。
    // ignoreAuth ?: boolean; 是否忽略权限。
    // roles ?: RoleEnum[]; 可以访问的角色
    // keepAlive ?: boolean; 是否开启页面缓存
    // hideMenu ?: boolean; 有些路由我们并不想在菜单中显示，比如某些编辑页面。
    // order ?: number; 菜单排序。
    // frameUrl ?: string; 嵌套外链。

  },
  {
    path: '/',
    name: 'main',
    component: () => import('@/pages/mainPlatform/index.vue'), // 注意这里要带上 文件后缀.vue
    children: [
      {
        path: '/login1',
        name: 'Login1',
        component: () => import('@/pages/login/Login.vue'), // 注意这里要带
      },
      {
        path: '/login2',
        name: 'Login2',
        component: () => import('@/pages/login/Login.vue'), // 注意这里要带
      },
      {
        path: '/login3',
        name: 'Login3',
        component: () => import('@/pages/login/Login.vue'), // 注意这里要带
      },
      {
        path: '/login4',
        name: 'Login4',
        component: () => import('@/pages/login/Login.vue'), // 注意这里要带
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

