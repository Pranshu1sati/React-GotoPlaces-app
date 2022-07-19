
import './App.css';
import Allmeetups from './Allmeetups';
import NewMeetups from './NewMeetups';
import Favorites from './Favorites';

import Layout from './Layout';
import {  Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Layout>
      <Routes>
      <Route path='/' element={<Allmeetups/>}/>
      <Route path='/new' element={<NewMeetups></NewMeetups>}></Route>
      <Route path='/fav' element={<Favorites/>}></Route>
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
