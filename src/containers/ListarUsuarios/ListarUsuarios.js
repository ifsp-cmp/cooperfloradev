import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../store/actions/index';
import './ListarUsuarios.css';

class ListarUsuarios extends Component{

    componentDidMount(){
        // console.log("cheguei no didmount");
        this.props.onGetUsers();
    }

    render(){
        return(
            <div>
                <p>Nome</p>
                <p>{this.props.name}</p>
            </div>
        );
    };
}

const mapStateToProps = state => {
	return {
		name: state.user.name,
		phone: state.user.phone,
		email: state.user.email,
        password: state.user.password,
        error: state.error
	};
}

const mapDispatchToProps = dispatch => {
	return{
		onGetUsers: () => dispatch(userActions.getUsers())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListarUsuarios);