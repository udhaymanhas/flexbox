import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import LayoutFlexDirection from './layouts/layoutFlexDirection/LayoutFlexDirection';
import FlexContainerProperties from './layouts/flexContainerProperties/FlexContainerProperties';
import FlexChildrenProperties from './layouts/flexChildrenProperties/FlexChildrenProperties';

function App() {
  return (
    <Router>
      <div className="main-container">
        <nav>
          <h1>Flexbox Properties</h1>
          <ul>
            <li>
              <Link to="/flexContainer">flex container: Properties for Parent </Link>
            </li>
            <li>
              <Link to="/flexChildren">flex items: Properties for Children </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/flexContainer">
            <FlexContainerProperties />
          </Route>
          <Route path="/flexChildren">
            <FlexChildrenProperties />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
