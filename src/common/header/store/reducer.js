import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable'
const defaultState=fromJS({
    fouced:false,
    mouseIn:false,
    list:[],
    page:0,
    totalPage:1
}); 
export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.SEARCH_FOCUS:
        return state.set("fouced",true);
        case actionTypes.SEARCH_BlUR:
        return state.set("fouced",false);
        case actionTypes.CHANGE_LIST:
        return state.set("list",action.data).set('totalPage',action.totalPage);
        case actionTypes.MOUSE_ENTER:
        return state.set("mouseIn",true);
        case actionTypes.MOUSE_LEAVE:
        return state.set("mouseIn",false);
        case actionTypes.CHANGE_PAGE:
        return state.set("page",action.page);
        default:  return state;

    }
   
  
}