<aside class="project-meta">
    <ul>
        <?php if($page->year() != ''):?>
        <li class="project-year">
            Wanneer: <?= $page->year() ?>
        </li>
        <?php endif; ?>
        <?php if($page->status() != ''):?>
        <li class="project-status">
            Status: <?= $page->status() ?>
        </li>
        <?php endif; ?>
        <?php if($page->client() != ''):?>
        <li class="project-client">
            Cliënt: <?= $page->client() ?>
        </li>
        <?php endif; ?>
        <?php if($page->contractor() != ''):?>
        <li class="project-contractor">
            Aannemer: <?= $page->contractor() ?>
        </li>
        <?php endif; ?>
        <?php if($page->constructor() != ''):?>
        <li class="project-constructor">
            Constructeur: <?= $page->constructor() ?>
        </li>
        <?php endif; ?>
        <?php if($page->consultant() != ''):?>
        <li class="project-consultant">
            Consultant: <?= $page->consultant() ?>
        </li>
        <?php endif; ?>
        <?php if($page->location() != ''):?>
        <li class="project-location">
            Locatie: <?= $page->location() ?>
        </li>
        <?php endif; ?>
        <?php if($page->program() != ''):?>
        <li class="project-program">
            Programma: <?= $page->program() ?>
        </li>
        <?php endif; ?>
        <?php if($page->area() != ''):?>
        <li class="project-area">
            Oppervlak: <?= $page->area() ?>
        </li>
        <?php endif; ?>
        <?php if($page->other() != ''):?>
        <li class="project-other">
            <?php foreach($page->other()->yaml() as $item): ?>
                <?= $item['label'] . ": " . $item['text'] ?>
            <?php endforeach ?>
        </li>
        <?php endif; ?>
    </ul>
</aside>
