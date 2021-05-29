import ReactDOM from 'react-dom'
import App from '../src/comp/app'
import {BrowserRouter as Router} from 'react-router-dom'
import '../src/css/main.css'
import '../src/css/projects.css'
declare var isBrowser:boolean;
let method = isBrowser ?  ReactDOM.render : ReactDOM.hydrate
method(<Router><App/></Router>,document.getElementById('root'))


