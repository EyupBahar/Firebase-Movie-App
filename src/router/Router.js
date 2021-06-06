import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
