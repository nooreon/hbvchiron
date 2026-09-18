<script lang="ts">
    import { agendaItems, type AgendaItem } from "$lib/data/agenda-items";
    import {Badge} from "$lib/components/ui/badge/index.js";
    import {Button} from "$lib/components/ui/button/index.js";
    import CalendarIcon from "@lucide/svelte/icons/calendar";
    import MapPinIcon from "@lucide/svelte/icons/map-pin";
    import {Tabs, TabsContent, TabsList, TabsTrigger} from "$lib/components/ui/tabs";
    import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "$lib/components/ui/card";

    const DEFAULT_LOCATION = "HBV Chiron";

    const weekdayMonthFormatter = new Intl.DateTimeFormat("nl-NL", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    export function formatAgendaDate(item: AgendaItem): string {
        const date = new Date(item.datum + "T00:00:00");

        if (Number.isNaN(date.getTime())) {
            console.warn(`Ongeldige datum voor agenda item "${item.titel}": "${item.datum}"`);
            return item.datum;
        }

        const datum = weekdayMonthFormatter.format(date);
        const tijd = item.eindtijd ? `${item.begintijd}-${item.eindtijd}` : item.begintijd;
        return tijd ? `${datum} · ${tijd}` : datum;
    }

    function getMapsUrl(event: AgendaItem): string | undefined {
        if (event.mapsUrl) return event.mapsUrl;
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.locatie ? event.locatie : DEFAULT_LOCATION)}`;
    }

    const badgeVariant: Record<AgendaItem["type"], "default" | "secondary" | "outline"> = {
        cursus: "default",
        wedstrijd: "secondary",
        evenement: "outline",
    };

    const cardStyles: Record<AgendaItem["type"], string> = {
        cursus: "border-l-4 border-l-primary bg-primary/5",
        wedstrijd: "border-l-4 border-l-amber-500/50",
        evenement: "border-l-4 border-l-transparent",
    };

    const tabs = ["alle", "cursus", "wedstrijd", "evenement"] as const;
    type Tab = typeof tabs[number];

    let activeTab: Tab = $state("alle");

    const filtered = $derived(
        activeTab === "alle" ? agendaItems : agendaItems.filter((e) => e.type === activeTab)
    );
</script>

<div class="section">
    <div class="section-inner">
        <h2>Agenda</h2>
        <Tabs bind:value={activeTab}>
            <TabsList>
                {#each tabs as tab (tab)}
                    <TabsTrigger value={tab} class="capitalize">{tab}</TabsTrigger>
                {/each}
            </TabsList>
            <h3 class="text-center">2026</h3>
            <TabsContent value={activeTab}>
                <div class="grid gap-4 sm:grid-cols-2">
                    {#each filtered as item (item.id)}
                        <Card id="event-{item.id}" class="shadow-md scroll-mt-20 {cardStyles[item.type]}">
                            <CardHeader>
                                <div class="flex items-start justify-between gap-2">
                                    <CardTitle class="text-base">{item.titel}</CardTitle>
                                    <Badge variant={badgeVariant[item.type]} class="capitalize shrink-0">
                                        {item.type}
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent class="text-sm text-muted-foreground space-y-1">
                                <!-- Datum -->
                                <div class="flex items-center gap-2">
                                    <CalendarIcon class="size-4 text-muted-foreground/70 shrink-0"/>
                                    <span class="first-letter:uppercase">{formatAgendaDate(item)}</span>
                                </div>
                                <!-- Locatie -->
                                <div class="flex items-center gap-2">
                                    <MapPinIcon class="size-4 text-muted-foreground/70 shrink-0"/>
                                    <!-- eslint-disable svelte/no-navigation-without-resolve -->
                                    <a
                                            href={getMapsUrl(item)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="underline underline-offset-2 hover:text-foreground"
                                            title="Open locatie in Google Maps"
                                    >
                                        {item.locatie ? item.locatie : DEFAULT_LOCATION}
                                    </a>
                                </div>

                                {#if item.type === 'cursus'}
                                    <a href="/cursussen#kennismakingscursus"
                                       class="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                                        Meer info &amp; aanmelden
                                    </a>
                                {/if}
                            </CardContent>
                            <!--
                            <CardFooter>
                                <Button variant="outline" size="sm">details</Button>
                            </CardFooter>
                            -->
                        </Card>
                    {/each}

                    {#if filtered.length === 0}
                        <p class="text-muted-foreground col-span-2 text-center py-8">No events in this category.</p>
                    {/if}
                </div>
            </TabsContent>
        </Tabs>
    </div>
</div>