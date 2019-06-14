import {createStore,compose,applyMiddleware} from 'redux';
//创建store的时候被使用
import thunk from 'redux-thunk';
import reducer from './reducer';


const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store =createStore(reducer,composeEnhancers(applyMiddleware(thunk)));
export default store;