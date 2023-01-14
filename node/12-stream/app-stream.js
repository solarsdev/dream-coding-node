const fs = require('fs');

const data = [];
const readStream = fs
  .createReadStream('./file.txt', {
    highWaterMark: 8, // 64kbytes
    //encoding: 'utf-8',
  })
  .on('data', (chunk) => data.push(chunk))
  .on('error', console.error)
  .on('end', () => console.log(data.join('')));
