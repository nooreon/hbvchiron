<script lang="ts">
    import {base, resolve} from '$app/paths';
    import {
        NavigationMenuContent,
        NavigationMenuItem,
        NavigationMenuLink,
        NavigationMenuList,
        NavigationMenuRoot,
        NavigationMenuTrigger
    } from '$lib/components/ui/navigation-menu';
</script>

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
                        <NavigationMenuLink class="hover:text-primary"
                                            href="{base}/documenten/Statuten.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer">Statuten</NavigationMenuLink>
                    </li>
                    <li>
                        <NavigationMenuLink class="hover:text-primary"
                                            href={resolve('/huishoudelijk-reglement')}>Huishoudelijk reglement
                        </NavigationMenuLink>
                    </li>
                    <li>
                        <NavigationMenuLink class="hover:text-primary"
                                            href="{base}/documenten/Privacyverklaring.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer">Privacyverklaring
                        </NavigationMenuLink>
                    </li>
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    </NavigationMenuList>
</NavigationMenuRoot>