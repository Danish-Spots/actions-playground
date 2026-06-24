const fs = require('fs');

const testData = JSON.parse(fs.readFileSync('json.json', 'utf-8'));
console.log(testData);
