import React from 'react'
import {useState} from 'react'
import {jsImages} from './images'
import show from '../../images/show.png'
import Youtube from '../../images/youtube.png'
import Github from '../../images/github.png'
import {VidELement} from './vidElement'
import {Album} from './album'
import lampon from '../../images/lampON.png'
import lampoff from '../../images/lampOFF.png'
interface iprops{gate1:string,gate2:string}
export const JS =(props:iprops) =>{
    let [changingImage,setChangeingImage]=useState(false)
    let [wait,setWait]=useState(false)
    let [bigImg,setBigImg]=useState(false)
    let [pointsList,setPointsList]=useState<number[]>([])
    let [youtubeLink,setYoutubeLink] =useState("https://www.youtube.com/watch?v=EgkGIr8t3r4")
    let [vidSrc,setVidSrc] =useState("https://www.youtube.com/embed/EgkGIr8t3r4")
    let [githubLink,setGithubLink]=useState("https://github.com/ab3adel/ts-React-Node-website")
    let [showImg,setShowImg]=useState(true)
    let [dontReturn,setDontReturn]=useState(false)
    let [touchList,setTouchList] =useState<number[]>([])
    let [subject,setSubject]=useState(jsImages)
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
              
                 let img1=document.getElementById('albumItem9') as HTMLImageElement
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
                 let img1=document.getElementById('albumItem9') as HTMLImageElement
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
       
        const resizeImage =(e:React.MouseEvent|React.TouchEvent)=>{
          setBigImg(!bigImg)
          let img =e.target as HTMLImageElement
          if (bigImg){
        
            if (window.screen.width > 400)
            {
              img.style.width="90vw";
             img.style.height="90vh"
           }
       else {
         img.style.width="98vw";
         img.style.height="90vh"
       }    
              }
          else {
  
            img.style.width="200px";
            img.style.height="200px"
          }
        }  
        const showDetail=(e:React.TouchEvent)=>{
          let target =e.currentTarget as HTMLDivElement
          let title =target.getElementsByClassName('descriptionTitle')[0] as HTMLHeadingElement
          let description =target.getElementsByTagName('p')[0] as HTMLParagraphElement
          let arrow =target.firstElementChild as HTMLImageElement
          arrow.style.animationName='showImg'
          setTimeout(()=>{
            title.style.fontSize='small'
            description.style.fontSize='small'
            arrow.style.transform='rotateZ(90deg)'
          },300)
          
        }

        const sideBtnPulling =(e:React.TouchEvent | React.MouseEvent)=>{
  
          if (e.type==='touchmove' && e.cancelable){
            e.preventDefault()
            e.stopPropagation()
            
          }
          let parent =(e.currentTarget as HTMLElement ).parentElement as HTMLDivElement
          let nextelment=parent.nextElementSibling as HTMLDivElement
        
          
             let grandFather =parent.parentElement as HTMLDivElement
            
         let lamp =e.currentTarget as HTMLImageElement;
         lamp.setAttribute('src',lampoff )
         grandFather.style.filter="brightness(0)"
         setTimeout(()=>{
          grandFather.style.filter="brightness(1)"
          lamp.setAttribute('src',lampon )
         },600)
         setTimeout(()=>{
            if (showImg === true){
             setShowImg(false)
          
           }
           if (showImg === false){
              setShowImg(true)
              
           }
             },1050)  
          
          }
        
    return(
      
          <div className="section" >
              <div className="gate">
            <img src={props.gate1} className="gate1"/>
            <img src={props.gate2} className="gate2"/>
            </div>
            <div className="container" >
               
            <div className="description" onTouchStart={showDetail}>
            <img className="showImg" src={show}/>
                     <h2 className="descriptionTitle">
                           Express/node-React-Ts project
                     </h2>
                      <p>
                       techniques : Typescript ,D3 library,MongoDb,Graphql,Css3,Html5,webpack4
                      </p>
                   </div>
              <div className="curtain">
                     <span className="flag">{showImg? "Video":"Images"}</span>
                     <img src={lampon} onTouchStart={sideBtnPulling} onClick={sideBtnPulling} className="sideBtnImg"/>
                     </div>
                  { showImg ?
                  <Album subject={subject}/>
                  :
                <VidELement 
                  youtubeLink={youtubeLink} 
                  Youtube={Youtube}
                  githubLink={githubLink}
                  Github={Github}
                  vidSrc={vidSrc}/>}
           
            </div>
           </div>
      
      
    )
}
