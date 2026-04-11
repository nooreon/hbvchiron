<script lang="ts">
    import {resolve} from '$app/paths';
    import logo from '../assets/Chiron.png'

    import NavMobile from "$lib/components/NavMobile.svelte";
    import NavDesktop from "$lib/components/NavDesktop.svelte";
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";

</script>

<header class="flex px-8 py-2 justify-between items-center bg-secondary">
    <a class="w-16 sm:w-25 shrink-0" href={resolve('/')}>
        <span class="inline-flex items-center justify-center rounded-full bg-white/90 px-1 pb-2 shadow-md ring-4 ring-border">
            <img src={logo} alt="HBV Chiron" class="w-full"/>
        </span>
    </a>

    <div class="hidden md:flex flex-1 justify-center min-w-0">
        <NavDesktop/>
    </div>

    <div class="flex items-center gap-2 shrink-0">
        <ThemeToggle/>
        <NavMobile/>
    </div>
</header>
