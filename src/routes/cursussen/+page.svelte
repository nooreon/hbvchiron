<script lang="ts">
    import {resolve} from "$app/paths";
    import {Button} from "$lib/components/ui/button";
</script>

<section class="section" id="kennismakingscursus">
    <div class="section-inner">
        <h2>Kennismakingscursus</h2>
        <p>
            De kennismakingscursus wordt gegeven op de <strong>maandagavond van 19.00-21.00</strong>. Hij bestaat uit
            <strong>5 avonden</strong> waarin het basisschot wordt uitgelegd en je mag kijken of het boogschieten wat
            voor jou is. Je hoeft er nog geen materiaal voor aan te schaffen, dat hebben wij voor je te leen.
        </p>
        <p>
            De kosten voor de kennismakingscursus bedragen <strong>€75,-</strong>.
        </p>
        <p>
            De cursus vindt in een klein groepje plaats van 3 tot maximaal 6 deelnemers, zodat we zoveel mogelijk
            <strong>persoonlijke aandacht</strong> aan je kunnen geven.
        </p>
        <p>
            Vond je de cursus zo leuk dat je graag wil blijven schieten? Dan kun je na afloop van de cursus natuurlijk
            <a href={resolve('/lidmaatschap')} class="text-primary hover:underline">lid worden</a> van onze vereniging.
        </p>
        <div class="flex gap-4 mt-6">
            <Button href={resolve('/lidmaatschap')}>Lid worden</Button>
        </div>
    </div>
</section>

<section class="section" id="clinics">
    <div class="section-inner">
        <h2>Clinics en Bedrijfsuitjes</h2>
        <p>Op aanvraag is het mogelijk om <strong>clinics</strong> of <strong>bedrijfsuitjes</strong> te organiseren
            voor groepen mensen. Wil je bijvoorbeeld eens een leuke activiteit voor een <strong>familiedag</strong> of
            je <strong>bedrijf</strong>? Of heb je gewoon een groep mensen om je heen die interesse hebben in
            boogschieten? Dan kunnen we daar een 'privé' activiteit voor verzorgen. Neem gerust
            <a href={resolve('/contact')} class="text-primary hover:underline">contact</a> met ons op voor meer
            informatie.
        </p>
        <p>
            Wij verzorgen ook clinics voor <strong>scholen</strong> en dergelijke. Er zijn mogelijkheden voor
            <strong>activiteiten op locatie</strong>, maar voor het echte werk moet je op
            <a href={resolve('/contact#locatie')}
               class="text-primary hover:underline">onze eigen locatie</a> zijn.
        </p>
    </div>
</section>
