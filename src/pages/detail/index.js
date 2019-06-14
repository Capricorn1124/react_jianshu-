import React, { Component } from 'react';
import {connect} from 'react-redux';
import {DetailWrapper,Header,Content} from './style';
import {createAction} from './store';
import { withRouter } from 'react-router-dom';

class Detail extends Component{

        render(){
   
            return(
            	<DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content 
					dangerouslySetInnerHTML={{__html: this.props.content}}
				/>
			</DetailWrapper>
            )
        }
        componentDidMount(){
            this.props.getDetail(this.props.match.params[1]);
        }
}

const mapState=(state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])

});
const mapDispatch=(dispatch)=>({
    getDetail(id){
        dispatch(createAction.getDetail(id))
    }
})
export default connect(mapState,mapDispatch)(withRouter(Detail));