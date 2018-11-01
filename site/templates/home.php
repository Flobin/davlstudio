<?php snippet('header') ?>

<main class="main content grid" role="main" data-page="<?= $page->url() ?>" data-limit="<?= "0" //$limit ?>">

    <?php

    // if($pagination->isFirstPage()):

    //     snippet('homepage_firstpage', array('articles' => $firstarticles));

    // endif; 

    $articles = page('home')->children()->visible()->flip();

    $rest       = $articles->offset(10)->paginate(10);

    // the below is used when pagination is used
    $pagination     = $rest->pagination;

    if($pagination->isFirstPage()):
        snippet('homepage_firstpage', array('articles' => $articles));
    endif;

    foreach($rest as $article):

        snippet('article', array('article' => $article));

    endforeach; ?>

</main>

<?php snippet('pagination', array('pagination' => $pagination)) ?>

<?php snippet('footer') ?>
