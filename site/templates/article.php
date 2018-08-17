<?php snippet('header') ?>

  <main class="main content" role="main">

    <article class="<?= $page->project(); ?>">

        <section class="left-content">
            <header class="article-header lightbox">
                <time class="article-date"><?= $page->date('d/m/Y') ?></time>
            </header>

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
