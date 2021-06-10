import React from 'react'
import img from '../../images/c#.png'
import * as d3 from 'd3'
import {useState,useEffect} from 'react'
import gate1 from '../../images/cs1.png'
import gate2 from '../../images/cs2.png'
export const CS =() =>{
  
    let [loaded,setLoaded]=useState(false)
   
     const imgLoaded=()=>{
      setLoaded(true)
      document.querySelector('#detector')?.remove()
     }

    return(
        
          <React.Fragment>
              <img src={gate1} onLoad={imgLoaded} id="detector" style={{"display":"none"}}/>
            {loaded?
             <div className="sectioncs">
              <div className="csGate">
               <p className="popUp">soon !!</p>
            <img src={gate1} className="csGate1"/>
            <img src={gate2} className="csGate2"/>
        
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
