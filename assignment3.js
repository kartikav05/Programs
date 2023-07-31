const fs = require('fs');

const filePath = 'data.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  const wordCount = countWords(data);
  console.log('Total word count:', wordCount);
});

function countWords(text) {
  const words = text.split(/[ \t\n\r.,;:"]/g).
  filter(word => word.length > 0);
  return words.length;
}
