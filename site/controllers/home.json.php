<?php

// https://getkirby.com/docs/cookbook/ajax-load-more

return function($site, $pages, $page) {

  $articles = $page->children()->visible()->offset(14);
  $count    = $articles->count();

  $more     = false;

  // check if the request is an Ajax request and if the limit and offset keys are set


    // convert limit and offset values to integer
    $offset = intval(get('offset'));
    $limit  = intval(get('limit'));
    // limit articles using offset and limit values
    $articles = $articles->offset($offset)->limit($limit);

    // check if there are more articles left
    $more = $count > $offset + $limit;



    $paginate = false;



  return compact('offset', 'limit', 'articles', 'more', 'paginate');

};
