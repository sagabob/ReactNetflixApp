import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { AuthProvider } from "./auth/Auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";

import MyList from "./pages/MyList";
import routes from "./routes/routes";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Nav />
          <Switch>
            {routes.map((route, i) => (
              <Route
                key={i}
                exact
                path={route.path}
                component={route.component}
              />
            ))}

            <PrivateRoute exact path="/mylist" component={MyList} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
