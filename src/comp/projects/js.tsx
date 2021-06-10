import React, { useEffect } from 'react'
import {useState} from 'react'

import {jsImages} from './images'
import show from '../../images/show.png'
import Youtube from '../../images/youtube.png'
import Github from '../../images/github.png'
import {VidELement} from './vidElement'
import {Album} from './album'
import lampon from '../../images/lampON.png'
import lampoff from '../../images/lampOFF.png'
import gate1 from '../../images/js1.png'
import gate2 from '../../images/js2.png'
import { query } from 'express'

export const JS =() =>{
   
    let [youtubeLink,setYoutubeLink] =useState("https://www.youtube.com/watch?v=EgkGIr8t3r4")
    let [vidSrc,setVidSrc] =useState("https://www.youtube.com/embed/EgkGIr8t3r4")
    let [githubLink,setGithubLink]=useState("https://github.com/ab3adel/ts-React-Node-website")
    let [showImg,setShowImg]=useState(true)
    let [subject,setSubject]=useState(jsImages)
    let [loaded,setLoaded]=useState(false)
          
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
        
   
          const imgLoaded=()=>{
            setLoaded(true)
            console.log(document.querySelector('#detector'))
            document.querySelector('#detector')?.remove()
           }
      
        
    return(
      <React.Fragment>
          <img src={gate1} onLoad={imgLoaded} id="detector" style={{"display":"none"}}/>
          {loaded? 
            <div className="sectionjs" >
              <div className="gate">
            <img src={gate1} className="gate1"/>
            <img src={gate2} className="gate2"/>
            </div>
            <div className="container" >
               
            <div className="description" onTouchStart={showDetail}>
            <img className="showImg" src={show}/>
                     <h2 className="descriptionTitle">
                           Express/node-React-Ts project
                     </h2>
                      <p>
                       The used techniques : Typescript ,D3 library,MongoDb,Graphql,Css3,Html5,webpack4
                      </p>
                   </div>
              <div className="curtain">
                     <span className="flag">{!showImg? "Video" : "Images"}</span>
                     <img src={lampon} onTouchStart={sideBtnPulling} onClick={sideBtnPulling} className="sideBtnImg"/>
                     </div>
                  { !showImg ?
                   <Album subject={subject}/>
                  :
                  <VidELement 
                  youtubeLink={youtubeLink} 
                  Youtube={Youtube}
                  githubLink={githubLink}
                  Github={Github}
                  vidSrc={vidSrc}/>}
           
            </div>
           </div>:
           <div className="noScroll">
           <span></span>
           <span></span>
           <span></span>
         </div>
      }
  </React.Fragment>
    )
}
