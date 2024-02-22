const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, breedDescription) => {
      assert.equal(error, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, breedDescription.trim());

      done();
    });
  });


  it('returns "Breed not found" for a invalid breed, via callback', (done) => {
    fetchBreedDescription('Calico', (error, breedDescription) => {
      assert.equal(null, breedDescription);
      const expectedDesc = "Breed not found.";

      assert.equal(expectedDesc, error.trim());

      done();
    });
  });

});