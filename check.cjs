const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync('dist/index.html','utf8');const references=[...html.matchAll(/(?:src|href)="(assets\/[^"#]+)"/g)].map(m=>m[1]);references.forEach(p=>assert.ok(fs.existsSync(path.join('dist',p)),p));
const ids=[...html.matchAll(/id="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,'unique IDs');[...html.matchAll(/href="#([^"]+)"/g)].forEach(m=>assert.ok(ids.includes(m[1]),m[1]));
new vm.Script(fs.readFileSync('dist/app.js','utf8'));
const css=fs.readFileSync('dist/style.css','utf8');assert.ok(css.includes('@media(max-width:600px)'));assert.ok(css.includes('prefers-reduced-motion'));
console.log(`PASS: ${references.length} local asset references, ${ids.length} unique anchors, JavaScript syntax, responsive and reduced-motion styles.`);
