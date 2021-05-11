import './AlignContent.css';

function AlignContent(){
    return(
        <div className="layout-container">
            <div>
                <h1>
                    align-content
                </h1>
            </div>
            <div>
                <h2>
                    flex, row, align-content: flex-start, height: 500px, flex-flow: wrap
                </h2>
            </div>
            <div className="container-align-content-flex-start">
                <div className="flex-item">Flex Item 1</div>
                <div className="flex-item">Flex Item 2</div>
                <div className="flex-item">Flex Item 3</div>
            </div>
            <div>
                <h2>
                    flex, row, align-content: flex-end, height: 500px, flex-flow: wrap
                </h2>
            </div>
            <div className="container-align-content-flex-end">
                <div className="flex-item">Flex Item 1</div>
                <div className="flex-item">Flex Item 2</div>
                <div className="flex-item">Flex Item 3</div>
            </div>
            <div>
                <h2>
                    flex, row, align-content: center, height: 500px, flex-flow: wrap
                </h2>
            </div>
            <div className="container-align-content-center">
                <div className="flex-item">Flex Item 1</div>
                <div className="flex-item">Flex Item 2</div>
                <div className="flex-item">Flex Item 3</div>
            </div>
            <div>
                <h2>
                    flex, row, align-content: stretch, container-height: 500px, flex-item height: auto
                </h2>
            </div>
            <div className="container-align-content-stretch">
                <div className="flex-item height-auto">Flex Item 1</div>
                <div className="flex-item height-auto">Flex Item 2</div>
                <div className="flex-item height-auto">Flex Item 3</div>
            </div>
            <div>
                <h2>
                    flex, row, align-content: space-between, container-height: 500px, flex-grow: wrap
                </h2>
            </div>
            <div className="container-align-content-space-between">
                <div className="flex-item">Flex Item 1</div>
                <div className="flex-item">Flex Item 2</div>
                <div className="flex-item">Flex Item 3</div>
                <div className="flex-item">Flex Item 4</div>
                <div className="flex-item">Flex Item 5</div>
                <div className="flex-item">Flex Item 6</div>
            </div>
            <div>
                <h2>
                    flex, row, align-content: space-around, container-height: 500px, flex-grow: wrap
                </h2>
            </div>
            <div className="container-align-content-space-around">
                <div className="flex-item">Flex Item 1</div>
                <div className="flex-item">Flex Item 2</div>
                <div className="flex-item">Flex Item 3</div>
                <div className="flex-item">Flex Item 4</div>
                <div className="flex-item">Flex Item 5</div>
                <div className="flex-item">Flex Item 6</div>
            </div>
        </div>
    )
}

export default AlignContent;