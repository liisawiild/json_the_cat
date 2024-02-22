const request = require('request');

const breedSearch = process.argv[2];
console.log(breedSearch);

// let test = "[]";
// console.log(test.length);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedSearch}`, (error, response, body) => {
  if (body.length === 2) {
    console.log("Breed not found.");
  }
  if (body.length > 2) {
    let data = JSON.parse(body);
    let breedDescription = data[0]["description"];
    console.log(breedDescription);
}
});

