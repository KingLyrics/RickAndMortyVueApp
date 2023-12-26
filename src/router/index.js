import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import CharacterDetailVue from "@/views/CharacterDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/character/:id",
      name: "character-detail",
      component: CharacterDetailVue,
    },
  ],
});

export default router;
