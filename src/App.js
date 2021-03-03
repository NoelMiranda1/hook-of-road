import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./config/Routes";
import { AuthProvider } from "./context";
import AppRoutes from "./components/AppRoutes";
// import Layout from "./components/Layout";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {routes.map((route) => (
            <AppRoutes
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
              isPrivate={route.isPrivate}
            />
          ))}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
