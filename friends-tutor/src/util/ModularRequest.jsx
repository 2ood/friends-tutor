import React from "react";
import axios from 'axios';

import {HOST} from "util/Enums";


class ModularRequest extends React.Component{
    constructor(props) {
    	super(props);
      
      	this.state = {
            host : HOST.address,
            port : HOST.port,
            path : props.path,
          	method : props.method,
            headers : props.headers,
            body : props.body
        };
    }

    async send(){
        try {
            const url = `${this.state.host}:${this.state.port}/${this.state.path}`;
            //const url = `${HOST.address}:${HOTS.port}/${this.props.path}`;
            let response = await axios({
                method : this.state.method,
                url : url,
                headers : this.state.headers,
                data : JSON.stringify(this.state.body)
            }).catch(function (error) {
                return error.response;
            });
            return response;

        } catch (e) {
            console.error("Unknown error occurred in ModularRequest");
        } 
    }
    
    render() {
        return `[${this.props.method}] ${this.props.path}: ${this.props.header} : ${this.props.body}`;
    }
}

export default ModularRequest;