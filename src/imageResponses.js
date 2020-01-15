const fs = require('fs');

// image/png

const getSponge = (req, res) => {
  fs.readFile(`${__dirname}/../client/spongegar.png`, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.write(data);
    res.end();
  });
};

module.exports.getSponge = getSponge;
