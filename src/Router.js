import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import Home from '../src/home'
import Card from '../src/Components/Card'
import Switch from '../src/switch'



const Router = () =>{
  
return(
<BrowserRouter>
        
        
        <Route exact path="/" component={Home}></Route>
        <Route path="/Card" component={Card}></Route>
        <Route path="/Switch" component={Switch}></Route>

        

</BrowserRouter>

)

}

export default Router;