<article class="homepage-article <?= $article->project(); ?> grid-item" itemscope itemtype="http://schema.org/Article">
    <div class="homepage-article-content">
        <header class="homepage-article-header lightbox">
            <a href="<?= $article->url() ?>" itemprop="url"><h2 class="h4 homepage-article-title" itemprop="name"><?= $article->title()->html() ?></h2></a>
            <meta itemprop="datePublished" content="<?= $article->date('Y-m-d') ?>">
            <time class="homepage-article-date"><?= $article->date('Y-m-d') ?></time>

            <?php if($article->showImage() != 'nee'): ?>
                <?php if($article->hasImages()): 
                    $images = $article->images()->sortBy('sort', 'asc'); 
                    $firstimage = $images->sortBy('sort', 'asc')->first(); ?>
                    <a href="<?= $firstimage->url(); ?>" data-caption="<?= $firstimage->alt()->html(); ?>" class="article-image-link first">
                        <figure class="homepage-article-image" itemprop="image">
                            <?= $firstimage->thumb(array('width' => 600)); ?>
                        </figure>
                    </a>
                    <?php foreach($images->not($firstimage) as $image):?>
                    <a href="<?= $image->url(); ?>" class="hidden" data-caption="<?= $image->alt()->html(); ?>">
                        <figure class="">
                            <?= $image->thumb(array('width' => 11)); ?>
                        </figure>
                    </a>
                    <?php endforeach; ?>
                <?php elseif($article->image()): 
                    $image = $article->image(); ?>
                    <a href="<?= $image->url(); ?>" data-caption="<?= $image->alt()->html(); ?>" class="article-image-link">
                        <figure class="homepage-article-image" itemprop="image">
                            <?= $image->thumb(array('width' => 600)); ?>
                        </figure>
                    </a>
                <?php elseif($article->project() != ''):
                    $projectname = $article->project();
                    $image = page('projecten/' . $projectname)->images()->sortBy('sort', 'asc')->first(); 
                    if($image):?>
                    <a href="<?= $image->url(); ?>" data-caption="<?= $image->alt()->html(); ?>" class="article-image-link">
                        <figure class="homepage-article-image" itemprop="image">
                            <?= $image->thumb(array('width' => 600)); ?>
                        </figure>
                    </a>
                    <?php endif; ?>
                <?php endif; ?>
            <?php endif; ?>
        </header>

        <section class="homepage-article-body" itemprop="articleBody">
            <?= $article->richtext()->kirbytext(); ?>
        </section>

        <?php if($article->project() != ''): ?>
        <nav class="homepage-article-link">
            <a class="button" href="projecten/<?= $article->project(); ?>">meer <?= $article->project()->title(); ?> &rarr;</a>
        </nav>
        <?php endif; ?>
    </div>
</article>
