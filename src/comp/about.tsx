import React, { useEffect } from 'react' 
import 
{Paper
,makeStyles
,Button} 
from '@material-ui/core'
import {useHistory} from 'react-router-dom'
const useStyle=makeStyles({
    paper:{
        background:"linear-gradient(to left top , rgb(175, 190, 175,0.4),rgb(0, 0, 0))",
        borderRadius:"30px",
        display:"flex",
        justifySelf:"center",
        textAlign:"center",
       color:"wheat",
       flexDirection:"column",
       alignItems:"center",
       width:"fit-content"
    },
    button:{
      background:"linear-gradient(to right ,rgb(1, 78, 1),green)",
      width:"30%",
      marginTop:"3px",
      wordWrap:"normal",
      color:"white",
      "&:hover":{
        fontWeight:"bold"
      }

      
    }
})
const generateStar=()=>{

    let screenWidth :number =window.screen.width
    let screenHeight:number=window.screen.height
    let star=document.getElementsByClassName("star")[0] as HTMLDivElement
   let varTop=0
setTimeout(()=>{
 
  for (let i=0;i<7;i++){
   
    let left = Math.floor(Math.random()*screenWidth) 

    let clon =star.cloneNode() as HTMLDivElement
 
    clon.style.top=`${varTop}px`
    clon.style.left=`${left}px`
    document.querySelector('.about')?.appendChild(clon)
  varTop =varTop + 50
 }
  },1000)
  let lst=document.getElementsByClassName('star') 

  if (lst.length>30){
for (let i=0;i<lst.length;i++){
  lst.item(i)?.remove()
}
  }
}
interface Props {setDelete?:Function}
export const About= (props:Props) =>{

  const historical=useHistory()
const classes=useStyle()

const {setDelete}=props

useEffect(()=>{
setInterval(()=>{generateStar()},4000)
},[])
const deleteSeciotn=()=>{
 
  historical.push('/',{delete:true})
  
}
const handleDelete=(value:boolean)=>{
  if (typeof setDelete === 'function') setDelete(value)
  historical.push('/')
}
    return (
      <>

      
        <div className="about"  >
        <div className="star"></div>
            <Paper elevation={8} className={classes.paper}>
              I dont Know what is the purpose of this section <br></br>
              however, you can delet it 
              
              <Button className={classes.button} onClick={()=>handleDelete(true)}>  Delete it</Button>
              <Button className={classes.button} onClick={()=>deleteSeciotn()}> Keep it</Button>
           </Paper>
        </div>
        </>
    )
}