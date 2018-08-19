import React, { Component } from 'react';
import axios from 'axios';
import MeetupItem from './MeetupItem';

class Meetups extends Component {
  constructor(props) {
    super(props)

    this.state = {
      meetups: []
    }

  }

  componentWillMount(){
    this.getMeetups();
  }

  getMeetups(){
    axios.get('http://35.237.67.142/api/meetups')
      .then(response => {
        this.setState({meetups: response.data}, () => {
          console.log(this.state)
        });
      })
      .catch(err => console.log(err));
  }

render(){
    const { meetups } = this.state;
    const meetupItems = meetups.map((meetup, i) => {
    return(
      <MeetupItem key={meetup.id} item={meetup} />
    )
    })
    return (
      <div>
        <h1>Meetups</h1>
        <ul className="collection">
          {meetupItems}
        </ul>
      </div>
    );
  }

}

export default Meetups;
