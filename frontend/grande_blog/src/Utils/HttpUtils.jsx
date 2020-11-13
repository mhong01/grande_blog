import React, {Component} from 'react';

const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://localhost:8000/',
    // timeout: 1000,
    header: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin' : 'http://localhost:3000'}
});

export async function getUsers(){
    try {
        const response = await instance.get('users/');
        console.log(response);
        return response;
      } catch (error) {
        console.error(error);
      }
}
export async function getUser(userId){
    try {
        const response = await instance.get('users/' + userId);
        console.log(response);
        return response;
      } catch (error) {
        console.error(error);
      }
}
export async function getUserInfo(userInfoPath){
    try {
        const response = await instance.get(userInfoPath);
        console.log(response);
    } catch(error){
        console.error(error);
    }
}


