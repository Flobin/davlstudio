/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["../assets/build/css/main.css","ebb682cb49826179ac01a7bedbd76836"],["../assets/build/css/main.min.css","be4d8f8373bc541b8a0f20267607b6ea"],["../assets/build/img/homepage-projects.png","3f69d556dddc072282d7b7cbc7d896b7"],["../assets/build/img/instagram.jpg","7c5a9eacc8af875f00007a3fdff90687"],["../assets/build/img/instagram.png","33078cd4eb213790dd26d8637e3b4c8b"],["../assets/build/img/kaart.jpg","e54990b6724d49f9462b4b84a636b519"],["../assets/build/img/kaart.png","f2bd29087e5ebe3bf6c0e722f0d6dbf6"],["../assets/build/img/kiosk_instagram.jpg","c9b697ac0683da416aaf6b9dfe188136"],["../assets/build/img/maquettes.jpg","39655519969431966d5e47e23c253a39"],["../assets/build/js/form.js","409c2804fdd85441adebdcdf24a6302e"],["../assets/build/js/home.js","b8a2e94c4615f6874b333c30097186e0"],["../assets/build/js/lightbox.js","55b76c4eb5fe953488cfb5d3d598dd16"],["../assets/build/js/parallax.js","d19de30c0156f5a41d4d56f4fc036427"],["../assets/build/js/sw.js","43a0f530cc5d66eab561e0b82c037480"],["../index.php","0198dd60a8ec18aac5d87cafab2f9a95"],["../vendor/symfony/console/Tests/Fixtures/application_1.xml","74024d1dcc150b9b5cc0eba387818eec"],["../vendor/symfony/console/Tests/Fixtures/application_2.xml","9f9f004cc154049035bd82a160a8110b"],["../vendor/symfony/console/Tests/Fixtures/command_1.xml","f54ad41bc9e63e476e50b5e4e971725b"],["../vendor/symfony/console/Tests/Fixtures/command_2.xml","0de57fe52e71b8c4ee92c7ec45287391"],["../vendor/symfony/console/Tests/Fixtures/input_argument_1.xml","0c308f004edf7c0b6aaec03f028e8747"],["../vendor/symfony/console/Tests/Fixtures/input_argument_2.xml","57a965ef131103e13d8befdb1a0e8465"],["../vendor/symfony/console/Tests/Fixtures/input_argument_3.xml","4b5eacb65951dd1047832992de231669"],["../vendor/symfony/console/Tests/Fixtures/input_argument_4.xml","920eb86f94d037b6c65d3191d29e1ba0"],["../vendor/symfony/console/Tests/Fixtures/input_definition_1.xml","d1ccbc21759a3a9fbf5c8540d9083f47"],["../vendor/symfony/console/Tests/Fixtures/input_definition_2.xml","a856c4c0e7a21895a75fccd1f7ad9652"],["../vendor/symfony/console/Tests/Fixtures/input_definition_3.xml","cf9890033c9b3296c3f0a84ad7a40f26"],["../vendor/symfony/console/Tests/Fixtures/input_definition_4.xml","732625b8bef91e2b6e5e42b135714673"],["../vendor/symfony/console/Tests/Fixtures/input_option_1.xml","2441944e792817317e54ca3e6bf3478a"],["../vendor/symfony/console/Tests/Fixtures/input_option_2.xml","ad9f550cbdd67e7bda7bfb78ebbc4d57"],["../vendor/symfony/console/Tests/Fixtures/input_option_3.xml","8c91b697596ccf87b48c58ecbae02aa6"],["../vendor/symfony/console/Tests/Fixtures/input_option_4.xml","960e79c93c46361c3bd250b5fe73d25b"],["../vendor/symfony/console/Tests/Fixtures/input_option_5.xml","395c992f62cbc0e68ab13f521991a20f"],["../vendor/symfony/console/Tests/Fixtures/input_option_6.xml","af234ab246fb5566b1c513ed9c79e1ba"]];
var cacheName = 'sw-precache-v3-assets-' + (self.registration ? self.registration.scope : '');




var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});




