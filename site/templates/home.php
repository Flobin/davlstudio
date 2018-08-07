<?php snippet('header') ?>

<main class="main content grid" role="main" data-page="<?= $page->url() ?>" data-limit="<?= $limit ?>">

    <?php $firstarticles = page('home')->children()->visible()->flip()->limit(10);

    // the below is used when pagination is used
    // $rest           = page('home')->children()->visible()->flip()->offset(10)->paginate(4);
    // $pagination     = $rest->pagination();

    // if($pagination->isFirstPage()):

    //     snippet('homepage_firstpage', array('articles' => $firstarticles));

    // endif; 

    snippet('homepage_firstpage', array('articles' => $firstarticles));

    foreach($articles as $article):

        snippet('article', array('article' => $article));

    endforeach; ?>

    <button class="button load-more">meer berichten</button>

</main>

<?php snippet('footer') ?>
