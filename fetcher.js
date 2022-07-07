const request = require('request');

const url = process.argv[2];
const localPath = process.argv[3];

const fetchAndSave = function(url, localPath) {
  request(url, (error, response, body) => {
    if (error) {
      console.log(`Failed to download resource: ${error}`);
      return;
    } //else {
    //   console.log(`Response: ${response}`);
    //   console.log(`Body: ${body}`);
    // }
  });
};

fetchAndSave(url, localPath)