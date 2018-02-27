<article class="homepage-article <?= $article->project(); ?> grid-item grid-sizer" itemscope itemtype="http://schema.org/Article">
    <header class="homepage-article-header lightbox">
        <a href="<?= $article->url() ?>" itemprop="url"><h2 class="h4 homepage-article-title" itemprop="name"><?= $article->title()->html() ?></h2></a>
        <meta itemprop="datePublished" content="<?= $article->date() ?>">
        <time class="homepage-article-date"><?= $article->date('d/m/Y') ?></time>

        <? if($article->hasImages()): 
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
        <? elseif($article->image()): 
            $image = $article->image(); ?>
            <a href="<?= $image->url(); ?>" data-caption="<?= $image->alt()->html(); ?>" class="article-image-link">
                <figure class="homepage-article-image" itemprop="image">
                    <?= $image->thumb(array('width' => 600)); ?>
                </figure>
            </a>
        <? elseif($article->project() != ''):
            $projectname = $article->project();
            $image = page('projecten/' . $projectname)->images()->sortBy('sort', 'asc')->first(); 
            if($image):?>
            <a href="<?= $image->url(); ?>" data-caption="<?= $image->alt()->html(); ?>" class="article-image-link">
                <figure class="homepage-article-image" itemprop="image">
                    <?= $image->thumb(array('width' => 600)); ?>
                </figure>
            </a>
            <? endif; ?>
        <? endif; ?>
    </header>

    <section class="homepage-article-body" itemprop="articleBody">
        <?= $article->richtext()->kirbytext(); ?>
    </section>

    <? if($article->project() != ''): ?>
    <nav class="homepage-article-link">
        <a class="button" href="projecten/<?= $article->project(); ?>">meer <?= $article->project()->title(); ?> &rarr;</a>
    </nav>
    <? endif; ?>
</article>
