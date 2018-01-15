<article class="homepage-article <?= $article->project(); ?> grid-item grid-sizer">
    <header class="homepage-article-header lightbox">
        <h2 class="h4 homepage-article-title"><?= $article->title()->html() ?></h2>

        <? if($article->hasImages()): 
            $images = $article->images(); 
            $firstimage = $images->sortBy('sort', 'asc')->first(); ?>
            <a href="<?= $firstimage->url(); ?>" data-caption="<?= $firstimage->alt()->html(); ?>" class="article-image-link first">
                <figure class="homepage-article-image">
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
                <figure class="homepage-article-image">
                    <?= $image->thumb(array('width' => 600)); ?>
                </figure>
            </a>
        <? elseif($article->project() != ''):
            $projectname = $article->project();
            $image = page('projecten/' . $projectname)->images()->sortBy('sort', 'asc')->first(); 
            if($image):?>
            <a href="<?= $image->url(); ?>" data-caption="<?= $image->alt()->html(); ?>" class="article-image-link">
                <figure class="homepage-article-image">
                    <?= $image->thumb(array('width' => 600)); ?>
                </figure>
            </a>
            <? endif; ?>
        <? endif; ?>
    </header>

    <section class="homepage-article-body">
        <?= $article->richtext()->kirbytext(); ?>
    </section>

    <? if($article->project() != ''): ?>
    <nav class="homepage-article-link">
        <a class="button" href="projecten/<?= $article->project(); ?>">meer <?= $article->project(); ?> &rarr;</a>
    </nav>
    <? endif; ?>
</article>
