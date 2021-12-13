import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllSketches from "./pages/AllSketches";
import ExpandingCards from "./pages/ExpandingCards";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/all-sketches" />
        </Route>
        <Route path="/all-sketches" exact>
          <AllSketches />
        </Route>
        <Route path="/expanding-cards" exact>
          <ExpandingCards />
        </Route>
        <Route path="*">
          <AllSketches />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
