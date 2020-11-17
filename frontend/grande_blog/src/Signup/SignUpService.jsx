import React, {Component} from 'react';
import { getUser, getUsers, signUpUser } from '../Utils/HttpUtils';
import SignUp from './SignUp';

export default class SignUpService extends Component{
    
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
        console.log(result);
    }
    
}