const request = require('request');

const breedSearch = process.argv[2];
// console.log(breedSearch);

// body is a string
// let test = "[]";   == empty body
// console.log(test.length); = 2

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedSearch}`, (error, response, body) => {
  if (error) {
    console.log(error);
  } else if (body.length === 2) {
    console.log("Breed not found.");
  } else if (body.length > 2) {
    let data = JSON.parse(body);
    let breedDescription = data[0]["description"];
    console.log(breedDescription);
  }
});

