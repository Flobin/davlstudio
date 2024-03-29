    <footer class="site-footer" role="contentinfo">

        <?php if ($page->template() == "project"): ?>

            <?php $pageProject = $page->slug();
            $posts = page('home')->children()->visible()->filterBy('project', $pageProject)->flip()->limit(4);
            if ( count($posts) > 0 ): ?>

            <div class="related-posts container">
                <h3 class="related-posts-title">Gerelateerd nieuws</h3>
                <ul class="collection">
                <?php
                foreach($posts as $post): ?>
                    <li class="collection-item related-post">
                        <a href="<?= $post->url() ?>">
                            <?php if ($post->hasImages()): 
                                $image = $post->images()->sortBy('sort', 'asc')->first(); ?>
                                <img src="<?= $image->thumb(array('width' => 300))->url() ?>" class="project-thumbnail" />
                            <?php else:
                                $image = $page->images()->sortBy('sort', 'asc')->first(); ?>
                                <img src="<?= $image->thumb(array('width' => 300))->url() ?>" class="project-thumbnail" />
                            <?php endif ?>
                            <h4 class="related-post-title"><?= $post->title()->html() ?></h4>
                        </a>
                    </li>
                <?php endforeach ?>
                </ul>
            </div>
            <?php endif ?>
        <?php endif ?>
        <?php if ($page->template() == "project" || $page->template() == "article"):
            $featured = $pages->find('projecten')->children()->filterBy('hasImages', true)->shuffle()->limit(4); ?>

            <div class="random-content container">
                <a href="/projecten"><h3 class="random-content-title">Meer projecten</h3></a>
                <ul class="collection">
                  <?php foreach($featured as $project): ?>
                  <li class="collection-item project">
                    <?php if($image = $project->images()->sortBy('sort', 'asc')->first()): ?>
                    <a href="<?= $project->url() ?>">
                      <img src="<?= $image->thumb(array('width' => 300))->url() ?>" alt="Thumbnail for the project <?= $project->title()->html() ?>" class="project-thumbnail" />
                    </a>
                    <?php else: ?>
                        <a href="<?= $project->url() ?>"><?= $project->title(); ?></a>
                    <?php endif ?>
                    <h4><?= $project->title() ?></h4>
                  </li>
                  <?php endforeach ?>
                </ul>
            </div>

        <?php endif ?>


        <p class="footer-copyright">DAVL Studio © <?= date("Y"); ?> | <a href="<?= $pages->find('privacy')->url() ?>">privacy</a></p>

        <p class="footer-social">
<!--             <a href="https://www.facebook.com/DAVLstudio/" class="facebook social-icon">
                <svg viewBox="0 0 800 800"><path d="M445 643h-90V419h-75v-87h75v-64q0-55 32-86 30-29 80-29 28 0 67 3v78h-47q-42 0-42 38v60h86l-11 87h-75v224z"/></svg>
            </a> -->
            <a href="https://www.instagram.com/davlstudio/" class="instagram social-icon">
                <svg viewBox="0 0 800 800"><path d="M150 400c0-119 0-166 42-208s88-42 208-42 166 0 208 42 42 89 42 208 0 166-42 208-88 42-208 42-166 0-208-42-42-89-42-208zm455 0c0-114 0-148-29-176-29-29-62-29-176-29s-148 0-176 29c-29 29-29 62-29 176s0 148 29 176c29 29 62 29 176 29s148 0 176-29c29-29 29-62 29-176zM400 272a128 128 0 1 1 0 256 128 128 0 0 1 0-256zm0 211c46 0 83-37 83-83s-37-83-83-83-83 37-83 83 37 83 83 83zm163-216c0 16-13 30-30 30-16 0-30-14-30-30 0-17 14-30 30-30 17 0 30 13 30 30z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company-beta/2685474/" class="linkedin social-icon">
                <svg viewBox="0 0 800 800"><path d="M268 629h-97V319h97zm157 0h-97V319h93v42h1q31-50 93-50 114 0 114 133v185h-96V466q0-70-49-70-59 0-59 69z"/><circle cx="219" cy="220" r="56"/></svg>
            </a>
        </p>

    </footer>

    <?php if ($page->isHomePage() || $page->template() == "nieuws"): ?>
        <script src="/assets/build/js/home.min.js"></script>
    <?php endif; ?>
    <?php if ($page->template() == "contact" || $page->template() == "search"): ?>
        <script src="/assets/build/js/form.min.js"></script>
    <?php endif; ?>
    <?php if ($page->template() == "project" || $page->template() == "article" || $page->isHomePage() || $page->template() == "nieuws" || $page->template() == "magazine"): ?>
        <script src="/assets/build/js/lightbox.min.js"></script>
    <?php endif; ?>
    <?php if ($page->template() != "home" && $page->template() != "projects" && $page->template() != "magazine"): ?>
        <script src="/assets/build/js/parallax.min.js"></script>
    <?php endif ?>
    <script src="/assets/build/js/instantpage-5.1.0.min.js" type="module" defer></script>
</body>
</html>
