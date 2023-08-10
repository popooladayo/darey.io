const axios = require('axios');
const assert = require('assert');

describe('API Test', function () {
  it('should return status code 200', async function () {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
      assert.equal(response.status, 200);
      console.log('Test passed: API returned status code 200');
    } catch (error) {
      console.error('Test failed:', error.message);
      throw error;
    }
  });
});