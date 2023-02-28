
const request = require('request');



const fetchBreedDescription = function(breedName, callback) {
  const api = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(api, (error, response, body) => {
    if (error) {
      
      callback(error, null);
    }
      
    const data = JSON.parse(body);
    const breed = data[0];
    // console.log(breed);
  
    if (breed) {
      
      callback(null, breed.description);
    } else {
      
      callback(error, null);
    }
  }
    
  );
};

// fetchBreedDescription(breedName);

module.exports = { fetchBreedDescription };




