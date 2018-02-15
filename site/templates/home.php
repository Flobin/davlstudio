<?php snippet('header') ?>

<main class="main content" role="main">

    <div class="gutter-sizer">
    </div>

    <?php $articles = page('home')->children()->visible()->flip();
    $rest           = $articles->offset(10)->paginate(4);
    $pagination     = $rest->pagination();

    if($pagination->isFirstPage()):

        snippet('homepage_firstpage', array('articles' => $articles));

    endif;

    foreach($rest as $article):

        snippet('article', array('article' => $article));

    endforeach;

    snippet('pagination', array('pagination' => $pagination)) ?>

</main>

<?php snippet('footer') ?>
