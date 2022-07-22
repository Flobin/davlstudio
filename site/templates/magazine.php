<?php snippet('header') ?>

<main class="main content" role="main">

    <article>

        <header class="page-header">
            <h1 class="page-title"><?= $page->title()->html() ?></h1>
        </header>

        <section class="wide-content">
            <?php if($page->callout() != ''):
                foreach($page->callout()->toStructure() as $item): ?>
                <div class="callout lightbox">
                    <?php 
                    if($item->calloutImage()->isNotEmpty()):
                        if($item->calloutText()->isEmpty()):
                    ?>
                    <a href="<?= $page->url() . "/" . $item->calloutImage(); ?>" class="callout-img <?= $item->calloutWidth() ?>">
                       <?= $item->calloutImage()->toFile()->thumb(array('width' => 1280)); ?>
                    </a>
                    <?php
                        elseif($item->calloutPosition() == 'left'):
                    ?>
                    <div class="callout-text half callout-left">
                        <?= $item->calloutText()->kirbytext() ?>
                    </div>
                    <a href="<?= $page->url() . "/" . $item->calloutImage(); ?>" class="callout-img callout-right half">
                       <?= $item->calloutImage()->toFile()->thumb(array('width' => 600)); ?>
                    </a>
                    <?php 
                        elseif($item->calloutPosition() == 'right'):
                    ?>
                    <a href="<?= $page->url() . "/" . $item->calloutImage(); ?>" class="callout-img callout-left half">
                       <?= $item->calloutImage()->toFile()->thumb(array('width' => 600)); ?>
                    </a>
                    <div class="callout-text half callout-right">
                        <?= $item->calloutText()->kirbytext() ?>
                    </div>
                    <?php
                        endif;
                    else:
                    ?>
                    <div class="callout-text callout-<?= trim($item->calloutPosition()) ?> <?= $item->calloutWidth() ?> callout-only-text">
                        <?= $item->calloutText()->kirbytext() ?>
                    </div>
                    <?php                            
                    endif; 
                    ?>
                </div>
                <?php endforeach; 
            endif; ?>
        </section>

        <?php if($page->gallery() != ''): ?>
        <section class="wide-content gallery">
            <h2 class="gallery-title">Galerij</h2>
            <ul class="collection gallery-items lightbox">
            <?php
            // get the images from the checkboxes
            $galleryImages = $page->gallery()->value;
            
            // remove the whitespace from the string
            $galleryImagesNoWhitespace = preg_replace('/\s/', '', $galleryImages);

            // make the string into an array
            $galleryImagesArray = explode(',', $galleryImagesNoWhitespace);

            // loop over the array
            foreach($galleryImagesArray as $image): ?>

                <li class="collection-item gallery-item">
                    <a href="<?= $page->files()->find($image)->url() ?>" class="gallery-img-link">
                       <img src="<?= $page->files()->find($image)->thumb(array('width' => 300))->url(); ?>" class="gallery-img">
                    </a>
                </li>

            <?php endforeach; ?>
            </ul>
        </section>
        <?php endif; ?>

    </article>

</main>

<?php snippet('footer') ?>
