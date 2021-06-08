import React, { cloneElement, useEffect, useState } from 'react'
import Youtube from '../../images/youtube.png'
import Github from '../../images/github.png'
import show from '../../images/show.png'
import {pcImages,pythonImages} from './images'
import {VidELement} from './vidElement'
import {Album} from './album'
import lampon from '../../images/lampON.png'
import lampoff from '../../images/lampOFF.png'
interface iprops{gate1:string,gate2:string}
export const Python=(props:iprops) =>{   
    let [subjectTitle,setSubjectTitle]=useState('Django-React site')
    let [subjectBody,setSubjectBody]=useState('techniques used: JavaScript,Html5,Css3,Bootstrap4,jquery,D3,django REST framework,MySQL')
    let [vidSrc,setVidSrc]=useState("https://www.youtube.com/embed/KckmYVCYkL4")
     let [youtubeLink,setYoutubeLink]=useState('https://www.youtube.com/watch?v=KckmYVCYkL4')
     let [githubLink,setGitHubLink]=useState('https://github.com/ab3adel/React_Django')
    let [subject,setSubject] =useState(pythonImages)
    let [showImg,setShowImg]=useState(true)
    let [mobileView,setMobileView]=useState(false)

     const switching =(e:React.MouseEvent|React.TouchEvent)=>{
  
      let btn = e.currentTarget as HTMLButtonElement
  
 
      
      if (btn.innerText === 'web') {
        let nxtBtn =btn.nextElementSibling as HTMLButtonElement
       
     
      btn.insertAdjacentElement('beforebegin',nxtBtn)
      btn.innerText='pc'
      nxtBtn.innerText='web'
      setSubject(pcImages)
      setSubjectTitle('Accountatn app ')
      setSubjectBody('full functional accountant app build with pure python using Qt library ,MySQL database')
      setYoutubeLink('https://www.youtube.com/watch?v=JzVG9PiVHUw')
      setGitHubLink ('https://github.com/ab3adel/accountant-Python')
      setVidSrc("https://www.youtube.com/embed/JzVG9PiVHUw")
     }
     else {
      let nxtBtn =btn.previousElementSibling as HTMLButtonElement
      btn.insertAdjacentElement('afterend',nxtBtn)
      btn.innerText='web'
      nxtBtn.innerText='pc'
      setSubject(pythonImages)
      setSubjectTitle('Django-React site')
      setSubjectBody('techniques used: JavaScript,Html5,Css3,Bootstrap4,jquery,D3,django REST framework,MySQL')
      setYoutubeLink('https://www.youtube.com/watch?v=KckmYVCYkL4')
      setVidSrc("https://www.youtube.com/embed/KckmYVCYkL4")
      setGitHubLink ('https://github.com/ab3adel/React_Django')
     }
    }
    const showDetail=(e:React.TouchEvent |React.MouseEvent)=>{
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
    
    useEffect(()=>{
      if (window.screen.width < 400){
       setMobileView(true)
      }
     

    },[])

    return(
            <div className="section" >
              <div className="gate">
            <img src={props.gate1} className="gate1"/>
            <img src={props.gate2} className="gate2"/>
            </div>
            <div className="container" >
           
              
                   <div className="description" onTouchStart={showDetail}>
                     <img className="showImg" src={show}/>
                     <div className="slideBtn">
                     <button className="switchBtn" onClick={switching} >web</button>
                     <button disabled className="placeholderBtn">pc</button>
                     </div> 
                     
                     <h2 className="descriptionTitle">
                           {subjectTitle}
                     </h2>
                      <p>
                      {subjectBody}
                      </p>
                   </div>
                 <div className="curtain">
                     <span className="flag">{showImg? "Video" : "Images"}</span>
                    
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
