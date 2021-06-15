import React from 'react'
import {Route,Link,Switch} from 'react-router-dom'
import {Myself} from './myself'
import {Home} from './home'
import {About} from './about'
import {Footer} from './footer'
import {I} from './iam'
import github from '../images/github.png'
import fb from '../images/facebook.png'
import tele from '../images/telegram.png'


 class App extends React.Component <{},{}>{
       constructor (props:any) {
           super(props)

       }
     

    render (){
        return (
            <div className= "main" >
                <div className="header">
                
               <Link to ="/">Home</Link>
                <Link to ='/about'>About</Link>
                <Link to ="/portfolio">Portofolio</Link>
                </div>
      
          
             
               
                <Switch>
                  
                    <Route exact path="/i"> <I/></Route>
                    <Route exact path="/about"> <About/></Route>
                    <Route exact path="/portofolio"> <Home/></Route>
                    <Route path="/">   
                       <Myself/>
                       <Footer/>
                    </Route>
                    
                </Switch>
                <div className="last">
                <a href="https://github.com/ab3adel">
                    <img src={fb} className="fbSocial"/>
                    </a>
                    <a href="https://github.com/ab3adel">
                    <img src={tele} className="teleSocial"/>
                    </a>
                    <a href="https://github.com/ab3adel">
                    <img src={github} className="githubSocial"/>
                        </a>
                </div>
            </div>
        )
    }
}
export default  App;
