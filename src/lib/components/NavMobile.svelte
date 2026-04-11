<script lang="ts">
    import { base, resolve} from '$app/paths';
    import {Menu} from "@lucide/svelte";
    import {Sheet, SheetContent, SheetTrigger} from '$lib/components/ui/sheet';
    import {Button} from '$lib/components/ui/button';
    import {page} from '$app/state';

    import ThemeToggle from "$lib/components/ThemeToggle.svelte";

    let sheetOpen = $state(false);

    // Sluit menu na selectie
    $effect(() => {
        void page.url.pathname;
        sheetOpen = false;
    });

    // Swipe functionaliteit
    let touchStartX = 0;
    let touchStartY = 0;

    function onTouchStart(e: TouchEvent) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }

    function onTouchEnd(e: TouchEvent) {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) < Math.abs(dy)) return;
        if (dx < -60 && !sheetOpen) sheetOpen = true;
        if (dx > 60 && sheetOpen) sheetOpen = false;
    }
</script>

<svelte:window ontouchstart={onTouchStart} ontouchend={onTouchEnd} />

<Sheet bind:open={sheetOpen}>
    <!-- Button -->
    <SheetTrigger>
        {#snippet child({props})}
            <Button variant="ghost" size="icon" {...props}>
                <Menu class="h-5 w-5"/>
            </Button>
        {/snippet}
    </SheetTrigger>

    <!-- Side bar -->
    <SheetContent side="right"
                  class="flex flex-col p-0"
                  ontouchstart={onTouchStart}
                  ontouchend={onTouchEnd}>
        <nav class="flex flex-col gap-1 mt-12 uppercase tracking-widest flex-1 overflow-y-auto px-4 pb-4">
            <a class="px-3 py-2 rounded-md block hover:bg-accent hover:text-primary"
               href={resolve('/')}>Home</a>

            <div class="mt-2 border-t py-2">
                <p class="px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">Over ons</p>
                <a class="px-3 py-2 rounded-md block hover:bg-accent hover:text-primary"
                   href={resolve('/over-ons')}>Wie zijn wij?</a>
                <a class="px-3 py-2 rounded-md block hover:bg-accent hover:text-primary"
                   href={resolve('/over-ons#trainingstijden')}>Trainingstijden</a>
                <a class="px-3 py-2 rounded-md block hover:bg-accent hover:text-primary"
                   href={resolve('/over-ons#bestuur')}>Bestuur</a>
            </div>

            <div class="mt-2 border-t border-b py-2">
                <p class="px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">Meedoen</p>
                <a class="px-3 py-2 rounded-md block hover:bg-accent hover:text-primary"
                   href={resolve('/lidmaatschap')}>Lidmaatschap</a>
                <a class="px-3 py-2 rounded-md block hover:bg-accent hover:text-primary"
                   href={resolve('/cursussen')}>Cursussen</a>
            </div>

            <a class="px-3 py-2 rounded-md block hover:bg-accent hover:text-primary"
               href={resolve('/agenda')}>Agenda</a>
            <a class="px-3 py-2 rounded-md block hover:bg-accent hover:text-primary"
               href={resolve('/sponsors')}>Sponsors</a>
            <a class="px-3 py-2 rounded-md block hover:bg-accent hover:text-primary"
               href={resolve('/contact')}>Contact</a>

            <!-- eslint-disable svelte/no-navigation-without-resolve -->
            <div class="mt-2 border-t pt-2">
                <p class="px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">Documenten</p>
                <a class="px-3 py-2 rounded-md block hover:bg-accent hover:text-primary"
                   href="{base}/documenten/Statuten.pdf"
                   target="_blank"
                   rel="noopener noreferrer">Statuten</a>
                <a class="px-3 py-2 rounded-md block hover:bg-accent hover:text-primary"
                   href={resolve('/huishoudelijk-reglement')}>Huishoudelijk reglement</a>
                <a class="px-3 py-2 rounded-md block hover:bg-accent hover:text-primary"
                   href="{base}/documenten/Privacyverklaring.pdf"
                   target="_blank"
                   rel="noopener noreferrer">Privacyverklaring</a>
            </div>

            <div class="mt-auto border-t pt-4 px-3 flex items-center justify-between">
                <span class="uppercase tracking-widest text-muted-foreground">Weergave</span>
                <ThemeToggle/>
            </div>
        </nav>
    </SheetContent>
</Sheet>