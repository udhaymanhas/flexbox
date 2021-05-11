import './JustifyContent.css'

function JustifyContent(){
    return(
        <div className="layout-container">
            <div>
                <h1>
                    justify-content
                </h1>
            </div>
            <div>
                <h2>
                    flex, row, justify-content: flex-start
                </h2>
            </div>
            <div className="container-jutify-content-flex-start">
                <div className="flex-item">Flex Item 1</div>
                <div className="flex-item">Flex Item 2</div>
                <div className="flex-item">Flex Item 3</div>
            </div>
            <div>
                <h2>
                    flex, row, justify-content: flex-end
                </h2>
            </div>
            <div className="container-jutify-content-flex-end">
                <div className="flex-item">Flex Item 1</div>
                <div className="flex-item">Flex Item 2</div>
                <div className="flex-item">Flex Item 3</div>
            </div>
            <div>
                <h2>
                    flex, row, justify-content: center
                </h2>
            </div>
            <div className="container-jutify-content-center">
                <div className="flex-item">Flex Item 1</div>
                <div className="flex-item">Flex Item 2</div>
                <div className="flex-item">Flex Item 3</div>
            </div>
            <div>
                <h2>
                    flex, row, justify-content: space-between
                </h2>
            </div>
            <div className="container-jutify-content-space-between">
                <div className="flex-item">Flex Item 1</div>
                <div className="flex-item">Flex Item 2</div>
                <div className="flex-item">Flex Item 3</div>
            </div>
            <div>
                <h2>
                    flex, row, justify-content: space-around
                </h2>
            </div>
            <div className="container-jutify-content-space-around">
                <div className="flex-item">Flex Item 1</div>
                <div className="flex-item">Flex Item 2</div>
                <div className="flex-item">Flex Item 3</div>
            </div>
            <div>
                <h2>
                    flex, row, justify-content: space-evenly
                </h2>
            </div>
            <div className="container-jutify-content-space-evenly">
                <div className="flex-item">Flex Item 1</div>
                <div className="flex-item">Flex Item 2</div>
                <div className="flex-item">Flex Item 3</div>
            </div>
        </div>
    )
}

export default JustifyContent;