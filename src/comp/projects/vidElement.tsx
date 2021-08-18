import React from 'react'
interface iprops {youtubeLink:string,Youtube:string,githubLink:string,Github:string,vidSrc:string}
export const VidELement =(props:iprops)=>{
const {youtubeLink ,Youtube,githubLink,Github,vidSrc}=props

    return (
        <div className="detailLinks">
                   
        <div className="exLinks">
          watch on YouTube:
        <a href={youtubeLink}> <img className="exLinksImg" src={Youtube} /></a>
        source Code :
        <a href={githubLink}> <img className="exLinksImg" src={Github}/></a>
        </div>
        <iframe className="iframeAttr"
       src={vidSrc} 
       title="YouTube video player" 
       allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
  
</div> 
    )
}