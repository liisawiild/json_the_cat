const request = require('request');
const { breedName } = require('./index');


const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (body.length === 2) {
      console.log("Breed not found.");
    } else if (body.length > 2) {
      let data = JSON.parse(body);
      let breedDescription = data[0]["description"];
      callback(null, breedDescription);
    }
  });
};

module.exports = { fetchBreedDescription };