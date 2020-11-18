import React, {Component} from 'react';
import { getUser, getUsers, signUpUser } from '../Utils/HttpUtils';
import {loginSuccess, loginFailed} from '../ReduxActions/Actions';
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
      loginSuccess: value => dispatch(loginSuccess(value))
    };
  }

class SignUpServiceComp extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false,
            user: null,
        }
        this.setState({
            isLoggedIn : false,
            user: null,
        });
        this.handleLogInStatusChange = this.handleLogInStatusChange.bind(this);
    }

    handleLogInStatusChange (data){
        this.setState({
            isLoggedIn: data
        });
        this.props.loginSuccess(data);
        // this.setState({ title: "" });
    }

    async getAllUsers (){
        let result = await getUsers();
        console.log(result);
    }

    // async componentDidMount(){
    //     await this.getAllUsers();
    // }
    
    async signUpUser(data){
        let result = await signUpUser(data);
        let isFailed = false;
        console.log(result);
        if (result.data && result.data.id > -1){
            this.handleLogInStatusChange(true);
            return result.data;
        }
        this.handleLogInStatusChange(false);
        return isFailed;
    }
    
}

const SignUpService = connect(
    null,
    mapDispatchToProps
  )(SignUpServiceComp);
  
export default SignUpService;