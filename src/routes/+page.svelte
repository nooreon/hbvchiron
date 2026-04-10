<script lang="ts">
    import {Button} from "$lib/components/ui/button";
    import {resolve} from "$app/paths";
</script>

<section class="section">
    <div class="section-inner">
        <h2>Welkom bij HBV Chiron</h2>
        <p>
            Wij zijn een jonge handboogvereniging in Assen met het doel om boogschieten voor iedereen toegankelijk te
            maken. Plezier in het schieten staat bij ons hoog in het vaandel en wij zijn er voor jong en oud, met en
            zonder
            fysieke beperking. Of je nu tot rust wil komen, fanatiek wil wedstrijdschieten, of gewoon de
            passie voor boogschieten wil delen: bij ons ben je welkom.
        </p>
        <p>
            Ben je nieuwsgierig geworden naar boogschieten? Kom gerust een keer kijken of meld je direct aan voor onze
            <a href={resolve('/cursussen#kennismakingscursus')}
               class="text-primary hover:underline">kennismakingscursus</a>.
            Wil je eerst even kennismaken of heb je vragen? Neem <a href={resolve('/contact')}
                                                                    class="text-primary hover:underline">contact</a>
            met ons op, dan zorgen we dat iemand je kan ontvangen en uitleg kan geven.
        </p>
        <div class="flex gap-4 mt-6">
            <Button href={resolve('/cursussen')}>Cursus volgen</Button>
            <Button href={resolve('/contact')} variant="outline">Contact opnemen</Button>
        </div>
    </div>
</section>


