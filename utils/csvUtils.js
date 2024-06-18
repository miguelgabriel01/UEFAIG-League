const fs = require('fs');
const csv = require('csv-parser');

const readCsv = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (err) => reject(err));
  });
};

const writeCsv = (filePath, data) => {
  return new Promise((resolve, reject) => {
    const csvData = data.map(row => Object.values(row).join(',')).join('\n');
    fs.writeFile(filePath, csvData, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

module.exports = { readCsv, writeCsv };
