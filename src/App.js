import React from 'react';
import Homepage from './pages/Homepage/Homepage'

import Bottom from './pages/Bottom/Bottom'

import {Route,Switch} from 'react-router-dom'

import Gallery from './pages/Gallery/Gallery'

import Yaro from './pages/Yaro/Yaro'


import './App.css'
function App() {
  return (
<div >


<Switch>

  {/* <Route exact path="/" component={Homepage}/> */}
  <Route path="/gallery" component={Gallery} />
  <Route exact path="/" component={Yaro}/>
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
