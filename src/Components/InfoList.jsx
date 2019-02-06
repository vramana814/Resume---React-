import React, { Component } from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap';

export default class InfoList extends Component {
     
  render() { 
    const { heading, list} = this.props
    return ( 
        <div id="Experience">
            <h4>{heading}</h4>
            <ListGroup>
                {list.map((i)=><ListGroupItem key={i}>{i}</ListGroupItem>)}
            </ListGroup> 
        </div> 
    )
  }
}
