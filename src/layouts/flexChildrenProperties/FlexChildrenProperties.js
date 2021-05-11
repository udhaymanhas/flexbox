import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

import './FlexChildrenProperties.css';

function FlexChildrenProperties() {

    let { path, url } = useRouteMatch();

    return (
        <div className="main-container">
            <h2>Flex Children Properties</h2>
            <nav>
                <ul>
                    <li>
                        <Link to={`${url}/order`}> order</Link>
                    </li>
                    <li>
                        <Link to={`${url}/flexGrow`}> flex-grow</Link>
                    </li>
                    <li>
                        <Link to={`${url}/flexShrink`}> flex-shrink</Link>
                    </li>
                    <li>
                        <Link to={`${url}/flex`}> flex</Link>
                    </li>
                    <li>
                        <Link to={`${url}/alignSelf`}> align-self</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Children />
                </Route>
            </Switch>
        </div>
    )
}

function Children(){
    let { topicId } = useParams();

    return (
        <div>
          <h3>{topicId}</h3>
        </div>
      );
}

export default FlexChildrenProperties;