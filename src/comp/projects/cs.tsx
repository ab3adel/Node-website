import React from 'react'
import img from '../../images/c#.png'
import * as d3 from 'd3'
import {useState,useEffect} from 'react'
import gate1 from '../../images/cs1.png'
import gate2 from '../../images/cs2.png'
import Img1 from '../../images/python.png'
import Img2 from '../../images/c#.png'
import Img3 from '../../images/js.png'
import Img4 from '../../images/ts.png'
export const CS:React.FC =() =>{
    let [count,setCount]=useState(0)
    let [changingImage,setChangeingImage]=useState(false)
    let [wait,setWait]=useState(false)
    let [pointsList,setPointsList]=useState<number[]>([])
    const  showDetail=(e:React.MouseEvent| React.TouchEvent)=>{
           setCount(prev=> prev+1)
    
           if (count % 5 ===0){
            let Xpoints= (e as React.MouseEvent).pageX 
            let Ypoints= (e as React.MouseEvent).pageY 
            
            let parent=  d3.select( e.currentTarget as HTMLDivElement)
        
            let element = document.createElement('img') as HTMLElement
          
          
            element.style.left=`${Xpoints}px`;
            element.style.top=`${Ypoints}px`;
            element.setAttribute('class','rain');
            element.setAttribute('src',img);
            document.getElementById('root')?.appendChild(element);
  
            parent.selectChild('div').transition()
             .style('display','block').ease(d3.easeBounce).duration(2000)
           
           setTimeout(()=>{ let collection=  document.getElementsByClassName('rain')
              for (let i=0;i<collection.length;i++){
          (collection.item(i) as HTMLElement).style.display='none';
        }},1000)}
  
        
      }
    
      const changeImage= (e:React.MouseEvent | React.TouchEvent)=>{
        let right:number[]=[];
        let items=[];
        let imgs=[]
        if (wait) {
          setTimeout(()=>{
            setWait(false)
          },300)
        }
          if (changingImage && !wait){
            if (e.type === 'mousemove'){
              pointsList.push((e as React.MouseEvent).clientX)
             }
             else{
               pointsList.push((e as React.TouchEvent).touches[0].clientX)
             }
                
                 if (pointsList.length===5 && e.type === 'mousemove'){
             
                   let img1=document.getElementById('albumItem5') as HTMLImageElement
                   let imgSrc1=img1.getAttribute('src') as string
                   items.push(img1.nextElementSibling as HTMLImageElement)
                   while (true) {
                     if (items[items.length-1]?.nextElementSibling && ( items[items.length-1]?.nextElementSibling as HTMLImageElement).getAttribute('src') ) {
                       items.push(items[items.length-1]?.nextElementSibling)
                     }
                     else {
                       break
                     }
                   }
                  for (let i=0;i<items.length ;i++){
                    if (items[i]){
                      imgs.push(items[i]?.getAttribute('src') as string)
                    }
                  
                  }
                   for (let i=0;i<4;i++){
                    if( pointsList[i]<pointsList[i+1]){
                        right.push(1)
                    }
                   }
                   if(right.length>=3){
                    img1?.setAttribute('src',imgs[0] as string)
                    items[items.length-1]?.setAttribute('src',imgSrc1)
                    for (let i=0;i<items.length -1;i++){
                      items[i]?.setAttribute('src',imgs[i+1])
                        
                    }
                   
                     right=[]
                   }
                   else{
                    img1?.setAttribute('src', imgs[imgs.length -1])
                    items[0]?.setAttribute('src',imgSrc1)
                    for (let i=items.length -1;i>0;i--){
                      items[i]?.setAttribute('src',imgs[i-1])
                        
                    }
                   
                    right=[]
                   }
                   setPointsList([])
                   setWait(true)
                   setChangeingImage(false)
                 }
                 else {
                  if (pointsList.length >=3 && e.type=== 'touchmove'){
                   let img1=document.getElementById('albumItem5') as HTMLImageElement
                   let imgSrc1=img1.getAttribute('src') as string
                   let imagesGroup=img1.nextElementSibling as HTMLDivElement
                   
                   let imagesGroupChildren = imagesGroup.children
                   for (let i=0;i<imagesGroupChildren.length;i++){
                    items.push(imagesGroupChildren.item(i))
                   }
                 
                   while (true) {
                     if (items[items.length-1]?.nextElementSibling && ( items[items.length-1]?.nextElementSibling as HTMLImageElement).getAttribute('src') ) {
                       items.   push(items[items.length-1]?.nextElementSibling)
                     }
                     else {
                       break
                     }
                   }
                  for (let i=0;i<items.length ;i++){
                    if (items[i]){
                      imgs.push(items[i]?.getAttribute('src') as string)
                    }
                  
                  }
                   for (let i=0;i<4;i++){
                    if( pointsList[i]<pointsList[i+1]){
                        right.push(1)
                    }
                   }
                   if(right.length>=2){
                    img1?.setAttribute('src',imgs[0] as string)
                    items[items.length-1]?.setAttribute('src',imgSrc1)
                    for (let i=0;i<items.length -1;i++){
                      items[i]?.setAttribute('src',imgs[i+1])
                        
                    }
                   
                     right=[]
                   }
                   else{
                    img1?.setAttribute('src', imgs[imgs.length -1])
                    items[0]?.setAttribute('src',imgSrc1)
                    for (let i=items.length -1;i>0;i--){
                      items[i]?.setAttribute('src',imgs[i-1])
                        
                    }
                   
                    right=[]
                   }
                   setPointsList([])
                   setWait(true)
                   setChangeingImage(false)
 
                  }
 
                }
               
          }
  
               
        }
        const activateChange =(e:React.MouseEvent)=>{
         
          e.preventDefault()
          setChangeingImage(true)
        }
        const deactivateChange =(e:React.MouseEvent)=>{
          e.preventDefault()
          setChangeingImage(false)
      
        }
        
     

    return(
        
          <div className="section" >
                 <p className="popUp">soon !!</p>
              <div className="csGate">
         
            <img src={gate1} className="csGate1"/>
            <img src={gate2} className="csGate2"/>
        
            </div>
           
          
            </div>
    )
}