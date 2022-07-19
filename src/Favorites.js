import React from 'react'
import { useContext} from 'react'
import Favoritescontext from './Favorites-context'
import MeetupList from './MeetupList'
const Favorites = () => {
  const favCtx = useContext(Favoritescontext)
  return (<section>
    <div><h1>Favorites</h1></div>
    <MeetupList meetups={favCtx.favorites}></MeetupList>
    </section>
  )
}

export default Favorites