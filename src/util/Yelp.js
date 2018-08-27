import 'whatwg-fetch';

const API_KEY = 'X0t4NfGHgzG33hxEQI5--n0DkXuxKzx6k_plSfrlXjzu-aXlrSv8vzHWQVL-gSfJ7-OoaM1o53pzbuggvr6mw9XH-DLhaUww2z7ReahIpe_Z6lcjM3npHY_4C9WDW3Yx';

let Yelp = {
    search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { headers: { Authorization: `Bearer ${API_KEY}` } })
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories.length ?  business.categories[0].title : 'No category',
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });
            }
        })
    }
};



export default Yelp;