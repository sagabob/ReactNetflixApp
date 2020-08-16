import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyList from "../pages/MyList";
import Movies from "../pages/Movies";
import TvShows from "../pages/TvShows";
const routes = [
  {
    path: "/",
    component: Home,
    isPrivate: false,
    label: "Home",
    isNav: true,
  },
  {
    path: "/movies",
    component: Movies,
    isPrivate: false,
    label: "Movies",
    isNav: true,
  },
  {
    path: "/tvshows",
    component: TvShows,
    isPrivate: false,
    label: "Tv Shows",
    isNav: true,
  },
  {
    path: "/mylist",
    component: MyList,
    label: "My List",
    isPrivate: true,
    isNav: true,
  },
  {
    path: "/signup",
    component: SignUp,
    isPrivate: false,
    isNav: false,
    label: "Sign Up",
  },
  {
    path: "/login",
    component: Login,
    isPrivate: false,
    isNav: false,
    label: "Log In",
  },
];

export default routes;
