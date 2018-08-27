import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most reviewed': 'review_count'
};

const searchOptions = {
    'Business': 'business',
    'Event': 'event'
};

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',
            searchOption: 'business'
        };
        
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
                <li 
                    key={sortByOptionValue} 
                    className={this.getSortByClass(sortByOptionValue)}
                    onClick={this.handleSortChange.bind(this, sortByOptionValue)}
                >
                    {sortByOption}
                </li>
            );
        });
    }
    
    renderSearchOption() {
        return Object.keys(searchOptions).map(searchOption => {
            let searchOptionValue = searchOptions[searchOption];
            return (
                <li
                    key={searchOption}
                    className={this.getSearchClass(searchOption)}
                    onClick={this.handleSearchOptionChange.bind(this, searchOptionValue)}
                >
                    {searchOption}
                </li>
            );
        });
    }
    
    getSortByClass(sortByOption) {
        return this.state.sortBy === sortByOption ? 'active' : '';
    }
    
    getSearchClass(searchOption) {
        return this.state.searchOption === searchOption ? 'active' : '';
    }
    
    handleSortChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        });
    }
    
    handleSearchOptionChange(searchOption) {
        this.setState({ searchOption });
    }
    
    handleTermChange(event) {
        this.setState({
            term: event.target.value
        });
    }
    
    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        });
    }
    
    handleSearch(event) {
        if (this.state.searchOption === 'business') {
          this.props.searchYelpBusiness(
            this.state.term,
            this.state.location,
            this.state.sortBy
          );  
        } else {
          this.props.searchYelpEvent(this.state.location);
        }
        
        event.preventDefault();
    }
    
    render() {
        return (
            <div className="SearchBar">
              <div className="SearchBar-search-options">
                <ul>
                  {this.renderSearchOption()}
                </ul>
              </div>
              <div className="SearchBar-sort-options">
                <ul>
                  {this.renderSortByOptions()}
                </ul>
              </div>
              <div className="SearchBar-fields">
                { this.state.searchOption === 'business' && <input onChange={this.handleTermChange} placeholder="Search Businesses" /> }
                <input onChange={this.handleLocationChange} placeholder="Where?" />
              </div>
              <div className="SearchBar-submit">
                <button onClick={this.handleSearch}>Let&#39;s Go</button>
              </div>
            </div>
        );
    }
}

export default SearchBar;