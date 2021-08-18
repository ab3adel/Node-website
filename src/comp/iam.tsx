import React, { useEffect } from 'react' 
import 
{Paper
,makeStyles} 
from '@material-ui/core'

const useStyle=makeStyles({
    paper:{
        background:"linear-gradient(to left top , rgb(175, 190, 175,0.4),rgb(0, 0, 0))",
        borderRadius:"30px",
        display:"flex",
        justifySelf:"center",
        textAlign:"center",
       color:"wheat",
    }
})
const generateStar=()=>{

    let screenWidth :number =window.screen.width
    let screenHeight:number=window.screen.height
    let star=document.getElementsByClassName("star")[0] as HTMLDivElement
   let varTop=0
setTimeout(()=>{
 
  for (let i=0;i<7;i++){
    console.log(varTop)
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

export const I= () =>{
const classes=useStyle()
useEffect(()=>{
setInterval(()=>{generateStar()},4000)
},[])
    return (
      <>

      
        <div className="about"  >
        <div className="star"></div>
            <Paper elevation={8} className={classes.paper}>
           who I am? <br></br>
            I am Comunications Engineer, my pasion  is <br></br>
       programming language , I am looking forward learning all up-to-date techs <br></br>
         no limits to my abilities at all <br></br>
        
           what else:     <br></br>
         see my projects on Githup  ,<br></br>
          <br></br>
            
          </Paper>
        </div>
        </>
    )
}