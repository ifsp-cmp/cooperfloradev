import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import './ListarUsuarios.css';

class ListarUsuarios extends Component{

    componentDidMount(){
        // console.log("cheguei no didmount");
        this.props.onGetUsers();
    }

    render(){
        // console.log(this.props.users);
        let listUsers = null;
        let users = null;
        // let users = [
        //     {name: "Vera", phone: "999999999"},
        //     {name: "Vera", phone: "999999999"}
        // ];
        if(this.props.users){ users = this.props.users};
        console.log("Propsusers", this.props.users);
        console.log("Users", users);
        if(this.props.users){
            listUsers = (
                <div>
                    {users.map(user => {
                        return (<p
                            className={"teste"}
                            key={user.nome}
                            type={"text"}
                            placeholder={"Digite"}
                            >{user.name} - {user.phone}</p>)
                    })}
                </div>
            );
        }
        return(
            <div>
                {Spinner}
                {listUsers}
            </div>
        );
    };
}

const mapStateToProps = state => {
	return {
		users: state.users,
        error: state.error
	};
}

const mapDispatchToProps = dispatch => {
	return{
		onGetUsers: () => dispatch(userActions.getUsers())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListarUsuarios);