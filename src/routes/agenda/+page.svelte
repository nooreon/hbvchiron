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
        {id: 1, title: "Open dag", date: "Zaterdag 11 Apr · 10:00", location: "de Spreng", type: "evenement"},
        {id: 2, title: "Kennismakingscursus", date: "Maandag 13 April · 19:00", type: "cursus"},
        {id: 3, title: "Wedstrijd", date: "Zondag 19 April · 10:30", location: "de Spreng", type: "wedstrijd"},
        {id: 4, title: "Kennismakingscursus", date: "Maandag 20 Apr · 19:00", type: "cursus"},
        {id: 5, title: "Wedstrijd", date: "Zondag 17 Mei · 10:30", location: "Emmen", type: "wedstrijd"},
    ];

    const badgeVariant: Record<Event["type"], "default" | "secondary" | "outline"> = {
        wedstrijd: "default",
        evenement: "secondary",
        cursus: "outline",
    };

    const tabs = ["all", "cursus", "wedstrijd", "evenement"] as const;
    type Tab = typeof tabs[number];

    let activeTab: Tab = $state("all");

    const filtered = $derived(
        activeTab === "all" ? events : events.filter((e) => e.type === activeTab)
    );
</script>

<div class="section">
    <div class="section-inner">
        <h2>Agenda</h2>
        <p>
            Let op: Onderstaande data dient alleen nog ter illustratie
        </p>

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
                            <CardFooter>
                                <Button variant="outline" size="sm">details</Button>
                            </CardFooter>
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