import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../pages/Main";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
