import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
