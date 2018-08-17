<?php

// https://getkirby.com/docs/cookbook/ajax-load-more

return function($site, $pages, $page) {

  $articles = $page->children()->visible()->flip();
  $count    = $articles->count();

  $more     = false;


    $limit    = 4;
    $articles = $articles->offset(10)->limit($limit);

    $paginate = false;

  

  return compact('offset', 'limit', 'articles', 'more', 'paginate');

};
