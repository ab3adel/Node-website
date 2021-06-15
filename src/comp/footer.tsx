import React,{useEffect} from 'react'

import  {Link} from 'react-router-dom'

import * as d3 from 'd3'
interface iselect extends Selection {_group:[HTMLElement],_parents:any}
export const Footer =()=>{
    useEffect(()=>{
        animateFooter();
    })
 const animateFooter =()=>{
     let link = document.getElementsByClassName('footerLink')[0] as HTMLDivElement;
     let link1=document.getElementsByClassName('footerLink1')[0] as HTMLDivElement;
      link.style.display="flex";
      link.style.animationName="linkMove";
      link1.style.display="flex";
      link1.style.animationName="linkMove";
 }
 const lighten=(e:React.MouseEvent | React.TouchEvent) =>{
   let target= e.target as HTMLDivElement
   target.classList.add('lightenLink');
 }
 const dtLighten =(e:React.MouseEvent | React.TouchEvent)=>{
    let target= e.target as HTMLDivElement
    target.classList.remove('lightenLink');
 }
return (
    <div id="footer">
                    <div className="footerLink" 
                    onTouchStart={lighten} 
                    onMouseOver={lighten} 
                    onMouseLeave={dtLighten}>
                    <Link onMouseLeave={dtLighten} 
                    onTouchEnd={dtLighten} 
                    to ="/portofolio">Portfolio</Link>
                    </div>
                    <div className="footerLink1" 
                    onTouchStart={lighten} 
                    onMouseOver={lighten} 
                    onMouseLeave={dtLighten} >
                    <Link onMouseLeave={dtLighten} 
                     onTouchEnd={dtLighten}
                      to ="/i">who I am</Link>
                    </div>
                    <div className="footerSocials">
                    
            
                    </div>
                </div>
)

}
