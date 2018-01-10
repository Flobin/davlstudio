<!doctype html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
<head>

    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

    <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>
    <meta name="description" content="<?= $site->description()->html() ?>">

    <link rel="stylesheet" href="https://use.typekit.net/oms7gsw.css">
    <?= css('assets/build/css/main.css') ?>

    <script>(function(d,c,r){d[c]=r.test(d[c])?d[c].replace(r,'$1js$2'):[d[c],'js'].join(' ')})(document.documentElement,'className',/(?:(^|\s)no-js(\s|$))/)</script>

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
