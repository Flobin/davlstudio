<?php snippet('header') ?>

  <main class="main content" role="main">

    <article>
        <section class="left-content">
            <?= $page->richtext()->kirbytext() ?>
        </section>
        <section class="right-content">
            <?= $page->partners()->kirbytext() ?>
            <figure class="models">
                <img src="/assets/build/img/maquettes.jpg" class="" alt="maquettes" />
            </figure>
        </section>
    </article>

  </main>

<?php snippet('footer') ?>
