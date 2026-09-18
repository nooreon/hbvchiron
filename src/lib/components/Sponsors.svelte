<script lang="ts">
    import DecathlonLogo from '$lib/assets/sponsors/DecathlonLogo.svg'
    import VriendenLoterijLogo from '$lib/assets/sponsors/VriendenLoterijLogo.png'
    import NotarissenLogo from '$lib/assets/sponsors/NotarissenLogo.png'
    import FysiotherapieKloosterveenLogo from '$lib/assets/sponsors/FysiotherapieKloosterveenLogo.png'

    const sponsors = [
        {naam: "DecathlonNL", logo: DecathlonLogo, url: "https://www.decathlon.nl", schaal: 0.85},
        {naam: "VriendenLoterij", logo: VriendenLoterijLogo, url: "https://www.vriendenloterij.nl/", schaal: 0.9},
        {naam: "TijdhofDaverschotDeJongPosthumusNotarissen", logo: NotarissenLogo, url: "https://www.notariskantoor.nu/", schaal: 1.0},
        {naam: "FysiotherapieKloosterveen", logo: FysiotherapieKloosterveenLogo, url: "https://fysiotherapiekloosterveen.nl/", schaal: 1.0},
    ];
</script>

<section class="border-t py-6 bg-card">
    <p class="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground mb-5">
        Onze sponsoren
    </p>

    <div class="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 px-6">
        {#each sponsors as sponsor (sponsor.naam)}
            <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
            <a href={sponsor.url}
               target="_blank"
               rel="noopener noreferrer"
               aria-label={sponsor.naam}
               class="opacity-80 hover:opacity-100 transition-opacity duration-200">
                <img src={sponsor.logo} alt={sponsor.naam} class="h-auto max-h-20 w-auto max-w-50 object-contain" />
            </a>
        {/each}
    </div>
</section>