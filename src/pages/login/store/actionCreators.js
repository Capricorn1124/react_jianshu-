import * as actionTypes from'./actionTypes';
import axios from 'axios';

 const loginIn=()=>({
    type:actionTypes.CHANGE_LOGIN,
    login:true
});
export const loginOut=()=>({
    type:actionTypes.LOGIN_OUT,
    login:false
})

export const change=(account,pass)=>{
    return (dispatch)=>{
        axios.post('/api/login.json?account='+account+'&password='+pass);
        dispatch(loginIn());
    }
}