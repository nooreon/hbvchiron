<script lang="ts">
    import {resolve} from '$app/paths';
    import logo from '../assets/Chiron.png'
    import {SunIcon, MoonIcon, Menu} from "@lucide/svelte";
    import {
        NavigationMenuContent,
        NavigationMenuItem, NavigationMenuLink,
        NavigationMenuList,
        NavigationMenuRoot,
        NavigationMenuTrigger
    } from '$lib/components/ui/navigation-menu';
    import {Sheet, SheetContent, SheetTrigger} from '$lib/components/ui/sheet';
    import {Button} from '$lib/components/ui/button';
    import {page} from '$app/state';

    import {toggleMode} from "mode-watcher";

    let sheetOpen = $state(false);

    $effect(() => {
        void page.url.pathname;
        sheetOpen = false;
    });
</script>

<header class="flex px-8 py-2 justify-between items-center bg-secondary">
    <!-- Logo -->
    <a class="w-25 shrink-0" href={resolve('/')}>
    <span class="inline-flex items-center justify-center rounded-full bg-white/90 px-1 pb-2 shadow-md ring-4 ring-border">
        <img src={logo} alt="HBV Chiron" class="w-full"/>
    </span>
    </a>

    <!-- Navigation Bar -->
    <div class="hidden md:flex flex-1 justify-center min-w-0">
        <NavigationMenuRoot viewport={false} class="flex items-center gap-2 min-w-0">
            <NavigationMenuList class="flex flex-wrap justify-center uppercase tracking-widest min-w-0">
                <NavigationMenuItem>
                    <NavigationMenuLink class="hover:bg-accent hover:text-primary" href={resolve('/')}>
                        Home
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger class="uppercase tracking-widest hover:text-primary">
                        Over ons
                    </NavigationMenuTrigger>
                    <NavigationMenuContent class="right-0 left-auto z-1">
                        <ul class="grid text-nowrap gap-4 p-2 uppercase tracking-widest">
                            <li>
                                <NavigationMenuLink class="hover:text-primary" href={resolve('/over-ons')}>Wie zijn
                                    wij?
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink class="hover:text-primary"
                                                    href={resolve('/over-ons#trainingstijden')}>Trainingstijden
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink class="hover:text-primary" href={resolve('/over-ons#bestuur')}>
                                    Bestuur
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger class="uppercase tracking-widest hover:text-primary">
                        Meedoen
                    </NavigationMenuTrigger>
                    <NavigationMenuContent class="right-0 left-auto z-1">
                        <ul class="grid text-nowrap gap-4 p-2 uppercase tracking-widest">
                            <li>
                                <NavigationMenuLink class="hover:text-primary" href={resolve('/lidmaatschap')}>
                                    Lidmaatschap
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink class="hover:text-primary" href={resolve('/cursussen')}>Cursussen
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink class="hover:bg-accent hover:text-primary" href={resolve('/agenda')}>
                        Agenda
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink class="hover:bg-accent hover:text-primary" href={resolve('/sponsors')}>
                        Sponsors
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink class="hover:bg-accent hover:text-primary" href={resolve('/contact')}>
                        Contact
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger class="uppercase tracking-widest hover:text-primary">
                        Documenten
                    </NavigationMenuTrigger>
                    <NavigationMenuContent class="right-0 left-auto z-1">
                        <ul class="grid text-nowrap gap-4 p-2 uppercase tracking-widest">
                            <li>
                                <NavigationMenuLink class="hover:text-primary" href="##">Statuten</NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink class="hover:text-primary"
                                                    href={resolve('/huishoudelijk-reglement')}>Huishoudelijk reglement
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink class="hover:text-primary" href="##">Privacyverklaring
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenuRoot>
    </div>

    <div class="flex items-center gap-2 shrink-0">
        <!-- Toggle light/dark mode -->
        <div class="hidden md:block">
            <Button onclick={toggleMode} variant="ghost" size="icon">
                <SunIcon class="h-4 w-4 scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"/>
                <MoonIcon class="absolute h-4 w-4 scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"/>
                <span class="sr-only">Toggle theme</span>
            </Button>
        </div>
        <!-- Hamburger Menu -->
        <Sheet bind:open={sheetOpen}>
            <!-- button -->
            <SheetTrigger>
                {#snippet child({props})}
                    <Button variant="ghost" size="icon" {...props}>
                        <Menu class="h-5 w-5"/>
                    </Button>
                {/snippet}
            </SheetTrigger>
            <!-- menu -->
            <SheetContent side="right">
                <nav class="flex flex-col gap-1 mt-12 uppercase tracking-widest">
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

                    <div class="mt-2 border-t pt-2">
                        <p class="px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">Documenten</p>
                        <a class="px-3 py-2 rounded-md block hover:bg-accent hover:text-primary" href="##">Statuten</a>
                        <a class="px-3 py-2 rounded-md block hover:bg-accent hover:text-primary"
                           href={resolve('/huishoudelijk-reglement')}>Huishoudelijk reglement</a>
                        <a class="px-3 py-2 rounded-md block hover:bg-accent hover:text-primary" href="##">Privacyverklaring</a>
                    </div>

                    <div class="mt-auto border-t pt-4 px-3 flex items-center justify-between">
                        <span class="uppercase tracking-widest text-muted-foreground">Weergave</span>
                        <Button onclick={toggleMode} variant="ghost" size="icon">
                            <SunIcon class="h-4 w-4 scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"/>
                            <MoonIcon
                                    class="absolute h-4 w-4 scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"/>
                            <span class="sr-only">Toggle theme</span>
                        </Button>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    </div>
</header>
