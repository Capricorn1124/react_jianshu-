import React, { Component} from 'react';
import Header from './common/header/index';
import  {GlobalStyle} from './style.js';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login'
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
      
          <BrowserRouter>
          <div>
          <Header/>  
            {/* router 是一个个的路由规则*/}
          <Route path='/' exact component ={ Home } ></Route>
          <Route path='/detail/:1' exact component={Detail}></Route>
          <Route path='/login' exact component ={Login} ></Route>
          
          </div>
         </BrowserRouter>
      </Provider>
   
       );
  }
}

export default App;
