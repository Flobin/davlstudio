<!doctype html>
<html lang="nl" dir="ltr">
<head>

    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta http-equiv="Content-Security-Policy" content="default-src https:">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

    <title>DAVL Studio | Architectuur, Strategie, Ontwikkeling <? if ($page->isHomePage()) { } else { echo '| ' . $page->title()->html(); } ?></title>
    <meta name="description" content="<?= $site->description()->html() ?>">

    <link rel="stylesheet" href="https://use.typekit.net/oms7gsw.css">
    <link rel="stylesheet" href="/assets/build/css/main.css">

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

    <? $pageDescription = 'DAVL Studio | Architectuur, Strategie, Ontwikkeling';
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
                <img src="/assets/build/img/logo.svg" id="logo" alt="Click this DAVL Studio logo to go to the home page" role="img">
            </a>

            <? if ($page->template() != "home"): ?><h1 class="page-title"><?= $page->title()->html() ?></h1><? endif; ?>

            <div class="menu-container">
                <input id="menu-toggle" type="checkbox" name="menu-toggle">
                <label class="toggle-container" for="menu-toggle">
                    <span class="toggle-button"></span>
                </label>

                <nav class="menu" role="menu">
                    <a class="menu-item" href="/projecten">projecten</a>
                    <a class="menu-item" href="/contact">contact</a>
                    <a class="menu-item" href="/over">over ons</a>
                    <a class="menu-item" href="/zoek">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.2 112.2" id="search-icon"><path fill="gray" d="M105.6 104.2L80.1 78.7c5.3-7 8.2-15.6 8.2-24.6 0-10.9-4.2-21.2-12-28.9-15.9-15.9-41.8-15.9-57.8 0C2.7 41.1 2.7 67.1 18.6 83c8 8 18.4 11.9 28.9 11.9 8.7 0 17.3-2.7 24.6-8.2l25.5 25.5 8-8zM26.6 75C21 69.4 18 62 18 54.1c0-7.9 3.1-15.3 8.6-20.9s13-8.6 20.9-8.6c7.9 0 15.3 3.1 20.9 8.6 5.6 5.6 8.6 13 8.6 20.9 0 7.9-3.1 15.3-8.6 20.9-5.6 5.6-13 8.6-20.9 8.6-7.9 0-15.3-3.1-20.9-8.6z"/></svg>
                    </a>
                </nav>
            </div>

        </div>

    </header>
    <? if ($page->template() == "home"): ?>
    <header class="home-header" role="banner">

        <a class="home-header-link" href="/">
            <?= file_get_contents("//davlstudio.com/assets/build/img/home-header.svg"); ?>
        </a>

    </header>
    <? endif ?>
