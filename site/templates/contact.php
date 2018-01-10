<?php snippet('header') ?>

<main class="main content" role="main">

    <article>
        <?= $page->richtext()->kirbytext() ?>
    </article>

    <form class="form" id="contactform" action="//formspree.io/cd1c5968@opayq.com" method="POST">
        <div class="field">
            <input class="input" type="text" name="naam" placeholder="Naam" required>
            <label class="label" for="naam"><span class="label-content">Uw naam</span></label>
        </div>
        <div class="field">
            <input class="input" type="email" name="_replyto" placeholder="voorbeeld@domein.com" required>
            <label class="label" for="_replyto"><span class="label-content">Uw email</span></label>
        </div>
        <div class="field">
            <textarea class="input" name="bericht" rows="1" placeholder="Bericht" required></textarea>
            <label class="label" for="bericht"><span class="label-content">Uw bericht</span></label>
        </div>
        <input class="hidden" type="text" name="_gotcha" style="display:none">
        <input class="hidden" type="hidden" name="_subject" value="Bericht via de nieuwe DAVL website">
        <div class="field">
            <input class="button submit" type="submit" value="Stuur &rarr;">
        </div>
    </form>

</main>

<?php snippet('footer') ?>
