import { Link } from 'react-router-dom'
import React from 'react'
import classes from './MainNavigation.module.css'
import { useContext } from 'react'
import FavoritesContext from './Favorites-context'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown} from 'react-bootstrap'
const MainNavigation = () => {
  const favCtx=useContext(FavoritesContext);
  return (
    <Navbar className={classes.header} expand="lg" sticky='top'>
        <Navbar.Brand color="light"><h1>Ghoomne Chalo</h1></Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
            <Nav>
                
                <Nav.Link><Link to ="/">All Destinations</Link></Nav.Link>
                <Nav.Link><Link to ="/new">Add New Destinations</Link></Nav.Link>
                <Nav.Link><Link to ="/fav">Fav Destinations 
                      <span className={classes.badge}>{favCtx.totalFavorites}</span>
                </Link></Nav.Link>
                    
                
            </Nav>
            </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavigation