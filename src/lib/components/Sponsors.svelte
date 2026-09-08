<script lang="ts">
    import PijlEnBoogKopenLogo from '$lib/assets/sponsoren/PBK-Logo.png'
    import DutchBowStoreLogo from '$lib/assets/sponsoren/DBS-Logo.png'
    import DecathlonLogo from '$lib/assets/sponsoren/Decathlon-Logo.svg'
    import VriendenLoterijLogo from '$lib/assets/sponsoren/VriendenLoterij_Logo.png'

    const sponsors = [
        {naam: "PijlenBoogKopen", logo: PijlEnBoogKopenLogo, url: "https://www.pijlenboogkopen.com/"},
        {naam: "DutchBowStore", logo: DutchBowStoreLogo, url: "https://www.dutchbowstore.com/"},
        {naam: "DecathlonNL", logo: DecathlonLogo, url: "https://www.decathlon.nl"},
        {naam: "VriendenLoterij", logo: VriendenLoterijLogo, url: "https://www.vriendenloterij.nl/"},
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