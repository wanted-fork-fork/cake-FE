const cacheName = "::cakeServiceWorker";
const version = "v0.0.1";
const cacheList = [];

// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (event) => {
  // event.waitUntil(
  //   caches.open(version + cacheName).then((cache) => cache.addAll(cacheList)),
  // );
  // event.waitUntil(
  //   // 캐시 스토리지의 모든 스토리지명을 가져온다.
  //   caches.keys().then((cacheNames) =>
  //     // 캐시를 삭제하는 건 Promise를 반환하므로 Promise.all을 사용해 끝날 시점을 잡아야한다.
  //     Promise.all(
  //       // 이 결과는 [Promise, Promise...] 형태가 되시겠다.
  //       cacheNames.forEach((name) => {
  //         // 각각의 캐시 스토리지명이 화이트 리스트와 같지 않을 경우
  //         if (cacheList.indexOf(name) === -1) {
  //           // 캐시를 삭제하는 Promise를 배열에 추가한다.
  //           caches.delete(name);
  //         }
  //       }),
  //     ),
  //   ),
  // );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", (e) => {
  console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
  e.respondWith(
    caches.match(e.request).then((r) => {
      if (r) {
        return r;
      }

      const fetchRequest = e.request.clone();

      return fetch(fetchRequest).then((response) => {
        if (!response) {
          return response;
        }

        const responseToCache = response.clone();
        if (!e.request.url.startsWith("chrome-extension"))
          caches.open(version + cacheName).then((cache) => {
            cache.put(e.request, responseToCache);
          });
        else console.log("chrome!");

        return response;
      });
    }),
  );
});
