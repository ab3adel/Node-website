
import {I} from '../comp/iam'
import {Home} from '../comp/home'
import {Footer} from '../comp/Footer/footer'
import {About} from '../comp/about'  
import React from 'react' 
 import {Layout} from '../comp/layout/layout'
export const routes =[
    {path:'/i',element:I,name:"who i am"},
    {path:'/about',element:About,name:"About"},
    {path:'/portofolio',element:Home},
    {path:'/',element:Layout},

]