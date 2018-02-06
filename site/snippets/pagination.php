<? if($pagination->hasPages()): ?>
  <nav class="pagination grid-item">

    <? if($pagination->hasPrevPage()): ?>
      <a class="pagination-item newer" href="<?= $pagination->prevPageURL() ?>" rel="prev" title="nieuwere berichten">
         &larr; nieuwere berichten
      </a>
    <? endif ?>

    <? if($pagination->hasNextPage()): ?>
      <a class="pagination-item older" href="<?= $pagination->nextPageURL() ?>" rel="next" title="oudere berichten">
        oudere berichten &rarr;
      </a>
    <? endif ?>

  </nav>
<? endif ?>
