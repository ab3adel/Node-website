import React, {useEffect,useState } from 'react'
import b3d from '../images/B3d.png'
import python from '../images/python.png'
import js from '../images/js.png'
import node from '../images/node.png'
import ts from '../images/ts.png'
import cs from '../images/c#.png'
import * as d3 from "d3"
import {Heart} from 'react-feather'
interface eles {_groups:[],_parents:[]}
export const Myself = ()=>{

    let cordX:number=355;
    let cordY:number =182;
    const [rain,setRain]=useState()
 
    const moveMe =(e:React.MouseEvent|React.TouchEvent)=>{
        let x:number;
        let y:number;
    
       if (e.type === 'touchmove') {
        x= (e as React.TouchEvent).touches[0].clientX 
        y= (e as React.TouchEvent).touches[0].clientY 
       cordX=249;
       cordY=516;
       }
      else {
     x=(e as React.MouseEvent).clientX
     y=(e as React.MouseEvent).clientY
 
      }
     let angle=(Math.atan((y-cordY)/(x-cordX))*57.29)
     let turnY:number=0
     let turnZ:number=1
     if(x<cordX){
        turnY =180
        angle=-angle   
     }
     d3.select("#me").style('-webkit-transform',`rotateY(${turnY}deg) rotateZ(${angle}deg)`)                            
    }
    const returnMe =(e:React.MouseEvent|React.TouchEvent)=>{

         d3.select("#me").transition().style('transform',`rotate3d(0,0,0,0deg)`).ease(d3.easeBackInOut)
        
       }
    const  showDetail=(e:React.MouseEvent| React.TouchEvent)=>{
      e.preventDefault()
      let src;
      if ((e.currentTarget as HTMLDivElement).id ==='topLink'){
        src=python
      }
      else if ((e.currentTarget as HTMLDivElement).id ==='rightLink'){
        src=js
      }
      else if ((e.currentTarget as HTMLDivElement).id ==='bottomLink'){
         src=node
      }
      else if ((e.currentTarget as HTMLDivElement).id ==='leftLink'){
        src=cs
      }
          let Xpoints= (e as React.MouseEvent).pageX 
          let Ypoints= (e as React.MouseEvent).pageY 
          
          let parent=  d3.select( e.currentTarget as HTMLDivElement)
      
          let element = document.createElement('img') as HTMLElement
        
          element.style.left=`${Xpoints}px`;
          element.style.top=`${Ypoints}px`;
          element.setAttribute('class','rain');
          element.setAttribute('src',src);
          document.getElementById('root')?.appendChild(element);

          parent.selectChild('div').transition()
           .style('display','block').ease(d3.easeBounce).duration(2000)
         setTimeout(()=>{ let collection=  document.getElementsByClassName('rain')
            for (let i=0;i<collection.length;i++){
        (collection.item(i) as HTMLElement).style.display='none';
      }},700)

      
    }
    const animMe=()=>{
    let lst:any=  d3.select('.meUp').selectChildren('span')
    let duration=1
    lst._groups[0].forEach ((ele:HTMLSpanElement)=>{
        let span=d3.select(ele)
        
         span.attr('class','myName')
        
          span.transition()
          .style('visibility','visible')
          .style('transform','translateX(0px)')
          .style('transition-duration',`${duration}s`)
           .delay(1000)
          .end()
          duration=duration+0.5
 
    })
      let delay=100
      lst._groups[0].forEach ((ele:HTMLSpanElement)=>{
        let span=d3.select(ele)
        
  
        
          span.transition()
            .style('animation-name','colorMe').duration(2000)
            .delay(4900+delay)
          .end()
          delay=delay+100
 
    })
   setTimeout(()=>{
    let parent = document.querySelector('.meDown')?.firstChild as HTMLParagraphElement
    
    let span= parent?.firstElementChild as HTMLSpanElement
   
    parent.style.display="block";
    
    parent.style.animationName="wise"
    span.style.animationName="beat"
   

   },6200)
     

    }
   const bubbles =()=>{
    let arr= [ts,cs,node,js,python]
   let screenWidth :number =window.screen.width
   let second=1000
    arr.map((ele:string)=>{

    setTimeout(()=>{
      let left = Math.floor(Math.random()*screenWidth-12)
      
      let img= document.createElement('img')
      img.setAttribute('class','bubbles')
      img.setAttribute('src',ele)
      img.style.left=`${left}px`
      document.querySelector('.me')?.appendChild(img)
    },second)
        
   second =second + 1500
     
    
   
    })
    let lst=document.getElementsByClassName('bubbles') 

    if (lst.length>20){
  for (let i=0;i<lst.length;i++){
    lst.item(i)?.remove()
  }
    }
     
    
   }
    useEffect(()=>{
      animMe ();
     setInterval(bubbles,8000)
      },[])
    return (
        
         <div className="me" 
        >
           <div className="meUp">
        <img src={b3d} id="me"/>
          <span  >M</span><span >O</span><span >H</span><span >A</span><span >M</span><span >M</span>
          <span >A</span><span >D &nbsp;</span> 
         
          <span >I</span><span >S</span><span >M</span><span >A</span><span >E</span>
          <span >E</span><span >L</span>
          </div>
          <div className="meDown">
            <p className="wise">  Full-Stack Web Developer , Coding is all my Life <Heart color="green"/> </p>
           
          </div>
         </div>
    )
}
export default Myself;