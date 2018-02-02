<?php

// https://getkirby.com/docs/cookbook/search

return function($site, $pages, $page) {

    $query   = get('q');
    $results = $site->index()->visible()->search($query, 'title|richtext');
    $results = $results->paginate(20);

    return array(
        'query'      => $query,
        'results'    => $results,
        'pagination' => $results->pagination()
    );

};
