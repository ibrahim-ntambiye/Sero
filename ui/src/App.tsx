import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import AddRecipeComponent from './components/AddRecipeComponent/AddRecipeComponent';
import NavComponent from './components/NavComponent/NavComponent';

const App = () => {
  return (
    <div className="container">
      <Router>
      <NavComponent/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create-recipe" component={AddRecipeComponent}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
