<?php snippet('header') ?>

<main class="content" role="main">

    <article>

        <section class="left-container standard">
            <div class="left-content">
                <aside class="project-meta">
                    <ul>
                        <li class="project-year">
                            Wanneer: <?= $page->year() ?>
                        </li>
                        <li class="project-status">
                            Status: <?= $page->status() ?>
                        </li>
                        <li class="project-client">
                            Cliënt: <?= $page->client() ?>
                        </li>
                    </ul>
                </aside>
                <?= $page->richtext()->kirbytext() ?>
            </div>
        </section>

        <section class="right-container standard">
            <div class="right-content lightbox">
            <?php
            $images = $page->images();
            foreach($images as $image): ?>
                <a href="<?= $image->url() ?>" data-caption="<?= $image->alt(); ?>" class="project-img">
                    <?= $image->thumb(array('width' => 600)); ?>
                </a>
            <?php endforeach ?>
            </div>
        </section>

    </article>

</main>

<?php snippet('footer') ?>
