// শুধু অ্যাপ-শেল ক্যাশ হয়। সার্চ রিকোয়েস্ট কখনো ক্যাশ/সেভ হয় না।
const CACHE = "khoj-shell-v1";
const SHELL = ["/", "/manifest.json", "/icon-192.png"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))));
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (url.pathname.startsWith("/api/")) return; // নেটওয়ার্কেই যাবে
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
