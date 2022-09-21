const fs = require('fs');

try {
  console.log(1);

  const data = fs.readFileSync('./CHANGELOG.md', 'utf8');
  console.log(data);

  const content = 'Some content! \n'+data;

  fs.writeFile('./CHANGELOG.md', content, err => {
    if (err) {
      console.error(err);
    }
  });
} catch (err) {
  console.error(err);
}
