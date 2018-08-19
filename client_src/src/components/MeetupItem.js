import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MeetupItem extends Component {
    constructor(props){
      super(props);
      this.state = {
        item: props.item
      }
    }
  render(){
    const { item } = this.state;
    return (
      <li className="collection-item">
        <Link to={`/meetups/${item.id}`}>
        {item.name}
      </Link>
      </li>
    )
  }
}

export default MeetupItem;
