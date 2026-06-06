const fs = require('fs');
let html = fs.readFileSync('legacy_html/index.html', 'utf8');

// Extract everything between <main> and </main>
const mainMatch = html.match(/<main>([\s\S]*?)<\/main>/);
if (!mainMatch) {
  console.log("Could not find <main>");
  process.exit(1);
}
let bodyContent = mainMatch[1];

// Convert class to className
bodyContent = bodyContent.replace(/class=/g, 'className=');

// Fix self closing tags
bodyContent = bodyContent.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
bodyContent = bodyContent.replace(/<br>/g, '<br/>');
bodyContent = bodyContent.replace(/<hr>/g, '<hr/>');

// Fix style attributes
bodyContent = bodyContent.replace(/style="([^"]*)"/g, (match, p1) => {
  const styles = p1.split(';').filter(s => s.trim() !== '');
  let styleObj = {};
  styles.forEach(s => {
    let [key, ...valueParts] = s.split(':');
    if (!key || valueParts.length === 0) return;
    key = key.trim();
    let value = valueParts.join(':').trim();
    // camelCase the key
    key = key.replace(/-([a-z])/g, (m, p11) => p11.toUpperCase());
    styleObj[key] = value;
  });
  return `style={${JSON.stringify(styleObj)}}`;
});

// Fix other specific invalid JSX
bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
bodyContent = bodyContent.replace(/charset=/g, 'charSet=');
bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');

const output = `
import Navbar from '@/components/Navbar';
import ClientLogic from '@/components/ClientLogic';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        ${bodyContent}
      </main>
      <ClientLogic />
    </>
  );
}
`;

fs.writeFileSync('src/app/page.js', output);
console.log("Converted index.html to page.js");
