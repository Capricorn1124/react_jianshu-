import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable';

export const searchBlur=()=>({
   type:actionTypes.SEARCH_BlUR
});
export const searchFocus=()=>({
    type:actionTypes.SEARCH_FOCUS
 });
 const changeList=(data)=>({
    type:actionTypes.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length / 10)

 })
 export const getList=()=>{
    return  (dispatch)=>{
       axios.get('./api/headerList.json').then((res)=>{
         const action=changeList(res.data.data);
         dispatch(action)
       })
      
    }
 }
 export const mounceEnter=()=>({
   type:actionTypes.MOUSE_ENTER
});
export const mounceLeave=()=>({
   type:actionTypes.MOUSE_LEAVE
});
export const changePage=(page)=>({
   type:actionTypes.CHANGE_PAGE,
   page
});