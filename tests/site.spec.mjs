import {test,expect} from '@playwright/test';
test.beforeEach(async ({context}) => {
 await context.route('https://tracker.metricool.com/**', route => route.fulfill({contentType:'application/javascript',body:'window.beTracker={t:()=>{window.__trackingCalled=true}};'}));
});
for(const path of ['/','/blog/','/projects/','/about/','/privacy/']){
 test('route '+path,async({page})=>{
  const response=await page.goto(path);
  expect(response.status()).toBe(200);
  await expect(page.locator('main h1')).toBeVisible();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth)).toBe(true);
 });
}
test('consent lifecycle',async({page})=>{
 const requests=[];
 page.on('request',r=>{if(r.url().startsWith('https://tracker.metricool.com/'))requests.push(r.url());});
 await page.goto('/');
 await expect(page.getByRole('button',{name:'Rechazar analítica'})).toBeVisible();
 expect(requests).toHaveLength(0);
 await page.getByRole('button',{name:'Rechazar analítica'}).click();
 await page.reload();
 expect(requests).toHaveLength(0);
 await page.getByRole('button',{name:'Preferencias de privacidad'}).click();
 await page.getByRole('button',{name:'Aceptar analítica'}).click();
 await expect.poll(()=>page.evaluate(()=>window.__trackingCalled)).toBe(true);
 await page.reload();
 await expect.poll(()=>page.evaluate(()=>window.__trackingCalled)).toBe(true);
 await page.getByRole('button',{name:'Preferencias de privacidad'}).click();
 await Promise.all([page.waitForEvent('load'),page.getByRole('button',{name:'Rechazar analítica'}).click()]);
 expect(await page.evaluate(()=>localStorage.getItem('xemo-analytics-v1'))).toBe('no');
 const count=requests.length;
 await page.reload();
 expect(requests).toHaveLength(count);
 expect(await page.evaluate(()=>window.__trackingCalled)).toBeUndefined();
});
test('keyboard and RSS',async({page,request})=>{
 await page.goto('/');
 await page.keyboard.press('Tab');
 await expect(page.getByRole('link',{name:'Saltar al contenido'})).toBeFocused();
 const rss=await request.get('/rss.xml');
 expect(rss.ok()).toBeTruthy();
 expect(await rss.text()).toContain('<rss version="2.0"');
});