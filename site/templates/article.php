<?php snippet('header') ?>

  <main class="main content" role="main">

    <article class="<?= $page->project(); ?>">

        <section class="left-content">
            <header class="article-header lightbox">
                <time class="article-date"><?= $page->date('d/m/Y') ?></time>
            </header>

            <?= $page->richtext()->kirbytext(); ?>

            <? if($page->project() != ''): ?>
            <nav class="article-link">
                <a class="button" href="/projecten/<?= $page->project(); ?>">meer <?= $page->project(); ?> &rarr;</a>
            </nav>
            <? endif; ?>
        </section>
        
        <section class="right-content lightbox">
            <? if($page->hasImages()): 
                foreach ($page->images() as $image): ?>
                <a href="<?= $image->url(); ?>" data-caption="<?= $image->alt()->html(); ?>" class="article-image-link">
                    <figure class="article-image">
                        <?= $image->thumb(array('width' => 600)); ?>
                    </figure>
                </a>
                <?php endforeach; ?>
            <? elseif($page->image()): 
                $image = $page->image(); ?>
                <a href="<?= $image->url(); ?>" data-caption="<?= $image->alt()->html(); ?>" class="article-image-link">
                    <figure class="article-image">
                        <?= $image->thumb(array('width' => 600)); ?>
                    </figure>
                </a>
            <? elseif($page->project() != ''):
                $projectname = $page->project();
                $image = page('projecten/' . $projectname)->images()->sortBy('sort', 'asc')->first(); 
                if($image):?>
                <a href="<?= $image->url(); ?>" data-caption="<?= $image->alt()->html(); ?>" class="article-image-link">
                    <figure class="article-image">
                        <?= $image->thumb(array('width' => 600)); ?>
                    </figure>
                </a>
                <? endif; ?>
            <? endif; ?>
        </section>
        
    </article>

  </main>

<?php snippet('footer') ?>
