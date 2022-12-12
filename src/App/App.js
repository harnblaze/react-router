import { Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import PostsList from "../components/PostsList";
import Home from "../components/Home";
import Stats from "../components/Stats";
import Post from "../components/Post";

const posts = [
  { id: 1, label: "post 1" },
  { id: 2, label: "post 2" },
  { id: 3, label: "post 3" },
];

function App() {
  return (
    <div>
      <Navbar />
      <h1>App</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard/stats" component={Stats} />
        <Route
          path="/dashboard"
          render={(props) => <Dashboard isAdmin={false} {...props} />}
        />
        <Route
          path="/posts/:postID"
          render={(props) => <Post posts={posts} {...props} />}
        />
        <Route
          path="/posts"
          render={(props) => <PostsList posts={posts} {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
