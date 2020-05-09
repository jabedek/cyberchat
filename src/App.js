import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import "./App.css";
import JoinPage from "./components/JoinPage/JoinPage";
import ChatPage from "./components/ChatPage/ChatPage";
import List from "./components/List/List";
import "../src/common/styles/index.scss";

class App extends React.Component {
  render() {
    const App = () => (
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={JoinPage} />
          <Route exact path="/chat" component={ChatPage} />
          <Route exact path="/list" component={List} />
        </Switch>
      </HashRouter>
    );

    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}
export default App;
