import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';

import Yelp from './util/Yelp';

class App extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = { 
        businesses: [],
        events: []
      };
      
      this.searchYelpBusiness = this.searchYelpBusiness.bind(this);
      this.searchYelpEvent = this.searchYelpEvent.bind(this);
    }
    
    searchYelpBusiness(term, location, sortBy) {
      Yelp.searchBusiness(term, location, sortBy).then(businesses => {  
        if (!businesses) return;
        return this.setState({ businesses });
      });
    }
    
    searchYelpEvent(location) {
      Yelp.searchEvent(location).then(events => {
        if (!events) return;
        return this.setState({ events });
      });
    }
    
    render() {
      return (
        <div className="App">
          <h1>ravenous</h1>
          <SearchBar searchYelpBusiness={this.searchYelpBusiness} searchYelpEvent={this.searchYelpEvent} />
          <BusinessList businesses={this.state.businesses} />
        </div>
      );
    }
}

export default App;
