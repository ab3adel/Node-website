import React ,{useEffect} from 'react'
import * as d3 from 'd3'
import {CS} from './projects/cs'
import {JS} from './projects/js'
import {Python} from './projects/python'
import gate1 from '../images/python1.png'
import gate2 from '../images/python2.png'
import gate3 from '../images/js1.png'
import gate4 from '../images/js2.png'
import gate5 from '../images/cs1.png'
import gate6 from '../images/cs2.png'
export const Home =()=>{
   const openGate= (e:Event)=>{
      
        let i:number=0;
         if (scrollY >100 && scrollY <400){
          i=0
         }
         else if ( scrollY >490 && scrollY<800){
             i=1
         }
         else if (scrollY > 800){
             i=2
         }
       
          if (i === 2 ){
           let lst = document.getElementsByClassName('section')
           let target =lst.item(i) as HTMLDivElement
           let text =target.getElementsByClassName('popUp')[0] as HTMLParagraphElement
           text.style.animationName="inward"
           setTimeout(()=>{
               text.style.display="none"
           },1800)
          }
       else {
          let lst = document.getElementsByClassName('section')
          let target =lst.item(i) as HTMLDivElement
       let part1=target.getElementsByClassName('gate1')[0]
       let part2 = target.getElementsByClassName('gate2')[0]
       d3.select(part1).transition().style('transform','rotateX(90deg)').ease(d3.easeBounce).duration(2000)
         .transition().style('height','1px').duration(2000).ease(d3.easeBounce).delay(400)
         .style('z-index','0').delay(800)
         .style('display','none')
         d3.select(part2).transition().style('transform','rotateX(-90deg)').ease(d3.easeBounce).duration(2000)
         .transition().style('height','1px').duration(2000).ease(d3.easeBounce).delay(400)
         .style('display','none')
        let gate =part1.parentElement as HTMLDivElement
 
        setTimeout(()=>{
         gate.style.zIndex='0'
         gate.style.display='none'
        },3000)
       }
       
      }
      useEffect(()=>{
        window.addEventListener('scroll',openGate)
      },[])
    return (
    <div className="body">

    <Python gate1={gate1} gate2={gate2}/>
    <JS gate1={gate3} gate2 ={gate4} />
    <CS gate1={gate5} gate2={gate6}/>
   

   </div>)
}
