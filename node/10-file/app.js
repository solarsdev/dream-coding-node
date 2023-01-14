const fs = require('fs');

// 3가지로 제공
// rename(..., callback(error, data)) 비동기 -> 논블럭킹
// try { renameSync(...) } catch(e) { } 동기 -> 블럭킹
// promise.rename().then().catch(0)

try {
  fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
  console.log(error);
}

console.log('hello');

fs.rename('./text-new.txt', './text.txt', (error) => console.log(error));

console.log('hello');

fs.promises
  .rename('./text2.txt', './text2.txt')
  .then(() => console.log('done'))
  .catch(console.error);
