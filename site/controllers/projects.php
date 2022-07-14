<?php

// https://getkirby.com/docs/cookbook/tags

return function($site, $pages, $page) {

  // fetch all the project tags
  $tags = $page->children()->visible()->pluck('tags', ',', true);

  // fetch the basic set of pages
  $projects = $page->children()->visible();

  // add the tag filter
  if($tag = param('tag')) {
    $projects = $projects->filterBy('tags', $tag, ',');
  }

  // apply pagination
  // $projects   = $projects->paginate(10);
  // $pagination = $projects->pagination();

  // return compact('projects', 'pagination');
  return compact('projects', 'tags');

};
