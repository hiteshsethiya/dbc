/* dependencies */
import { h, app } from "hyperapp";
import { Route, location, Switch } from "@hyperapp/router";

import SW from "./components/service-worker";

/* components */
import Header from "./components/header";
import Footer from "./components/footer";
import Planner from "./components/planner";
import Home from "./pages/home";
import Orders from "./pages/orders";

/* style */
import style from "./index.css";

const modules = {
  Header: Header(),
  Home: Home(),
  Footer: Footer(),
  Planner: Planner(),
  Orders: Orders()
};

const Root = {
  state: {
    location: location.state,
    header: modules.Header.state,
    home: modules.Home.state,
    planner: modules.Planner.state,
    orders: modules.Orders.state
  },
  actions: {
    location: location.actions,
    header: modules.Header.actions,
    home: modules.Home.actions,
    planner: modules.Planner.actions,
    orders: modules.Orders.actions
  },
  view: (state, actions) => {
    const Header = modules.Header.view;
    const Home = modules.Home.view;
    const Orders = modules.Orders.view;

    return (
      <main>
        <Header />
        <Switch>
          <Route path="/" render={Home} />
          <Route path="/orders/:id" render={Orders} />
          <Route path="/orders" render={Orders} />
        </Switch>
        <Footer />
      </main>
    );
  }
}
const appElem = document.getElementById('app');
const main = app(Root.state, Root.actions, Root.view, appElem);
const unsubscribe = location.subscribe(main.location);