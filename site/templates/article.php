<?php snippet('header') ?>

  <main class="main content" role="main">

    <article class="<?= $page->project(); ?>">

        <header class="article-header">
            <h1 class="page-title article-title"><?= $page->title()->html() ?></h1>
        </header>

        <section class="left-content">
            <meta itemprop="datePublished" content="<?= $page->date('Y-m-d') ?>">
            <time class="article-date"><?= $page->date('Y-m-d') ?></time>

            <?= $page->richtext()->kirbytext(); ?>

            <?php if($page->project() != ''): ?>
            <nav class="article-link">
                <a class="button" href="/projecten/<?= $page->project(); ?>">meer <?= $page->project(); ?> &rarr;</a>
            </nav>
            <?php endif; ?>
        </section>
        
        <section class="right-content lightbox">
            <?php if($page->showImage() != 'nee'): ?>
                <?php if($page->hasImages()): 
                    foreach ($page->images()->sortBy('sort', 'asc') as $image): ?>
                    <a href="<?= $image->url(); ?>" data-caption="<?= $image->alt()->html(); ?>" class="article-image-link">
                        <figure class="article-image">
                            <?= $image->thumb(array('width' => 600)); ?>
                        </figure>
                    </a>
                    <?php endforeach; ?>
                <?php elseif($page->image()): 
                    $image = $page->image(); ?>
                    <a href="<?= $image->url(); ?>" data-caption="<?= $image->alt()->html(); ?>" class="article-image-link">
                        <figure class="article-image">
                            <?= $image->thumb(array('width' => 600)); ?>
                        </figure>
                    </a>
                <?php elseif($page->project() != ''):
                    $projectname = $page->project();
                    $image = page('projecten/' . $projectname)->images()->sortBy('sort', 'asc')->first(); 
                    if($image):?>
                    <a href="<?= $image->url(); ?>" data-caption="<?= $image->alt()->html(); ?>" class="article-image-link">
                        <figure class="article-image">
                            <?= $image->thumb(array('width' => 600)); ?>
                        </figure>
                    </a>
                    <?php endif; ?>
                <?php endif; ?>
            <?php endif; ?>
        </section>
        
    </article>

  </main>

<?php snippet('footer') ?>
