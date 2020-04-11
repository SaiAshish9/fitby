import React from 'react';
import Homepage from './pages/Homepage/Homepage'

import Bottom from './pages/Bottom/Bottom'

import {Route,Switch} from 'react-router-dom'

import './App.css'
function App() {
  return (
<div style={{width: '100%',position: 'absolute',left:0,top:0}}>


<Switch>

  <Route exact path="/" component={Homepage}/>
  <Route  path="/bottom" component={Bottom}/>
  <Route  path="/about" component={Homepage}/>
  <Route  path="/classes" component={Homepage}/>
  <Route  path="/contact" component={Homepage}/>
  <Route  path="/pricing" component={Homepage}/>

</Switch>
</div>


  )
}

export default App;
