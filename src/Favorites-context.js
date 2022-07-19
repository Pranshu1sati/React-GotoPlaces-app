import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';
const Favoritescontext = createContext({
    favorites:[],
    totalFavorites:0,
    addFavorite :(favoriteMeetup)=>{},
    removeFavorite:(meetupId)=>{},
    itemIsFavorite: (meetupId)=>{},
});


export const FavoritesContextProvider = (props) => {
    const [userFavorites, setUserFavorites]=useState([])
    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites)=> {return prevUserFavorites.concat(favoriteMeetup)
        });
    }
    function removeFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorites =>{
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }
    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId)
    }
    const context={
        favorites:userFavorites,
        totalFavorites:userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };
  return (
    <Favoritescontext.Provider value={context}>
        {props.children}
    </Favoritescontext.Provider>
  )
}


export default Favoritescontext;