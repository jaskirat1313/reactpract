import React from "react";
import "./index.css";
import TodoItems from "./components/TodoItems";

import todosData from "./TodoData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItems key={item.id} item={item}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App
// import React from "react";
// import "./index.css";
// import TodoItems from "./components/TodoItems";

// import todosData from "./TodoData"

// function App() {
//     const todoItems = todosData.map(item => <TodoItems key={item.id} item={item}/>)
    
//     return (
//         <div className="todo-list">
//             {todoItems}
//         </div>
//     )
// }

// export default App;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex



// import React from "react"
// import Product from "./Product"
// import productsData from "./mappingData"

// function App() {
//     const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)
    
//     return (
//         <div>
//             {productComponents}
//         </div>
//     )
// }

// export default App