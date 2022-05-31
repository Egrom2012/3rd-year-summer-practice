import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes:
       [
            {
                path: '',
               component: Home
            },
            {
                path: '/Projects',
                component: () => import('./views/Projects.vue')
            },
            {
                path: '/Tasks',
                component: () => import('./views/Tasks.vue')
            },
            {
                path: '/Wirings',
                component: () => import('./views/Wirings.vue')
            }
       ]
})