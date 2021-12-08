import router from "@/router";
import { getSession } from "../../utils/session.js";
router.beforeEach((to, from, next) => {
    const hasToken = getSession('token');
   
    if (hasToken) {
        if (to.path === "/login") {
            next("/")
        } else {
          
            next()
        }

    } else {
        if (to.path === "/login") {
            next()
        } else {
            next({ path: "/login" })
        }
    }
})