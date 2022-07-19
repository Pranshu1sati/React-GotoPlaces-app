import React from 'react'
import {useRef} from 'react'
import classes from './NewMeetupfrom.module.css'
import Card from './Card'
const NewMeetupform = (props) => {
    const titleInpuRef = useRef();  
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    function submitHandler(event){
        event.preventDefault();
        const enteredTitle= titleInpuRef.current.value
        const enteredImage= imageInputRef.current.value
        const enteredAddress=addressInputRef.current.value
        const enteredDescription=descriptionInputRef.current.value
        const meetupData ={
            title:enteredTitle,
            image:enteredImage,
            address:enteredAddress,
            description:enteredDescription,
        };
        props.onAddMeetup(meetupData)
}

  return (
    <Card>
        <form classname={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title' >Destination title</label>
                <input type='text' id='titel' ref={titleInpuRef} required></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='image' >Destination Image</label>
                <input type='url' id='image' required ref={imageInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='address' >Destination address</label>
                <input type='text' id='address' required ref={addressInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='description' >Description</label>
                <textarea type='text' id='description' required rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>
                    Add Destination
                </button>
            </div>
        </form>
    </Card>
  )
}

export default NewMeetupform