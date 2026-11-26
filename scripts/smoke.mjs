import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
for (const path of ['index.html','blog/index.html','projects/index.html','about/index.html','privacy/index.html']) {
 const html=readFileSync('dist/'+path,'utf8');
 assert.match(html, /lang="es"/);
 assert.match(html, /id="main-content"/);
 assert.match(html, /analytics-reject/);
 assert.doesNotMatch(html, /<script[^>]+src=["']https:\/\/tracker\.metricool\.com/);
}
assert.match(readFileSync('dist/rss.xml','utf8'), /<rss version="2.0"/);
console.log('Static smoke checks passed');
