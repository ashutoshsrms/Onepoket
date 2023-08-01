const fs = require('fs');

function countWords(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error('An Error Occured:', err);
      return;
    }
    // console.log(data);
    const words = data.trim().split(/\s+/).length;
    console.log('Total word :', words);
  });
}

countWords('data.txt');
