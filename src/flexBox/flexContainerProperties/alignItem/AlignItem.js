import './AlignItem.css';

function AlignItem(){
    return(
        <div className="layout-container">
            <div>
                <h1>
                    align-items
                </h1>
            </div>
            <div>
                <h2>
                    flex, row, align-items: flex-start, height: 500px
                </h2>
            </div>
            <div className="container-align-item-flex-start">
                <div className="flex-item">Flex Item 1</div>
                <div className="flex-item">Flex Item 2</div>
                <div className="flex-item">Flex Item 3</div>
            </div>
            <div>
                <h2>
                    flex, row, align-items: flex-end, height: 500px
                </h2>
            </div>
            <div className="container-align-item-flex-end">
                <div className="flex-item">Flex Item 1</div>
                <div className="flex-item">Flex Item 2</div>
                <div className="flex-item">Flex Item 3</div>
            </div>
            <div>
                <h2>
                    flex, row, align-items: center, height: 500px
                </h2>
            </div>
            <div className="container-align-item-center">
                <div className="flex-item">Flex Item 1</div>
                <div className="flex-item">Flex Item 2</div>
                <div className="flex-item">Flex Item 3</div>
            </div>
            <div>
                <h2>
                    flex, row, align-items: stretch, container-height: 500px, flex-item height: auto
                </h2>
            </div>
            <div className="container-align-item-stretch">
                <div className="flex-item height-auto">Flex Item 1</div>
                <div className="flex-item height-auto">Flex Item 2</div>
                <div className="flex-item height-auto">Flex Item 3</div>
            </div>
        </div>
    )
}

export default AlignItem;