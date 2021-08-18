import React from "react";
import 
{Popper
,Button
,PopperProps
,Paper
,makeStyles
}
from '@material-ui/core'
import { Anchor } from "react-feather";
import { classicNameResolver } from "typescript";
const useStyle=makeStyles({
paper:{
    width:"fit-content",
    textAlign:"center",
    display:"flex",
    justifyContent:"center",
    padding:"5px",
    flexDirection:"column"
 
}
})
interface Props {open:boolean,setOpen:Function,element:HTMLElement|undefined}
export const Poper =(props:Props) =>{
const classes=useStyle()
const {open,setOpen,element}=props
let date = new Date(Date.now()).toISOString()
    return (
        
            <Popper open={open} anchorEl={element}>
               <Paper className={classes.paper}>
                <p> found in 2021/18/8</p>
                <p> deleted in    {date}        </p>   
                </Paper>
            </Popper>
    
    )
}