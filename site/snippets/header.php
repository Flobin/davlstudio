<!doctype html>
<html lang="nl" dir="ltr">
<head>

    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

    <title>DAVL Studio | Architectuur, Strategie, Ontwikkeling <? if ($page->isHomePage()) { } else { echo '| ' . $page->title()->html(); } ?></title>
    <meta name="description" content="<?= $site->description()->html() ?>">

    <link rel="stylesheet" href="https://use.typekit.net/oms7gsw.css">
    <?= css('assets/build/css/main.css') ?>

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
    $pageImageUrl = 'http://davlstudio.com/assets/build/img/kiosk_instagram.jpg';
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

    <? if ($page->template() != "home"): ?>
        <header class="site-header" role="banner">

            <div class="container">

                <a href="/">
                    <img src="/assets/build/img/header_logo_text.svg" id="logo" alt="Click this DAVL Studio logo to go to the home page" role="img">
                </a>

                <div class="menu-container">
                    <input id="menu-toggle" type="checkbox" name="menu-toggle">
                    <label class="toggle-container" for="menu-toggle">
                        <span class="toggle-button"></span>
                    </label>

                    <nav class="menu" role="menu">
                        <a class="menu-item" href="/projecten">projecten</a>
                        <a class="menu-item" href="/contact">contact</a>
                        <a class="menu-item" href="/over">over ons</a>
                    </nav>
                </div>

                <? // if ($page->template() == "project" || $page->template() == "default" || $page->template() == "contact"): ?>
                <h1 class="page-title"><?= $page->title()->html() ?></h1>
                <? // endif ?>
            </div>

        </header>
    <? else: ?>
    <header class="home-header" role="banner">

        <a class="home-header-link" href="/">
            <img src="/assets/build/img/home_header.svg" id="home-header-image" alt="Click this DAVL Studio logo to go to the home page" role="img">
        </a>

    </header>
    <? endif ?>
