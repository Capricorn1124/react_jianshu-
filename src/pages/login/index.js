import React, { Component } from 'react';
import {connect} from 'react-redux';
import {LoginWrapper,LoginBox,Input,Button} from './style';
import { Redirect } from 'react-router-dom';
import {createAction} from './store'

class Login extends Component{
       
        render(){
            const { login }=this.props;
         if(!login){
            return(
                <LoginWrapper>
					<LoginBox>
						<Input placeholder='账号' ref={(input) => {this.account = input}}/>
						<Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
						<Button onClick={() => this.props.loginIn(this.account, this.password)}>登陆</Button>
					</LoginBox>
				</LoginWrapper>
            )
         }else{
             return <Redirect to='/'/>
         }
        }
}

const mapState=(state)=>({
login:state.getIn(['login','login'])

});
const mapDispatch=(dispatch)=>({
    loginIn(account,password){
        console.log(account.value)
        dispatch(createAction.change(account,password))
    }
})
export default connect(mapState,mapDispatch)(Login);