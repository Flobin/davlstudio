<?php

/*

---------------------------------------
License Setup
---------------------------------------

Please add your license key, which you've received
via email after purchasing Kirby on http://getkirby.com/buy

It is not permitted to run a public website without a
valid license key. Please read the End User License Agreement
for more information: http://getkirby.com/license

*/

c::set('license', 'put your license key here');

/*

---------------------------------------
Kirby Configuration
---------------------------------------

By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options

*/

c::set('debug',true);
c::set('thumbs.quality', 67);
c::set('dev', true);

// omit /nieuws in blog posts
// c::set('routes', array(
//     array(
//         'pattern' => '(:any)',
//         'action'  => function($uid) {
//
//             $page = page($uid);
//
//             if(!$page) $page = page('nieuws/' . $uid);
//             if(!$page) $page = site()->errorPage();
//
//             return site()->visit($page);
//
//         }
//     ),
//     array(
//         'pattern' => 'nieuws/(:any)',
//         'action'  => function($uid) {
//             go($uid);
//         }
//     ),
//     array(
//         'pattern' => 'tag/(:any)',
//         'action'  => function($tag) {
//             return array('tag', ["tag" => $tag]);
//         }
//     )
// ));

// c::set('home', 'nieuws');

/*
---------------------------------------
Imageset plugin Configuration
---------------------------------------

c::set('imageset.tags.image.sizes.default', );
c::set('imageset.class', 'imageset');
c::set('imageset.presets', [
'default' => [
[ '300-1500,7' ],
],
'hero'    => [
[ '320x180-1920x1080,5', 'media' => '(min-aspect-ratio: 3/2)' ],
[ '320x320-1000x1000,5' ],
],
'small'   => [
[ '200,300,600,800' ]
],
]);

/*
---------------------------------------
Imagekit plugin Configuration
---------------------------------------
*/
// c::set('imagekit.optimize', true);
