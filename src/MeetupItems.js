import React from 'react'
import classes from './MeetupItems.module.css'
import Card from './Card'
import { useContext } from 'react'
import Favoritescontext from './Favorites-context'
const MeetupItems = (props) => {
    const favoritesCtx =  useContext(Favoritescontext);
    const itemIsFavorite =  favoritesCtx.itemIsFavorite(props.id);
    function toggleFavoriteStatusHandler(){
      if(itemIsFavorite){
        favoritesCtx.removeFavorite(props.id)
      }else{
        favoritesCtx.addFavorite({
            id: props.id,
            title: props.title,
            description: props.description,
            image: props.image,
            address: props.address,
        });
      }
    }
  return (
<li className={classes.item}>
    <Card>
    <div className={classes.image}>
        <img src ={props.image} alt={props.title}/>
    </div>
    <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
    </div>
    <div className={classes.actions}>
        <button onClick={toggleFavoriteStatusHandler} >{itemIsFavorite ? 'remove from favorites'  : "To fav"}</button>
    </div>
    </Card>
</li>  )
}

export default MeetupItems