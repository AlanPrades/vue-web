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
            path: "/simpsons",
            children: [
                {
                    path: "",                   //simpson
                    name: "simpsons",
                    component: Primus
                },
               {
                    path: "about",              //simpson/about
                    component: Layout,
                    children:[
                        {
                            path: "",
                            name: "simpsons-about",               //simpson/about/
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
                            name: "simpsons-characters",              //simpson/gallery/
                            component: Collectione
                        },
                        {
                            path: ":id",                               //simpson/gallery/23
                            name: "simpsons-character",
                            component: Character
                        }
                    ]
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