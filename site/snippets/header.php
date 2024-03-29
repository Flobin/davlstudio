<!doctype html>
<html lang="nl" dir="ltr" class="no-js">
<head>

    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self' instant.page use.typekit.net https://use.typekit.net; connect-src 'self' use.typekit.net; img-src 'self' p.typekit.net; style-src 'self' 'unsafe-inline' use.typekit.net p.typekit.net; base-uri 'self'; form-action 'self' forms.un-static.com; font-src data: use.typekit.net;">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

    <title>DAVL Studio | Architectuur, Strategie, Ontwikkeling <?php if ($page->isHomePage()) { } else { echo '| ' . $page->title()->html(); } ?></title>
    <meta name="description" content="<?= $site->description()->html() ?>">

    <link rel="stylesheet" href="https://use.typekit.net/oms7gsw.css">
    <link rel="stylesheet" href="/assets/build/css/main.min.css?cachebust=20220721">

    <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png">
    <link rel="manifest" href="/assets/favicons/manifest.json">
    <link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg" color="#4d4d4d">
    <link rel="shortcut icon" href="/assets/favicons/favicon.ico">
    <meta name="apple-mobile-web-app-title" content="DAVL Studio">
    <meta name="application-name" content="DAVL Studio">
    <meta name="msapplication-config" content="/assets/favicons/browserconfig.xml">
    <meta name="theme-color" content="#4d4d4d">

    <?php $pageDescription = 'DAVL Studio | Architectuur, Strategie, Ontwikkeling';
    $pageImageUrl = '//davlstudio.com/assets/build/img/kiosk_instagram.jpg';
    if ($page->description()) {
        $pageDescription = $page->description();
    }
    if ($page->hasImages()) {
        $pageImageUrl = $page->images()->sortBy('sort', 'asc')->first()->url();
    } ?>

    <meta property="og:type" content="website">
    <meta property="og:url" content="<?= $page->url() ?>">
    <meta property="og:title" content="<?= $page->title() ?>">
    <meta property="og:image" content="<?= $pageImageUrl ?>">
    <meta property="og:description" content="<?= $pageDescription ?>">
    <meta property="og:site_name" content="DAVL Studio | Architectuur, Strategie, Ontwikkeling">
    <meta property="og:locale" content="nl_NL">

    <meta name="twitter:card" content="summary">
    <meta name="twitter:creator" content="@flobin">
    <meta name="twitter:url" content="<?= $page->url() ?>">
    <meta name="twitter:title" content="<?= $page->title() ?>">
    <meta name="twitter:description" content="<?= $pageDescription ?>">
    <meta name="twitter:image" content="<?= $pageImageUrl ?>">

</head>
<body id="body" class="<?= $page->template() ?>">

    
    <header class="site-header" role="banner">

        <div class="container">

            <a href="/" class="site-logo">
                <img src="/assets/build/img/logo.svg?cachebust=2206031154" id="logo" alt="Click this DAVL Studio logo to go to the home page" role="img">
            </a>

            <div class="menu-container">
                <input class="menu-toggle" id="main-menu-toggle" type="checkbox" name="main-menu-toggle">
                <label class="toggle-container" id="menu-toggle-label" for="main-menu-toggle">
                    <span class="toggle-button"></span>
                </label>

                <nav class="menu" role="menu">
                    <?php if($site->index()->filterBy('template', 'magazine')->visible() != ''): ?>
                    <div class="submenu">
                        <label class="toggle-container menu-item" id="submenu-toggle-label" for="submenu-toggle">
                            <span class="toggle-text">expertise</span>
                        </label>
                        <input class="menu-toggle" id="submenu-toggle" type="checkbox" name="submenu-toggle">
                        <ul class="submenu-items">
                        <?php foreach($site->index()->filterBy('template', 'magazine')->visible() as $item): ?>
                            <li class="submenu-item" role="menuitem"><a href="<?= $item->url() ?>"><?= $item->title() ?></a></li>
                        <?php endforeach ?>
                        </ul>
                    </div>
                    <?php endif; ?>
                    <a class="menu-item" role="menuitem" href="/projecten">projecten</a>
                    <a class="menu-item" role="menuitem" href="/contact">contact</a>
                    <a class="menu-item" role="menuitem" href="/over">over ons</a>
                    <a class="menu-item" role="menuitem" href="/zoek">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.2 112.2" id="search-icon"><path fill="gray" d="M105.6 104.2L80.1 78.7c5.3-7 8.2-15.6 8.2-24.6 0-10.9-4.2-21.2-12-28.9-15.9-15.9-41.8-15.9-57.8 0C2.7 41.1 2.7 67.1 18.6 83c8 8 18.4 11.9 28.9 11.9 8.7 0 17.3-2.7 24.6-8.2l25.5 25.5 8-8zM26.6 75C21 69.4 18 62 18 54.1c0-7.9 3.1-15.3 8.6-20.9s13-8.6 20.9-8.6c7.9 0 15.3 3.1 20.9 8.6 5.6 5.6 8.6 13 8.6 20.9 0 7.9-3.1 15.3-8.6 20.9-5.6 5.6-13 8.6-20.9 8.6-7.9 0-15.3-3.1-20.9-8.6z"/></svg>
                    </a>
                </nav>
            </div>

        </div>

    </header>
    <?php if ($page->template() == "home"): ?>
    <header class="home-header" role="banner">

        <a class="home-header-link" href="/">
            <svg version="1.1" id="home-header-img" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 1100 150" style="enable-background:new 0 0 1100 150" xml:space="preserve"><style>.w{fill:#fff}.g{fill:#4d4d4d}</style><path class="g" d="M0 0h1100v150H0z"/><path class="w" d="M94.7 75.1c-2.4 3.4-6.1 5.6-10.1 6-1.6.1-3.5.2-6 .2H68.4V39.6h8.4c2.4 0 5.6.1 7.3.2 3.4.2 6.7 1.7 9.1 4.1 3.8 3.8 5.7 9.1 5.7 16.6 0 5.8-1.4 10.8-4.2 14.6zm-7.3-25.4c-1.4-2.3-3.3-3.5-6.6-3.5h-3.9v28.3h4.5c5.5 0 8-4.3 8-13.1.1-4.8-.3-8.9-2-11.7zm42 31.6-3-9.9h-12.2l-2.9 9.9h-8.8l13.7-41.8h9.1l13.1 41.8h-9zm-7.3-25.2-1.7-7.4c-.2 1-1.3 5.3-2 8-.8 3-1.3 5-2.2 7.7h8.2c-.3-.8-1.7-5.5-2.3-8.3zm37.4 25.5h-7.6l-14.2-42h9.2l6.9 21.7c.8 2.4 1.4 4.8 1.9 7.3.6-2.8 1.4-5.6 2.4-8.3l7.1-20.6h8.8l-14.5 41.9zm44.8-.3h-23.5V39.6h8.6v34.7h14.9v7zm45.8-1.7c-2.7 1.8-6 2.6-9.2 2.5-4.7.1-9.3-1.2-13.2-3.7l2.2-3.8c3.2 2.4 7 3.6 11 3.5 3.1 0 4.8-.5 6.5-1.8 1.9-1.3 3-3.6 2.9-5.9 0-3.7-2.4-6.2-7.4-7.7l-4.1-1.2c-3.7-1.1-5.7-2-7.3-3.7-1.7-1.8-2.6-4.2-2.6-6.7 0-7 5.3-11.8 13.3-11.8 4.5 0 8.8 1.4 12.4 4l-2.2 3.5c-4-2.6-6.5-3.5-10-3.5-5.2 0-8.2 2.6-8.2 6.8 0 3.3 2 5.2 6.8 6.7l4.7 1.5c3.7 1.1 5.6 2.2 7.3 4.1 1.7 2 2.7 4.6 2.7 7.3 0 4.1-2.1 7.8-5.6 9.9zm40.3-35.3h-11.1v37h-4.7v-37h-11v-4.1h27.2l-.4 4.1zm32.7 34.6c-2.5 2.2-5.8 3.2-10.8 3.2-6.4 0-10-1.9-12.2-5.9-.9-2-1.3-4.2-1.2-6.4V40.2h4.9v27.7c-.1 2 .2 4 .7 5.9.8 1.8 3 4 8 4 3.4 0 6-.9 7.3-2.6 1.4-1.9 1.6-3.7 1.6-6.4V40.2h4.9v29.3c-.1 4.9-.8 7.3-3.2 9.4zm39.8-2.7c-3.6 4-7.2 5.2-13 5.2h-10.7V40.2h8.2c6.3 0 9.2.3 13.2 3.2 4.7 3.4 7 9.4 7 17.5 0 7.1-1.9 12.2-4.7 15.3zM358.7 48c-2.7-3.2-5.3-3.8-9.7-3.8h-4.9v33.1h4.9c4.3 0 8.2-.5 10.4-4.3 1.9-3.5 2.9-7.5 2.8-11.5.1-6.3-.7-10.2-3.5-13.5zM379 81.3V40.2h4.8v41.2l-4.8-.1zm43.4-3.1c-2.8 2.7-6.6 4.1-10.4 4-4.5.1-8.8-1.8-11.7-5.2-3.2-3.7-4.9-9.3-4.9-16.3 0-13.1 6.2-21.1 16.3-21.1 5.2-.2 10.1 2.4 13 6.7 2.6 3.8 3.7 8.6 3.7 15.2 0 7.8-1.9 12.8-6 16.7zm-1.5-29.1c-1.6-3.6-5.3-5.8-9.2-5.6-3.6-.1-7 1.7-8.8 4.8-1.4 2.7-2.1 6.2-2.1 11.3 0 6.2 1 11.6 2.6 14.3 1.6 2.7 5.4 4.4 8.8 4.4 3 .1 5.8-1.2 7.7-3.5 2-2.6 3-5.9 3-12.7-.1-6-.7-10.2-2-13zM76.7 106.5l-1.4-4.6h-5.6l-1.5 4.6h-1.8l5-15.1h2.4l5 15.1h-2.1zM72.5 93l-2.4 7.4h4.7L72.5 93zm13.4 4.2c-.2-.1-.3-.1-.5-.1-.7 0-1.3.3-1.8.8-.5.4-.7 1.1-.6 1.7v6.9h-1.7v-8.4c0-.8-.1-1.6-.4-2.3l1.7-.5c.3.6.4 1.2.3 1.8.7-1.1 1.8-1.7 3.1-1.8.2 0 .4 0 .6.1l-.7 1.8zm6.2 9.5c-1.4.1-2.7-.5-3.5-1.6-.8-1.2-1.1-2.5-1.1-3.9-.2-1.7.5-3.4 1.7-4.7.8-.8 1.9-1.3 3-1.3s2.2.4 3 1.2l-1 1.2c-.5-.6-1.3-.9-2.1-.9-.9 0-1.7.5-2.1 1.2-.5 1.1-.7 2.4-.6 3.6 0 2.5 1 3.8 2.7 3.8.9 0 1.8-.4 2.3-1.2l.9 1.1c-.6 1-1.9 1.6-3.2 1.5zm12.8-.2v-7.6c.1-.6-.1-1.2-.4-1.6-.3-.3-.8-.5-1.3-.4-1.3.1-2.4.8-3.2 1.8v7.8h-1.7V93c0-.8-.1-1.5-.3-2.2l1.7-.3c.2.8.3 1.7.3 2.6v2.6c0 .6 0 1.3-.1 1.5 1-1 2.3-1.6 3.7-1.7 1.2-.1 2.4.6 2.8 1.7.1.5.2 1.1.2 1.6v7.9h-1.7v-.2zm6.3-13c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.4.7 0 1.3.6 1.3 1.3.1.8-.5 1.4-1.3 1.4zm-.9 13V95.6l1.8-.3v11.2h-1.8zm9.8-9.7h-2.3v7.1c0 1.2.3 1.6 1.4 1.6.4 0 .7-.1 1.1-.2l.2 1.1c-.6.3-1.3.5-1.9.4-.5 0-1-.1-1.4-.3-.8-.4-1-1.1-1-2.2v-7.5h-1.5v-1.3h1.4c0-1 .1-2.4.2-2.8l1.8-.4c-.1 1.1-.2 2.1-.2 3.2h2.8l-.6 1.3zm3.9 4.5v.3c-.1.8.1 1.7.5 2.4.6.9 1.6 1.4 2.7 1.3 1 0 2-.3 2.7-1l.7 1.1c-1 .9-2.3 1.4-3.7 1.4-3 0-4.9-2.2-4.9-5.8-.1-1.5.4-3 1.3-4.1.8-1 2-1.5 3.3-1.5 1.1 0 2.2.4 3 1.2.9 1 1.3 2 1.3 4.6v.2l-6.9-.1zm4.5-3.7c-.5-.6-1.2-1-2-1-1.6 0-2.4 1.1-2.5 3.4h5c0-.9-.1-1.7-.5-2.4zm9.4 9.1c-1.4.1-2.7-.5-3.5-1.6-.7-1.2-1.1-2.5-1-3.9-.2-1.7.4-3.4 1.6-4.7.8-.8 1.9-1.3 3-1.3s2.2.4 3 1.2l-.9 1.2c-.5-.6-1.3-.9-2.1-.9-.9 0-1.7.5-2.1 1.2-.5 1.1-.7 2.4-.6 3.6 0 2.5.9 3.8 2.7 3.8.9 0 1.8-.5 2.4-1.2l.9 1.1c-.8 1-2.1 1.6-3.4 1.5zm10.7-9.9h-2.3v7.1c0 1.2.3 1.6 1.4 1.6.4 0 .7-.1 1.1-.2l.2 1.1c-.6.3-1.3.5-1.9.4-.5 0-1-.1-1.4-.3-.8-.4-1.2-1.3-1.1-2.2v-7.5h-1.4v-1.3h1.4c0-1 .1-2.4.2-2.8l1.8-.4c-.1 1.1-.2 2.1-.2 3.2h2.8l-.6 1.3zm10.8 10.1c-.6-.4-1-1-1.2-1.8-.8 1.1-2.1 1.7-3.5 1.7-1.2.1-2.3-.5-2.9-1.6-.2-.5-.3-1.1-.3-1.6v-8l1.7-.3v7.9c0 1 .2 1.5.7 1.9.4.3.9.4 1.3.4 1.2-.1 2.3-.9 2.8-2v-7.8l1.7-.3v8c0 1.4.2 1.9.8 2.4l-1.1 1.1zm11.9 0c-.6-.4-1-1-1.2-1.8-.8 1.1-2.1 1.7-3.5 1.7-1.2.1-2.3-.5-2.9-1.6-.2-.5-.3-1.1-.3-1.6v-8l1.7-.3v7.9c0 1 .2 1.5.7 1.9.4.3.9.4 1.3.4 1.2-.1 2.3-.9 2.8-2v-7.8l1.7-.3v8c0 1.4.2 1.9.8 2.4l-1.1 1.1zm8.8-9.7c-.2-.1-.3-.1-.5-.1-.7 0-1.3.3-1.8.8-.5.4-.7 1.1-.6 1.7v6.9h-1.7v-8.4c0-.8-.1-1.6-.4-2.3l1.7-.5c.3.6.4 1.2.4 1.8.7-1.1 1.8-1.7 3.1-1.8.2 0 .4 0 .6.1l-.8 1.8zm8.3 12.5H187l5.7-19.9h1.4l-5.7 19.9zm21.6-3.9c-1 .6-2.2 1-3.4.9-1.7 0-3.4-.5-4.8-1.4l.8-1.4c1.2.9 2.6 1.3 4 1.3.9.1 1.7-.2 2.4-.7s1.1-1.3 1.1-2.2c0-1.3-.9-2.3-2.7-2.8l-1.5-.5c-1-.2-1.9-.7-2.7-1.3-.6-.7-1-1.5-1-2.5 0-2.6 2-4.3 4.9-4.3 1.6 0 3.2.5 4.6 1.5l-.8 1.3c-1.1-.8-2.3-1.3-3.7-1.3-1.9 0-3 .9-3 2.5 0 1.2.7 1.9 2.5 2.5l1.7.6c1 .2 1.9.8 2.7 1.5.6.7 1 1.7 1 2.7-.1 1.5-.8 2.8-2.1 3.6zm9-9h-2.3v7.1c0 1.2.3 1.6 1.4 1.6.4 0 .7-.1 1.1-.2l.2 1.1c-.6.3-1.3.5-1.9.4-.5 0-1-.1-1.4-.3-.8-.4-1.2-1.3-1.1-2.2v-7.5h-1.4v-1.3h1.4c0-1 .1-2.4.2-2.8l1.8-.4c-.1 1.1-.2 2.1-.2 3.2h2.8l-.6 1.3zm7.9.4c-.2-.1-.3-.1-.5-.1-.7 0-1.3.3-1.8.8-.5.4-.7 1.1-.6 1.7v6.9h-1.7v-8.4c0-.8-.1-1.6-.4-2.3l1.7-.5c.3.6.4 1.2.4 1.8.7-1.1 1.8-1.7 3.1-1.8.2 0 .4 0 .6.1l-.8 1.8zm10.2 9.7c-.7-.2-1.3-.8-1.5-1.6-.8.9-1.9 1.5-3.2 1.5-2.7 0-3.5-1.6-3.5-3.1 0-2.5 2.1-3.9 5.8-3.9h.8V99c0-1 0-1.4-.4-1.7-.4-.4-.9-.6-1.5-.6-1.3.1-2.5.5-3.5 1.3l-.9-1.2c1.4-.9 3-1.4 4.6-1.5 1.3-.1 2.5.6 3 1.7.2.8.3 1.6.2 2.4l-.1 3.6c0 1.8.1 2.2.9 2.7l-.7 1.2zm-2.5-6c-2.8 0-3.8.9-3.8 2.6 0 1.3.6 2 1.9 2 1.1 0 2.2-.7 2.7-1.7l.1-2.9h-.9zm10.5-4.1h-2.3v7.1c0 1.2.3 1.6 1.4 1.6.4 0 .7-.1 1.1-.2l.2 1.1c-.6.3-1.3.5-1.9.4-.5 0-1-.1-1.4-.3-.8-.4-1.1-1.1-1.1-2.2v-7.5h-1.4v-1.3h1.4c0-1 .1-2.4.2-2.8l1.8-.4c-.1 1.1-.2 2.1-.2 3.2h2.7l-.5 1.3zm3.9 4.5v.3c-.1.8.1 1.7.5 2.4.6.9 1.6 1.4 2.7 1.3 1 0 2-.3 2.7-1l.7 1.1c-1 .9-2.3 1.4-3.7 1.4-3 0-4.9-2.2-4.9-5.8-.1-1.5.4-3 1.3-4.1.8-1 2-1.5 3.3-1.5 1.1 0 2.2.4 3 1.2.9 1 1.3 2 1.3 4.6v.2l-6.9-.1zm4.5-3.7c-.5-.6-1.2-1-2-1-1.6 0-2.4 1.1-2.5 3.4h5c.1-.9-.1-1.7-.5-2.4zm13-.4c-.3 0-.5 0-.8-.1.4.5.7 1.2.7 1.9 0 1.2-.6 2.3-1.6 3-.6.3-1.3.5-2 .5-1.5.5-2 .9-2 1.3s.3.5.9.5h1.8c.9-.1 1.8.1 2.6.6s1.2 1.4 1.2 2.3c0 2.4-1.7 3.4-4.4 3.4-3.4 0-4.8-1.2-4.8-2.8 0-.4.1-.8.2-1.2l1.8-.2c-.2.3-.3.6-.3 1 0 .5.2 1 .6 1.3.7.3 1.5.5 2.2.5 1.7 0 2.7-.6 2.7-1.9 0-.5-.2-1-.6-1.3-.7-.3-1.4-.5-2.1-.4h-1.7c-1.3 0-2.1-.6-2.1-1.6s.5-1.4 2-1.9c-1.4-.4-2.4-1.7-2.5-3.2 0-2.2 1.6-3.7 4-3.7 1.7 0 2 .6 3.3.6.5 0 1.1-.2 1.5-.5l1 1c-.3.6-1 .8-1.6.9zm-4.2-.5c-1.4 0-2.1.8-2.1 2.3-.1 1.1.6 2 1.6 2.2h.5c1.3 0 2-.8 2-2.2s-.5-2.3-2-2.3zm9.2-3.2c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.4 1.3-1.4.7 0 1.3.6 1.3 1.3 0 .8-.6 1.4-1.3 1.4zm-.9 13V95.6l1.8-.3v11.2h-1.8zm6.9-5.2v.3c-.1.8.1 1.7.5 2.4.6.9 1.6 1.4 2.7 1.3 1 0 2-.3 2.7-1l.7 1.1c-1 .9-2.3 1.4-3.7 1.4-3 0-4.9-2.2-4.9-5.8-.1-1.5.4-3 1.3-4.1.8-1 2-1.5 3.3-1.5 1.1 0 2.2.4 3 1.2 1 1 1.2 2 1.2 4.6v.2l-6.8-.1zm4.5-3.7c-.5-.7-1.2-1-2-1-1.6 0-2.4 1.1-2.5 3.4h5c0-.9-.2-1.7-.5-2.4zm11.4 12.1H292l5.7-19.9h1.4l-5.7 19.9zm23.5-4.4c-1 1-2.4 1.5-3.8 1.4-1.6 0-3.2-.7-4.3-1.9-1.3-1.7-1.9-3.8-1.8-6 0-4.8 2.3-7.7 6-7.7 1.9-.1 3.7.9 4.8 2.5 1 1.7 1.5 3.6 1.4 5.6 0 2.9-.7 4.7-2.3 6.1zm-.5-10.6c-.6-1.3-1.9-2.1-3.4-2.1-1.3 0-2.6.6-3.2 1.8-.6 1.3-.9 2.7-.8 4.2-.1 1.8.3 3.6 1 5.3.7 1 1.9 1.6 3.2 1.6 1.1.1 2.1-.4 2.8-1.3.8-1 1.1-2.2 1.1-4.6.1-1.8-.1-3.4-.7-4.9zm12.4 11.8v-7.4c0-1.2-.1-1.4-.4-1.8-.3-.3-.8-.5-1.2-.5-1.1.2-2.2.7-3 1.5v8.2h-1.7v-8.4c0-.8-.1-1.6-.4-2.3l1.7-.5c.2.5.4 1.1.4 1.7.9-1 2.1-1.6 3.5-1.7 1.1 0 2.2.6 2.7 1.6.2.4.3.8.3 1.3v8.3h-1.9zm9.7-9.7h-2.3v7.1c0 1.2.3 1.6 1.4 1.6.4 0 .7-.1 1.1-.2l.2 1.1c-.6.3-1.3.5-1.9.4-.5 0-1-.1-1.4-.3-.8-.4-1-1.1-1-2.2v-7.5h-1.4v-1.3h1.4c0-1 .1-2.4.2-2.8l1.8-.4c-.1 1.1-.2 2.1-.2 3.2h2.8l-.7 1.3zm13.5 9.9h-1.7l-2.2-7.7c-.2-.6-.3-1.1-.3-1.2 0 .2-.2.8-.2 1.1l-2.2 7.8h-1.7l-3-11 1.7-.4 1.8 7.2c.2.9.4 1.7.4 1.8h.1c.1-.5.2-1.1.4-1.6l2-7.2h1.9l1.9 7.3c.1.5.4 1.4.4 1.6l.3-1.5 1.7-7.4h1.8l-3.1 11.2zm6.5-13.2c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.4 1.3-1.4.7 0 1.3.6 1.3 1.3 0 .8-.6 1.4-1.3 1.4zm-.9 13V95.6l1.8-.3v11.2h-1.8zm5.5 0V93c0-.8-.1-1.5-.3-2.2l1.7-.3c.2.8.3 1.7.3 2.6v13.4h-1.7zm6.8 0-5-6.2 4.2-4.8h2.2l-4.3 4.8 5.3 6.2h-2.4zm4.7 0V93c0-.8-.1-1.5-.3-2.2l1.7-.3c.2.8.3 1.7.3 2.6v13.4h-1.7zm6.8 0-5-6.2 4.2-4.8h2.1l-4.3 4.8 5.3 6.2h-2.3zm5.2-5.2v.3c-.1.8.1 1.7.5 2.4.6.9 1.6 1.4 2.7 1.3 1 0 2-.3 2.7-1l.7 1.1c-1 .9-2.3 1.4-3.7 1.4-3 0-4.9-2.2-4.9-5.8-.1-1.5.4-3 1.3-4.1.8-1 2-1.5 3.3-1.5 1.1 0 2.2.4 3 1.2.9 1 1.2 2 1.2 4.6v.2l-6.8-.1zm4.5-3.7c-.5-.7-1.2-1-2-1-1.6 0-2.4 1.1-2.5 3.4h5c0-.9-.1-1.7-.5-2.4zm7.2 9.1c-.5 0-.9-.1-1.3-.5s-.6-1-.5-1.6V93c0-.8-.1-1.5-.3-2.2l1.7-.3c.2.9.3 1.7.3 2.6v11.2c0 .9.1 1.1.6 1.1h.2l.3 1.1c-.2.2-.6.2-1 .2zm4.8-13.2c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.4 1.4-1.4.7 0 1.3.6 1.3 1.3-.1.8-.7 1.4-1.4 1.4zm-1 13V95.6l1.8-.3v11.2h-1.8zm11.9 0v-7.4c0-1.2-.1-1.4-.4-1.8-.3-.3-.8-.5-1.2-.5-1.1.2-2.2.7-3 1.5v8.2h-1.7v-8.4c0-.8-.1-1.6-.4-2.3l1.7-.5c.2.5.4 1.1.4 1.7.9-1 2.1-1.6 3.5-1.7 1.1 0 2.2.6 2.7 1.6.2.4.3.8.3 1.3v8.3H414zm12.9-9.3c-.3 0-.5 0-.8-.1.4.5.7 1.2.7 1.9 0 1.2-.6 2.3-1.6 3-.6.3-1.3.5-2 .5-1.5.5-2 .9-2 1.3s.3.5.9.5h1.8c.9-.1 1.8.1 2.6.6s1.2 1.4 1.2 2.3c0 2.4-1.7 3.4-4.4 3.4-3.4 0-4.8-1.2-4.8-2.8 0-.4.1-.8.2-1.2l1.8-.2c-.2.3-.3.6-.3 1 0 .5.2 1 .6 1.3.7.3 1.5.5 2.2.5 1.7 0 2.7-.6 2.7-1.9 0-.5-.2-1-.6-1.3-.7-.3-1.4-.5-2.1-.4h-1.6c-1.3 0-2.1-.6-2.1-1.6s.5-1.4 2-1.9c-1.4-.4-2.4-1.7-2.5-3.2 0-2.2 1.6-3.7 4-3.7 1.7 0 2 .6 3.3.6.5 0 1.1-.2 1.5-.5l1 1c-.3.6-1 .8-1.7.9zm-4.1-.5c-1.4 0-2.1.8-2.1 2.3-.1 1.1.6 2 1.6 2.2h.5c1.3 0 2-.8 2-2.2s-.5-2.3-2-2.3zm619.9 8.9 1 11.3 29.9-20.3-33-15.5.9 11.3-52.2 4.5 1.2 13.3z"/><path class="w" d="m1029.5 113.8-9.3.8 3 35.4h9.5zm-74-38.6c6.7-.6 11.5-7.5 10.9-15.5s-6.7-14-13.4-13.4-11.5 7.5-10.9 15.5 6.7 14 13.4 13.4zM1100 42.5v-9.4l-86.3 7.6 4 45.8 9.4-.8-3.3-36.5zM908.8 150h15.5l-.6-18.4 23.2 11.5.1 6.9h12.7l-1.4-16.8-24.9-13 9.8-17 .9 10.5 37.2-3-1.1-13.1-11.1.9.2 2.3-14.4 1.2-1.8-22.4-17.9-9.5-31.3 2.6-17.4 29.9 13 7.6 6.2-10.9-3.8-2.2 7.6-13.1 18.7-1.5-19.7 36.1 2.6 30.1z"/></svg>
        </a>

    </header>
    <?php endif ?>
