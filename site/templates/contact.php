<?php snippet('header') ?>

<main class="main content" role="main">

    <article>

        <section class="left-content">
            <?= $page->richtext()->kirbytext() ?>
            <figure class="contact-map">
                <a class="" href="https://www.google.nl/maps/place/Berkstraat+2,+2565+MS+Den+Haag/">
                    <img id="contact-map-img" src="/assets/build/img/kaart.png" alt="kaart van Berkstraat 2, Den Haag" />
                </a>
            </figure>
        </section>

        <section class="right-content">
            <p>
                Heeft u een vraag voor ons? Laat het weten door middel van het formulier.
            </p>
            <form class="form" id="contactform" action="https://forms.un-static.com/forms/beb0556727d05bca72f6eab6d962b6512f494b61" method="POST">
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
                <div class="field">
                    <input class="button submit" type="submit" value="Stuur &rarr;">
                </div>
            </form>
        </section>

    </article>

</main>

<?php snippet('footer') ?>
