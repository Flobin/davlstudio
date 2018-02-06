<?php

// https://getkirby.com/docs/cookbook/tags

return function($site, $pages, $page) {

  // fetch the basic set of pages
  $projects = $page->children()->visible();

  // apply pagination
  // $projects   = $projects->paginate(10);
  // $pagination = $projects->pagination();

  // return compact('projects', 'pagination');
  return compact('projects');

};
