<script lang="ts">
    import {resolve} from "$app/paths";
    import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "$lib/components/ui/card";
    import {Button} from "$lib/components/ui/button";
    import {Phone, Mail} from "@lucide/svelte";
    import {Trainingstijden} from "$lib";
    import {Confetti} from "svelte-confetti";

    let key = $state(0);
    let x = $state(0);
    let y = $state(0);
    let triggered = $state(false);

    function triggerCelebration(event) {
        x = event.clientX;
        y = event.clientY;
        key++;
        triggered = true;
    }

    const bestuursleden = [
        {naam: "Erna van Sinttruijen", rol: "Voorzitter"},
        {naam: "Marco van Til", rol: "Secretaris"},
        {naam: "Jelle de Vries", rol: "Penningmeester"},
        {naam: "Fianne Postma", rol: "Algemeen bestuurslid"},
        {naam: "Harmtienus Vrieling", rol: "Algemeen bestuurslid"}
    ];

    const vertrouwenspersonen = [
        {naam: "Eelco Krakau", telefoon: "06 45707692", email: "e.krakaucoaching@gmail.com"}
    ];
</script>

<section class="section">
    <div class="section-inner">
        <h2>Wie zijn wij?</h2>
        <p>
            HBV Chiron is voortgekomen uit leden van twee andere verenigingen in Assen, waarvan er één ophield te
            bestaan. Samen hebben wij de handen ineen geslagen en zijn wij op
            <button onclick={triggerCelebration} class="cursor-pointer text-primary hover:underline">
                1 januari 2024
            </button>
            deze nieuwe handboogvereniging gestart.
        </p>

        {#if triggered}
            {#key key}
                <div class="pointer-events-none fixed" style="left: {x}px; top: {y}px;">
                    <Confetti colorArray={["#FF7900", "#555555", "#ffffff"]} amount={100} duration={2000}/>
                </div>
            {/key}
        {/if}

        <p>
            Plezier in het schieten hebben we hoog in het vaandel staan. Boogschieten moet voor iedereen bereikbaar
            zijn. Voor jong en oud en met of zonder fysieke beperking.
            <br/>
            We bestaan uit oude rotten uit het vak en enthousiaste nieuwelingen. Ieder heeft zijn eigen doel met het
            boogschieten. Tot rust komen en de focus van het boogschieten gebruiken om het hoofd rustig te krijgen,
            fanatiek schieten om aan wedstrijden mee te kunnen doen, maar ook vooral gezellig met elkaar de passie
            voor het boogschieten delen.
            <br/>
            We helpen elkaar met de techniek, het materiaal en het plezier.
        </p>
        <p>
            In de toekomst willen we leuke evenementen organiseren, ook wel funverschietingen genoemd. Schiet eens op
            iets anders dan het standaard blazoen. Schiet eens op een dino of een asymmetrisch blazoen. We gaan er wat
            leuks van maken. Houd <a href={resolve("/agenda")} class="text-primary hover:underline">onze agenda</a> in
            de gaten voor de data hiervan.
        </p>
        <p>
            Ook bieden we <a href={resolve("/cursussen#kennismakingscursus")} class="text-primary hover:underline">kennismakingscursussen</a>
            aan. Leer in 5 lessen de basis van het boogschieten en ontdek of de sport wat voor je is. Je hoeft hiervoor
            geen materiaal te hebben, dat hebben wij voor je om te gebruiken.
        </p>
        <p>
            Daarnaast organiseren we op aanvraag ook <a href={resolve("/cursussen#clinics")}
                                                        class="text-primary hover:underline">clinics en
            bedrijfsuitjes</a> voor groepen. Of je nu een leuke activiteit zoekt voor een familiedag, een bedrijfsuitje,
            of een schoolgroep, we kunnen daar iets leuks voor verzorgen.
        </p>
        <p>
            Wij zijn aangesloten bij de
            <a href="https://www.handboogsport.nl/"
               class="text-primary hover:underline"
               target="_blank"
               rel="noopener noreferrer">KHSN (Koninklijke HandboogSport Nederland)</a> en de
            <a href="https://nnhf.nl/"
               class="text-primary hover:underline"
               target="_blank"
               rel="noopener noreferrer">NNHF (Noord Nederlandse Handboog Federatie)</a>.
            Lidmaatschap van 1 van beide organisaties is verplicht voor leden van HBV Chiron, maar beide kan ook!
        </p>
        <div class="mt-6 flex gap-4">
            <Button href={resolve("/cursussen")}>Cursus volgen</Button>
            <Button href={resolve("/lidmaatschap")} variant="outline">Lid worden</Button>
        </div>
    </div>
</section>

<section class="section" id="trainingstijden">
    <div class="section-inner">
        <h2>Trainingstijden</h2>
        <Trainingstijden/>
    </div>
</section>

<section class="section" id="bestuur">
    <div class="section-inner">
        <h2>Bestuur</h2>
        <div class="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {#each bestuursleden as bestuurslid (bestuurslid.naam)}
                <Card class="shadow">
                    <CardHeader>
                        <CardTitle>{bestuurslid.naam}</CardTitle>
                        <CardDescription class="text-xs tracking-widest text-primary uppercase">
                            {bestuurslid.rol}
                        </CardDescription>
                    </CardHeader>
                </Card>
            {/each}
        </div>

        <h3>Vertrouwenspersoon</h3>
        <div class="flex gap-4">
            {#each vertrouwenspersonen as persoon (persoon.naam)}
                <Card class="shadow">
                    <CardHeader>
                        <CardTitle>{persoon.naam}</CardTitle>
                    </CardHeader>
                    <CardContent class="flex flex-col gap-2 text-sm text-muted-foreground">
                        {#if persoon.telefoon}
                            <span class="flex items-center gap-2">
                                <Phone class="h-4 w-4 shrink-0"/>
                                <a href="tel:{persoon.telefoon}"
                                   class="transition-colors hover:text-foreground">{persoon.telefoon}</a>
                            </span>
                        {/if}
                        {#if persoon.email}
                            <span class="flex items-center gap-2">
                                <Mail class="h-4 w-4 shrink-0"/>
                                <a href="mailto:{persoon.email}"
                                   class="text-primary hover:underline">{persoon.email}</a>
                            </span>
                        {/if}
                    </CardContent>
                </Card>
            {/each}
        </div>
    </div>
</section>
