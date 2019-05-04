import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { Header } from './shared/Header';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import RentalList from './components/rental/RentalList';
import RentalDetail from './components/rental/RentalDetail';

const store  = require('./reducers').initApplicationStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <div className='container'>
            <Route exact path="/" component={() => <Redirect to='/rentals' />} />
            <Route exact path="/rentals" component={RentalList} />
            <Route exact path="/rental/:id" component={RentalDetail} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
