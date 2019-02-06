import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./Profile"; 

import ContactDetails from "./ContactDetails";
import Section4 from './Section4';
import InfoList from './InfoList';
export default class Main extends React.Component{
    //constructor(){

    //}
    render(){
        return (
            <div className="container">

                <h1>My Resume</h1>

                <div id="Header" className="row">
                    <Profile></Profile>
                    <ContactDetails></ContactDetails>
                </div>

                <div id="Footer"  className="row">
                    <div className='col-4 p-3'>
                        <InfoList heading={'Skills'} list={['Siebel','Salesforce','Blockchain','React JS']}></InfoList>
                    </div>
                    <Section4></Section4>
                </div>

                </div>
            
        )    
        
            
        

    }
}