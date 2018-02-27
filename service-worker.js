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

var precacheConfig = [["../index.php","0198dd60a8ec18aac5d87cafab2f9a95"],["../kirby/phpunit.xml","c709cfe0ef2a47c1e3a369087668f51b"],["../kirby/test/etc/content/1-a/test.js","cb248e942f61a08ff6f783b491bcfa4e"],["../kirby/test/etc/kirbytext/gist/expected.html","4473b4607115628b40180a7f4fcac686"],["../kirby/test/etc/kirbytext/image-with-alt/expected.html","947bcc1a067606068e24b123ba2da3e1"],["../kirby/test/etc/kirbytext/image-with-caption/expected.html","9ac28333cd399ec8a7cdd3d5f80c647d"],["../kirby/test/etc/kirbytext/image-with-link-popup/expected.html","24249d5ee501648b4ebd2e3f27cb7e83"],["../kirby/test/etc/kirbytext/image-with-link/expected.html","e0ee07b36467aef03cd112acedec5c01"],["../kirby/test/etc/kirbytext/image/expected.html","f1051a3187d24b3b4dc797539665ecaa"],["../kirby/test/etc/kirbytext/input-with-placeholder/expected.html","fd7be728d54324985e38bee87efedb55"],["../kirby/test/etc/kirbytext/link-with-class/expected.html","6fd288b93beac068db46c78eae151dd9"],["../kirby/test/etc/kirbytext/link-with-link-as-text/expected.html","0d7b0827bf48be3e5d9fc1f4b7e276c1"],["../kirby/test/etc/kirbytext/link-with-popup/expected.html","819c1d8bd8c6b571aa73215da57ebabe"],["../kirby/test/etc/kirbytext/link-with-rel/expected.html","174923ce3b9467de8737a615509d60e9"],["../kirby/test/etc/kirbytext/link-with-target/expected.html","819c1d8bd8c6b571aa73215da57ebabe"],["../kirby/test/etc/kirbytext/link-without-text/expected.html","0d7b0827bf48be3e5d9fc1f4b7e276c1"],["../kirby/test/etc/kirbytext/link/expected.html","b0aa1d320aeaf62fc7c04a84cd11961e"],["../kirby/test/etc/kirbytext/multiline-parenthesis/expected.html","156a3f999b65ad589cd200b70debc203"],["../kirby/test/etc/kirbytext/non-matching-parenthesises/expected.html","e92d32722034d7364a5899233e9824f7"],["../kirby/test/etc/kirbytext/script-tag/expected.html","51a5a7f565f0b5b98177be477bcd628c"],["../kirby/test/etc/kirbytext/tag-in-parenthesis/expected.html","7ab27237acdef5135b1e8982a6702e71"],["../kirby/test/etc/kirbytext/tel/expected.html","1634516c0f733d99f6c3493eb17aa918"],["../kirby/test/etc/kirbytext/twitter/expected.html","1738c1437c51b9cf0769fd8e3f9e305c"],["../kirby/test/etc/kirbytext/vimeo/expected.html","12f8c5e1fe09bbbc3028c989f8bcebe1"],["../kirby/test/etc/kirbytext/youtube/expected.html","8a275e15bdf9adf6a524bd7a26aba417"],["../kirby/vendor/erusev/parsedown-extra/test/data/abbreviation.html","f40cd3c9951702da5d83ea28ca4f99d8"],["../kirby/vendor/erusev/parsedown-extra/test/data/compound_footnote.html","e7b1a6aec72d102d27a26d4d2c020336"],["../kirby/vendor/erusev/parsedown-extra/test/data/definition_list.html","4cc589b1764b32631f1493b356032c6b"],["../kirby/vendor/erusev/parsedown-extra/test/data/footnote.html","e0b5187d7da5bd9adca36d41784494a9"],["../kirby/vendor/erusev/parsedown-extra/test/data/markdown_inside_markup.html","6969fc318b5fec4116e9bbf27cbcdd07"],["../kirby/vendor/erusev/parsedown-extra/test/data/special_attributes.html","ba6118d6c55a80ab67c75ccccf447aa5"],["../kirby/vendor/erusev/parsedown/test/data/aesthetic_table.html","473bcc52c682ea61213bd7c42d0469f3"],["../kirby/vendor/erusev/parsedown/test/data/aligned_table.html","8072693431dd04eba85b072d21f59958"],["../kirby/vendor/erusev/parsedown/test/data/atx_heading.html","2d8775e34bf2276b23e523fb362c4ec9"],["../kirby/vendor/erusev/parsedown/test/data/automatic_link.html","326ce6d8b9c5e4bad2b575473a92f564"],["../kirby/vendor/erusev/parsedown/test/data/block-level_html.html","f2258ff18424b7955dff63d1aa7ad7e6"],["../kirby/vendor/erusev/parsedown/test/data/code_block.html","9ab5ac0238c7eae0ae3677ab2bf1a47c"],["../kirby/vendor/erusev/parsedown/test/data/code_span.html","429f22c5789517bad26b6a7741e20c14"],["../kirby/vendor/erusev/parsedown/test/data/compound_blockquote.html","ee41eb0ae9b3c93fe48876ddccf26ef2"],["../kirby/vendor/erusev/parsedown/test/data/compound_emphasis.html","7cffe0e9c4b4f76fcdde4e66a1d4edfb"],["../kirby/vendor/erusev/parsedown/test/data/compound_list.html","71887a97490d3581a0bac9607f60bd00"],["../kirby/vendor/erusev/parsedown/test/data/deeply_nested_list.html","e8b2a8851d37d57f82b5c20b978227c8"],["../kirby/vendor/erusev/parsedown/test/data/em_strong.html","8e569b274b17d27da43af22dd8afd416"],["../kirby/vendor/erusev/parsedown/test/data/email.html","c5528ce75a163772f09b51036bb10f59"],["../kirby/vendor/erusev/parsedown/test/data/emphasis.html","ff2a39c68c070676fdf701e5f8b60560"],["../kirby/vendor/erusev/parsedown/test/data/escaping.html","7877a549c49d7c826f9bfa895738ef34"],["../kirby/vendor/erusev/parsedown/test/data/fenced_code_block.html","1915e7a9c389851717f77058f994c4af"],["../kirby/vendor/erusev/parsedown/test/data/horizontal_rule.html","9ee927c5b6aa36a89ab91b04f29962f5"],["../kirby/vendor/erusev/parsedown/test/data/html_comment.html","c9eb94cdd1c5ffb56adc8245f72d01e6"],["../kirby/vendor/erusev/parsedown/test/data/html_entity.html","39372b8e3765413801150e41cf70f0b5"],["../kirby/vendor/erusev/parsedown/test/data/image_reference.html","c383b3cf8a5dd2e09ae6ec27b5a1ee24"],["../kirby/vendor/erusev/parsedown/test/data/image_title.html","a1f5f5e5502ad3b55cecd3b5d14f4444"],["../kirby/vendor/erusev/parsedown/test/data/implicit_reference.html","6a44e5ccce0997497d694946a789ec11"],["../kirby/vendor/erusev/parsedown/test/data/inline_link.html","7ad7095fbc9fcf51c409bcdd28021db9"],["../kirby/vendor/erusev/parsedown/test/data/inline_link_title.html","56dc1942263c829698991bfdc2878112"],["../kirby/vendor/erusev/parsedown/test/data/inline_title.html","dfb2da0d09aa057096fc1e5f7fe9b470"],["../kirby/vendor/erusev/parsedown/test/data/lazy_blockquote.html","c760f2a848731721c461d954f3377e8a"],["../kirby/vendor/erusev/parsedown/test/data/lazy_list.html","d73187931ac9c38117c6e91be4982867"],["../kirby/vendor/erusev/parsedown/test/data/line_break.html","50ada88f85d86f6830da26e4d9dc03ac"],["../kirby/vendor/erusev/parsedown/test/data/multiline_list_paragraph.html","9bcfb8ef6675e34ce6e7c9b0c8c1325c"],["../kirby/vendor/erusev/parsedown/test/data/nested_block-level_html.html","e1a3f72ea8b3f2207d190d9b3ed10131"],["../kirby/vendor/erusev/parsedown/test/data/ordered_list.html","4fceecf3d998a8b13186a2898c3f0a16"],["../kirby/vendor/erusev/parsedown/test/data/paragraph_list.html","cea86ae86c30d45146a66ab1d228766c"],["../kirby/vendor/erusev/parsedown/test/data/reference_title.html","4f0e48f975bdde3145850e7091a0394e"],["../kirby/vendor/erusev/parsedown/test/data/self-closing_html.html","47ef6ee7bb5114d344c3065b737c1f4b"],["../kirby/vendor/erusev/parsedown/test/data/separated_nested_list.html","2b73ba08422b2d7ba59bf04b978f55b1"],["../kirby/vendor/erusev/parsedown/test/data/setext_header.html","0a17c66b3089edb44adb079d201b6c67"],["../kirby/vendor/erusev/parsedown/test/data/simple_blockquote.html","3ae7dc014b3833c7f6b5a311694c92c9"],["../kirby/vendor/erusev/parsedown/test/data/simple_table.html","fc6ebdab0f7f31770554ada557062eae"],["../kirby/vendor/erusev/parsedown/test/data/span-level_html.html","9c6f7d26ebdb589b028e324f30a077e2"],["../kirby/vendor/erusev/parsedown/test/data/sparse_dense_list.html","7ca012ec47695b065bcbadacc0f70f18"],["../kirby/vendor/erusev/parsedown/test/data/sparse_html.html","41ef69b77d11fa2fc8641fb2ac6e4549"],["../kirby/vendor/erusev/parsedown/test/data/sparse_list.html","260258c6bbc18c8939dffa62943b1497"],["../kirby/vendor/erusev/parsedown/test/data/special_characters.html","8f8943ed3c08815cc3ad6b3760984302"],["../kirby/vendor/erusev/parsedown/test/data/strikethrough.html","af285c5712ac1910b548519ca6e7990d"],["../kirby/vendor/erusev/parsedown/test/data/strong_em.html","415f71f87bf42483c291c8f16e6a7cb4"],["../kirby/vendor/erusev/parsedown/test/data/tab-indented_code_block.html","7cb7fb1cacad89f24615d3c53cdb634c"],["../kirby/vendor/erusev/parsedown/test/data/table_inline_markdown.html","db9142a5e1e8b282627a5040a4545845"],["../kirby/vendor/erusev/parsedown/test/data/text_reference.html","2c879d5b1377e4bed8821d1711054e47"],["../kirby/vendor/erusev/parsedown/test/data/unordered_list.html","3bdd83af553cb87456f9dc83e403d53c"],["../kirby/vendor/erusev/parsedown/test/data/untidy_table.html","473bcc52c682ea61213bd7c42d0469f3"],["../kirby/vendor/erusev/parsedown/test/data/url_autolinking.html","c1a39a65939f611e5f1f23de99f8416a"],["../kirby/vendor/erusev/parsedown/test/data/whitespace.html","445da9de874dbc3c7e6919f2ff4d3c27"],["../kirby/vendor/filp/whoops/src/Whoops/Resources/css/whoops.base.css","e28f9df6743afb375fb1e0bc73fbced3"],["../kirby/vendor/filp/whoops/src/Whoops/Resources/js/clipboard.min.js","e830f929b40edf1808f3cd9b43acabc4"],["../kirby/vendor/filp/whoops/src/Whoops/Resources/js/whoops.base.js","660ace4e47f906e0667f02695f41ec40"],["../kirby/vendor/filp/whoops/src/Whoops/Resources/js/zepto.min.js","54c9c5d40126e729d3eb1db81420c3d2"],["../kirby/vendor/getkirby/toolkit/phpunit.xml","5e19351f430a8382a3afab020329228d"],["../kirby/vendor/getkirby/toolkit/test/etc/images/favicon.png","278ed1b88d869f2c5f6f3e830979a15d"],["../site/accounts/index.html","d41d8cd98f00b204e9800998ecf8427e"],["../site/cache/index.html","d41d8cd98f00b204e9800998ecf8427e"],["../site/fields/wysiwyg/assets/css/medium-editor-theme-kirby.css","4f98a60b7c99accc4cd27685e25f6ad4"],["../site/fields/wysiwyg/assets/css/vendor/medium-editor.min.css","97ced2306521e10626e37c4e5ee3918d"],["../site/fields/wysiwyg/assets/css/wysiwyg.css","5812698b749918db3d97ed2e9194e7de"],["../site/fields/wysiwyg/assets/js/del-button.js","79a352774b335114454fd3eb0797b7ca"],["../site/fields/wysiwyg/assets/js/ins-button.js","e35f7f79523da75ebc217ee323773190"],["../site/fields/wysiwyg/assets/js/mark-button.js","f2eb1b6f0c2d34b756c3af3d8e461067"],["../site/fields/wysiwyg/assets/js/vendor/medium-editor.min.js","229cc127153037208d9d9cdc3e0489a7"],["../site/fields/wysiwyg/assets/js/vendor/rangy-classapplier.min.js","74aae1443eb2b768804f8d788f712150"],["../site/fields/wysiwyg/assets/js/vendor/rangy-core.min.js","5d82f895945a9b217401c8c7c994cdd1"],["../site/fields/wysiwyg/assets/js/wysiwyg.js","e3e7b1bda969d714b8bbfe1b5cad1719"],["../site/plugins/index.html","d41d8cd98f00b204e9800998ecf8427e"],["../site/plugins/wysiwyg/screenshot.png","be5af53da7a8cdf7cd3a6e53f7677289"],["../vendor/symfony/console/Tests/Fixtures/application_1.xml","74024d1dcc150b9b5cc0eba387818eec"],["../vendor/symfony/console/Tests/Fixtures/application_2.xml","9f9f004cc154049035bd82a160a8110b"],["../vendor/symfony/console/Tests/Fixtures/command_1.xml","f54ad41bc9e63e476e50b5e4e971725b"],["../vendor/symfony/console/Tests/Fixtures/command_2.xml","0de57fe52e71b8c4ee92c7ec45287391"],["../vendor/symfony/console/Tests/Fixtures/input_argument_1.xml","0c308f004edf7c0b6aaec03f028e8747"],["../vendor/symfony/console/Tests/Fixtures/input_argument_2.xml","57a965ef131103e13d8befdb1a0e8465"],["../vendor/symfony/console/Tests/Fixtures/input_argument_3.xml","4b5eacb65951dd1047832992de231669"],["../vendor/symfony/console/Tests/Fixtures/input_argument_4.xml","920eb86f94d037b6c65d3191d29e1ba0"],["../vendor/symfony/console/Tests/Fixtures/input_definition_1.xml","d1ccbc21759a3a9fbf5c8540d9083f47"],["../vendor/symfony/console/Tests/Fixtures/input_definition_2.xml","a856c4c0e7a21895a75fccd1f7ad9652"],["../vendor/symfony/console/Tests/Fixtures/input_definition_3.xml","cf9890033c9b3296c3f0a84ad7a40f26"],["../vendor/symfony/console/Tests/Fixtures/input_definition_4.xml","732625b8bef91e2b6e5e42b135714673"],["../vendor/symfony/console/Tests/Fixtures/input_option_1.xml","2441944e792817317e54ca3e6bf3478a"],["../vendor/symfony/console/Tests/Fixtures/input_option_2.xml","ad9f550cbdd67e7bda7bfb78ebbc4d57"],["../vendor/symfony/console/Tests/Fixtures/input_option_3.xml","8c91b697596ccf87b48c58ecbae02aa6"],["../vendor/symfony/console/Tests/Fixtures/input_option_4.xml","960e79c93c46361c3bd250b5fe73d25b"],["../vendor/symfony/console/Tests/Fixtures/input_option_5.xml","395c992f62cbc0e68ab13f521991a20f"],["../vendor/symfony/console/Tests/Fixtures/input_option_6.xml","af234ab246fb5566b1c513ed9c79e1ba"]];
var cacheName = 'sw-precache-v3-assets-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



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


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/runtime-caching/, toolbox.cacheFirst, {"cache":{"maxEntries":1,"name":"runtime-cache"}});




