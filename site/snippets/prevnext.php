<?

/*

The $flip parameter can be passed to the snippet to flip
prev/next items visually:

```
<? snippet('prevnext', ['flip' => true]) ?>
```

Learn more about snippets and parameters at:
https://getkirby.com/docs/templates/snippets

*/

$directionPrev = @$flip ? 'right' : 'left';
$directionNext = @$flip ? 'left'  : 'right';

if($page->hasNextVisible() || $page->hasPrevVisible()): ?>
  <nav class="pagination <?= !@$flip ?: ' flip' ?>">

    <? if($page->hasPrevVisible()): ?>
      <a class="pagination-item <?= $directionPrev ?>" href="<?= $page->prevVisible()->url() ?>" rel="prev" title="<?= $page->prevVisible()->title()->html() ?>">
        ← vorig bericht
      </a>
    <? else: ?>
      <span class="pagination-item <?= $directionPrev ?> is-inactive">
        ← vorig bericht
      </span>
    <? endif ?>

    <? if($page->hasNextVisible()): ?>
      <a class="pagination-item <?= $directionNext ?>" href="<?= $page->nextVisible()->url() ?>" rel="next" title="<?= $page->nextVisible()->title()->html() ?>">
        volgend bericht →
      </a>
    <? else: ?>
      <span class="pagination-item <?= $directionNext ?> is-inactive">
        volgend bericht →
      </span>
    <? endif ?>

  </nav>
<? endif ?>
