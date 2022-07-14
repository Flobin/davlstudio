<?php snippet('header') ?>

<main class="main content" role="main">

    <article>

        <header class="project-header">
            <h1 class="page-title"><?= $page->title()->html() ?></h1>
        </header>

        <section class="left-content">
            <?php snippet('project_info') ?>
            <?= $page->richtext()->kirbytext() ?>
        </section>

        <section class="right-content lightbox">
            <?php
            $images = $page->images()->sortBy('sort', 'asc');
            foreach($images as $image): ?>
                <a href="<?= $image->url() ?>" data-caption="<?= $image->alt(); ?>" class="project-img">
                    <?= $image->thumb(array('width' => 600)); ?>
                </a>
            <?php endforeach ?>
        </section>

    </article>

</main>

<?php snippet('footer') ?>
