
import React from 'react'
import b3d from '../../images/B3d.png'
import {routes} from '../../routes'
import 
{AppBar
,Toolbar
,Typography
,IconButton
,makeStyles
,Avatar
,Fade

}
from '@material-ui/core'
import {Poper} from './poper'
import {Link,useHistory} from 'react-router-dom'
const useStyle=makeStyles(Theme=>({
    root:{
       background:"linear-gradient(to right ,rgb(1, 78, 1),green)",
       textAlign:"center",
       height:"38px",
       boxShadow:"5px 5px 5px white",
       justifyContent:"space-around"

    },
    toolbarRoot:{
        justifyContent:"space-between",
        color:"white"
    },
    body1:{
        color:"white",
        textDecoration:"none",
        "&:hover":{
         color:"white",
            fontWeight:"bolder"
    },
    delete:{
        color:"black"
    }
  
}))
interface Props{scrolling:boolean,Delete?:boolean}
export const ToolBar =(props:Props)=>{
    

    const history=useHistory()
  const classes=useStyle()

const {Delete}=props
  const [open,setOpen]=React.useState(false)
  const [element,setElement]=React.useState <HTMLElement> ()

  const goToHome =()=>{
    history.push('/')
}
const handlePoper=(e:React.MouseEvent)=>{

     setElement(e.currentTarget as HTMLElement)
     setOpen(true)
}
    return (
        <>
        <Fade in={!props.scrolling} >
        <AppBar className={classes.root}>
            <Toolbar className={classes.toolbarRoot}>
                <IconButton onClick={()=>goToHome()}>
                  <Avatar  src={b3d} />
               </IconButton>
               {routes.filter(ele=>ele.name)
               .map((ele,index)=>{
                     if(Delete && ele.name=== "About"){
                         return <Typography
                                  key={index}
                                  className={classes.delete}
                                  onMouseOver={(e)=>handlePoper(e)}
                                  onMouseOut={()=>setOpen(false)}
                                  onTouchStart={()=>setOpen(true)}>
                                      {ele.name}
                                </Typography>
                     }
                     
                   return (

                    <Typography
                    key={index}
                      className={classes.body1}
                      component={Link}
                      to={ele.path}
                     >{ele.name}</Typography>)
               }) }
            </Toolbar>

        </AppBar>
        </Fade>
       {open && (<Poper open={open} setOpen={setOpen} element={element} />)}
        </>
    )

}
