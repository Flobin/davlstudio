<?php snippet('header') ?>

  <main class="main content" role="main">

    <article>
        <section class="left-container standard">
            <div class="left-content">
                <?= $page->richtext()->kirbytext() ?>
            </div>
        </section>
        <section class="right-container standard">
            <div class="right-content">
                <?= $page->partners()->kirbytext() ?>
            </div>
        </section>
    </article>

  </main>

<?php snippet('footer') ?>
