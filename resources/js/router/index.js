import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: () => import("../layouts/AppLayout.vue"),
            children: [
                {
                    path: "",
                    name: "home",
                    component: () => import("../Pages/Index.vue"),
                },
            ],
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
});

export default router;
