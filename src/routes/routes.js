import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const routes = [
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/",
    component: Home,
  },

  {
    path: "/login",
    component: Login,
  },
];

export default routes;
