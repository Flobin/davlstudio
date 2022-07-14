<?php snippet('header') ?>

<main class="main content grid" role="main" data-page="<?= $page->url() ?>" data-limit="<?= "0" //$limit ?>">

<?php

    $articles = page('home')->children()->visible()->flip();

    // $first_set  = $articles->limit(2);
    // $second_set = $articles->offset(2)->limit(2);
    // $third_set  = $articles->offset(4)->limit(2);
    // $fourth_set = $articles->offset(6)->limit(2);
    // $fifth_set  = $articles->offset(8)->limit(2);
    $rest       = $articles->offset(10)->paginate(10);
    $pagination = $rest->pagination();


    if($pagination->isFirstPage()):

        snippet('homepage_firstpage', array('articles' => $articles));

    endif;

    foreach($rest as $article):

        snippet('article', array('article' => $article));

    endforeach;

?>

</main>

<?php snippet('pagination', array('pagination' => $pagination));

snippet('footer') ?>
