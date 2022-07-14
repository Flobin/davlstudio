<?php snippet('header') ?>

<main class="main content" role="main">

    <article>
        <?= $page->richtext()->kirbytext() ?>
    </article>

    <form class="form" id="searchform">
        <div class="field search-input">
            <input class="input" type="search" name="q" value="<?php echo esc($query) ?>" placeholder="Voer uw zoekopdracht in" required>
            <label class="label" for="q"><span class="label-content">Zoekopdracht</span></label>
        </div>
        <div class="field search-submit">
            <input class="button submit" type="submit" value="zoek &rarr;">
        </div>
    </form>

    <?php if (count($results) > 0): ?>
    <h2 id="search-results-title">Resultaten</h2>
    <?php endif ?>

    <ul class="collection search-results">
        <?php foreach($results as $result): ?>
        <li class="collection-item">
            <a href="<?php echo $result->url() ?>">
                <h3 class="search-result"><?php echo $result->title()->html() ?></h3>
            </a>
        </li>
        <?php endforeach ?>
    </ul>

    <?php snippet('pagination', array('pagination' => $pagination)) ?>

</main>

<?php snippet('footer') ?>
