import {RouteRecordRaw,createWebHistory,createRouter} from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ProyectosPages from "../pages/ProyectosPages.vue";


export const routes:RouteRecordRaw[]=[

    {
        name:"Home",
        component:HomePage,
        path:"/",
   },
    {
    name:"Proyectos",
    component:ProyectosPages,
    path:"/proyectos",
    },
    
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;