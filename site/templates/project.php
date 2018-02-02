<?php snippet('header') ?>

<main class="content" role="main">

    <article>

        <section class="left-container standard">
            <div class="left-content">
                <?php snippet('project_info') ?>
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
