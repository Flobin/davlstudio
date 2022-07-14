<?php snippet('header') ?>

<main class="main content" role="main">

    <ul class="project-tags">
      <?php foreach($tags as $tag): ?>
      <li class="project-tag">
        <a class="project-tag-link" href="<?= url('projecten/' . url::paramsToString(['tag' => $tag])) ?>">
          <?= html($tag) ?>
        </a>
      </li>
      <?php endforeach ?>
    </ul>

    <ul class="collection">
        <?php foreach($projects as $project): ?>
            <li class="collection-item project">
                <a href="<?= $project->url() ?>">
                    <?php $image = $project->image();
                    if($image): ?>
                    <img src="<?= $project->images()->sortBy('sort', 'asc')->first()->thumb(array('width' => 600))->url() ?>" alt="Thumbnail for the project <?= $project->title()->html() ?>" class="project-thumbnail" />
                    <?php endif; ?>
                    <h2 class="project-title"><?= $project->title() ?></h2>
                </a>
            </li>
        <?php endforeach ?>

    </ul>

</main>

<?php snippet('footer') ?>
