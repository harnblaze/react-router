import { Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Home from "../components/Home";
import Stats from "../components/Stats";
import Post from "../components/Post";

function App() {
  return (
    <div>
      <Navbar />
      <h1>App</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard/stats" component={Stats} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/posts/:postID?" component={Post} />
      </Switch>
    </div>
  );
}

export default App;
