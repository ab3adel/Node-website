import express,{Request,Response} from 'express'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router'
import App from '../src/comp/app'
import fs from  'fs'
import path from 'path'

const home = express()
home.use(express.static(path.resolve('./src/')))
home.use(express.static(path.resolve('./dist/')))
home.use(express.static(path.resolve('./distServer/')))
const Port =process.env.PORT || 9000
home.get('/*',(req:Request,res:Response)=>{
let app =renderToString(<StaticRouter location={req.url} context={{}}><App/></StaticRouter> )
let index = fs.readFileSync(path.resolve(__dirname,'../dist/index.html'),{encoding:'utf-8',flag:'r'})

index.replace("<div id='root'></div>",`<div id='root'>${JSON.stringify(app)}</div>`)
res.status(200).send(index)
})
home.listen({Port,"0.0.0.0"},()=>{
    console.log('connected to B3d')
})
