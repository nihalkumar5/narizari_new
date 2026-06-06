const fs = require('fs');

function fixPaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/"assets\//g, '"/assets/');
  content = content.replace(/"\.\/assets\//g, '"/assets/');
  fs.writeFileSync(filePath, content);
  console.log('Fixed paths in ' + filePath);
}

fixPaths('src/app/page.js');
fixPaths('src/app/shopify/page.js');
