<script>
    const trainingen = [
        {dag: 'Woensdag', type: 'Jeugd', tijd: '18:30 – 20:00'},
        {dag: 'Woensdag', tijd: '20:00 – 21:30'},
        {dag: 'Vrijdag', tijd: '19:00 – 20:30'},
        {
            dag: 'Zaterdag',
            type: 'Prikkelarme schietavond',
            tijd: '19:30 – 21:00',
            opmerking: 'Speciaal voor mensen die last hebben van prikkels of serieus willen trainen.'
        },
    ];
</script>

<div class="flex flex-col divide-y">
    {#each trainingen as training (training.dag + training.type)}
        <div class="flex items-baseline justify-between py-3">
            <div>
                <span class="font-medium">{training.dag}</span>
                {#if training.type}
                    <span class="text-primary uppercase tracking-widest text-xs ml-3">{training.type}</span>
                {/if}
                {#if training.opmerking}
                    <p class="text-xs text-muted-foreground mt-1">{training.opmerking}</p>
                {/if}
            </div>
            <span class="text-sm text-muted-foreground shrink-0 ml-4">{training.tijd}</span>
        </div>
    {/each}
</div>