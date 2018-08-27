import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    
    render() {
        let list;
        
        if (this.props.businesses.length) {
            list = this.props.businesses.map(business => {
                   return <Business key={business.id} business={business} />;
            });
        } else {
            list = <h2>No search result yet.. Give it a try again, don&#39;t be shy!</h2>
        }
        
        return (
            <div className="BusinessList">
                { list }
            </div>
        );
    }
}

export default BusinessList;
