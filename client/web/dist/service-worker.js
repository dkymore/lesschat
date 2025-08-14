if (!self.define) {
  let e,
    s = {};
  const l = (l, i) => (
    (l = new URL(l + '.js', i).href),
    s[l] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = l), (e.onload = s), document.head.appendChild(e);
        } else (e = l), importScripts(l), s();
      }).then(() => {
        let e = s[l];
        if (!e) throw new Error(`Module ${l} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, n) => {
    const r =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[r]) return;
    let c = {};
    const a = (e) => l(e, r),
      u = { module: { uri: r }, exports: c, require: a };
    s[r] = Promise.all(i.map((e) => u[e] || a(e))).then((e) => (n(...e), c));
  };
}
define(['./workbox-5048be62'], function (e) {
  'use strict';
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/108.3688d3185257661f8b68.js', revision: null },
        { url: '/20.74346ca71ba5832bd3d9.js', revision: null },
        { url: '/236.a3f78a40f5f37656199d.js', revision: null },
        { url: '/258.734d1f62c251bd410997.js', revision: null },
        { url: '/260.7a384533a437d5ddf40e.js', revision: null },
        { url: '/528.ac69d20cfc6300fc3c90.js', revision: null },
        { url: '/538.65d05a13d61982b8ebaa.js', revision: null },
        { url: '/556.7ca110b57b308ff9ef08.js', revision: null },
        { url: '/579.de13c3c70ec5c6b7f4ce.js', revision: null },
        { url: '/697.4e7032371df106c044f2.js', revision: null },
        { url: '/776.cf4c61f4d4a38aa1a805.js', revision: null },
        { url: '/848.e911df667b6c3de71f0a.js', revision: null },
        { url: '/861.af581dbec15ecd2e54d9.js', revision: null },
        { url: '/899.02afbb5c04045b9649aa.js', revision: null },
        { url: '/921.9dbac02ed0a44d76da65.js', revision: null },
        { url: '/943.24ec3689c968f5db06a9.js', revision: null },
        { url: '/994.552a810289903861fb8b.js', revision: null },
        { url: '/_redirects', revision: 'ef952d360ec42c652095dfeb72a350a6' },
        { url: '/app.b4817dc472d9a4618646.js', revision: null },
        {
          url: '/audio/telephone.mp3',
          revision: 'cc6a06e6b5b604b61f3da30b7dfb24f0',
        },
        { url: '/entry.53e2e455e91278207c3d.js', revision: null },
        { url: '/favicon.ico', revision: '60dc3b3d52a36c5020f6d8d37b23f612' },
        {
          url: '/images/avatar/github-color.webp',
          revision: '8e69e73409d758bc8fbf235e0a3c24f2',
        },
        {
          url: '/images/avatar/robot.webp',
          revision: '5f848d8f90c1926422dfd4f1a019556b',
        },
        { url: '/index.html', revision: '3942e8cc4d2d5638373d86fbf08a9cd9' },
        { url: '/invite.e79e3bc384ba67e3f6f6.js', revision: null },
        {
          url: '/locales/en-US/translation.json',
          revision: '6d7918e6380b01e2e2a1ea2a7ecc677a',
        },
        {
          url: '/locales/zh-CN/translation.json',
          revision: 'c29ccf6428c65ba378db8d80c89395e5',
        },
        { url: '/main.5e3df670559f45fa5391.js', revision: null },
        {
          url: '/pwa.webmanifest',
          revision: '5101aae51551dacba8f4e0b218a12b0d',
        },
        { url: '/registry.json', revision: '08c51943eae488726cc92e3773d7eb82' },
        { url: '/robots.txt', revision: 'c551c477806af8d1782c491e3a0b2ab4' },
        { url: '/styles-226f4825abc707fb1ef7.css', revision: null },
        { url: '/styles-45ccb0ce04745b282308.css', revision: null },
        { url: '/styles-50d0f44196a778ac360f.css', revision: null },
        { url: '/styles-594caf2c4b04fe8dcfe0.css', revision: null },
        { url: '/styles-a9670318a1b15746ce8d.css', revision: null },
        { url: '/styles-caef96163010b89aa2f7.css', revision: null },
        { url: '/styles-e738542ab6491cf1d167.css', revision: null },
        {
          url: '/tailchat.manifest',
          revision: 'c9766b394491f481f4e4a078d7b29748',
        },
        { url: '/vendors-5f01b890.15b0c1badf70ee13038d.js', revision: null },
        { url: '/vendors-6575d636.8f6066b68b249571a0a9.js', revision: null },
        { url: '/vendors-734fce56.7fa6895c0794d214c0d1.js', revision: null },
        { url: '/vercel.json', revision: 'abd07d5b81e7d2c7029cc5611e1ec638' },
      ],
      {}
    ),
    e.registerRoute(
      /\.(?:png|jpg|jpeg|svg)$/,
      new e.CacheFirst({
        cacheName: 'images',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 10, maxAgeSeconds: 1209600 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /plugins\/com\.msgbyte(.*?)\/index\.js/,
      new e.StaleWhileRevalidate({
        cacheName: 'builtin-plugins-entry',
        plugins: [
          new e.ExpirationPlugin({ maxAgeSeconds: 86400 }),
          new e.CacheableResponsePlugin({
            headers: {
              'content-type': 'application/javascript; charset=utf-8',
            },
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /plugins\/com\.msgbyte\.(.*?)\/(\S+?)\-(\S*?)\.js/,
      new e.StaleWhileRevalidate({
        cacheName: 'builtin-plugins-detail',
        plugins: [
          new e.ExpirationPlugin({ maxAgeSeconds: 604800 }),
          new e.CacheableResponsePlugin({
            headers: {
              'content-type': 'application/javascript; charset=utf-8',
            },
          }),
        ],
      }),
      'GET'
    );
});
