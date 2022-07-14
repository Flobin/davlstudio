<?php snippet('header') ?>

<main class="main content" role="main">

    <article>

        <header class="page-header">
            <h1 class="page-title"><?= $page->title()->html() ?></h1>
        </header>

<!--         <section class="left-content">
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
        </section> -->

        <section class="wide-content">
            <?php if($page->callout() != ''):
                foreach($page->callout()->toStructure() as $item): ?>
                <div class="callout lightbox">
                    <?php 
                    if($item->calloutImage() != ''):
                        if($item->calloutPosition() == 'left'):
                    ?>
                    <p class="callout-text half callout-left">
                        <?= $item->calloutText() ?>
                    </p>
                    <a href="<?= $page->url() . "/" . $item->calloutImage(); ?>" class="callout-img callout-right">
                       <?= $item->calloutImage()->toFile()->thumb(array('width' => 600)); ?>
                    </a>
                    <?php 
                        elseif($item->calloutPosition() == 'right'):
                    ?>
                    <a href="<?= $page->url() . "/" . $item->calloutImage(); ?>" class="callout-img callout-left">
                       <?= $item->calloutImage()->toFile()->thumb(array('width' => 600)); ?>
                    </a>
                    <p class="callout-text half callout-right">
                        <?= $item->calloutText() ?>
                    </p>
                    <?php
                        endif;
                    else:
                    ?>
                    <p class="callout-text callout-<?= trim($item->calloutPosition()) ?> <?= $item->calloutTextWidth() ?> callout-only-text">
                        <?= $item->calloutText() ?>
                    </p>
                    <?php                            
                    endif; 
                    ?>
                </div>
                <?php endforeach; 
            endif; ?>
        </section>

    </article>

</main>

<?php snippet('footer') ?>
