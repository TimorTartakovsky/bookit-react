import React from 'react';
import './App.scss';
import { Header } from './shared/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { RentalList } from './components/rental/RentalList';
import { RentalDetail } from './components/rental/RentalDetail';

function App() {
  return (
    <BrowserRouter>
        <div className='App'>
          <Header />
          <div className='container'>
            <Route exact path="/" component={RentalList} />
            <Route exact path="/rentals" component={RentalList} />
            <Route exact path="/rental/detail" component={RentalDetail} />
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
