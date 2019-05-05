import React, { Component } from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import Header from './shared/Header';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import RentalList from './components/rental/rental-listing/RentalList';
import RentalDetail from './components/rental/rental-detail/RentalDetail';
import Login from './components/login/login'; 
import Register from './components/register/register';
import { ProtectedRoute } from './shared/auth/ProtectedRoute'

const store  = require('./reducers').initApplicationStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <div className='container'>
            <Route exact path="/" component={() => <Redirect to='/rentals' />} />
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/register"component={Register} />
            <ProtectedRoute exact path="/rentals" component={RentalList} />
            <ProtectedRoute exact path="/rental/:id" component={RentalDetail} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
