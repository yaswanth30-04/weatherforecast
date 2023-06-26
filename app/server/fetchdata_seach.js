'use client'



const fetchdata = (category, formd, key = 'c499d3c8ab6e4de083e112533231306') => {

    return new Promise((resolve, reject) => {
        fetch(`http://api.weatherapi.com/v1/${category}?key=${key}&q=${formd}`)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

// Usage example:

module.exports = { fetchdata }