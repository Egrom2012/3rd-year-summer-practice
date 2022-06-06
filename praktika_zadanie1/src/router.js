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
                component: () => import('./components/Projectaccounting.vue')
            },
            {
                path: '/Tasks',
                component: () => import('./components/Taskaccounting.vue')
            },
            {
                path: '/Wirings',
                component: () => import('./components/Wiringaccounting.vue')
            }
       ]
})