import assert from 'node:assert/strict';
import {readFileSync, existsSync} from 'node:fs';
for (const path of ['index.html','blog/index.html','projects/index.html','about/index.html','privacy/index.html','learning/index.html']) {
 const html=readFileSync('dist/'+path,'utf8');
 assert.match(html, /lang="es"/);
 assert.match(html, /<link[^>]+rel="canonical"[^>]+href="https:\/\/arsenioxemo\.github\.io\//);
 assert.match(html, /property="og:title"/);
 assert.match(html, /property="og:description"/);
 assert.match(html, /id="main-content"/);
 assert.match(html, /analytics-reject/);
 assert.doesNotMatch(html, /<script[^>]+src=["']https:\/\/tracker\.metricool\.com/);
}
assert.match(readFileSync('dist/rss.xml','utf8'), /<rss version="2.0"/);
console.log('Static smoke checks passed');

const about = readFileSync('dist/about/index.html','utf8');
assert.match(about, /itemtype="https:\/\/schema\.org\/Person"/);
assert.match(about, /itemprop="name"/);
for (const url of ['https://github.com/ArsenioXemo','https://www.linkedin.com/in/arsenio-p%C3%A9rez-l%C3%B3pez/','https://www.salesforce.com/trailblazer/arsenioper']) {
 assert.ok(about.includes('itemprop="sameAs" href="'+url+'"'), 'Missing profile: '+url);
}
for (const match of about.matchAll(/<img[^>]+src="(\/[^"]+)"/g)) {
 assert.ok(existsSync('dist'+match[1]), 'Missing image: '+match[1]);
}
console.log('Professional profile and SEO checks passed');

const home = readFileSync('dist/index.html','utf8');
assert.match(home, /id="xemo-host"/);
assert.match(home, /prefers-reduced-motion/);
for (const asset of ['xemo-welcome.webp','xemo-static.webp']) {
 assert.ok(existsSync('dist/images/'+asset), 'Missing host asset: '+asset);
}
const learning = readFileSync('dist/learning/index.html','utf8');
assert.match(learning, /Inteligencia artificial/);
assert.match(learning, /Ingeniería y seguridad/);
assert.match(learning, /Data &amp; Analytics/);
console.log('Learning and welcome host checks passed');

const editorialAsset = JSON.parse(readFileSync('src/editorial-assets/senior-wizard-of-oz.json','utf8'));
const emittedCover = readFileSync('dist/images/blog/senior-wizard-of-oz.webp');
assert.deepEqual(emittedCover, Buffer.from(editorialAsset.base64,'base64'));
assert.equal(emittedCover.length,123478);
assert.equal((await import('node:crypto')).createHash('sha1').update('blob '+emittedCover.length+'\0').update(emittedCover).digest('hex'),'dfbd76058700e6c0e022ad482601a2c07598742b');
console.log('Editorial asset byte-for-byte verification passed');

const pilotArticle = readFileSync('dist/blog/senior-wizard-of-oz/index.html','utf8');
assert.match(pilotArticle,/Ser Senior no significa ser el mago de Oz/);
assert.ok(pilotArticle.includes('/images/blog/senior-wizard-of-oz.webp'));
const pilotFeed = readFileSync('dist/rss.xml','utf8');
assert.equal((pilotFeed.match(/<item>/g)||[]).length,4);
assert.equal((pilotFeed.match(/<link>https:\/\/arsenioxemo\.github\.io\/blog\/senior-wizard-of-oz\/<\/link>/g)||[]).length,1);
console.log('ART-004 RSS pilot checks passed');
