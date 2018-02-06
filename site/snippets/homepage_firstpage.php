<? $first_set  = $articles->limit(2);
$second_set = $articles->offset(2)->limit(2);
$third_set  = $articles->offset(4)->limit(2);
$fourth_set = $articles->offset(6)->limit(2);
$fifth_set  = $articles->offset(8)->limit(2);

foreach($first_set as $article):

    snippet('article', array('article' => $article));

endforeach ?>

<article class="article grid-item home-projects">
    <a href="/projecten"><h2 class="h4">Projecten</h2></a>
    <section class="home-projects-list">
        <? $projects = page('projecten')->children()->visible()->shuffle()->limit(16);
        foreach($projects as $project): ?>
            <a href="<?= $project->url() ?>" class="home-project-link">
                <img src="<?= $project->images()->sortBy('sort', 'asc')->first()->thumb(array('width' => 150, 'crop' => true))->url() ?>" alt="Thumbnail for <?= $project->title()->html() ?>" class="home-project-image" />
            </a>
        <? endforeach; ?>
        <!-- <a href="/projecten">
            <img src="/assets/build/img/homepage-projects.png">
        </a>-->
    </section>
    <nav class="homepage-article-link">
        <a href="/projecten" class="button">meer projecten &rarr;</a>
    </nav>
</article>

<? foreach($second_set as $article):

    snippet('article', array('article' => $article));

endforeach ?>

<article class="homepage-article grid-item about">
    <h2 class="h4">Over DAVL Studio</h2>
    <section class="about random-background">
        <?= kirbytext($page->about()) ?>
    </section>
    <nav class="homepage-article-link">
        <a class="button" href="over">meer over DAVL Studio &rarr;</a>
    </nav>
</article>

<? foreach($third_set as $article):

    snippet('article', array('article' => $article));

endforeach ?>

<article class="homepage-article grid-item instagram">
    <h2 class="h4">Instagram</h2>
    <a href="//instagram.com/davlstudio">
        <figure class="homepage-article-image">
            <img src="/assets/build/img/instagram.jpg">
            <figcaption>Volg ons op Instagram om op de hoogte te blijven van het laatste nieuws.</figcaption>
        </figure>
    </a>
    <nav class="homepage-article-link">
        <a class="button" href="//instagram.com/davlstudio">@davlstudio &rarr;</a>
    </nav>
</article>

<? foreach($fourth_set as $article):

    snippet('article', array('article' => $article));

endforeach ?>

<article class="homepage-article social grid-item random-background">
    <a href="https://www.facebook.com/DAVLstudio/" class="facebook social-icon">
        <svg viewBox="0 0 800 800"><path d="M445 643h-90V419h-75v-87h75v-64q0-55 32-86 30-29 80-29 28 0 67 3v78h-47q-42 0-42 38v60h86l-11 87h-75v224z"/></svg>
    </a>
    <a href="https://www.instagram.com/davlstudio/" class="instagram social-icon">
        <svg viewBox="0 0 800 800"><path d="M150 400c0-119 0-166 42-208s88-42 208-42 166 0 208 42 42 89 42 208 0 166-42 208-88 42-208 42-166 0-208-42-42-89-42-208zm455 0c0-114 0-148-29-176-29-29-62-29-176-29s-148 0-176 29c-29 29-29 62-29 176s0 148 29 176c29 29 62 29 176 29s148 0 176-29c29-29 29-62 29-176zM400 272a128 128 0 1 1 0 256 128 128 0 0 1 0-256zm0 211c46 0 83-37 83-83s-37-83-83-83-83 37-83 83 37 83 83 83zm163-216c0 16-13 30-30 30-16 0-30-14-30-30 0-17 14-30 30-30 17 0 30 13 30 30z"/></svg>
    </a>
    <a href="https://www.linkedin.com/company-beta/2685474/" class="linkedin social-icon">
        <svg viewBox="0 0 800 800"><path d="M268 629h-97V319h97zm157 0h-97V319h93v42h1q31-50 93-50 114 0 114 133v185h-96V466q0-70-49-70-59 0-59 69z"/><circle cx="219" cy="220" r="56"/></svg>
    </a>
</article>

<? foreach($fifth_set as $article):

    snippet('article', array('article' => $article));

endforeach ?>

<article class="article grid-item home-contact">
    <h2 class="h4">Contact</h2>
    <section class="random-background">
        <p class="home-contact-address">
            DAVL Studio<br />
            Berkstraat 2<br />
            2565MS Den Haag<br />
            <a href="tel:+31703462358">+31 (0)70 3462358</a><br />
            <a href="mailto:info@davlstudio.com">info@davlstudio.com</a>
        </p>
        <a class="home-contact-map" href="https://www.google.nl/maps/place/Berkstraat+2,+2565+MS+Den+Haag/">
            <img id="home-contact-map-img" src="/assets/build/img/kaart.png" alt="kaart van Berkstraat 2, Den Haag" />
        </a>
    </section>
    <nav class="homepage-article-link">
        <a class="button" href="/contact/">neem contact op &rarr;</a>
    </nav>
</article>
