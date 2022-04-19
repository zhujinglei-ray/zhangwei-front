import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import home from '@/views/home/home.vue'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'just-test',
        component: home
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router