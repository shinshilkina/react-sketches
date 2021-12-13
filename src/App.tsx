import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/sketches" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
