
const request = require('request');

const breedName = process.argv[2];
const api = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


const result = request(api, (error, response, body) => {
  if (error) {
    console.log(error);
  }
    
  const data = JSON.parse(body);
  const breed = data[0];
  // console.log(breed);

  if (breed) {
    console.log(breed.description);
  } else {
    console.log('No results found');
  }
}
  
);




