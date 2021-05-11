import './FlexFlow.css';

function FlexFlow(){
    return(
        <div className="layout-container">
            <div>
                <h1>
                    flex-flow
                </h1>
            </div>
            <div>
                <h2>
                    flex, flex-flow: row nowrap
                </h2>
            </div>
            <div className="container-flow-row-nowrap">
                <div className="flex-item">Flex Item 1</div>
                <div className="flex-item">Flex Item 2</div>
                <div className="flex-item">Flex Item 3</div>
                <div className="flex-item">Flex Item 4</div>
                <div className="flex-item">Flex Item 5</div>
                <div className="flex-item">Flex Item 6</div>
                <div className="flex-item">Flex Item 7</div>
                <div className="flex-item">Flex Item 8</div>
            </div>
            <div>
                <h2>
                    flex, flex-wrap: column nowrap, height: 500px
                </h2>
            </div>
            <div className="container-flow-column-nowrap">
                <div className="flex-item">Flex Item 1</div>
                <div className="flex-item">Flex Item 2</div>
                <div className="flex-item">Flex Item 3</div>
                <div className="flex-item">Flex Item 4</div>
                <div className="flex-item">Flex Item 5</div>
                <div className="flex-item">Flex Item 6</div>
                <div className="flex-item">Flex Item 7</div>
                <div className="flex-item">Flex Item 8</div>
            </div>
            <div style={{marginTop: "200px"}}>
                <h2>
                    flex, flex-wrap: row wrap
                </h2>
            </div>
            <div className="container-flow-row-wrap">
                <div className="flex-item">Flex Item 1</div>
                <div className="flex-item">Flex Item 2</div>
                <div className="flex-item">Flex Item 3</div>
                <div className="flex-item">Flex Item 4</div>
                <div className="flex-item">Flex Item 5</div>
                <div className="flex-item">Flex Item 6</div>
                <div className="flex-item">Flex Item 7</div>
                <div className="flex-item">Flex Item 8</div>
            </div>
            <div>
                <h2>
                    flex, flex-wrap: column wrap, height: 500px
                </h2>
            </div>
            <div className="container-flow-column-wrap">
                <div className="flex-item">Flex Item 1</div>
                <div className="flex-item">Flex Item 2</div>
                <div className="flex-item">Flex Item 3</div>
                <div className="flex-item">Flex Item 4</div>
                <div className="flex-item">Flex Item 5</div>
                <div className="flex-item">Flex Item 6</div>
                <div className="flex-item">Flex Item 7</div>
                <div className="flex-item">Flex Item 8</div>
            </div>
        </div>
    )
}

export default FlexFlow;