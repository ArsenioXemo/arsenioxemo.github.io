import {test, expect} from '@playwright/test';
test('learning catalog is reachable and responsive', async ({page}) => {
 await page.goto('/');
 await page.getByRole('navigation').getByRole('link',{name:'Formación'}).click();
 await expect(page.getByRole('heading',{name:'Learning & Credentials'})).toBeVisible();
 await expect(page.getByRole('heading',{name:'Inteligencia artificial'})).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
test('host replays via keyboard without CSP violations', async ({page}) => {
 await page.emulateMedia({reducedMotion:'no-preference'});
 await page.addInitScript(()=>{window.cspViolations=[];document.addEventListener('securitypolicyviolation',e=>window.cspViolations.push(e.violatedDirective));});
 await page.goto('/');
 const host=page.getByRole('button',{name:'Saludar a XEMO'});
 await host.focus();
 await host.press('Enter');
 await expect(host.locator('img')).toHaveAttribute('src', /replay=/);
 await expect.poll(()=>host.locator('img').evaluate(img=>img.complete && img.naturalWidth>0)).toBe(true);
 expect(await page.evaluate(()=>window.cspViolations)).toEqual([]);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
test('reduced motion selects static host', async ({page}) => {
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.goto('/');
 const host=page.getByRole('button',{name:'Saludar a XEMO'});
 await expect(host).toBeDisabled();
 await expect.poll(()=>host.locator('img').evaluate(img=>img.currentSrc)).toContain('/images/xemo-static.webp');
});
