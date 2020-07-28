import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Create from "./components/pages/create/create";
import Client from "./components/pages/client-side/read";
import Edit from "./components/pages/update/update";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Client} />
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
