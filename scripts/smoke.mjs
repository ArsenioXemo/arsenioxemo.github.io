import assert from 'node:assert/strict';
import {readFileSync, existsSync} from 'node:fs';
for (const path of ['index.html','blog/index.html','projects/index.html','about/index.html','privacy/index.html']) {
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
