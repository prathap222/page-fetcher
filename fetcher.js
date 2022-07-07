const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const localPath = process.argv[3];

const fetchAndSave = function(url, localPath) {
  request(url, (error, response, body) => {
    if (error) {
      console.log(`Failed to download resource: ${error}`);
      return;
    } else {
      fs.writeFile(localPath, body, (error) => {
        if (!error) {
          console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
        } else {
          console.log(`Unable to save in: ${localPath}, invalid path`);
        }
     });
    }
  });
};


fetchAndSave(url, localPath)