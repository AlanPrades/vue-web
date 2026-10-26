import { createRouter, createWebHashHistory } from "vue-router";
import Batman from "../paginae/Batman/Batman.vue";
import Domus from "../paginae/domus/Domus.vue";
import Primus from "../paginae/simpsons/Primus.vue";
import Responsum from "../paginae/responsum/Responsum.vue";
import Circa from "@/paginae/simpsons/Circa.vue";
import Collectione from "@/paginae/simpsons/Collectione.vue";
import Character from "@/paginae/simpsons/Character.vue";
import Layout from "@/paginae/simpsons/Layout.vue";


export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Domus
        },
        {
            path: "/batman",
            name: "batman",
            component: Batman
        },
        {
            path: "/simpson",
            children: [
                {
                    path: "",                   //simpson
                    name: "simpson",
                    component: Primus
                },
               {
                    path: "about",              //simpson/about
                    component: Layout,
                    children:[
                        {
                            path: "",
                            name: "simpson-about",               //simpson/about/
                            component: Circa
                        } 
                    ]
               },
               {
                    path: "gallery",              //simpson/gallery
                    component: Layout,
                    children:[
                        {
                            path: "",
                            name: "simpson-gallery",              //simpson/gallery/
                            component: Collectione
                        } 
                    ]
               },
               {
                path: ":id",
                name: "simpson-detail",
                component: Character
               }
            ],
        },
        {
            path: "/indecision",
            name: "indecision",
            component: Responsum
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: ':/'
        }
    ]
})