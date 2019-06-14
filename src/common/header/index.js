import React ,{Component}from 'react';
import { CSSTransition } from 'react-transition-group';
import {HeaderWrapper,SearchInfoList,SearchInfoItem,SearchInfoSwitch,SearchInfoTitle,SearchInfo,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style';
import {connect} from 'react-redux';
import {actionCreactors} from './store';
import {createAction} from '../../pages/login/store'
import {Link} from 'react-router-dom';
// import header from 
//控制热门搜索模块是否出现
class Header extends Component{
    getListArea(){
        const {totalPage,fouced,mouseIn,list,handelChangePage,page,handelMouseEnter,handelMouseLeave}=this.props;
        const jsList=list.toJS();//因为list是immutable类型所以无法当作正常数组用下标取值，toJS
                const PageList=[];
        for(let i=page*10;i<(page+1)*10;i++){
            PageList.push(
                <SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>
            )
        }
        if(fouced || mouseIn){
            return(
                <SearchInfo onMouseEnter={handelMouseEnter}
                onMouseLeave={handelMouseLeave}>
                <SearchInfoTitle>热门搜索
                <SearchInfoSwitch
                onClick={()=>{handelChangePage(page,totalPage,this.spinIcon)}}
                >
                 <span  ref={(icon)=>{this.spinIcon=icon}}className="iconfont spin ">&#xe858;</span>
                 换一换</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    { PageList }
                   
                </SearchInfoList>
                
            </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render(){
        return(
        
            <HeaderWrapper>
              <Link to='/'>  <Logo /></Link>
          
            <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            {this.props.login? <NavItem className="right" onClick={this.props.LoginOut}>退出</NavItem>
            :<Link to='/login'><NavItem className="right">登录</NavItem></Link>}
            
            <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
            <SearchWrapper>
            <CSSTransition
            timeout={200}
            in={this.props.fouced}
            classNames="slide"
            > 
            <NavSearch 
            className={this.props.fouced? 'fouced' : ''}
            onFocus={()=>{this.props.handelFocus(this.props.list)}}
            onBlur={this.props.handelBlur}
            ></NavSearch>
             </CSSTransition>
            <span className={this.props.fouced? 'fouced iconfont zoom' : 'iconfont zoom'}>&#xe623;</span>
            {this.getListArea()}
            </SearchWrapper>
            </Nav>
            <Addition>
            <Button className='writting'>
            <span className="iconfont">&#xe608;</span>
            写文章</Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
        );          
    }
}
const mapStateToProps=(state)=>{
    //能获取到state仓库里的数据
return {
   fouced: state.get('header').get('fouced'),
   list:state.getIn(['header','list']),
   page:state.getIn(['header','page']),
   mouseIn:state.getIn(['header','mouseIn']),
   totalPage:state.getIn(['header','totalPage']),
   login:state.getIn(['login','login'])
}

}
const mapDispatchToProps=(dispatch)=>{
return{

handelBlur(){
    dispatch(actionCreactors.searchBlur());
},
handelFocus(list){
    if(list.size===0){   dispatch(actionCreactors.getList());}
    dispatch(actionCreactors.searchFocus());
  
},
handelMouseEnter(){
    dispatch(actionCreactors.mounceEnter())
},
handelMouseLeave(){
    dispatch(actionCreactors.mounceLeave())
},
handelChangePage(page,totalPage,spin){
    let totate=spin.style.transform.replace(/[^0-9]/ig,'');
  if(totate){
        totate=parseInt(totate,10);
    }
    else{
        totate=0;
    }
    spin.style.transform='rotate('+(totate+360)+'deg';
    if(page<totalPage-1){
        dispatch(actionCreactors.changePage(page+1))
    }else{
        dispatch(actionCreactors.changePage(0))
    }
},
LoginOut(){
    dispatch(createAction.loginOut())
}
}
}
export default connect( mapStateToProps, mapDispatchToProps)(Header);
