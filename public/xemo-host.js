const host = document.querySelector('#xemo-host');
const motion = matchMedia('(prefers-reduced-motion: reduce)');
function syncMotion() { if (host) host.disabled = motion.matches; }
syncMotion();
motion.addEventListener('change', syncMotion);
host?.addEventListener('click', () => {
 if (motion.matches) return;
 const img = host.querySelector('img');
 if (!img) return;
 const replacement = img.cloneNode(true);
 replacement.src = '/images/xemo-welcome.webp?replay=' + Date.now();
 img.replaceWith(replacement);
});
