"use strict";var precacheConfig=[["/index.html","b79d64c53fe0f2f7b053892cb2837306"],["/static/css/main.08e0a397.css","77e62543d57744fc3e7b86e3de29026e"],["/static/js/main.bbfc8b57.js","0bc02eeea4dde51c2fa9a024a6bd4cff"],["/static/media/3d.3abd426c.gif","3abd426c5584404c3141e0a666523f99"],["/static/media/3d_s.aa7e49bc.jpg","aa7e49bc29309825193b2d6cfb891d15"],["/static/media/brava.1db30548.jpg","1db30548d38825a65eb2918175235142"],["/static/media/brava_s.d4c90e9e.jpg","d4c90e9edb5b9c79d7894668048fb7d5"],["/static/media/chidrama.93d845d6.gif","93d845d602dd40ea1b8ea8201d9fffbf"],["/static/media/chidrama_s.a22ba37d.jpg","a22ba37d2fdfc721ce6d61a3197fd79d"],["/static/media/dreamsoft.287a1d3d.jpg","287a1d3daf8e2947394d0df67a6e666b"],["/static/media/dreamsoft_s.41f3f497.jpg","41f3f4979257a90bd53da98f7525add6"],["/static/media/eastern.09eedc07.gif","09eedc072a7adc961f151320b1b0c6a6"],["/static/media/eastern_s.db489390.jpg","db4893905434c6d59f143dc195ce3e82"],["/static/media/gaming.2be15551.jpg","2be15551c19a039fec7d360d32277b9f"],["/static/media/gaming_s.7b0c99da.jpg","7b0c99da485ee2e0c407c80f3eb3b70b"],["/static/media/hotel.82af7cd7.jpg","82af7cd784204a09af761b333ef6bd6a"],["/static/media/hotel_s.cfa57109.jpg","cfa57109b0a058bcb0156faef85d3d1b"],["/static/media/iac.f1816c44.jpg","f1816c448c99b97ae0046d62417ed623"],["/static/media/iac_s.33d8641b.jpg","33d8641bf1a366a9c24f05e65e363de6"],["/static/media/mobile.b3516981.jpg","b3516981f79e31282f16ce588e484666"],["/static/media/mobile_s.d65895c7.jpg","d65895c7fe3138d290db53cebcde1da4"],["/static/media/nuhart_edm.406f9178.jpg","406f9178f8bd2a8275489a7b4ec6b354"],["/static/media/nuhart_edm_s.b33bc1fa.jpg","b33bc1fa1e5c0a0bbd5cf9ede99ffb03"],["/static/media/nuhart_web.1041c75a.gif","1041c75aee67e1dffec3711ee54e0593"],["/static/media/nuhart_web_s.65e94f81.jpg","65e94f819fa6629985ba1e6d1918c6d0"],["/static/media/plan.12dc3682.jpg","12dc3682db88cdec7ac0d1fa34e2e6c4"],["/static/media/plan_s.0281b09c.jpg","0281b09c1df95c1ef18a4a1af3266632"],["/static/media/profitlink.6dd2cd7a.jpg","6dd2cd7a31e8642cf746f01c2f3b3228"],["/static/media/profitlink_s.fff46c76.jpg","fff46c76291646e0ec685156ea1108ca"],["/static/media/realmadrid.9300e975.jpg","9300e975769f94b147954d4dc396567f"],["/static/media/realmadrid_s.ff983d67.jpg","ff983d671f81ea7c30b1da3c8561aca8"],["/static/media/robot.e20a45c9.jpg","e20a45c9556780eb7c56151377f434d9"],["/static/media/robot_s.34f710b7.jpg","34f710b7751a75fca156b4d4545ef28f"],["/static/media/taxi.dd0a1710.jpg","dd0a171087af53560a79421df09ecc72"],["/static/media/taxi_s.4ae25405.jpg","4ae25405fc35f80adf935747cbe16c2c"],["/static/media/townhealth.4efab7c9.gif","4efab7c90a8235e2fa6bdc0a8b0f18cb"],["/static/media/townhealth_s.b646f1ad.jpg","b646f1ad0859273ae04312c1c7d80ddb"],["/static/media/uws.e91cfdae.jpg","e91cfdaeca271b4ded74c8e7bef8575d"],["/static/media/uws_s.08fe24b9.jpg","08fe24b935454a7f6f79770dd6f94a21"],["/static/media/wireframe.ff689327.jpg","ff6893270ca87588188bb97b7d8b25fd"],["/static/media/wireframe_s.cc8763e3.jpg","cc8763e3f4e4a96ad9f80f3bf24966b9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var i="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});