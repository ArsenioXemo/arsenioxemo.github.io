
(() => {
 const key = 'xemo-analytics-v1';
 const panel = document.getElementById('analytics-preferences');
 const settings = document.getElementById('analytics-settings');
 let choice = null;
 try { choice = localStorage.getItem(key); } catch {}
 let loaded = false;
 function load() {
   if (loaded) return;
   loaded = true;
   const script = document.createElement('script');
   script.src = 'https://tracker.metricool.com/resources/be.js';
   script.onload = () => { if (choice === 'yes' && window.beTracker) window.beTracker.t({hash:'6d69bf49ebf390660f48aab2cca16275'}); };
   document.head.appendChild(script);
 }
 function choose(value) {
   choice = value;
   try { localStorage.setItem(key, value); } catch {}
   panel.hidden = true;
   settings.focus();
   if (value === 'yes') load();
   else if (loaded) location.reload();
 }
 panel.hidden = choice === 'yes' || choice === 'no';
 if (choice === 'yes') load();
 settings.addEventListener('click', () => { panel.hidden = !panel.hidden; if (!panel.hidden) document.getElementById('analytics-accept').focus(); });
 document.getElementById('analytics-accept').addEventListener('click', () => choose('yes'));
 document.getElementById('analytics-reject').addEventListener('click', () => choose('no'));
})();
