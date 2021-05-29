import React from 'react'
import {Route,Link,Switch} from 'react-router-dom'
import {Myself} from './myself'
import {Home} from './home'
import {About} from './about'
 class App extends React.Component <{},{}>{
       constructor (props:any) {
           super(props)

       }
     

    render (){
        return (
            <div className= "main" >
                <div className="header">
                
               
                <Link to ='/about'>About</Link>
                <Link to ="/">Home</Link>
                </div>
      
                <Myself/>
               
                <div id="footer">
                    <span></span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                </div>
                <Switch>
                  
                    <Route path="/about"> <About/></Route>
                    <Route path="/"> <Home/></Route>
                </Switch>
            </div>
        )
    }
}
export default  App;