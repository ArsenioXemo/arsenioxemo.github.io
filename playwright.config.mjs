import { defineConfig } from '@playwright/test';
export default defineConfig({
 testDir:'./tests', reporter:[['list'],['html',{open:'never'}]],
 use:{baseURL:'http://127.0.0.1:4321',trace:'retain-on-failure'},
 webServer:{command:'npm run preview -- --host 127.0.0.1 --port 4321',url:'http://127.0.0.1:4321',reuseExistingServer:false},
 projects:[{name:'desktop',use:{browserName:'chromium',viewport:{width:1280,height:800}}},{name:'mobile',use:{browserName:'chromium',viewport:{width:320,height:720}}}]
});