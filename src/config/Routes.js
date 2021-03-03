import Home from "../pages/Home";
import Habitacion from "../pages/Habitacion";
import Login from "../pages/auth/Login";
import Notfound from "../pages/Notfound";
/////////////////////////////////////////
/////////
/////////////////////    CAMBIAR A TRUE LAS RUTAS PRIVADAS CUANDO IDSART ME HAGA EL BACKEND PARA EL TODO XD
/////////
/////////////////////////////////////////
const routes = [
  {
    path: "/login",
    component: Login,
    isPrivate: false,
  },
  {
    path: "/",
    component: Home,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/newregister",
    component: Habitacion,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/*",
    component: Notfound,
    isPrivate: false,
  },
];

export default routes;
