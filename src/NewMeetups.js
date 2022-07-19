import React from 'react'
import NewMeetupform from './NewMeetupform'
import { useNavigate } from 'react-router-dom';
const NewMeetups = () => {
  const history = useNavigate();
  function addMeetupHandeler(meetupData){
    fetch('https://react-meetuplist-default-rtdb.firebaseio.com/meetups.json',{
      method:'POST',
      body: JSON.stringify(meetupData),
      headers:{
        'Content-Type':'application/json',
      }
    }
    ).then(()=>{history('/',{replace:true});});
  }
  return (
    <section>
      <h1>Add new Destination</h1>
      <NewMeetupform onAddMeetup={addMeetupHandeler}/>
    </section>
  )
}

export default NewMeetups