import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import DetailQuote from "./pages/DetailQuote";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <DetailQuote />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route>
          <NotFound path="*" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
