import React,{Component} from "react"

class State extends Component{
    constructor(){
       super()
        this.state={
            logIn:"in",
            logOut:"out"
            
        
    } 
    }
    
    render(){
        const isLoggedIn=false;
       return (
        <div>
            <h1>You are currently logged {isLoggedIn?this.state.logIn:this.state.logOut}</h1>
        </div>
    )
 } 
}
    

export default State

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             isLoggedIn: false
//         }
//     }
    
//     render() {
//         let wordDisplay
//         if (this.state.isLoggedIn === true) {
//             wordDisplay = "in"
//         } else {
//             wordDisplay = "out"
//         }
//         return (
//             <div>
//                 <h1>You are currently logged {wordDisplay}</h1>
//             </div>
//         )
//     }
// }

// export default App
