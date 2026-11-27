import {test,expect} from '@playwright/test';
const slugs=['kiss-architecture','responsible-automation','understand-your-code'];
for(const slug of slugs){
 test('article '+slug,async({page})=>{
  const violations=[];
  await page.addInitScript(()=>{window.__blogCsp=[];document.addEventListener('securitypolicyviolation',e=>window.__blogCsp.push(e.violatedDirective));});
  await page.goto('/blog/'+slug+'/');
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content','article');
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content',new RegExp(slug+'\\.webp$'));
  const image=page.locator('article figure img');
  await expect(image).toBeVisible();
  await expect.poll(()=>image.evaluate(i=>i.naturalWidth)).toBeGreaterThan(0);
  await expect(image).toHaveAttribute('alt',/\S/);
  await expect(page.locator('article nav a').first()).toBeVisible();
  for(const link of await page.locator('article nav a').all()){
   const href=await link.getAttribute('href');
   expect(await page.evaluate(id=>!!document.getElementById(id),decodeURIComponent(href.slice(1)))).toBeTruthy();
  }
  await expect(page.getByText(/min de lectura/)).toBeVisible();
  await expect(page.getByRole('link',{name:'Compartir en LinkedIn'})).toHaveAttribute('href',/^https:\/\/www\.linkedin\.com\//);
  await page.setViewportSize({width:320,height:720});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
  expect(await page.evaluate(()=>window.__blogCsp)).toEqual(violations);
 });
}
test('blog listing and RSS',async({page,request})=>{
 await page.goto('/blog/');
 for(const slug of slugs) await expect(page.locator('a[href*="'+slug+'"]').first()).toBeVisible();
 const response=await request.get('/rss.xml');
 expect(response.ok()).toBeTruthy();
 const xml=await response.text();
 for(const slug of slugs) expect(xml).toContain('/blog/'+slug);
});
