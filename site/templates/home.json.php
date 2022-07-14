<?php

$html = '';

foreach($articles as $article) {

  // reuse the article snippet to create the HTML for each article
  // we need to set the third parameter to true, to return the
  // snippet content instead of echoing it
  $html .= snippet('article', compact('article'), true);

}

// add $html and $more to the $data array
$data['html'] = $html;
$data['more'] = $more;

// JSON encode the $data array
echo json_encode($data);
