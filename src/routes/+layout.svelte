<script lang="ts">
    import './layout.css';

    import {ModeWatcher} from "mode-watcher";

    import {Header, Sponsors, Footer} from "$lib";
    import achterwand from "$lib/assets/achterwand.webp";

    let {children} = $props();
</script>

<svelte:head>
    <title>HBV Chiron</title>
    <!-- TODO metadata toevoegen voor SEO zodra website online gaat -->
    <!-- <meta name="description" content="info over HBV Chiron"/> -->
</svelte:head>

<ModeWatcher/>

<div class="flex flex-col min-h-screen">
    <div class="relative z-10">
        <Header/>
    </div>

    <!-- Banner -->
    <div class="relative h-80 overflow-hidden">
        <img src={achterwand} alt="HBV Chiron"
             class="absolute inset-0 w-full h-full object-cover brightness-70"/>
        <div class="absolute inset-x-0 top-0 h-8 bg-linear-to-b from-black/60 to-transparent"></div>
        <div class="absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent to-background"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 class="text-5xl font-bold" style="text-shadow: 0 2px 8px rgba(0,0,0,0.8);">HBV Chiron</h1>
            <p class="text-xl mt-2 tracking-wide" style="text-shadow: 0 2px 6px rgba(0,0,0,0.8);">
                Boogschieten voor iedereen
            </p>
        </div>
    </div>

    <main class="flex-1">
        {@render children()}
    </main>

    <Sponsors/>
    <Footer/>
</div>