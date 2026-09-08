<script lang="ts">
    import {Badge} from "$lib/components/ui/badge/index.js";
    import {Button} from "$lib/components/ui/button/index.js";
    import CalendarIcon from "@lucide/svelte/icons/calendar";
    import MapPinIcon from "@lucide/svelte/icons/map-pin";
    import {Tabs, TabsContent, TabsList, TabsTrigger} from "$lib/components/ui/tabs";
    import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "$lib/components/ui/card";

    type Event = {
        id: number;
        title: string;
        date: string;
        location?: string;
        type: "cursus" | "wedstrijd" | "evenement";
    };

    const events: Event[] = [
        {id: 1, title: "Beweegmarkt", date: "Zaterdag 5 september · 12:00-17:00", location: "Smilde", type: "evenement"},
        {id: 2, title: "Wijkfeest Assen-Oost", date: "Zaterdag 12 september · 11:00-16:00", location: "Assen Oost", type: "evenement"},
        {id: 3, title: "Club BBQ", date: "Zaterdag 12 september · 17:00", type: "evenement"},
        {id: 4, title: "Beweegmarkt", date: "Vrijdag 18 september · 14:00-17:00", location: "Beilen", type: "evenement"},
        {id: 5, title: "Sportmarkt 4 Mijl van Assen", date: "Zaterdag 19 september · 11:00-18:00", location: "Assen, Marsdijk", type: "evenement"},
        {id: 6, title: "Open dag i.v.m. Nationale Sportweek", date: "Zaterdag 26 september · 10:00-12:00", type: "evenement"},
        {id: 7, title: "Open dag", date: "Zaterdag 3 oktober", location: "Finsterwolde", type: "evenement"},
        {id: 8, title: "Start kennismakingscursus", date: "Maandag 5 oktober · 19:00-21:00", type: "cursus"},
        {id: 9, title: "Wedstrijd", date: "Woensdag 11 oktober", type: "wedstrijd"},
    ];

    const badgeVariant: Record<Event["type"], "default" | "secondary" | "outline"> = {
        wedstrijd: "default",
        evenement: "secondary",
        cursus: "outline",
    };

    const tabs = ["alle", "cursus", "wedstrijd", "evenement"] as const;
    type Tab = typeof tabs[number];

    let activeTab: Tab = $state("alle");

    const filtered = $derived(
        activeTab === "alle" ? events : events.filter((e) => e.type === activeTab)
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
                    {#each filtered as event (event.id)}
                        <Card class="shadow-md">
                            <CardHeader>
                                <div class="flex items-start justify-between gap-2">
                                    <CardTitle class="text-base">{event.title}</CardTitle>
                                    <Badge variant={badgeVariant[event.type]} class="capitalize shrink-0">
                                        {event.type}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent class="text-sm text-muted-foreground space-y-1">
                                <div class="flex items-center gap-2">
                                    <CalendarIcon class="size-4"/>
                                    <span>{event.date}</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <MapPinIcon class="size-4"/>
                                    <span>{event.location ? event.location : "de Spreng"}</span>
                                </div>
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