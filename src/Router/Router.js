import React from "react";
import AddBooks from "../Components/AddBooks";
import Characters from "../Components/Characters";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={AddBooks} exact={true} />
        <Route path="/characters" component={Characters} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
