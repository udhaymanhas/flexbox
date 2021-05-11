import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import './FlexContainerProperties.css';

import FlexDirection from './flexDirection/FlexDirection';
import FlexWrap from './flexWrap/FlexWrap';
import FlexFlow from './flexFlow/FlexFlow';

function FlexContainerProperties() {

    let { path, url } = useRouteMatch();

    return (
        <div className="main-container">
            <h2>Flex Container Properties</h2>
            <nav>
                <ul>
                    <li>
                        <Link to={`${url}/flexDirection`}> flex-direction</Link>
                    </li>
                    <li>
                        <Link to={`${url}/flexWrap`}> flex-wrap</Link>
                    </li>
                    <li>
                        <Link to={`${url}/flexFlow`}> flex-flow</Link>
                    </li>
                    <li>
                        <Link to={`${url}/justifyContent`}> justify-content</Link>
                    </li>
                    <li>
                        <Link to={`${url}/alignItems`}> align-items</Link>
                    </li>
                    <li>
                        <Link to={`${url}/alignContent`}> align-content</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/flexDirection`}>
                    <FlexDirection />
                </Route>
                <Route path={`${path}/flexWrap`}>
                    <FlexWrap />
                </Route>
                <Route path={`${path}/flexFlow`}>
                    <FlexFlow />
                </Route>
            </Switch>
        </div>
    )
}

export default FlexContainerProperties;