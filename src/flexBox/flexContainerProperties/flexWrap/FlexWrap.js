import './FlexWrap.css';

function FlexWrap() {
    return(
        <div className="layout-container">
            <div>
                <h1>
                    flex-wrap
                </h1>
            </div>
            <div>
                <h2>
                    flex, flex-wrap: nowrap
                </h2>
            </div>
            <div className="container-nowrap">
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
                    flex, flex-wrap: wrap
                </h2>
            </div>
            <div className="container-wrap">
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
                    flex, flex-wrap: wrap-reverse
                </h2>
            </div>
            <div className="container-wrap-reverse">
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

export default FlexWrap;