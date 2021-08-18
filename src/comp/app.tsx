import React from 'react'
import {ToolBar} from './ToolBar'
import github from '../images/github.png'
import linked from '../images/linkedin.png'
import tele from '../images/telegram.png'
import {routes} from '../routes'
import {Switch,Route} from 'react-router-dom'

 class App extends React.Component <{},{scrolling:boolean,scrollToTop:number,delete:boolean}>{
       constructor (props:any) {
           super(props)
   this.state={
       scrolling:false,
       scrollToTop:0,
       delete:false
   }
   this.checkScrolling=this.checkScrolling.bind(this)
   this.setDelete=this.setDelete.bind(this)
       }
   checkScrolling(e:Event){
       if (window.scrollY > this.state.scrollToTop){
           this.setState({
               scrollToTop:window.scrollY,
               scrolling:true
           })
       }
       else {
        this.setState({
            scrollToTop:window.scrollY,
            scrolling:false
        })
       }
      
   }
     componentDidMount(){
       window.addEventListener('scroll',this.checkScrolling)
      
       
     }
   setDelete (value:boolean) {
      
      if (value) this.setState({delete:value})
   }
 
    render (){
       
        
        return (
         
            <div className= "main" >
               <ToolBar scrolling={this.state.scrolling} Delete={this.state.delete}  />
     
                <div className="last">
                <a href="https://linkedin.com/in/mohammad-ismael-755ba4199/">
                    <img src={linked} className="fbSocial"/>
                    </a>
                    <a href="https://github.com/ab3adel">
                    <img src={tele} className="teleSocial"/>
                    </a>
                    <a href="https://github.com/ab3adel">
                    <img src={github} className="githubSocial"/>
                        </a>
                </div>
                <Switch>
               {routes.map((ele,key)=>{
                   let props =undefined
                   if (ele.name === 'About') { props= this.setDelete}
                   let element = React.createElement(ele.element,{setDelete:props})
                   return (<Route exact path={ele.path}   key={key}> {element} </Route>)
               })}
                   
        </Switch>
            </div>
          
        )
    }
}
export default  App;