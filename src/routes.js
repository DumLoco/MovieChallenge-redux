import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/About.js";
import Details from "./components/Details.js";
import SearchBox from "./components/SearchBox.js";

const CreateRoutes = props => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => (
          <SearchBox
            handleform={props.handleForm}
            search={props.search}
            busqueda={props.ListaTitulos}
          />
        )}
      />
      <Route path="/about" exact component={About} />
      <Route path="/:id" component={Details} />
    </Switch>
  );
};

export default CreateRoutes;
