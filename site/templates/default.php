<?php snippet('header') ?>

  <main class="main content" role="main">

    <article>

        <header class="page-header">
            <h1 class="page-title"><?= $page->title() ?></h1>
        </header>

        <section class="left-content">
            <?= $page->richtext()->kirbytext() ?>
        </section>
        <section class="right-content lightbox">
            <?php if($page->hasImages()):
            $images = $page->images()->sortBy('sort', 'asc');
                foreach($images as $image): ?>
                    <a href="<?= $image->url() ?>" data-caption="<?= $image->alt(); ?>" class="project-img">
                        <?= $image->thumb(array('width' => 600)); ?>
                    </a>
                <?php endforeach; ?>
            <?php endif; ?>
        </section>
    </article>

  </main>

<?php snippet('footer') ?>