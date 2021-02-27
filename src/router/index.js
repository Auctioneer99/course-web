import { createRouter, createWebHistory } from "vue-router";
import Auth from "@/Scripts/Buisness/AwsAuth.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/serverbrowser",
    name: "ServerBrowser",
    component: () => import("../views/ServerBrowser.vue"),
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("../views/SignIn.vue"),
    beforeEnter: (to, from, next) => redirectIfAuthenticated(to, from, next),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
    beforeEnter: (to, from, next) => redirectIfAuthenticated(to, from, next),
  },
  {
    path: "/forgotpassword",
    name: "ForgotPassword",
    component: () => import("../views/ForgotPassword.vue"),
    beforeEnter: (to, from, next) => redirectIfAuthenticated(to, from, next),
  },
  {
    path: "/resetpassword",
    name: "ResetPassword",
    component: () => import("../views/ResetPassword.vue"),
    props: true,
    beforeEnter: (to, from, next) => redirectIfAuthenticated(to, from, next),
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

async function redirectIfAuthenticated(to, from, next) {
  try {
    await Auth.currentAuthenticatedUser().then((response) => {
      if (response.username !== null) {
        next({ path: "/profile/" + response.username });
      }
    });
  } catch {
    next();
  }
}

export default router;
