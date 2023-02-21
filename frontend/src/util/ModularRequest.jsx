import React from "react";
import axios from 'axios';

import {HOST} from "./Enums";


class ModularRequest extends React.Component{
    constructor(props) {
    	super(props);
      
      	this.state = {
            host : props.host?props.host:HOST.address,
            path : props.path,
          	method : props.method,
            headers : props.headers,
            body : props.body
        };
    }

    async send(){
        try {
            const url = `${this.props.address?this.props.address:HOST.address}/${this.props.path}`;
            //const url = `${HOST.address}:${HOTS.port}/${this.props.path}`;
            let response = await axios({
                method : this.props.method,
                url : url,
                headers : this.props.headers,
                data : this.props.body
            });
            
            return response.data; 
        } catch (e) {
            console.error("error occured in modularRequest"); 
            console.error(e.name);
            console.error(e.message); 
        } 
    }
    
    render() {
        return `[${this.props.method}] ${this.props.path}: ${this.props.header} : ${this.props.body}`;
    }
}

export default ModularRequest;