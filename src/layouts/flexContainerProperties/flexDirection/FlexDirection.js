import './FlexDirection.css';

function FlexDirection() {
    return (
      <div className="layout-container">
        <div>
          <h1>
            flex-direction
          </h1>
        </div>
        <div>
          <h2>
            flex, flex-direction: row
          </h2>
        </div>
        <div className="container-row">
          <div className="flex-item">Flex Item 1</div>
          <div className="flex-item">Flex Item 2</div>
          <div className="flex-item">Flex Item 3</div>
        </div>
        <div>
          <h2>
            flex, flex-direction: row-reverse
          </h2>
        </div>
        <div className="container-row-reverse">
          <div className="flex-item">Flex Item 1</div>
          <div className="flex-item">Flex Item 2</div>
          <div className="flex-item">Flex Item 3</div>
        </div>
        <div>
          <h2>
            flex, flex-direction: column
          </h2>
        </div>
        <div className="container-column">
          <div className="flex-item">Flex Item 1</div>
          <div className="flex-item">Flex Item 2</div>
          <div className="flex-item">Flex Item 3</div>
        </div>
        <div>
          <h2>
            flex, flex-direction: column-reverse
          </h2>
        </div>
        <div className="container-column-reverse">
          <div className="flex-item">Flex Item 1</div>
          <div className="flex-item">Flex Item 2</div>
          <div className="flex-item">Flex Item 3</div>
        </div>
      </div>
    );
  }
  
  export default FlexDirection;