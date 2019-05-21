import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import DiaryEntry from "./components/DiaryEntry.vue"
import Diary from "./views/Diary.vue"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/diary",
            name: "diary",
            component: Diary
        },
        {
            path: "/diary/:id",
            name: "diary_entry",
            component: DiaryEntry
        }
    ]
});