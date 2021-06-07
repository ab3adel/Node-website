import React,{useEffect, useState} from 'react'
interface iprops {subject:string[]}
export const Album =(props:iprops)=>{
    let [doubleTouch,setDoubleTouch]=useState(0)
    let [allowTouchend,setAllowTouchend]=useState(true)
    let [changingImage,setChangeingImage]=useState(false)
     let [wait,setWait]=useState(false)
     let [pointsList,setPointsList]=useState<number[]>([])
    let [visible , setVisible] =useState(true)
   
    const changeImage= (e:React.MouseEvent |React.TouchEvent )=>{
        let right:number[]=[];
        let items=[];
        let imgs=[]
       if (e.type === 'touchmove') {
         setChangeingImage(true)
         setAllowTouchend(false)
       }
        if (wait) {
          setTimeout(()=>{
            setWait(false)
          },300)
        }
          if (changingImage && !wait  ){
              if (e.type === 'mousemove'){
                 pointsList.push((e as React.MouseEvent).clientX)
                }
                else{
                  pointsList.push((e as React.TouchEvent).touches[0].clientX)
                }
                 if (pointsList.length===5 && e.type === 'mousemove'){
                   let img1=document.getElementById('albumItem') as HTMLImageElement
                   let imgSrc1=img1.getAttribute('src') as string
                   let imgGroup=img1.nextElementSibling as HTMLDivElement
                   let imagesGroupChildren = imgGroup.children
                    for (let i=0;i<imagesGroupChildren.length;i++){
                     items.push(imagesGroupChildren.item(i))
                    }
                  console.log(items,img1)
                   while (true) {
                     if (items[items.length-1]?.nextElementSibling && ( items[items.length-1]?.nextElementSibling as HTMLImageElement).getAttribute('src') ) {
                       items.push(items[items.length-1]?.nextElementSibling)
                     }
                     else {
                       break
                     }
                   }
                  for (let i=0;i<items.length ;i++){
                    if (items[i] && items[i]?.hasAttribute('src')){
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
                   if (pointsList.length >=10 && e.type=== 'touchmove'){
                
                    let img1=document.getElementById('albumItem') as HTMLImageElement
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
                    for (let i=0;i<pointsList.length-1;i++){
                     if( pointsList[i]<pointsList[i+1]){
                         right.push(1)
                     }
                    }
                    if(right.length>=5){
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
                setAllowTouchend(true)
        }
        const activateChange =(e:React.MouseEvent)=>{
      
          e.preventDefault()
          setChangeingImage(true)
        }
        const deactivateChange =(e:React.MouseEvent)=>{
          e.preventDefault()
          setChangeingImage(false)
      
        }
       
     const cancelDefault=(e:React.TouchEvent)=>{
      e.preventDefault()

     }
    useEffect(()=>{
     let Image=document.querySelector('#albumItem') as HTMLImageElement
     
  
  if(!Image.complete) {
    setVisible(false)
  }

        Image?.addEventListener('load',()=>{
          setVisible(true)
        })
      
    },[])
    return (
        <div className="album" 
                   onMouseMove={changeImage} 
                   onMouseLeave={deactivateChange} >
        { visible?<React.Fragment>
                    <img id="albumItem" src={props.subject[0]} 
                       onMouseEnter={activateChange}
                       onTouchMove={changeImage}
                       onTouchEnd={cancelDefault}
                      
                      ></img>
                    <div className="imagesGroup">
                    { props.subject.map((ele:string,index:number)=>{
                     if (index >1){
                       return  <img className="albumItem" key={index} src={ele} />
                    }
                   })}
                    </div>
                    </React.Fragment>:<div className="smallGrid">
                                    <h3 className="waitingLabel">just a moment please,it's loading !!</h3>
                                   <div className="waiting"></div>
                                   </div>
                    }
                   
                   </div>
    )
}
