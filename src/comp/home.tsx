import React ,{HtmlHTMLAttributes, SourceHTMLAttributes, useEffect, useState} from 'react'
import * as d3 from 'd3'
import {CS} from './projects/cs'
import {JS} from './projects/js'
import {Python} from './projects/python'

export const Home =()=>{

   const openGate= ()=>{
  
    let pySection = document.querySelector('.sectionpy')
    let jsSection = document.querySelector('.sectionjs')
    let csSection = document.querySelector('.sectioncs')
    let target;
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

           let text =csSection?.getElementsByClassName('popUp')[0] as HTMLParagraphElement
           text.style.animationName="inward"
           setTimeout(()=>{
               text.style.display="none"
           },1800)
          }
     else if (i===0) {
       if (pySection){
       target =pySection as HTMLDivElement
      }
       }
      else {
        if (pySection){
          target =jsSection as HTMLDivElement
         }
      }
 
       let part1=target?.querySelector('.gate1')
       let part2 = target?.querySelector('.gate2')

       if (part1 && part2){
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
        
        window.scrollTo({
          top:0,
          behavior:"auto"
        })
       
     
        window.addEventListener('scroll', openGate)
      },[])
    return (
    <div className="body">

    <Python />
    <JS/>
    <CS />
   
   </div> )
}