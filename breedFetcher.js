const request = require('request');

const breedSearch = process.argv[2];
console.log(breedSearch);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedSearch}`, (error, response, body) => {
  let data = JSON.parse(body);
  let breedDescription = data[0]["description"];
  console.log(breedDescription);
});