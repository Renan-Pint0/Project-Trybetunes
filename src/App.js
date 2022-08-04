import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <p>TrybeTunes </p>
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
        <Route path="/search" component={ Search } />
        <Route path="/album" component={ Album } />
        <Route path="/favorites" component={ Favorites } />
        <Route path="/profile" component={ Profile } />
        <Route path="/profile/edit" component={ ProfileEdit } />
        <Route path={ undefined } component={ NotFound } />
      </BrowserRouter>
    );
  }
}

export default App;
