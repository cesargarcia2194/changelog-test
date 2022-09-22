const fs = require('fs');

try {
  const changelog = fs.readFileSync('./CHANGELOG.md', 'utf8');
  const history = fs.readFileSync('./HISTORY.md', 'utf8');
  const content = history+changelog;
  fs.writeFile('./CHANGELOG.md', content, err => {
    if (err) {
      console.error(err);
    }
    //fs.unlinkSync('./HISTORY.md')
  });
} catch (err) {
  console.error(err);
}
