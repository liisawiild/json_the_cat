const { fetchBreedDescription } = require('./breedFetcher');
// console.log(fetchBreedDescription);

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, breedDescription) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(breedDescription);
  }
});

