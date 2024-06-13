import { createRouter, createWebHistory } from "vue-router";

import AppMain from "../components/AppMain.vue";
import AppHome from "../pages/AppHome.vue";
import AppContact from "../pages/AppContact.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: AppMain
        },
        {
            path: '/contact',
            name: 'contact',
            component: AppContact
        }

    ]
})

export { router };